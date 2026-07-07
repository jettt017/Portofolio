import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Award, ShieldCheck, CheckCircle2, Bookmark, GraduationCap } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  const [dicodingSrc, setDicodingSrc] = useState("/assets/Certivicate-Dicoding.png");
  const [laravelSrc, setLaravelSrc] = useState("/assets/Certivicate-LaravelCourse.png");
  return (
    <section id="certifications" className="min-h-screen w-full bg-cream p-6 md:p-12 flex flex-col justify-between border-b border-near-black/10 select-none">
      
      {/* Running Page Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full mt-10 md:mt-16">
        
        {/* Folder tab */}
        <div className="flex relative z-10 -mb-[2px] px-2">
          <div className="relative bg-brand-blue text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-default border-t border-x border-brand-blue">
            <GraduationCap className="w-4 h-4 text-white" />
            COURSES & CERTIFICATIONS
            <ChevronRight className="w-4 h-4 text-white/50" />
          </div>
        </div>

        {/* Main Blue Banner Container */}
        <div className="bg-brand-blue rounded-r-3xl rounded-bl-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-10 relative overflow-hidden min-h-[500px]">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Heading */}
          <div className="text-center md:text-left z-10 space-y-1">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase leading-none">
              Certifications
            </h2>
            <p className="text-white/60 font-mono text-xs uppercase tracking-widest">
              EDUCATIONAL TRAINING AND PROFESSIONAL ACHIEVEMENTS
            </p>
          </div>

          {/* Dual Certification Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
            
            {/* Card 1: Dicoding Certificate */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-card-bg rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start border-b pb-3 border-near-black/5">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#CB3837] bg-[#CB3837]/10 px-2 py-0.5 rounded-full font-bold">
                      Dicoding Academy
                    </span>
                    <h3 className="font-display font-black text-xl text-near-black tracking-tight mt-1">
                      Web Developer Learning Path
                    </h3>
                  </div>
                  <Award className="w-8 h-8 text-[#CB3837] shrink-0" />
                </div>
                
                <p className="text-sm font-sans font-light text-near-black/70 leading-relaxed text-left">
                  Learning modern web development fundamentals including semantic HTML, styling systems (CSS), JavaScript programming, responsive web layouts, and deployment configurations.
                </p>
              </div>

              {/* Real Certificate Image with robust fallback */}
              <div className="mt-6 border border-near-black/10 rounded-xl overflow-hidden bg-card-bg-light shadow-sm flex items-center justify-center aspect-[1.6] w-full relative">
                <img 
                  src={dicodingSrc} 
                  alt="Dicoding Certificate of Competence" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain select-none pointer-events-none"
                  onError={() => {
                    if (dicodingSrc === "/assets/Certivicate-Dicoding.png") {
                      setDicodingSrc("/assets/Certivicate-Dicoding.jpg");
                    } else if (dicodingSrc === "/assets/Certivicate-Dicoding.jpg") {
                      setDicodingSrc("/assets/Certivicate-Dicoding.jpeg");
                    } else if (dicodingSrc === "/assets/Certivicate-Dicoding.jpeg") {
                      setDicodingSrc("/assets/Certivicate-Dicoding.webp");
                    } else if (dicodingSrc === "/assets/Certivicate-Dicoding.webp") {
                      setDicodingSrc("/assets/Certivicate-Dicoding");
                    } else if (dicodingSrc === "/assets/Certivicate-Dicoding") {
                      setDicodingSrc("/Certivicate-Dicoding.png");
                    } else if (dicodingSrc === "/Certivicate-Dicoding.png") {
                      setDicodingSrc("/Certivicate-Dicoding.jpg");
                    } else if (dicodingSrc === "/Certivicate-Dicoding.jpg") {
                      setDicodingSrc("/Certivicate-Dicoding.jpeg");
                    } else if (dicodingSrc === "/Certivicate-Dicoding.jpeg") {
                      setDicodingSrc("/Certivicate-Dicoding");
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Card 2: Laravel Course */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-card-bg rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start border-b pb-3 border-near-black/5">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full font-bold">
                      Laravel Course
                    </span>
                    <h3 className="font-display font-black text-xl text-near-black tracking-tight mt-1">
                      Fullstack Web Development with Laravel
                    </h3>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-brand-blue shrink-0" />
                </div>
                
                <p className="text-sm font-sans font-light text-near-black/70 leading-relaxed text-left">
                  Learning modern web application development using Laravel, including MVC architecture, database migrations, eloquent ORM, server authentication, and Blade dynamic templating engines.
                </p>
              </div>

              {/* Real Certificate Image with robust fallback */}
              <div className="mt-6 border border-near-black/10 rounded-xl overflow-hidden bg-card-bg-light shadow-sm flex items-center justify-center aspect-[1.6] w-full relative">
                <img 
                  src={laravelSrc} 
                  alt="Laravel Course Completion Certificate" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain select-none pointer-events-none"
                  onError={() => {
                    if (laravelSrc === "/assets/Certivicate-LaravelCourse.png") {
                      setLaravelSrc("/assets/Certivicate-LaravelCourse.jpg");
                    } else if (laravelSrc === "/assets/Certivicate-LaravelCourse.jpg") {
                      setLaravelSrc("/assets/Certivicate-LaravelCourse.jpeg");
                    } else if (laravelSrc === "/assets/Certivicate-LaravelCourse.jpeg") {
                      setLaravelSrc("/assets/Certivicate-LaravelCourse.webp");
                    } else if (laravelSrc === "/assets/Certivicate-LaravelCourse.webp") {
                      setLaravelSrc("/assets/Certivicate-LaravelCourse");
                    } else if (laravelSrc === "/assets/Certivicate-LaravelCourse") {
                      setLaravelSrc("/Certivicate-LaravelCourse.png");
                    } else if (laravelSrc === "/Certivicate-LaravelCourse.png") {
                      setLaravelSrc("/Certivicate-LaravelCourse.jpg");
                    } else if (laravelSrc === "/Certivicate-LaravelCourse.jpg") {
                      setLaravelSrc("/Certivicate-LaravelCourse.jpeg");
                    } else if (laravelSrc === "/Certivicate-LaravelCourse.jpeg") {
                      setLaravelSrc("/Certivicate-LaravelCourse");
                    }
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 mt-10 border-t border-near-black/10 pt-4">
        <span>04 // COURSES & CERTIFICATIONS</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>VERIFIED ACADEMIC CREDENTIALS</span>
      </div>
    </section>
  );
}
