import { motion } from "motion/react";
import { ChevronRight, Layers, Cpu, Wrench } from "lucide-react";
import { SKILLS_AND_TOOLS } from "../data";
import SplitText from "./SplitText";

// Maps each tech key → Simple Icons CDN slug + brand hex color
const TECH_ICON_MAP: Record<string, { slug: string; color: string; deviconUrl?: string }> = {
  // Frontend
  html:       { slug: "html5",            color: "#E34F26" },
  css:        { slug: "css3",             color: "#1572B6", deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  js:         { slug: "javascript",       color: "#F7DF1E" },
  ts:         { slug: "typescript",       color: "#3178C6" },
  react:      { slug: "react",            color: "#61DAFB" },
  vite:       { slug: "vite",             color: "#646CFF" },
  figma:      { slug: "figma",            color: "#F24E1E" },
  next:       { slug: "nextdotjs",        color: "#000000" },
  tailwind:   { slug: "tailwindcss",      color: "#06B6D4" },
  // Backend
  python:     { slug: "python",           color: "#3776AB" },
  cpp:        { slug: "cplusplus",        color: "#00599C" },
  fastapi:    { slug: "fastapi",          color: "#009688" },
  laravel:    { slug: "laravel",          color: "#FF2D20" },
  mysql:      { slug: "mysql",            color: "#4479A1" },
  nest:       { slug: "nestjs",           color: "#E0234E" },
  php:        { slug: "php",              color: "#777BB4" },
  rest:       { slug: "postman",          color: "#FF6C37" },
  // Tools
  vscode:     { slug: "visualstudiocode", color: "#007ACC", deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  android:    { slug: "androidstudio",    color: "#3DDC84" },
  git:        { slug: "git",              color: "#F05032" },
  photoshop:  { slug: "adobephotoshop",   color: "#31A8FF", deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  github:     { slug: "github",           color: "#181717" },
  vercel:     { slug: "vercel",           color: "#000000" },
  illustrator:{ slug: "adobeillustrator", color: "#FF9A00", deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
  npm:        { slug: "npm",              color: "#CB3837" },
};

function TechLogo({ icon }: { icon: string }) {
  const entry = TECH_ICON_MAP[icon];
  if (!entry) {
    return (
      <div className="w-8 h-8 rounded bg-near-black/10 text-near-black font-bold text-xs flex items-center justify-center">⚙️</div>
    );
  }

  const { slug, color, deviconUrl } = entry;
  // Use Devicon if available, otherwise fallback to Simple Icons CDN
  const src = deviconUrl || `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

  return (
    <img
      src={src}
      alt={icon}
      width={32}
      height={32}
      className="w-8 h-8 select-none pointer-events-none drop-shadow-sm object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="min-h-screen w-full bg-cream p-6 md:p-12 flex flex-col justify-between border-b border-near-black/10 select-none">
      
      {/* Running Page Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full mt-10 md:mt-16">
        
        {/* Double Folder Tabs Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 relative z-10 -mb-[2px] px-2"
        >
          
          {/* Inactive Introduction Tab */}
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-blue-inactive hover:bg-brand-blue text-white/90 hover:text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-pointer border-t border-x border-near-black/5 transition-colors"
          >
            INTRODUCTION
            <ChevronRight className="w-4 h-4 text-white/30" />
          </motion.button>

          {/* Active Skills & Tools Tab */}
          <div className="relative bg-brand-blue text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-default border-t border-x border-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            SKILLS & TOOLS
            <ChevronRight className="w-4 h-4 text-white/50" />
          </div>
        </motion.div>

        {/* Main Blue Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-blue rounded-r-3xl rounded-bl-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-10 justify-between relative overflow-hidden min-h-[600px]"
        >
          
          {/* Subtle grid accent background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Large Title Section */}
          <div className="text-center md:text-left z-10 space-y-2">
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white uppercase leading-none">
              <SplitText
                text="Tech Stack"
                delay={0.1}
                stagger={0.09}
                once={false}
                threshold={0.3}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/60 font-mono text-xs uppercase tracking-widest"
            >
              BUILDING MODERN AND SCALABLE DIGITAL SOLUTIONS
            </motion.p>
          </div>

          {/* Three Categorized Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
            
            {/* Frontend Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-card-bg/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Frontend
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.frontend.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -6 }}
              className="bg-card-bg/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Backend
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.backend.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -6 }}
              className="bg-card-bg/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Tools
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.tools.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 mt-10 border-t border-near-black/10 pt-4">
        <span>02 // SKILLS & TOOLS</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>BUILDING MODERN SOLUTIONS</span>
      </div>
    </section>
  );
}
