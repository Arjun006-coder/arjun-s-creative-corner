import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black/40 border-t border-white/5">
      {/* Fine-line decorative accents */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-white/20" />
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-white/20" />
      </div>

      <div className="container relative z-10 mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="mono-label mb-3">// get in touch</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            Start a <span className="font-editorial italic text-primary">conversation</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-light mt-4 text-sm sm:text-base">
            Looking for an intern opportunity, collaboration, or just want to discuss machine learning? Reach out!
          </p>
          <div className="line-accent" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="classy-card p-8 md:p-12 border border-white/5 rounded-2xl bg-white/[0.01]"
          >
            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:arjun1234agrawal@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-xs font-semibold text-white truncate max-w-[180px] sm:max-w-none mt-1">arjun1234agrawal@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ghaziabad,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-xs font-semibold text-white mt-1">Ghaziabad, India</p>
                </div>
              </a>
            </div>

            {/* Social channels */}
            <div className="flex justify-center gap-4 mb-8 pt-4 border-t border-white/5">
              {[
                { icon: Github, href: "https://github.com/Arjun006-coder", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-agrawal-ab82a5328/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:arjun1234agrawal@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Button */}
            <a
              href="mailto:arjun1234agrawal@gmail.com"
              className="block w-full"
            >
              <HoverBorderGradient
                containerClassName="rounded-xl w-full"
                className="bg-white text-black hover:bg-white/95 font-semibold text-sm flex items-center justify-center gap-2 py-4 px-6 rounded-xl w-full shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send direct message</span>
              </HoverBorderGradient>
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-24 text-muted-foreground border-t border-white/5 pt-8"
        >
          <p className="font-editorial text-2xl italic text-white/90">Arjun Agrawal</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mt-2">
            AI/ML & Software Engineer // Ghaziabad, India
          </p>
          <p className="text-[9px] font-mono text-muted-foreground/30 mt-6">
            © 2026 Arjun Agrawal. Under Xebia expert mentorship. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
