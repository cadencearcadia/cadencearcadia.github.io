import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 relative" id="about">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920")',
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
              Hi, I’m Jacob Buck—a seasoned coder with over 20 years of experience and a passion for blending creativity with technology. With over 5 years of expertise in React development, I specialize in building scalable web applications that combine elegant design with robust functionality. My skills include modern React practices, state management solutions, and performance optimization techniques.
            </p>
            <p className="text-lg leading-relaxed">
              As a former owner of a dance music record label, I bring a creative edge to my work, crafting intuitive user interfaces that resonate with users. I’m passionate about writing clean, maintainable code and delivering high-quality solutions that meet both user needs and business objectives.
            </p>
            <p className="text-lg leading-relaxed">
              Fueled by an insatiable curiosity, I’m driven to uncover how things work at their core. Living in California inspires my innovative spirit, where I tackle challenges head-on with resourcefulness and determination. Whether refining code or solving complex problems, I strive to turn big ideas into elegant, impactful solutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
