import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp, Award, Folder, Mail, Phone, ExternalLink } from "lucide-react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Framer Motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current section
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-cream selection:bg-brand-blue selection:text-white overflow-hidden text-near-black">
      
      {/* Dynamic Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-brand-blue origin-[0%] z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Premium Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-cream/70 backdrop-blur-md border-b border-near-black/5 py-4 px-6 md:px-12 flex justify-between items-center z-40 select-none">
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer font-display font-black text-near-black hover:text-brand-blue transition-colors text-base"
        >
          <Folder className="w-5 h-5 text-brand-blue" />
          <span>GANI ABI SAPUTRA V.S.</span>
        </div>

        {/* Dynamic Nav Menu Anchors */}
        <nav className="hidden md:flex gap-1.5 font-mono text-xs font-bold uppercase tracking-wider">
          {[
            { id: "home", label: "Hero" },
            { id: "about", label: "Intro" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "certifications", label: "Certifications" },
            { id: "contact", label: "Contact" }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeSection === sec.id
                  ? "bg-brand-blue text-white shadow-xs"
                  : "text-near-black/50 hover:text-near-black hover:bg-near-black/5"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>

        {/* Mobile quick action indicator */}
        <div className="flex md:hidden items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-near-black/60">GANI_VS_2026</span>
        </div>
      </header>

      {/* Core Sections Stack */}
      <main className="pt-16">
        
        {/* Page 1 Hero */}
        <div id="home">
          <Hero type="main" />
        </div>

        {/* Page 2 Introduction */}
        <AboutMe />

        {/* Page 3 Tech Stack */}
        <TechStack />

        {/* Page 4 Projects Divider */}
        <div id="projects-divider">
          <Hero type="projects" />
        </div>

        {/* Pages 5-9 Featured Projects with simulators */}
        <Projects />

        {/* Page 10 Certifications */}
        <Certifications />

        {/* Page 11 Contact ("Work with Me!") */}
        <Contact />

      </main>

      {/* Premium Design Footer */}
      <footer className="bg-near-black text-white py-16 px-6 md:px-12 select-none border-t border-white/5 relative overflow-hidden">
        
        {/* Grid outline decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          
          <div className="space-y-2 text-left">
            <h3 className="font-display font-black text-2xl tracking-tight uppercase flex items-center gap-2">
              <span className="text-brand-blue">●</span> GANI ABI SAPUTRA V.S.
            </h3>
            <p className="text-xs font-mono text-white/50 uppercase tracking-widest max-w-sm">
              Computer Science Student & Full Stack Web/Mobile App Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono">
            <div className="text-left">
              <span className="text-white/40 block">LOCAL TIME (ID)</span>
              <span>WITA / WIB ZONE</span>
            </div>
            <div className="text-left">
              <span className="text-white/40 block">PORTFOLIO EDITION</span>
              <span>2026 // PREMIUM WEB</span>
            </div>
            <div className="text-left">
              <span className="text-white/40 block">CODING BASE</span>
              <span>REACT + TAILWIND v4</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto w-full border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 relative z-10">
          <div>
            © 2026 Gani Abi Saputra V.S. • All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a 
              href="mailto:gamely017@gmail.com" 
              className="hover:text-white hover:underline transition-all flex items-center gap-1 cursor-pointer"
            >
              Email <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://github.com/jettt017" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline transition-all flex items-center gap-1 cursor-pointer"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Animated Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-blue hover:bg-[#196ebf] text-white flex items-center justify-center shadow-2xl border border-white/10 cursor-pointer hover:rotate-12 transition-transform"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
