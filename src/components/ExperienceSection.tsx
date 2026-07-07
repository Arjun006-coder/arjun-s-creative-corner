import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Calendar, Trophy, ShieldCheck, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Data Collection and Scraping Engineer",
    company: "Akiya2.0",
    location: "Remote",
    period: "Aug 2026",
    points: [
      "Accepted a role at Akiya2.0, a Japanese proptech startup focused on revitalizing Japan's vacant akiya property market by connecting buyers with underutilized real estate nationwide.",
      "Built automated Python web scraping pipelines to collect, clean, and structure large-scale Japanese real estate listings for machine learning models and analytics dashboards."
    ]
  },
  {
    role: "AI Enabled Business Intelligence Intern",
    company: "TBI GEU, Graphic Era Univ.",
    location: "Remote",
    period: "Jun 2026 - Sep 2026",
    points: [
      "Developed AI-driven BI dashboards and decision-support tools using Python, SQL, and Power BI to surface actionable insights from structured business datasets.",
      "Conducted end-to-end data analysis on a regional homestay accommodation dataset, including exploratory profiling, occupancy modeling, and dashboard development to support pricing decisions.",
      "Collaborated with cross-functional teams to prototype intelligent reporting pipelines that integrate LLM-based analytics with traditional BI workflows."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "3Skill",
    location: "Remote",
    period: "Oct 2025 - Dec 2025",
    points: [
      "Analyzed more than 5,000 structured records using Python (Pandas, NumPy) and SQL to identify key trends and support data-driven decision-making.",
      "Designed interactive Power BI and Tableau dashboards covering the full dataset, reducing manual reporting effort and giving stakeholders faster access to insights."
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2026",
    validity: "Valid 3 Years",
    link: "/certificates/aws_certificate.pdf"
  },
  {
    name: "Develop Solutions for Microsoft Azure",
    issuer: "Microsoft",
    date: "Jun 2026",
    validity: "Lifetime Validity",
    link: "https://learn.microsoft.com/certifications/"
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jun 2026",
    validity: "Lifetime Validity",
    link: "https://www.netacad.com/courses/cybersecurity/essentials"
  },
  {
    name: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Jun 2026",
    validity: "Lifetime Validity",
    link: "https://www.netacad.com/courses/packet-tracer"
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    date: "Apr 2026",
    validity: "Lifetime Validity",
    link: "https://www.netacad.com/courses/network-technician"
  },
  {
    name: "Java Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    date: "Oct 2025",
    validity: "Lifetime Validity",
    link: "https://www.linkedin.com/learning/certificates/9d526c3bbfc073bd5d1ec68047976efb6f68fad54f5165ae0d105efcfa88090d"
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM - Coursera",
    date: "Nov 2025",
    validity: "Lifetime Validity",
    link: "/certificates/software_engineering_certificate.pdf"
  }
];

const hackathons = [
  {
    name: "Developers Night (iOS Hackathon)",
    role: "Runner-Up",
    location: "KIET, Ghaziabad",
    date: "Feb 4, 2026",
    type: "runner-up"
  },
  {
    name: "Hack Heist",
    role: "Runner Up",
    location: "MIET, Meerut",
    date: "March 27, 2026",
    type: "runner-up"
  },
  {
    name: "Smart India Hackathon 2025",
    role: "College Internal Winner",
    location: "KIET, Ghaziabad",
    date: "Sept 2025",
    type: "winner"
  },
  {
    name: "Innotech 2025",
    role: "Participant",
    location: "KIET, Ghaziabad",
    date: "Nov 14, 2025",
    type: "participant"
  },
  {
    name: "Innovision Ideathon",
    role: "Participant",
    location: "TIIPS, Ghaziabad",
    date: "Feb 19, 2026",
    type: "participant"
  },
  {
    name: "Spark Hack",
    role: "Participant",
    location: "Sanskriti University, Mathura",
    date: "April 1, 2026",
    type: "participant"
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container relative z-10 mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mono-label mb-3">// professional timeline</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            Experience & <span className="font-editorial italic text-primary">credentials</span>
          </h2>
          <div className="line-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <h3 className="text-xl font-mono uppercase tracking-[0.15em] text-white flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>Professional History</span>
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="classy-card p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className="text-2xl font-semibold text-white font-sans">{exp.role}</h4>
                      <p className="text-sm text-primary font-mono mt-1">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-sm font-light text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1">▪</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 space-y-8"
          >
            <h3 className="text-xl font-mono uppercase tracking-[0.15em] text-white flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="classy-card p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/15 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white font-sans group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer} • <span className="font-mono text-[10px] text-primary">{cert.date}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-center text-muted-foreground group-hover:text-white transition-colors">
                    <span className="text-[10px] font-mono hidden sm:inline">{cert.validity}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-mono uppercase tracking-[0.15em] text-white flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Hackathons & Awards</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {hackathons.map((hack, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 border border-white/5 bg-white/[0.01] rounded-xl flex flex-col justify-between hover:border-white/15 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                          hack.type === "winner" 
                            ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400" 
                            : hack.type === "runner-up"
                            ? "bg-primary/10 border border-primary/20 text-primary"
                            : "bg-white/5 border border-white/5 text-muted-foreground"
                        }`}>
                          {hack.role}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/60">{hack.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white font-sans mt-2">{hack.name}</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground/60 mt-3 font-light">{hack.location}</p>
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

export default ExperienceSection;
