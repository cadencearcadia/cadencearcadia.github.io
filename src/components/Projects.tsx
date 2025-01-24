import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { PerformanceMetrics } from "./PerformanceMetrics";
import { useQuery } from "@tanstack/react-query";

const projects = [
  {
    title: "2koperating - Oil & Gas Saltwater Disposal",
    description: "Static website developement for an oil & gas saltwater disposal company",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind"],
    live: "https://2koperating.netlify.app",
    image: "/2k-project-view.webp",
  },
  {
    title: "Cabin Reservation Platform",
    description: "A full-featured reservation solution built with React, Next.js, and Supabase",
    tech: ["React", "Typescript", "Vite", "Next.js", "Node.js", "Supabase", "Tailwind"],
    live: "https://the-wild-oasis-website-bice.vercel.app",
    image: "/lovable-uploads/44896dd8-0840-425a-af0b-724b5a3e3e81.png",
  },
  {
    title: "Cabin Management App",
    description: "Real-time guest management and analytics dashboard with React Query and Supabase",
    tech: ["React", "TypeScript", "Vite", "React Query", "Supabase", "Tailwind"],
    live: "https://oasis-bookings-app.netlify.app",
    image: "/lovable-uploads/a7673e4c-528b-4fdf-97ff-12aa048e569a.png",
  },
];

const fetchPerformanceMetrics = async (url: string) => {
  const apiKey = "AIzaSyDIxbw12by2RiEXJLJWdg46cXG3DgIqruk";
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&key=${apiKey}&strategy=mobile`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    performance: Math.round(
      data.lighthouseResult.categories.performance.score * 100
    ),
    lcp: data.lighthouseResult.audits["largest-contentful-paint"].displayValue,
    tbt: data.lighthouseResult.audits["total-blocking-time"].displayValue,
    cls: data.lighthouseResult.audits["cumulative-layout-shift"].displayValue,
    fcp: data.lighthouseResult.audits["first-contentful-paint"].displayValue,
  };
};

export const Projects = () => {
  const projectQueries = projects.map((project) => ({
    queryKey: ["performance", project.live],
    queryFn: () => fetchPerformanceMetrics(project.live),
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  }));

  const results = projectQueries.map((query) => useQuery(query));

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920")',
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
        className="max-w-4xl mx-auto space-y-8 sm:space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-sm sm:text-base uppercase tracking-wider text-muted-foreground">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-card/50 overflow-hidden">
                <div className="w-full h-48 relative">
                  <img
                    src={project.image.startsWith('/') ? project.image : `https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={400}
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                </div>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0 flex-col items-stretch gap-4">
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {results[index].isSuccess && (
                    <PerformanceMetrics {...results[index].data} />
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// This component displays a portfolio section with featured projects.
// Each project is displayed in a card with an image, title, description,
// tech stack, and a link to the live demo. Images are lazy loaded and
// optimized for performance, with the first image having high priority
// loading for better LCP (Largest Contentful Paint) metrics.
// Performance metrics are fetched and displayed for each project using
// the Google PageSpeed Insights API.