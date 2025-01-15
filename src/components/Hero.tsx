import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <span className="text-sm uppercase tracking-wider text-muted-foreground">
          React Engineer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Building exceptional web experiences with React
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized in creating performant and scalable React applications with a
          focus on user experience and clean code.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};