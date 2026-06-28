import { useEffect, useRef } from "react";

const MouseCursorFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c8f04d] z-[9999] pointer-events-none" style={{ willChange: "transform" }} />
      <div ref={ringRef} className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#c8f04d]/40 z-[9998] pointer-events-none" style={{ willChange: "transform" }} />
    </>
  );
};

export default MouseCursorFollower;
