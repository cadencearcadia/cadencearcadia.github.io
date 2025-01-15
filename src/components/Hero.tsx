import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center w-full max-w-3xl mx-auto space-y-6 backdrop-blur-sm bg-background/50 p-4 sm:p-6 lg:p-8 rounded-lg"
      >
        <span className="text-sm sm:text-base uppercase tracking-wider text-muted-foreground">
          React Engineer
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Building exceptional web experiences with React
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized in creating performant and scalable React applications with a
          focus on user experience and clean code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" onClick={scrollToProjects} className="w-full sm:w-auto">
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact} className="w-full sm:w-auto">
            Contact Me
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 hidden sm:block"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};