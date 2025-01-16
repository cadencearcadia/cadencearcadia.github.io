import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { AdditionalSkills } from "@/components/AdditionalSkills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pt-16">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <AdditionalSkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;