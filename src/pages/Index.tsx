import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load components
const Navigation = lazy(() => import("@/components/Navigation"));
const Hero = lazy(() => import("@/components/Hero").then(module => ({ default: module.Hero })));
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const Skills = lazy(() => import("@/components/Skills").then(module => ({ default: module.Skills })));
const AdditionalSkills = lazy(() => import("@/components/AdditionalSkills").then(module => ({ default: module.AdditionalSkills })));
const Projects = lazy(() => import("@/components/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-muted"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <Navigation />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <AdditionalSkills />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </motion.div>
  );
};

export default Index;