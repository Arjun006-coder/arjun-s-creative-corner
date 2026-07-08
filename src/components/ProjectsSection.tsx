import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Brain, Cpu, ShieldAlert, Users, Calendar, X, Maximize2 } from "lucide-react";
import BounceCards from "@/components/ui/BounceCards";
import ElectricBorder from "@/components/ui/ElectricBorder";

const customTransformStyles = [
  'rotate(8deg) translate(-50px)',
  'rotate(4deg) translate(-25px)',
  'rotate(-2deg)',
  'rotate(-8deg) translate(25px)',
  'rotate(3deg) translate(50px)'
];

const modalTransformStyles = [
  'rotate(10deg) translate(-150px)',
  'rotate(5deg) translate(-75px)',
  'rotate(-3deg)',
  'rotate(-10deg) translate(75px)',
  'rotate(4deg) translate(150px)'
];

const projects = [
  {
    title: "Swift Notes",
    subtitle: "AI Smart Notes Assistant",
    description: "Developed a GenAI application using Gemini API (LLM) for YouTube/playlist summarization, flashcard & mind map generation, with real-time collaborative note-taking and timestamp-linked snapshots.",
    tech: ["Gemini API", "LLMs", "RAG", "Collaboration", "React"],
    icon: Brain,
    duration: "2 Months",
    teamSize: "Team of 4",
    githubLink: "https://github.com/Arjun006-coder",
    vercelLink: "https://swift-notes2-0-web.vercel.app/",
    images: [
      "/projectimages/swiftnotes/Screenshot (135).png",
      "/projectimages/swiftnotes/Screenshot 2026-06-04 181713.png",
      "/projectimages/swiftnotes/Screenshot 2026-06-04 181722.png",
      "/projectimages/swiftnotes/Screenshot 2026-06-04 181735.png",
      "/projectimages/swiftnotes/Screenshot 2026-06-04 181745.png"
    ]
  },
  {
    title: "Civic Eye",
    subtitle: "AI Civic Issue Detection System",
    description: "Developed a computer vision system using OpenCV and Python to detect potholes and garbage. Features geotagging and a multi-layer safety system to filter fake reports or NSFW content.",
    tech: ["Python", "OpenCV", "Computer Vision", "Geotagging", "Security Layer"],
    icon: ShieldAlert,
    duration: "1 Month",
    teamSize: "Solo Project",
    githubLink: "https://github.com/Arjun006-coder/CivicEye",
    vercelLink: "https://civic-eye-rho.vercel.app",
    images: [
      "/projectimages/Civic Eye/Screenshot (140).png",
      "/projectimages/Civic Eye/Screenshot (141).png",
      "/projectimages/Civic Eye/Screenshot (142).png",
      "/projectimages/Civic Eye/Screenshot (143).png",
      "/projectimages/Civic Eye/Screenshot (144).png"
    ]
  },
  {
    title: "Intelli Flow",
    subtitle: "Intelligent Traffic Management",
    description: "Built a real-time traffic management system using YOLOv8 and Python for vehicle detection. Implements adaptive signal timing to dynamically reduce urban traffic congestion.",
    tech: ["Python", "YOLOv8", "Computer Vision", "Adaptive Algorithms"],
    icon: Cpu,
    duration: "1.5 Months",
    teamSize: "Team of 2",
    githubLink: "https://github.com/Arjun006-coder",
    images: null
  }
];

const ProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeProject = selectedProjectIdx !== null ? projects[selectedProjectIdx] : null;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container relative z-10 mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mono-label mb-3">// engineering projects</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            Selected <span className="font-editorial italic text-primary">creations</span> & systems
          </h2>
          <p className="text-muted-foreground max-w-xl font-light mt-4 text-sm sm:text-base">
            Focusing on applied machine learning, automated analysis, and real-time processing pipelines. Click on card previews to expand screenshots in high-resolution cards.
          </p>
          <div className="line-accent" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  type: "spring", 
                  stiffness: 85, 
                  damping: 16,
                  delay: index * 0.15 
                }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative h-full"
              >
                <ElectricBorder
                  color={isHovered ? "#e8e1d5" : "rgba(255, 255, 255, 0.04)"}
                  speed={isHovered ? 1.2 : 0.4}
                  chaos={isHovered ? 0.08 : 0.01}
                  borderRadius={20}
                  className="h-full w-full transition-all duration-500"
                >
                  <div className="p-8 flex flex-col justify-between h-full bg-[#0d0c0b]/90 border border-white/5 rounded-[20px]">
                    <div>
                      {/* Top Preview Section - Clickable */}
                      <div 
                        onClick={() => setSelectedProjectIdx(index)}
                        className="w-full h-36 flex items-center justify-center overflow-hidden mb-6 relative rounded-xl bg-white/[0.01] border border-white/5 cursor-pointer group/preview"
                      >
                        {/* Overlay hover prompt */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity z-20 flex items-center justify-center gap-2">
                          <Maximize2 className="w-4 h-4 text-primary animate-pulse" />
                          <span className="text-[10px] font-mono tracking-widest text-white uppercase">
                            Expand Details
                          </span>
                        </div>

                        {project.images ? (
                          <BounceCards
                            images={project.images}
                            containerWidth={260}
                            containerHeight={120}
                            cardWidth={85}
                            cardHeight={85}
                            enableHover={true}
                            transformStyles={customTransformStyles}
                            animationDelay={0.4}
                          />
                        ) : (
                          /* Specialized Vector Graphic representing traffic optimization streams for Project 3 */
                          <div className="w-full h-full flex flex-col items-center justify-center relative bg-black/20 p-4">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:12px_12px]" />
                            <svg className="w-24 h-16 text-primary/40" viewBox="0 0 100 60" fill="none">
                              <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <line x1="30" y1="0" x2="30" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <line x1="70" y1="0" x2="70" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                              <circle cx="30" cy="20" r="3" fill="#ef4444" className="animate-pulse" />
                              <circle cx="70" cy="40" r="3" fill="#22c55e" className="animate-pulse" />
                              <motion.circle 
                                cx="0" cy="30" r="2" fill="currentColor"
                                animate={{ cx: [0, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              />
                            </svg>
                            <span className="text-[9px] font-mono tracking-widest text-muted-foreground/60 uppercase mt-2">
                              Flow Optimization Matrix
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Meta Tags */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5 uppercase">
                          <Users className="w-3.5 h-3.5 text-primary" />
                          {project.teamSize}
                        </span>
                        <span className="flex items-center gap-1.5 uppercase">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {project.duration}
                        </span>
                      </div>

                      {/* Header Title */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold font-sans text-white">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono text-primary mt-1">{project.subtitle}</p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                          <ProjectIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground/80 text-xs sm:text-sm font-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-white/5 border border-white/5 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-white transition-colors py-1"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.vercelLink && (
                          <a
                            href={project.vercelLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors py-1"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Popup Modal for Project Screenshots */}
      <AnimatePresence>
        {selectedProjectIdx !== null && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectIdx(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 20 } 
              }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0d0c0b] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between overflow-hidden shadow-2xl min-h-[480px] max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectIdx(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white border border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Info */}
              <div className="w-full text-center sm:text-left mb-6">
                <span className="text-[10px] font-mono tracking-widest text-primary uppercase">
                  Project Gallery Preview
                </span>
                <h3 className="text-3xl font-light text-white font-sans mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground mt-0.5">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Interactive Showcase Component */}
              <div className="w-full flex-grow flex items-center justify-center py-6 min-h-[260px] relative">
                {activeProject.images ? (
                  <BounceCards
                    images={activeProject.images}
                    containerWidth={500}
                    containerHeight={260}
                    cardWidth={180}
                    cardHeight={180}
                    enableHover={true}
                    transformStyles={modalTransformStyles}
                    animationDelay={0.2}
                    animationStagger={0.08}
                  />
                ) : (
                  /* High-Resolution System Signal blueprint mapping for Project 3 */
                  <div className="w-full max-w-md h-full flex flex-col items-center justify-center border border-white/5 bg-white/[0.01] rounded-2xl p-6 text-center">
                    <svg className="w-48 h-32 text-primary/30 mb-4 animate-pulse" viewBox="0 0 100 60" fill="none">
                      <rect x="5" y="5" width="90" height="50" rx="3" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="50" y1="5" x2="50" y2="55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
                      <line x1="5" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
                      
                      {/* Intersections */}
                      <circle cx="50" cy="30" r="5" stroke="currentColor" strokeWidth="1" />
                      <path d="M 30,30 Q 50,10 70,30" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <path d="M 30,30 Q 50,50 70,30" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      
                      {/* Active nodes */}
                      <circle cx="30" cy="30" r="2" fill="#22c55e" />
                      <circle cx="70" cy="30" r="2" fill="#ef4444" />
                    </svg>
                    <h4 className="text-sm font-semibold text-white font-sans">Adaptive Traffic Optimization Blueprint</h4>
                    <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed font-light">
                      Visualizing dynamic road network grids using vehicle feedback streams for real-time intersection controller coordination.
                    </p>
                  </div>
                )}
              </div>

              {/* Instruction Prompt */}
              <div className="w-full text-center border-t border-white/5 pt-4 mt-4">
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                  {activeProject.images 
                    ? "Hover over images inside the card array to fan out and straighten screenshots."
                    : "Interactive logic simulator graph // Under construction"
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
