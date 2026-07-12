import { motion } from "motion/react";
import { AtSign, Image, Send, Folder } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import SplitText from "./SplitText";

interface HeroProps {
  type: "main" | "projects";
}

export default function Hero({ type }: HeroProps) {
  const isMain = type === "main";

  return (
    <section className="relative min-h-screen w-full bg-cream flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b border-near-black/10 select-none">
      {/* Top running header style (only on main hero as top aesthetic) */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-center items-center relative my-8 w-full max-w-7xl mx-auto">
        
        {/* Massive Condensed Heading */}
        <div className="absolute top-0 md:-top-10 left-1/2 -translate-x-1/2 w-full text-center z-0">
          <h1 className="text-[12vw] sm:text-[10vw] font-black font-display text-near-black/90 uppercase tracking-tighter leading-none select-none">
            <SplitText
              text={isMain ? "Portfolio" : "Featured Project"}
              delay={0.1}
              stagger={0.09}
              once={false}
              threshold={0.2}
            />
          </h1>
        </div>

        {/* Interactive File Folder Representation */}
        <div className="relative w-full max-w-2xl aspect-[1.5] mt-24 sm:mt-32 md:mt-40 flex items-center justify-center z-10 group cursor-pointer">
          
          {/* Back Paper (the cream sheet sticking out) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -30 }}
            className="absolute bottom-[40%] w-[85%] h-[55%] bg-card-bg rounded-t-lg shadow-sm border border-near-black/5 flex flex-col p-4 justify-between"
          >
            <div className="space-y-1.5">
              <div className="h-2 w-1/3 bg-brand-blue/20 rounded"></div>
              <div className="h-1.5 w-1/2 bg-near-black/10 rounded"></div>
              <div className="h-1.5 w-2/3 bg-near-black/5 rounded"></div>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-mono font-bold text-brand-blue">CONFIDENTIAL</span>
              <span className="text-[10px] font-mono text-near-black/40">GANI_VS_2026.pdf</span>
            </div>
          </motion.div>

          {/* Folder Body (Vibrant Blue #2F8DEB) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 w-full h-[75%] bg-brand-blue rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Folder Tab Section */}
            <div className="absolute top-0 left-0 w-[40%] h-8 bg-brand-blue -mt-7 rounded-t-xl clip-folder"></div>
            
            {/* Subtle overlay shine */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/5 via-white/5 to-transparent pointer-events-none"></div>

            {/* Content inside Folder front */}
            <div className="mt-auto p-6 md:p-8 flex justify-between items-end text-white relative z-10">
              <div className="space-y-1">
                <Folder className="w-8 h-8 opacity-90" />
                <h3 className="font-display font-black tracking-tight text-xl">
                  {isMain ? "CREATIVE_STORAGE_2026" : "PROJECTS_SUBDIR"}
                </h3>
              </div>
              <span className="text-xs font-mono bg-white/20 px-2 py-1 rounded-sm uppercase backdrop-blur-xs">
                {isMain ? "MAIN_DIR" : "ROOT_PROJ"}
              </span>
            </div>
          </motion.div>

          {/* Floating Dark Card (Left side of folder, tilted) */}
          <motion.div 
            initial={{ x: -100, rotate: -20, opacity: 0 }}
            whileInView={{ x: 0, rotate: -12, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ rotate: -5, scale: 1.05 }}
            className="absolute -left-4 sm:left-4 top-[35%] w-56 sm:w-64 bg-[#1A1A1A] text-white p-4 rounded-xl shadow-2xl flex flex-col justify-between h-24 border border-white/10"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-sans font-medium text-white/50">2026 Edition</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <div className="flex space-x-2.5 text-white/70">
                <AtSign className="w-4 h-4 hover:text-brand-blue transition-colors cursor-pointer" />
                <Image className="w-4 h-4 hover:text-brand-blue transition-colors cursor-pointer" />
              </div>
              <motion.div 
                data-magnetic
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center cursor-pointer transition-colors"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Texts (Faithful bottom alignment) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-8 pt-4 border-t border-near-black/10 text-near-black"
      >
        <div className="max-w-xs font-display font-black tracking-tight text-lg md:text-xl leading-snug">
          {isMain 
            ? "BUILDING IDEAS INTO REALITY." 
            : "A COLLECTION OF WEB, MOBILE, AND UI/UX PROJECTS."}
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <div className="font-display font-black tracking-tight text-base sm:text-lg">
            GANI ABI SAPUTRA V.S.
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-near-black/60">
            { PERSONAL_INFO.title }
          </div>
        </div>
      </motion.div>
    </section>
  );
}
