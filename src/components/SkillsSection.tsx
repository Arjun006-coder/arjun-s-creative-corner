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
  const orbitSkills = [
    // Ring 1 (Inner) - Core Languages
    { name: "Python", r: 1 }, { name: "Java", r: 1 }, { name: "C++", r: 1 }, { name: "JavaScript", r: 1 },
    // Ring 2 (Middle) - Frameworks & AI
    { name: "React", r: 2 }, { name: "PyTorch", r: 2 }, { name: "Flask", r: 2 }, { name: "YOLO", r: 2 },
    { name: "NumPy", r: 2 }, { name: "Pandas", r: 2 },
    // Ring 3 (Outer) - Tools & Infrastructure
    { name: "Git", r: 3 }, { name: "Supabase", r: 3 }, { name: "Docker", r: 3 }, { name: "Vercel", r: 3 },
    { name: "Hugging Face", r: 3 }, { name: "Groq", r: 3 }, { name: "Tailwind", r: 3 }, { name: "PostgreSQL", r: 3 }
  ];

  return (
    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto flex items-center justify-center">
      {/* Center core */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center glow-box z-30 shadow-[0_0_50px_rgba(155,135,245,0.4)] border-2 border-white/20"
      >
        <span className="text-3xl font-bold text-primary-foreground tracking-tighter">AA</span>
      </motion.div>

      {/* Orbit Rings Container */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + ring * 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        >
          {/* Orbital path line */}
          <div
            className="absolute border border-dashed border-primary/10 rounded-full"
            style={{
              width: `${(ring + 1) * 25}%`,
              height: `${(ring + 1) * 25}%`
            }}
          />

          {/* Orbiting skills for this ring */}
          {orbitSkills.filter(s => s.r === ring).map((skill, index, arr) => {
            const angle = (index * 360) / arr.length;
            const getRadius = () => {
              const base = typeof window !== 'undefined' && window.innerWidth < 768 ? 70 : 100;
              return base * (ring * 0.7 + 0.3);
            };

            const radius = getRadius();
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                className="absolute pointer-events-auto"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, zIndex: 40 }}
                  className={`glass-card px-2.5 py-1 md:px-4 md:py-2 rounded-full mono-text text-[9px] md:text-xs whitespace-nowrap border-primary/20 bg-background/40 backdrop-blur-md shadow-lg cursor-default
                    ${ring === 1 ? 'border-primary/40' : ring === 2 ? 'border-accent/40' : 'border-white/20'}`}
                >
                  {/* Counter-rotate text to keep it upright */}
                  <motion.div
                    animate={{ rotate: ring % 2 === 0 ? -360 : 360 }}
                    transition={{ duration: 40 + ring * 10, repeat: Infinity, ease: "linear" }}
                  >
                    {skill.name}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      ))}

      {/* Dynamic Background Blurs */}
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>
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
