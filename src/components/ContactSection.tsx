import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="floating-orb w-96 h-96 bg-primary/20 -right-48 bottom-0" />
      <div className="floating-orb w-64 h-64 bg-accent/20 left-20 top-20" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2">// let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 gradient-border"
          >
            {/* Contact info */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <motion.a
                href="mailto:arjun1234agrawal@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">arjun1234agrawal@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Ghaziabad,India"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer relative z-10"
              >
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-sm">Ghaziabad, India</p>
                </div>
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 mb-10">
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:arjun1234agrawal@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:opacity-90 glow-box cursor-pointer"
            >
              <Send className="w-5 h-5" />
              Send me an email
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 text-muted-foreground"
        >
          <p className="mono-text text-sm">
            Designed & Built with ❤️ by{" "}
            <span className="text-primary font-bold">Arjun Agrawal</span>
          </p>
          <p className="text-xs mt-2">© 2026 All rights reserved</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
