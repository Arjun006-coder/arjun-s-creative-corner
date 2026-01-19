import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Medal } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Internship",
    subtitle: "Analytics & Insights",
    date: "2024",
    points: [
      "Analyzed datasets to extract actionable insights for business decisions",
      "Built data visualizations and dashboards for stakeholder presentations",
      "Applied statistical methods and data cleaning techniques",
    ],
  },
  {
    title: "Social Internship",
    subtitle: "Accessible Tech Guides Project",
    date: "2024",
    points: [
      "Created bilingual guides for UPI apps, IRCTC, WhatsApp, and telemedicine",
      "Compiled 4-page impact report with user feedback and geo-tagged evidence",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Winner",
    subtitle: "Internal Entrepreneurship Event",
    description: "CareerCraft - AI Career Planner",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: Medal,
    title: "Top 45 / 610+ Teams",
    subtitle: "Smart India Hackathon",
    description: "CivicEye - AI Civic Reporting",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Award,
    title: "9.27 CGPA",
    subtitle: "First Year Performance",
    description: "KIET Group of Institutions",
    gradient: "from-accent to-pink-400",
  },
];

const certifications = [
  "AWS Academy Cloud Foundations [148933]",
  "Introduction to AI – LinkedIn Learning",
  "AI Developer Series – Coursera",
  "Java OOP – LinkedIn Learning",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="floating-orb w-80 h-80 bg-accent/20 -left-40 bottom-0" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2">// journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center group gradient-border"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 12 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-primary mono-text text-sm mb-2">{achievement.subtitle}</p>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px] glow-box" />
                <div className="glass-card rounded-xl p-6">
                  <span className="mono-text text-primary text-sm">{exp.date}</span>
                  <h4 className="font-bold text-lg mt-1">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{exp.subtitle}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <span className="text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
