import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import About from "@/components/About";
import { AdditionalSkills } from "@/components/AdditionalSkills";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AdditionalSkills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;