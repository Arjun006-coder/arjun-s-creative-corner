import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const HeroSection = () => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Fine-line geometric accents and coordinates */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute top-[25%] left-0 right-0 h-px bg-white" />
        <div className="absolute bottom-[25%] left-0 right-0 h-px bg-white" />
      </div>

      <div className="absolute top-28 left-[12%] text-[9px] font-mono tracking-widest text-muted-foreground/50 z-10 select-none">
        SYS.LOC: 28.6692° N, 77.4538° E
      </div>
      <div className="absolute bottom-28 right-[12%] text-[9px] font-mono tracking-widest text-muted-foreground/50 z-10 select-none">
        PORTFOLIO // V3.0
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/80">
              Computer Science & Applied AI
            </span>
          </motion.div>

          {/* Luxury Serif Heading */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-white mb-8 select-none leading-none">
            <motion.span
              variants={itemVariants}
              className="block font-editorial font-light"
            >
              Crafting
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block font-editorial italic text-primary"
            >
              Intelligent
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block font-editorial font-light tracking-tight"
            >
              Systems
            </motion.span>
          </h1>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Arjun Agrawal is a developer specializing in AI/ML, computer vision, and data analytics, bridging advanced algorithms with elegant, finished user experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="/resume.pdf"
              download="Arjun_Agrawal_Resume.pdf"
              className="w-full sm:w-auto"
            >
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                className="bg-white text-black hover:bg-white/95 text-sm font-semibold tracking-wider flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full shadow-lg"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </HoverBorderGradient>
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wider hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
              Get in Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/Arjun006-coder", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-agrawal-ab82a5328/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:arjun1234agrawal@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a 
          href="#about" 
          className="pointer-events-auto flex flex-col items-center gap-2 group text-muted-foreground hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
