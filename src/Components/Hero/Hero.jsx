import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { RiReactjsLine, RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1.2, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } })
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 5vw 40px" }}>
      <div style={{ marginTop: "clamp(4rem, 12vh, 8rem)" }}>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            custom={0} variants={textVariants} initial="hidden" animate="visible"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3.5rem, 15vw, 12rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", color: "#f0ede6", textTransform: "uppercase" }}
          >
            ANZO
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden", marginLeft: "clamp(1.5rem, 6vw, 7rem)" }}>
          <motion.h1
            custom={1} variants={textVariants} initial="hidden" animate="visible"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3.5rem, 15vw, 12rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1px rgba(240,237,230,0.3)", textTransform: "uppercase" }}
          >
            DEVE
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden", marginLeft: "clamp(1.5rem, 6vw, 7rem)" }}>
          <motion.h1
            custom={2} variants={textVariants} initial="hidden" animate="visible"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3.5rem, 15vw, 12rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1px rgba(240,237,230,0.3)", textTransform: "uppercase" }}
          >
            LOPER
          </motion.h1>
        </div>

        <motion.div custom={3} variants={textVariants} initial="hidden" animate="visible"
          style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "clamp(1.5rem, 6vw, 7rem)", marginTop: "12px" }}
        >
          <span style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,230,0.5)" }}>Based in Karachi</span>
          <RiReactjsLine style={{ color: "#c8f04d" }} />
        </motion.div>

        <div ref={lineRef} style={{ height: "2px", background: "#c8f04d", marginTop: "24px", marginLeft: "clamp(1.5rem, 6vw, 7rem)", width: "clamp(50px, 8vw, 100px)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}
        style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "3rem" }}
      >
        {["Code & Theory", "Available for Full Time", "From Nov '25"].map((text, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,237,230,0.4)" }}>
            {text} {i < 2 && <RiArrowRightUpLine />}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
