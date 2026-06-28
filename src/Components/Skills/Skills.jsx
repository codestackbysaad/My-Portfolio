import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "@remixicon/react";

const skills = [
  { name: "HTML", percent: 70, icon: <RiHtml5Fill />, color: "#e34c26" },
  { name: "CSS", percent: 63, icon: <RiCss3Fill />, color: "#264de4" },
  { name: "Tailwind CSS", percent: 40, icon: <RiTailwindCssFill />, color: "#38bdf8" },
  { name: "JavaScript", percent: 38, icon: <RiJavascriptFill />, color: "#f0db4f" },
  { name: "React.js", percent: 35, icon: <RiReactjsFill />, color: "#61dafb" },
];

const SkillBar = ({ name, percent, icon, color, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.3rem", color }}>{icon}</span>
          <span style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,237,230,0.8)" }}>{name}</span>
        </div>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#c8f04d" }}>{percent}%</span>
      </div>
      <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "99px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.2, delay: i * 0.1 + 0.2, ease: "easeOut" }}
          style={{ height: "100%", background: "#c8f04d", borderRadius: "99px" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 5vw" }}>
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8f04d", display: "block", marginBottom: "1.5rem" }}
      >Skills</motion.span>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 800, color: "#f0ede6", marginBottom: "3.5rem" }}
      >What I work with.</motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "580px", width: "100%" }}>
        {skills.map((s, i) => <SkillBar key={s.name} {...s} i={i} />)}
      </div>
    </div>
  );
};

export default Skills;
