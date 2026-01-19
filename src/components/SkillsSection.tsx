import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript"],
    color: "primary",
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "YOLO"],
    color: "accent",
  },
  {
    title: "Web & Backend",
    skills: ["HTML", "CSS", "Flask", "React", "Supabase"],
    color: "primary",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Vercel", "Railway", "Hugging Face", "Groq"],
    color: "accent",
  },
];

const SkillPill = ({ skill, index, color }: { skill: string; index: number; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.1, y: -3 }}
    className={`px-4 py-2 rounded-full glass-card cursor-default transition-all duration-300 
      hover:bg-${color}/10 hover:border-${color}/30`}
  >
    <span className="mono-text text-sm">{skill}</span>
  </motion.div>
);

const SkillOrbit = ({ isInView }: { isInView: boolean }) => {
  const orbitSkills = ["Python", "Java", "React", "PyTorch", "Flask", "Git"];
  
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
      {/* Center core */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-box z-10"
      >
        <span className="text-2xl font-bold text-primary-foreground">AA</span>
      </motion.div>

      {/* Orbital ring */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute w-56 h-56 md:w-72 md:h-72 border-2 border-dashed border-primary/30 rounded-full"
      />

      {/* Orbiting skills */}
      {orbitSkills.map((skill, index) => {
        const angle = (index * 360) / orbitSkills.length;
        const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 130;
        const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
        const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
        
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            className="absolute glass-card px-3 py-1.5 rounded-full mono-text text-xs whitespace-nowrap"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            whileHover={{ scale: 1.15, zIndex: 20 }}
          >
            {skill}
          </motion.div>
        );
      })}
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="floating-orb w-96 h-96 bg-primary/10 right-0 top-20" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2">// skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skill orbit visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SkillOrbit isInView={isInView} />
          </motion.div>

          {/* Skill categories */}
          <div className="space-y-8 order-1 lg:order-2">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-${category.color}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <SkillPill key={skill} skill={skill} index={index} color={category.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
