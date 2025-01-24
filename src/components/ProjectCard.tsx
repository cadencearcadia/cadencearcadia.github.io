import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { PerformanceMetrics } from "./PerformanceMetrics";
import { usePerformanceMetrics } from "@/hooks/usePerformanceMetrics";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    live: string;
    image: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { data: metrics, isSuccess } = usePerformanceMetrics(project.live);

  return (
    <motion.div
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
          {isSuccess && metrics && <PerformanceMetrics {...metrics} />}
        </CardFooter>
      </Card>
    </motion.div>
  );
};