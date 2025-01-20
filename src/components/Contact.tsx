import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { ContactForm } from "./contact/ContactForm";
import { ContactHeader } from "./contact/ContactHeader";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      console.log('Sending request to edge function with data:', data);
      
      const { data: responseData, error } = await supabase.functions.invoke('send-email', {
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', { responseData, error });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      if (responseData?.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(responseData?.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-8 sm:space-y-12"
      >
        <ContactHeader />
        <Card className="backdrop-blur-sm bg-card/50">
          <CardContent className="p-4 sm:p-6">
            <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};