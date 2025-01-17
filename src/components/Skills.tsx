import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { 
  FileCode2,
  Database,
  Server,
  ServerCog,
  Code2,
  BookOpen,
} from "lucide-react";

const skills = [
  { name: "PHP", level: 80, icon: <FileCode2 className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "MySQL/SQL", level: 70, icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Supabase", level: 65, icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Node.js", level: 60, icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Laravel", level: 10, icon: <ServerCog className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Django", level: 10, icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

export const Skills = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative" id="skills">
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
        className="max-w-4xl mx-auto space-y-8 sm:space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-sm sm:text-base uppercase tracking-wider text-muted-foreground">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Backend Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm sm:text-base font-medium">{skill.name}</h3>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden"
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