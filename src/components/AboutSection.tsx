import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Globe2, Phone, Mail } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "9.30", label: "Current CGPA" },
    { value: "3 Skill", label: "Data Internship" },
    { value: "3+", label: "Core AI Projects" },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "KIET Group of Institutions - Ghaziabad",
      university: "Dr. A.P.J. Abdul Kalam Technical University",
      period: "Expected 2028",
      grade: "9.3 GPA / CGPA",
    },
    {
      degree: "Class XII (PCM)",
      institution: "DAV Public School - Ghaziabad",
      university: "CBSE",
      period: "2024",
      grade: "Final Grade: 87%",
    },
    {
      degree: "Class X",
      institution: "DAV Public School - Ghaziabad",
      university: "CBSE",
      period: "2022",
      grade: "Final Grade: 91%",
    },
  ];

  const languages = [
    { name: "Hindi", level: "Bilingual / Native (C2)" },
    { name: "English", level: "Advanced Professional (C1)" },
    { name: "Japanese", level: "Elementary Beginner (A1)" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container relative z-10 mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-left md:text-center"
        >
          <p className="mono-label mb-3">// profile</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            An overview of <span className="font-editorial italic text-primary">who I am</span>
          </h2>
          <div className="line-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-editorial italic text-white leading-relaxed">
                "Developing intelligent products that connect human needs with backend scale."
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base">
                I am a second-year Computer Science undergraduate with hands-on experience in machine learning, data analytics, and full-stack development. Guided by industry expert mentors from Xebia, I have designed systems ranging from computer vision modules to generative AI workflows.
              </p>
              
              <p className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base">
                I focus on writing clean, scalable code and extracting patterns from complex datasets. My objective is to bridge the gap between academic research and deployable, real-world technology solutions.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ghaziabad, UP, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:arjun1234agrawal@gmail.com" className="hover:text-white transition-colors">
                  arjun1234agrawal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-mono">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9958078417</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="classy-card p-4 text-center border border-white/5 rounded-xl bg-white/[0.02]">
                  <p className="text-2xl font-bold font-editorial text-primary">{stat.value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Education timeline */}
            <div className="classy-card p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
              <h4 className="text-lg font-mono uppercase tracking-[0.15em] text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Education History</span>
              </h4>
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 last:pb-0 pb-2">
                    {/* Timeline bullet */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[4.5px]" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h5 className="font-semibold text-white text-base font-sans">{edu.degree}</h5>
                      <span className="text-[11px] font-mono text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-light">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-[11px] text-muted-foreground/60 font-light mt-0.5">{edu.university}</p>
                    )}
                    <p className="text-xs font-mono text-white/80 mt-2">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages card */}
            <div className="classy-card p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
              <h4 className="text-lg font-mono uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-primary" />
                <span>Language Proficiency</span>
              </h4>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
                    <p className="font-editorial text-xl italic text-white mb-1">{lang.name}</p>
                    <p className="text-[10px] font-mono text-muted-foreground tracking-wide leading-tight">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
