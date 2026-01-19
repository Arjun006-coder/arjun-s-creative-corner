import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "9.27", label: "CGPA" },
    { value: "4+", label: "Projects" },
    { value: "Top 45", label: "SIH Hackathon" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="floating-orb w-96 h-96 bg-accent/30 -right-48 top-0" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2">// about me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    B.Tech CSE @ KIET Group of Institutions
                  </p>
                  <p className="text-muted-foreground text-sm">2024 - 2028</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Ghaziabad, India
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Languages</h3>
                  <p className="text-muted-foreground text-sm">
                    Hindi (Native) • English (Fluent) • Japanese (Beginner)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a second-year Computer Science student with a passion for{" "}
              <span className="text-foreground font-medium">problem-solving</span>,{" "}
              <span className="text-foreground font-medium">system design</span>, and{" "}
              <span className="text-foreground font-medium">applied AI</span>. 
              I love building solutions that make a real-world impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently strengthening my CS fundamentals while experimenting with AI, 
              backend systems, and real-world applications. I believe in using technology 
              to create accessible and inclusive solutions for everyone.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
