import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px",
    padding: "14px 18px", color: "#f0ede6", fontSize: "0.9rem",
    fontFamily: "inherit", outline: "none", transition: "border-color 0.2s"
  };

  return (
    <div ref={ref} style={{ padding: "6rem 5vw 8rem" }}>
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8f04d", display: "block", marginBottom: "1.5rem" }}
      >Get in touch</motion.span>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 800, color: "#f0ede6", marginBottom: "1rem" }}
      >Let's work together.</motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
        style={{ fontSize: "0.95rem", color: "rgba(240,237,230,0.4)", marginBottom: "3rem", maxWidth: "460px", lineHeight: 1.75 }}
      >
        Feel free to reach out if you want to collaborate or just say hello. I'm always open to new opportunities.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "580px" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "#c8f04d"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "#c8f04d"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
          onFocus={e => e.target.style.borderColor = "#c8f04d"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
        />
        <button type="submit"
          style={{
            alignSelf: "flex-start", padding: "13px 32px",
            background: sent ? "rgba(200,240,77,0.1)" : "#c8f04d",
            color: sent ? "#c8f04d" : "#000",
            border: sent ? "1px solid rgba(200,240,77,0.3)" : "none",
            borderRadius: "10px", fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s"
          }}
          onMouseEnter={e => { if (!sent) e.currentTarget.style.background = "#d4f560"; }}
          onMouseLeave={e => { if (!sent) e.currentTarget.style.background = "#c8f04d"; }}
        >
          {sent ? "Sent ✓" : "Send message"}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
