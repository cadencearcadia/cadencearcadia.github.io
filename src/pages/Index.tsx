import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { AdditionalSkills } from "@/components/AdditionalSkills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-muted"
    >
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <AdditionalSkills />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Index;