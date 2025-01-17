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
              My name is Jacob Buck, and my journey into programming began at the age of 14, building anime websites using HTML and PHP. This early exploration ignited a lifelong passion for coding and creativity. In my early 20s, I honed my technical skills in the Oil & Gas industry, developing and managing CMS platforms with PHP, MySQL, and jQuery.
            </p>
            <p className="text-lg leading-relaxed">
              At 23, I followed my passion for dance music, launching the first of five record labels. Over the next seven years, our labels achieved remarkable success, amassing over 600 million streams across 1,500 releases, collaborating with international superstars, and being featured in the world's biggest magazines and publications. During this time, I gained invaluable experience in marketing, PR management, leadership, and music publishing. I also designed artwork and edited videos, becoming proficient in tools like Photoshop, InDesign, and After Effects.
            </p>
            <p className="text-lg leading-relaxed">
              In 2019, I transitioned from the music industry back to my roots in programming, diving into React development. Over the past five years, I've specialized in building scalable, high-performing web applications that blend intuitive design with powerful functionality. My expertise includes modern React practices, state management solutions, and performance optimization.
            </p>
            <p className="text-lg leading-relaxed">
              Driven by a deep curiosity, I approach every challenge with resourcefulness and determination. I thrive on transforming ambitious ideas into elegant, impactful solutions. Whether refining code, crafting user interfaces, or solving complex problems, I bring a unique blend of technical expertise and creative vision to every project.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;