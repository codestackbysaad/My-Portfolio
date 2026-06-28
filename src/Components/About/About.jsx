import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 5vw" }}>
      <div style={{ maxWidth: "820px" }}>
        <motion.span
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8f04d", display: "block", marginBottom: "1.5rem" }}
        >About me</motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, color: "#f0ede6", marginBottom: "2rem" }}
        >
          Frontend developer who cares about the details.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.85, color: "rgba(240,237,230,0.5)", maxWidth: "660px" }}
        >
          I'm a passionate frontend developer who enjoys building clean, responsive,
          and user-friendly interfaces. I'm currently looking for an environment where
          I can grow my skills, learn from experienced developers, and contribute to
          meaningful projects. I believe in writing clean, maintainable code and paying
          attention to detail — always eager to collaborate and learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "2.5rem" }}
        >
          {["React", "JavaScript", "Tailwind CSS", "HTML/CSS"].map((tag) => (
            <span key={tag} style={{ padding: "6px 16px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", color: "rgba(240,237,230,0.5)" }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
