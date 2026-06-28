import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      <nav 
      style={{ paddingLeft: "2vw", paddingRight: "2vw" }}
      className={`fixed top-0 left-0 right-0 z-100 h-16 flex items-center justify-between px-12 md:px-24 transition-all duration-400 ${scrolled ? "bg-black/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-2xl tracking-widest text-[#f0ede6] cursor-pointer select-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          ANZO
        </motion.span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => scrollTo(link)}
              className="bg-transparent border-none text-[#f0ede6]/60 text-xs font-medium tracking-[0.12em] uppercase cursor-pointer hover:text-[#c8f04d] hover:opacity-100 transition-all duration-200"
            >
              {link}
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href="mailto:hello@anzo.dev"
            className="px-4 py-1.5 border border-[#c8f04d] text-[#c8f04d] rounded-full text-xs font-semibold tracking-widest uppercase no-underline hover:bg-[#c8f04d] hover:text-black transition-all duration-200"
          >
            Hire me
          </motion.a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[200] relative"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.3 }} className="block w-6 h-0.5 bg-[#f0ede6] rounded-sm origin-center" />
          <motion.span animate={{ opacity: open ? 0 : 1, x: open ? 10 : 0 }} transition={{ duration: 0.2 }} className="block w-4 h-0.5 bg-[#f0ede6] rounded-sm" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.3 }} className="block w-6 h-0.5 bg-[#f0ede6] rounded-sm origin-center" />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                onClick={() => scrollTo(link)}
                className="bg-transparent border-none text-[#f0ede6] uppercase cursor-pointer hover:text-[#c8f04d] transition-colors duration-200 font-black leading-none"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 12vw, 5rem)" }}
              >
                {link}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="mailto:hello@anzo.dev"
              className="mt-4 px-7 py-2.5 border border-[#c8f04d] text-[#c8f04d] rounded-full text-sm font-semibold tracking-widest uppercase no-underline"
            >
              Hire me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
