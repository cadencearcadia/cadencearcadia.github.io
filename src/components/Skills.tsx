import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { 
  Blocks, 
  FileCode2, 
  Database, 
  TestTube, 
  Workflow, 
  Puzzle 
} from "lucide-react";

const skills = [
  { name: "React", level: 95, icon: <Blocks className="w-6 h-6" /> },
  { name: "TypeScript", level: 90, icon: <FileCode2 className="w-6 h-6" /> },
  { name: "Next.js", level: 85, icon: <Workflow className="w-6 h-6" /> },
  { name: "Redux", level: 88, icon: <Puzzle className="w-6 h-6" /> },
  { name: "React Query", level: 92, icon: <Database className="w-6 h-6" /> },
  { name: "Testing", level: 85, icon: <TestTube className="w-6 h-6" /> },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 relative" id="skills">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920")',
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
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="h-2 bg-muted rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
