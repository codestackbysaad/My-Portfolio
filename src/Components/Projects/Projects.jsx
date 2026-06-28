import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiArrowRightUpLine, RiGithubLine } from "react-icons/ri";

const projects = [
  { title: "Weather App", description: "Real-time weather data with clean, minimal UI", link: "https://github.com/codestackbysaad/weather-UI", tag: "API · React" },
  { title: "Todo App", description: "Task manager with local storage persistence", link: "https://github.com/codestackbysaad/Todo-App-in-React", tag: "React · Context" },
  { title: "Password Generator", description: "Secure password generator with one-click copy", link: "https://github.com/codestackbysaad/Password-Generator", tag: "JavaScript" },
];

const ProjectCard = ({ title, description, link, tag, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      whileHover={{ y: -8 }}
      style={{
        display: "block", textDecoration: "none",
        padding: "2rem 2rem 1.8rem",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.02)",
        cursor: "pointer",
        transition: "border-color 0.3s",
        minHeight: "200px"
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(200,240,77,0.5)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c8f04d", padding: "4px 12px", border: "1px solid rgba(200,240,77,0.3)", borderRadius: "99px" }}>
          {tag}
        </span>
        <RiArrowRightUpLine style={{ color: "rgba(240,237,230,0.3)", fontSize: "1.1rem", flexShrink: 0 }} />
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "#f0ede6", marginBottom: "0.6rem" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.88rem", color: "rgba(240,237,230,0.4)", lineHeight: 1.65 }}>
        {description}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "1.8rem", color: "rgba(240,237,230,0.25)", fontSize: "0.78rem" }}>
        <RiGithubLine style={{ fontSize: "1rem" }} />
        <span>View on GitHub</span>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ padding: "6rem 5vw" }}>
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8f04d", display: "block", marginBottom: "1.5rem" }}
      >Projects</motion.span>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 800, color: "#f0ede6", marginBottom: "3rem" }}
      >Things I've built.</motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
        {projects.map((p, i) => <ProjectCard key={p.title} {...p} i={i} />)}
      </div>
    </div>
  );
};

export default Projects;
