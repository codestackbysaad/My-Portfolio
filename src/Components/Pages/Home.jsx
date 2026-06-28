import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <section id="hero"><Hero /></section>
      <hr className="border-none border-t border-white/5 m-0" style={{borderTopWidth:'1px', borderColor:'rgba(255,255,255,0.05)'}} />
      <section id="about"><About /></section>
      <hr className="border-none border-t border-white/5 m-0" style={{borderTopWidth:'1px', borderColor:'rgba(255,255,255,0.05)'}} />
      <section id="skills"><Skills /></section>
      <hr className="border-none border-t border-white/5 m-0" style={{borderTopWidth:'1px', borderColor:'rgba(255,255,255,0.05)'}} />
      <section id="projects"><Projects /></section>
      <hr className="border-none border-t border-white/5 m-0" style={{borderTopWidth:'1px', borderColor:'rgba(255,255,255,0.05)'}} />
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home;
