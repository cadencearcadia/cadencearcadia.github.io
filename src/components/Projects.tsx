import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cabin Reservation Platform",
    description: "A full-featured reservation solution built with React, Next.js, and Supabase",
    tech: ["React", "Next.js", "Node.js", "Supabase"],
    live: "https://the-wild-oasis-website-bice.vercel.app",
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Cabin Management App",
    description: "Real-time cabin management, guest management and analytics dashboard with React Query and Supabase",
    tech: ["React", "React Query", "Supabase"],
    live: "https://oasis-bookings-app.netlify.app",
    image: "photo-1461749280684-dccba630e2f6",
  },
];

export const Projects = () => {
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
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Button size="sm" asChild className="w-full">
                    <a href={project.live} target="_blank" rel="noopener">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};