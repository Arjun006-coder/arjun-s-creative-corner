import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold font-editorial italic tracking-tight text-white hover:text-primary transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span>Arjun Agrawal</span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-white transition-colors relative py-2"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <a 
              href="/resume.pdf" 
              download="Arjun_Agrawal_Resume.pdf"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-black/80 hover:bg-black/40 text-xs uppercase tracking-[0.15em] font-mono flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10"
              >
                <FileDown className="w-3.5 h-3.5 text-primary" />
                <span>Resume</span>
              </HoverBorderGradient>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-28"
          >
            <div className="container flex flex-col items-center gap-8 py-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xl uppercase tracking-[0.2em] font-mono text-muted-foreground hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download="Arjun_Agrawal_Resume.pdf"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileOpen(false)}
                className="w-48 mt-4"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  className="bg-black/90 text-xs uppercase tracking-[0.2em] font-mono flex items-center justify-center gap-2 py-3 px-6 rounded-full w-full border border-white/10"
                >
                  <FileDown className="w-4 h-4 text-primary" />
                  <span>Download CV</span>
                </HoverBorderGradient>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
