import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Brain, Users, Car, Globe } from "lucide-react";

const projects = [
  {
    title: "IntelliFlow",
    subtitle: "AI-Based Traffic Signal System",
    description: "Smart traffic management using YOLO-based vehicle detection with adaptive signal timing and emergency vehicle preemption.",
    tech: ["PyTorch", "CUDA", "Flask", "YOLO", "Deep Learning"],
    icon: Car,
    gradient: "from-primary to-cyan-400",
    featured: true,
  },
  {
    title: "CivicEye",
    subtitle: "AI-Assisted Civic Reporting",
    description: "Crowdsourced civic reporting with AI verification, spam detection, and heatmap visualization for issue prioritization.",
    tech: ["AI Verification", "Geolocation", "Gamification", "Heatmaps"],
    icon: Users,
    gradient: "from-accent to-pink-400",
    featured: true,
  },
  {
    title: "CareerCraft",
    subtitle: "AI-Powered Career Planner",
    description: "ERP-integrated platform generating personalized career roadmaps with skill-gap analysis and auto CV generation.",
    tech: ["AI/ML", "ERP Integration", "Gamification", "Analytics"],
    icon: Brain,
    gradient: "from-green-400 to-primary",
    featured: true,
  },
  {
    title: "Accessible Tech Website",
    subtitle: "Digital Inclusion Platform",
    description: "Bilingual educational website improving digital inclusion with clear navigation and simplified explanations.",
    tech: ["HTML", "CSS", "JavaScript", "Accessibility"],
    icon: Globe,
    gradient: "from-orange-400 to-accent",
    featured: false,
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative ${project.featured ? 'md:col-span-1' : ''}`}
    >
      <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-500 hover:bg-card/80 gradient-border overflow-hidden">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          {/* Icon with rotating border */}
          <div className="relative w-14 h-14 mb-6">
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20`}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[2px] rounded-xl bg-card flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-primary mono-text text-sm mb-4">{project.subtitle}</p>
          
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs mono-text bg-secondary/50 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mono-text text-sm"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="floating-orb w-80 h-80 bg-primary/20 -left-40 top-1/3" />
      <div className="floating-orb w-64 h-64 bg-accent/20 right-0 bottom-20" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2">// my work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Building solutions that combine AI, system design, and real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
