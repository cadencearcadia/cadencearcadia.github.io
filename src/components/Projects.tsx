import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "2koperating - Oil & Gas",
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
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// This component displays a portfolio section with featured projects.
// Each project is displayed in a card with an image, title, description,
// tech stack, and a link to the live demo. Performance metrics are 
// fetched from Supabase and updated weekly using the Google PageSpeed API.
