import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Galaxy from "@/components/ui/Galaxy";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to high-performance CSS transforms for backdrop blobs
  const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "100%"]);
  const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "30%", "-20%"]);
  const blob1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.9]);
  const blob1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "20%", "0%"]);
  const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-40%", "20%"]);
  const blob2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.2]);
  const blob2Rotate = useTransform(scrollYProgress, [0, 1], [180, -180]);

  const blob3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "80%", "30%"]);
  const blob3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-x-hidden bg-[#070605] text-foreground selection:bg-primary/20 selection:text-white"
    >
      {/* 
        High-Performance GPU-Accelerated Scrolling Background Backdrop.
        Combines warm CSS blurred gradient blobs with the interactive 3D Galaxy component.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Interactive 3D Star Galaxy with Warm Golden hueShift */}
        <div className="absolute inset-0 opacity-25">
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.5}
            saturation={0.7}
            hueShift={35} // Shifts colors to a stunning luxury gold/amber tone
            starSpeed={0.3}
            rotationSpeed={0.05}
          />
        </div>

        {/* Warm Gold Blob */}
        <motion.div 
          style={{
            y: blob1Y,
            x: blob1X,
            scale: blob1Scale,
            rotate: blob1Rotate,
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8a7355]/15 to-[#5a4831]/5 blur-[120px]"
        />

        {/* Deep Slate Blue / Indigo Blob */}
        <motion.div 
          style={{
            y: blob2Y,
            x: blob2X,
            scale: blob2Scale,
            rotate: blob2Rotate,
          }}
          className="absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#1b2a35]/15 to-[#2c3d49]/8 blur-[130px]"
        />

        {/* Ambient Ivory / Champagne Center Glow */}
        <motion.div 
          style={{
            y: blob3Y,
            scale: blob3Scale,
          }}
          className="absolute left-1/4 top-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#d4af37]/5 via-[#faf6f0]/5 to-transparent blur-[110px]"
        />

        {/* Global layout grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
