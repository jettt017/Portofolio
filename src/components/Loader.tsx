import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "INITIALIZING CORE SYSTEM...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "FETCHING PORTFOLIO DATA (src/data.ts)...",
    "LOADING INTERACTION MODELS (framer-motion)...",
    "RESOLVING TAILWIND DESIGN TOKENS...",
    "LOADING COMPONENT MODULES...",
    "COMPILING CERTIFICATIONS...",
    "PRE-RENDERING EXPERIENCE MODULES...",
    "BOOTING USER INTERFACE...",
    "SYSTEM SECURE. ENJOY THE EXPERIENCE."
  ];

  // Increment progress percentage
  useEffect(() => {
    const totalDuration = 1800; // 1.8 seconds
    const intervalTime = 30; // Milliseconds per update
    const totalSteps = totalDuration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Sync logs with progress percentages
  useEffect(() => {
    const progressSegment = 100 / logs.length;
    const expectedLogIndex = Math.min(
      Math.floor(progress / progressSegment),
      logs.length - 1
    );
    if (expectedLogIndex !== logIndex) {
      setLogIndex(expectedLogIndex);
    }
  }, [progress, logIndex, logs.length]);

  // Complete loading when progress hits 100
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500); // Small pause at 100% for readability
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Allow skipping via Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-cream text-near-black flex flex-col justify-between p-6 md:p-12 font-mono select-none"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-[10px] md:text-xs border-b border-near-black/10 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
          <span>GANI_ABI_SAPUTRA_OS [V.2026.07]</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-near-black/40">HOST: LOCALHOST</span>
          <span className="px-2 py-0.5 bg-brand-blue/10 text-brand-blue rounded-sm font-bold animate-pulse">
            STATUS: {progress < 100 ? "INITIALIZING" : "READY"}
          </span>
        </div>
      </div>

      {/* Main Terminal Center */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-xl mx-auto w-full my-8">
        
        {/* Giant Number Indicator */}
        <div className="relative font-display font-black text-8xl md:text-9xl tracking-tighter mb-4 text-near-black">
          {Math.floor(progress).toString().padStart(3, "0")}
          <span className="text-3xl md:text-4xl text-brand-blue absolute bottom-2 -right-6 md:-right-8">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full border-2 border-near-black dark:border-near-black/40 p-1 mb-8 bg-card-bg rounded-sm shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_rgba(246,243,232,0.15)]">
          <motion.div
            className="h-4 bg-brand-blue"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Console Log Feed */}
        <div className="w-full h-12 bg-near-black/5 dark:bg-near-black/10 p-3 rounded-md flex items-center justify-center border border-near-black/5 text-center relative overflow-hidden">
          {/* Subtle Scanlines effect */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:3px_3px]"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={logIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs md:text-sm font-bold text-near-black/75 tracking-tight"
            >
              {logs[logIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] md:text-xs pt-4 border-t border-near-black/10 gap-2">
        <div>
          <span>© 2026 GANI ABI SAPUTRA. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex items-center gap-4 text-near-black/50">
          <span>PRESS [ESC] TO SKIP INTRO</span>
        </div>
      </div>
    </motion.div>
  );
}
