import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createTransport } from "npm:nodemailer";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Received request:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Method not allowed' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405
      }
    );
  }

  try {
    // Get the request body as text first
    const bodyText = await req.text();
    console.log('Raw request body:', bodyText);

    // Try to parse the JSON
    let requestData: EmailRequest;
    try {
      requestData = JSON.parse(bodyText);
    } catch (error) {
      console.error('JSON parsing error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid JSON in request body',
          details: error.message
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400
        }
      );
    }

    console.log('Parsed request data:', requestData);
    
    const { name, email, message } = requestData;
    
    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    const gmailUser = Deno.env.get("GMAIL_USER");
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!gmailUser || !gmailPassword) {
      throw new Error('Missing email configuration');
    }

    console.log('Creating nodemailer transport with credentials:', {
      username: gmailUser,
      hasPassword: !!gmailPassword
    });

    // Create reusable transporter object using SMTP transport
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    console.log('Connected to SMTP server, sending email...');
    
    const emailBody = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      subject: `New Contact Form Message from ${name}`,
      text: emailBody,
    });

    console.log('Email sent successfully:', info);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in send-email function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
};

serve(handler);