import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ChevronRight, Monitor, Sparkles, Trophy } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function AboutMe() {
  // Fun interactive state for Gani's photo filter
  const [filterIndex, setFilterIndex] = useState(0);
  const filters = [
    { name: "Classic Color", class: "contrast-105 saturate-110" },
    { name: "Retro Windows 98", class: "sepia saturate-150 contrast-85 hue-rotate-15" },
    { name: "Blueprint Monochromatic", class: "brightness-95 contrast-125 saturate-0 invert-15 sepia hue-rotate-190" },
    { name: "Vibrant Cyan", class: "hue-rotate-180 contrast-110" }
  ];

  const handleCameraClick = () => {
    setFilterIndex((prev) => (prev + 1) % filters.length);
  };

  return (
    <section id="about" className="min-h-screen w-full bg-cream p-6 md:p-12 flex flex-col justify-between border-b border-near-black/10 select-none">
      
      {/* Running Page Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full mt-10 md:mt-16">
        
        {/* Double Tab Folders Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 relative z-10 -mb-[2px] px-2"
        >
          
          {/* Active Introduction Tab */}
          <div className="relative bg-brand-blue text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-default border-t border-x border-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            INTRODUCTION
            <ChevronRight className="w-4 h-4 text-white/50" />
          </div>

          {/* Inactive Skills & Tools Tab (Scrolls to Skills) */}
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            onClick={() => {
              const el = document.getElementById("skills");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-blue-inactive hover:bg-brand-blue text-white/90 hover:text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-pointer border-t border-x border-near-black/5 transition-colors"
          >
            SKILLS & TOOLS
            <ChevronRight className="w-4 h-4 text-white/30" />
          </motion.button>
        </motion.div>

        {/* Main Blue Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-blue rounded-r-3xl rounded-bl-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden min-h-[500px]"
        >
          
          {/* Subtle grid accent background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Left Column: Interactive Retro Browser Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[40%] flex justify-center z-10"
          >
            <motion.div 
              whileHover={{ y: -8, rotate: -1 }}
              className="w-full max-w-md bg-[#DFDBC5] border-4 border-white shadow-2xl rounded-t-2xl overflow-hidden flex flex-col"
            >
              {/* Browser Header Bar */}
              <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-4 py-1.5 flex justify-between items-center select-none text-white">
                <div className="flex items-center gap-2">
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono font-bold tracking-tight">GANI_AVATAR_EXPLORER.EXE</span>
                </div>
                {/* Windows Window Controls */}
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-[#DFDBC5] text-near-black text-[9px] font-bold flex items-center justify-center border-t border-l border-white border-b-2 border-r-2 border-near-black/50 active:border-1 shadow-xs cursor-pointer">_</div>
                  <div className="w-4 h-4 bg-[#DFDBC5] text-near-black text-[9px] font-bold flex items-center justify-center border-t border-l border-white border-b-2 border-r-2 border-near-black/50 active:border-1 shadow-xs cursor-pointer">❑</div>
                  <div className="w-4 h-4 bg-[#DFDBC5] text-near-black text-[9px] font-bold flex items-center justify-center border-t border-l border-white border-b-2 border-r-2 border-near-black/50 active:border-1 shadow-xs cursor-pointer">X</div>
                </div>
              </div>

              {/* Image viewport */}
              <div className="relative aspect-square overflow-hidden bg-[#2F8DEB]/20 m-3 border-2 border-near-black/40">
                
                {/* Interactive filter feedback */}
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={filterIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src="/assets/PhotoProfile.png" 
                      alt="Gani Portrait Mockup" 
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-all duration-300 ${filters[filterIndex].class}`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Cyber HUD elements to emulate retro-creative style */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-near-black/70 text-[9px] font-mono text-emerald-400 rounded-sm">
                  LIVE_FEED: ACTIVE
                </div>

                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-brand-blue text-[9px] font-mono text-white rounded-sm select-none">
                  Filter: {filters[filterIndex].name}
                </div>
              </div>

              {/* Action Footer Button (Camera trigger) */}
              <div className="bg-[#DFDBC5] border-t border-near-black/20 p-4 flex flex-col items-center gap-2">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCameraClick}
                  className="w-14 h-14 rounded-full bg-[#E65F2B] hover:bg-[#D54F1C] border-2 border-near-black flex items-center justify-center shadow-[4px_4px_0px_#1A1A1A] transition-colors cursor-pointer group"
                >
                  <Camera className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
                </motion.button>
                <span className="text-[10px] font-mono font-bold text-near-black/70 uppercase">
                  Click to Change Lens Filter
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[60%] flex flex-col justify-center text-white z-10 space-y-6"
          >
            
            {/* White Speech Bubble Badge */}
            <div className="self-start relative bg-card-bg text-near-black px-6 py-2.5 rounded-full font-display font-black text-lg shadow-lg">
              Hi! I’m Gani
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-t-[8px] border-t-card-bg border-r-[8px] border-r-transparent"></div>
            </div>

            {/* Massive Heading */}
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase leading-none">
                About Me
              </h2>
              <div className="h-1 w-16 bg-white/30 rounded"></div>
            </div>

            {/* Editorial Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-white/90 font-light max-w-2xl font-sans">
              {PERSONAL_INFO.aboutText}
            </p>

            {/* Highlights/Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">Core Focus</h4>
                  <p className="text-sm font-sans font-medium">Web Dev & UI/UX Design</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">Certified By</h4>
                  <p className="text-sm font-sans font-medium">Dicoding Academy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 mt-10 border-t border-near-black/10 pt-4">
        <span>01 // INTRODUCTION</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>UPN VETERAN JAWA TIMUR</span>
      </div>
    </section>
  );
}
