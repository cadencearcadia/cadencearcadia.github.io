import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { 
  Brush,
  Lightbulb,
  Users,
  Brain,
  Target,
  Languages,
  Presentation,
  HeartHandshake,
} from "lucide-react";

const additionalSkills = [
  { 
    name: "UI/UX Design", 
    level: 85, 
    icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Creating intuitive and engaging user interfaces"
  },
  { 
    name: "Problem Solving", 
    level: 92, 
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Analytical thinking and creative solution finding"
  },
  { 
    name: "Team Leadership", 
    level: 88, 
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Leading and mentoring development teams"
  },
  { 
    name: "Machine Learning", 
    level: 75, 
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Basic ML concepts and implementations"
  },
  { 
    name: "Project Management", 
    level: 90, 
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Agile methodologies and project coordination"
  },
  { 
    name: "Communication", 
    level: 95, 
    icon: <Presentation className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Clear and effective technical communication"
  },
  { 
    name: "Languages", 
    level: 80, 
    icon: <Languages className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "English (Native), Spanish (Fluent)"
  },
  { 
    name: "Collaboration", 
    level: 93, 
    icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />,
    description: "Cross-functional team collaboration"
  },
];

export const AdditionalSkills = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative" id="additional-skills">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920")',
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
            Additional Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Beyond Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complementary skills and competencies that enhance my ability to deliver comprehensive solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-card/50 h-full">
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
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {skill.description}
                        </p>
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