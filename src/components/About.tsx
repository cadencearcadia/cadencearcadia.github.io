import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Passionate about creating impactful web solutions
          </h2>
        </div>
        <Card className="backdrop-blur-sm bg-card/50">
          <CardContent className="p-6 space-y-4">
            <p className="text-lg leading-relaxed">
              With over 5 years of experience in React development, I specialize in
              building scalable web applications that combine elegant design with
              robust functionality. My expertise includes modern React practices,
              state management solutions, and performance optimization techniques.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about creating intuitive user interfaces and writing
              clean, maintainable code. My approach focuses on delivering
              high-quality solutions that meet both user needs and business
              objectives.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};