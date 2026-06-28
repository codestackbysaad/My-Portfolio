import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import MouseCursorFollower from "./Components/MouseCursorFollower";
import { useEffect } from "react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "#f0ede6", minHeight: "100vh" }}>
      <MouseCursorFollower />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
