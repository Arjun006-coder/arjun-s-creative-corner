import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, BrainCircuit, LineChart, Layers, Cloud } from "lucide-react";

// Categories and skills from the resume
const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code2,
    number: "01",
    skills: ["Python", "C++", "JavaScript", "Java", "Dart", "Swift"]
  },
  {
    id: "ai_nlp",
    title: "AI, ML & NLP",
    icon: BrainCircuit,
    number: "02",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LLMs", "RAG"]
  },
  {
    id: "vision_data",
    title: "Vision & Data Analytics",
    icon: LineChart,
    number: "03",
    skills: ["OpenCV", "YOLO (basic)", "Feature Engineering", "Power BI", "Tableau", "SQL", "Pandas", "NumPy"]
  },
  {
    id: "frameworks",
    title: "Development Frameworks",
    icon: Layers,
    number: "04",
    skills: ["React", "Next.js", "Vue.js", "Flask", "Vite", "HTML5", "CSS3"]
  },
  {
    id: "cloud_devops",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    number: "05",
    skills: ["AWS Academy", "Docker", "Git", "Supabase", "MongoDB", "n8n"]
  }
];

// Nodes for the SVG interactive network map
const networkNodes = [
  { id: "Python", x: 100, y: 120, category: "programming" },
  { id: "C++", x: 60, y: 70, category: "programming" },
  { id: "JavaScript", x: 150, y: 80, category: "programming" },
  
  { id: "PyTorch", x: 150, y: 220, category: "ai_nlp" },
  { id: "RAG", x: 260, y: 190, category: "ai_nlp" },
  { id: "LLMs", x: 220, y: 130, category: "ai_nlp" },
  
  { id: "OpenCV", x: 80, y: 300, category: "vision_data" },
  { id: "YOLO", x: 220, y: 290, category: "vision_data" },
  { id: "SQL", x: 290, y: 310, category: "vision_data" },
  
  { id: "React", x: 300, y: 70, category: "frameworks" },
  { id: "Flask", x: 360, y: 140, category: "frameworks" },
  
  { id: "AWS", x: 370, y: 250, category: "cloud_devops" },
  { id: "Supabase", x: 340, y: 320, category: "cloud_devops" }
];

const networkLinks = [
  { source: "Python", target: "PyTorch" },
  { source: "Python", target: "Flask" },
  { source: "PyTorch", target: "YOLO" },
  { source: "PyTorch", target: "LLMs" },
  { source: "LLMs", target: "RAG" },
  { source: "JavaScript", target: "React" },
  { source: "React", target: "Supabase" },
  { source: "Flask", target: "SQL" },
  { source: "Python", target: "OpenCV" },
  { source: "AWS", target: "Supabase" },
  { source: "C++", target: "Python" }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container relative z-10 mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mono-label mb-3">// technology inventory</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            My engineering <span className="font-editorial italic text-primary">arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-xl font-light mt-4 text-sm sm:text-base">
            Integrating robust languages, machine learning workflows, and modern cloud architecture.
          </p>
          <div className="line-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Network Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center classy-card p-6 border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden"
          >
            <div className="w-full flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                System Connection Map
              </span>
              <span className="text-[9px] font-mono text-primary uppercase">
                {activeCategory ? `Scope: ${activeCategory}` : "System Idle"}
              </span>
            </div>

            {/* SVG Network Graph */}
            <div className="relative w-full aspect-square max-w-[400px]">
              <svg 
                viewBox="0 0 450 400" 
                className="w-full h-full text-muted-foreground"
              >
                {/* Connection lines */}
                {networkLinks.map((link, idx) => {
                  const srcNode = networkNodes.find(n => n.id === link.source);
                  const tgtNode = networkNodes.find(n => n.id === link.target);
                  if (!srcNode || !tgtNode) return null;
                  
                  const isHighlighted = 
                    (activeCategory && (srcNode.category === activeCategory || tgtNode.category === activeCategory)) ||
                    (hoveredSkill && (srcNode.id === hoveredSkill || tgtNode.id === hoveredSkill));

                  return (
                    <line
                      key={idx}
                      x1={srcNode.x}
                      y1={srcNode.y}
                      x2={tgtNode.x}
                      y2={tgtNode.y}
                      stroke={isHighlighted ? "hsl(var(--primary))" : "rgba(255,255,255,0.06)"}
                      strokeWidth={isHighlighted ? 1.5 : 1}
                      strokeDasharray={isHighlighted ? "none" : "2,2"}
                      className="transition-all duration-500"
                    />
                  );
                })}

                {/* Nodes */}
                {networkNodes.map((node) => {
                  const isCatMatch = activeCategory === node.category;
                  const isSkillMatch = hoveredSkill === node.id;
                  const isHighlighted = isCatMatch || isSkillMatch;
                  
                  return (
                    <g 
                      key={node.id}
                      className="cursor-default"
                      onMouseEnter={() => setHoveredSkill(node.id)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Node Glow */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isHighlighted ? 12 : 6}
                        fill={isHighlighted ? "rgba(232, 225, 213, 0.15)" : "transparent"}
                        className="transition-all duration-300"
                      />
                      {/* Node Core */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isHighlighted ? 4.5 : 3}
                        fill={isHighlighted ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)"}
                        className="transition-all duration-300"
                      />
                      {/* Text Label */}
                      <text
                        x={node.x}
                        y={node.y - 10}
                        textAnchor="middle"
                        fontSize={isHighlighted ? "11px" : "9px"}
                        fontFamily="JetBrains Mono, monospace"
                        fill={isHighlighted ? "#fff" : "rgba(255,255,255,0.4)"}
                        fontWeight={isHighlighted ? "bold" : "normal"}
                        className="transition-all duration-300 pointer-events-none select-none"
                      >
                        {node.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="w-full text-center border-t border-white/5 pt-4 mt-2">
              <p className="text-[10px] font-mono text-muted-foreground/60">
                Interactive Map // Hover elements to trace execution paths
              </p>
            </div>
          </motion.div>

          {/* Right Column: Categorized Skill Cards */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              const isHovered = activeCategory === cat.id;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                  className={`classy-card p-6 border rounded-xl bg-white/[0.01] transition-all duration-500 ${
                    isHovered ? "border-primary/30 bg-white/[0.02]" : "border-white/5"
                  }`}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border transition-colors ${
                        isHovered ? "border-primary/20 bg-primary/5 text-primary" : "border-white/5 text-muted-foreground"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-semibold text-white font-sans">{cat.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/40">{cat.number}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isNodeHovered = hoveredSkill === skill;
                      return (
                        <span
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 cursor-default ${
                            isNodeHovered 
                              ? "bg-primary text-black border-primary scale-[1.03]" 
                              : "bg-white/[0.02] border border-white/5 text-muted-foreground hover:text-white hover:border-white/10"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
