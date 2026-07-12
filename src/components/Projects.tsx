import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink, Search, Star, MapPin, Check, Plus, ShoppingBag,
  Trash, Calculator, Leaf, Smartphone, Sparkles, Award, User,
  ChevronRight, ArrowRight, ShieldCheck, Database, Server, Cpu,
  Globe, Github, BookOpen, Loader2, AlertTriangle, RefreshCw, Figma
} from "lucide-react";
import { PROJECTS } from "../data";
import SplitText from "./SplitText";
import Magnetic from "./Magnetic";

// ─────────────────────────────────────────────────────────────────
// BrowserEmbed Component
// Renders a realistic browser-chrome iframe viewport.
// Falls back to `fallbackContent` if the iframe cannot be embedded.
// ─────────────────────────────────────────────────────────────────
interface BrowserEmbedProps {
  url: string;                       // deployed URL (without protocol prefix)
  projectId: string;
  githubUrl: string;
  fallbackContent: React.ReactNode;  // existing simulator used as fallback
}

function BrowserEmbed({ url, projectId, githubUrl, fallbackContent }: BrowserEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset state when project tab changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [projectId]);

  const fullUrl = `https://${url}`;

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  // Attempt reload
  const handleReload = () => {
    setLoaded(false);
    setError(false);
    if (iframeRef.current) {
      iframeRef.current.src = fullUrl;
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">

      {/* ── Browser Chrome ── */}
      <div className="w-full bg-card-bg border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col text-near-black"
           style={{ minHeight: "420px" }}>

        {/* Title bar */}
        <div className="bg-card-bg-light px-4 py-2.5 flex items-center gap-3 border-b border-near-black/10 shrink-0">
          {/* Traffic lights */}
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-default" />
            <div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors cursor-default" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-default" />
          </div>

          {/* Address bar */}
          <div className="flex-1 bg-card-bg-light rounded-md border border-near-black/10 px-3 py-1 flex items-center gap-2 min-w-0">
            <div className="w-3 h-3 shrink-0 text-emerald-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-near-black/70 truncate">{url}</span>
          </div>

          {/* Reload */}
          <button
            onClick={handleReload}
            title="Reload"
            className="shrink-0 text-near-black/40 hover:text-near-black/70 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Viewport */}
        <div className="flex-1 relative" style={{ height: "420px" }}>

          {/* Loading state */}
          {!loaded && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F7F4] gap-3 z-10">
              <Loader2 className="w-7 h-7 text-brand-blue animate-spin" />
              <p className="text-xs font-mono text-near-black/50 uppercase tracking-widest">Loading live demo…</p>
              <p className="text-[10px] text-near-black/30 font-mono">{url}</p>
            </div>
          )}

          {/* Error / blocked fallback */}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F7F4] gap-4 z-10 p-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
                <p className="text-xs font-bold text-near-black">Embedding blocked by site policy</p>
                <p className="text-[10px] text-near-black/50 font-mono max-w-xs">
                  This site uses X-Frame-Options or CSP that prevents inline embedding.
                  Use the button below to open it directly.
                </p>
              </div>

              {/* Fallback simulator */}
              <div className="w-full overflow-auto" style={{ maxHeight: "220px" }}>
                {fallbackContent}
              </div>

              <a
                href={fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white text-xs font-mono font-bold px-5 py-2.5 rounded-lg hover:bg-brand-blue-hover transition-colors shadow-md cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                Launch Live Demo
              </a>
            </div>
          )}

          {/* The actual iframe */}
          <iframe
            ref={iframeRef}
            src={fullUrl}
            title={`Live demo — ${url}`}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ height: "420px" }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            allow="fullscreen"
          />
        </div>
      </div>

      {/* ── Action Bar ── */}
      <div className="flex flex-wrap gap-2">
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-blue text-white text-[11px] font-mono font-bold px-4 py-2.5 rounded-lg hover:bg-brand-blue-hover transition-all shadow-sm cursor-pointer group"
        >
          <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
          Launch Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-[11px] font-mono font-bold px-4 py-2.5 rounded-lg hover:bg-[#1A1A1A]/80 transition-all shadow-sm cursor-pointer group"
        >
          <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          View GitHub Repository
        </a>
        <button
          onClick={() => {
            const leftPanel = document.querySelector(`[data-project-detail]`);
            leftPanel?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 bg-card-bg border border-near-black/15 text-near-black text-[11px] font-mono font-bold px-4 py-2.5 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm cursor-pointer group"
        >
          <BookOpen className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          View Case Study
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Portalia Action Bar (no deployed URL — UI/UX design project)
// ─────────────────────────────────────────────────────────────────
function PortaliaActionBar() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <a
        href="https://www.figma.com/proto/3VMKudtT9yFD84kgmcbeeS/Portalia---Aplikasi-Jual-Beli-di-sekitar-UPNVJT?node-id=148-855&p=f&viewport=318%2C226%2C0.07&t=hPFluuiSweGAQcGz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=148%3A855&show-proto-sidebar=1&page-id=147%3A855"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#F24E1E] text-white text-[11px] font-mono font-bold px-4 py-2.5 rounded-lg hover:bg-[#d64115] transition-all shadow-sm cursor-pointer group"
      >
        <Figma className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        View Figma Prototype
      </a>
      <button
        onClick={() => {
          const leftPanel = document.querySelector(`[data-project-detail]`);
          leftPanel?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex items-center gap-2 bg-card-bg border border-near-black/15 text-near-black text-[11px] font-mono font-bold px-4 py-2.5 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm cursor-pointer group"
      >
        <BookOpen className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        View Case Study
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main Projects Component
// ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("jitygeld");

  // ── 1. MIA State ──
  const [selectedMiaCategory, setSelectedMiaCategory] = useState<string>("All");
  const [miaReviewName, setMiaReviewName] = useState<string>("");
  const [miaReviewRating, setMiaReviewRating] = useState<number>(5);
  const [miaReviewText, setMiaReviewText] = useState<string>("");
  const [miaReviews, setMiaReviews] = useState<Array<{name: string, rating: number, text: string}>>([
    { name: "Ariana", rating: 5, text: "Sangat membantu menemukan UMKM lokal di sekitar!" }
  ]);
  const [miaFormSubmitted, setMiaFormSubmitted] = useState(false);

  const miaProducts = [
    { name: "Omah Feby (Ayam Kremes)", category: "Foods", distance: "1.2 km", desc: "Ayam kremes gurih renyah legendaris sejak 2000.", rating: 4.8 },
    { name: "Kopi Kenangan Ibu", category: "Drinks", distance: "0.8 km", desc: "Kopi susu gula aren premium rasa hangat rumah.", rating: 4.9 },
    { name: "Geprek John Mantap", category: "Foods", distance: "1.5 km", desc: "Ayam geprek pedas berlevel dengan keju leleh.", rating: 4.7 },
    { name: "Tukang Cukur Andre", category: "Fashion", distance: "2.1 km", desc: "Potong rambut pria modern & rapi gaya trendi.", rating: 4.6 }
  ];

  const handleAddMiaReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!miaReviewName || !miaReviewText) return;
    setMiaReviews([{ name: miaReviewName, rating: miaReviewRating, text: miaReviewText }, ...miaReviews]);
    setMiaReviewName("");
    setMiaReviewText("");
    setMiaFormSubmitted(true);
    setTimeout(() => setMiaFormSubmitted(false), 3000);
  };

  // ── 2. E-Cycle State ──
  const [ecycleWeight, setEcycleWeight] = useState<number>(1);
  const [ecycleDevice, setEcycleDevice] = useState<string>("smartphone");
  const [ecycleEstimatedVal, setEcycleEstimatedVal] = useState<number>(12450);
  const [ecyclePoints, setEcyclePoints] = useState<number>(180);
  const [ecycleHistory, setEcycleHistory] = useState<Array<{device: string, weight: number, carbon: number}>>([]);

  const handleEcycleCalculate = () => {
    let multiplier = 12000;
    let pointsMult = 150;
    if (ecycleDevice === "laptop") { multiplier = 45000; pointsMult = 500; }
    if (ecycleDevice === "battery") { multiplier = 5000; pointsMult = 50; }
    if (ecycleDevice === "tablet") { multiplier = 25000; pointsMult = 300; }
    const value = ecycleWeight * multiplier;
    const pts = Math.round(ecycleWeight * pointsMult);
    setEcycleEstimatedVal(value);
    setEcyclePoints(pts);
    setEcycleHistory([{ device: ecycleDevice, weight: ecycleWeight, carbon: Math.round(ecycleWeight * 2.4) }, ...ecycleHistory]);
  };

  // ── 3. GrinBuds State ──
  const [grinbudsScore, setGrinbudsScore] = useState<number>(0);
  const [grinbudsSelectedOption, setGrinbudsSelectedOption] = useState<string | null>(null);
  const [grinbudsFeedback, setGrinbudsFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [grinbudsView, setGrinbudsView] = useState<"game" | "parent">("game");

  const grinbudsAnswer = "q";
  const grinbudsOptions = ["d", "q", "p", "b"];

  const handleGrinbudsSelect = (opt: string) => {
    setGrinbudsSelectedOption(opt);
    if (opt === grinbudsAnswer) {
      setGrinbudsFeedback("correct");
      setGrinbudsScore(grinbudsScore + 10);
    } else {
      setGrinbudsFeedback("incorrect");
    }
  };

  const handleGrinbudsReset = () => {
    setGrinbudsSelectedOption(null);
    setGrinbudsFeedback(null);
  };

  // ── 4. Portalia State ──
  // Portalia is a UI/UX design project, showcasing an official banner.

  // ── 5. NusaTales State ──
  const [nusatalesStoryIndex, setNusatalesStoryIndex] = useState(0);
  const [nusatalesArchNode, setNusatalesArchNode] = useState<string>("laravel");

  const stories = [
    { title: "Roro Jonggrang", intro: "Temukan rahasia di balik terciptanya seribu candi dalam 1 malam melalui kisah cinta dan janji yang terlanggar...", excerpt: "Maka berdirilah Candi Prambanan yang megah sebagai saksi keajaiban..." },
    { title: "Sangkuriang", intro: "Kisah terbentuknya Tangkuban Perahu dari amarah seorang putra dan keteguhan hati seorang ibu...", excerpt: "Dengan sekali tendangan, perahu raksasa itu terbalik menjadi gunung..." }
  ];

  // ─────────────────────────────────────────────────────────────────
  // Fallback Simulator content per project
  // (used when iframe embedding is blocked)
  // ─────────────────────────────────────────────────────────────────

  const MiaFallback = (
    <div className="w-full bg-card-bg border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col text-near-black" style={{ maxHeight: "220px" }}>
      <div className="bg-near-black/5 px-4 py-2 flex items-center justify-between border-b border-near-black/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="bg-card-bg-light px-4 py-0.5 rounded-md border text-[10px] font-mono text-near-black/60 w-1/2 text-center truncate">
          mia-topaz-theta.vercel.app
        </div>
        <div className="w-6" />
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs">
        <div className="flex gap-1.5 border-b pb-2 select-none">
          {["All", "Foods", "Drinks", "Fashion"].map((cat) => (
            <button key={cat} onClick={() => setSelectedMiaCategory(cat)}
              className={`px-2.5 py-0.5 rounded-full text-[10px] transition-colors cursor-pointer ${selectedMiaCategory === cat ? "bg-brand-blue text-white font-bold" : "bg-near-black/5 text-near-black/70 hover:bg-near-black/10"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {miaProducts.filter(p => selectedMiaCategory === "All" || p.category === selectedMiaCategory).map((p) => (
            <div key={p.name} className="border rounded-xl p-2 bg-cream/10 flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[8px] uppercase font-mono text-brand-blue bg-brand-blue/10 px-1 rounded">{p.category}</span>
                  <div className="flex items-center gap-0.5 text-amber-500 font-bold text-[9px]">
                    <Star className="w-2.5 h-2.5 fill-amber-500" />{p.rating}
                  </div>
                </div>
                <h5 className="font-bold text-near-black text-[10px] truncate">{p.name}</h5>
              </div>
              <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t text-[9px] text-near-black/50">
                <span className="flex items-center gap-0.5 font-mono"><MapPin className="w-2 h-2" /> {p.distance}</span>
                <button className="text-brand-blue font-bold cursor-pointer">Visit →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EcycleFallback = (
    <div className="w-full bg-card-bg border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col text-near-black" style={{ maxHeight: "220px" }}>
      <div className="bg-emerald-800 text-white px-4 py-2 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <Leaf className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-display font-black text-xs tracking-tight">E-CYCLE PLATFORM</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono text-emerald-300">
          EcoScore: +{ecyclePoints} Pts
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
        <div className="border border-emerald-200/50 bg-emerald-500/5 p-3 rounded-xl space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Calculator className="w-3.5 h-3.5" />
            <span>E-Waste Carbon Calculator</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select value={ecycleDevice} onChange={(e) => setEcycleDevice(e.target.value)}
              className="w-full bg-card-bg border border-emerald-300 rounded p-1 text-[10px] focus:outline-emerald-600">
              <option value="smartphone">📱 Smartphone</option>
              <option value="laptop">💻 Laptop</option>
              <option value="tablet">平板 Tablet</option>
              <option value="battery">🔋 Battery</option>
            </select>
            <input type="number" min="1" value={ecycleWeight}
              onChange={(e) => setEcycleWeight(Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-full bg-card-bg border border-emerald-300 rounded p-1 text-[10px] focus:outline-emerald-600 font-mono" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-emerald-700 font-mono">Rp {ecycleEstimatedVal.toLocaleString()}</span>
            <button onClick={handleEcycleCalculate}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-lg cursor-pointer transition-colors">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const GrinbudsFallback = (
    <div className="w-full flex justify-center" style={{ maxHeight: "220px", overflow: "hidden" }}>
      <div className="w-[220px] bg-[#1A1A1A] rounded-[32px] p-2.5 border-4 border-[#1A1A1A]/80 shadow-2xl relative flex flex-col overflow-hidden" style={{ height: "210px" }}>
        <div className="flex-1 bg-sky-50 rounded-[24px] overflow-hidden flex flex-col relative z-10 text-near-black select-none">
          <div className="bg-sky-400 text-white p-2 flex justify-between items-center text-xs shadow-xs">
            <span className="font-black tracking-tight font-display text-xs">GrinBuds</span>
            <div className="flex items-center gap-1 bg-white/25 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold">⭐ {grinbudsScore}</div>
          </div>
          <div className="flex-1 p-3 flex flex-col justify-center text-center gap-2">
            <span className="text-[9px] font-semibold text-near-black/70">Huruf apakah ini?</span>
            <div className="w-10 h-10 bg-card-bg border-2 border-sky-300 rounded-xl flex items-center justify-center text-2xl font-extrabold text-sky-500 mx-auto shadow-sm">q</div>
            <div className="grid grid-cols-2 gap-1.5 max-w-[130px] mx-auto">
              {grinbudsOptions.map((opt) => (
                <button key={opt} disabled={grinbudsFeedback !== null} onClick={() => handleGrinbudsSelect(opt)}
                  className={`w-10 h-10 rounded-xl font-black text-lg border-2 flex items-center justify-center transition-all cursor-pointer mx-auto ${
                    grinbudsSelectedOption === opt
                      ? opt === grinbudsAnswer ? "bg-emerald-400 border-emerald-600 text-white" : "bg-rose-400 border-rose-600 text-white"
                      : "bg-card-bg border-sky-200 text-near-black"
                  }`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NusatalesFallback = (
    <div className="w-full bg-card-bg border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col text-near-black" style={{ maxHeight: "220px" }}>
      <div className="bg-[#9333EA] text-white px-4 py-2 flex items-center justify-between border-b">
        <span className="font-display font-black text-xs tracking-tight">NUSATALES PORTAL</span>
        <div className="bg-white/10 px-3 py-0.5 rounded text-[9px] font-mono">nusatales.isslab.web.id</div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs">
        <div className="bg-purple-950 text-white rounded-xl p-3 text-center shadow-sm border border-purple-900 select-none">
          <span className="text-[8px] font-mono text-purple-300 uppercase tracking-widest font-bold">Kisah Budaya Nusantara</span>
          <h4 className="text-sm font-black font-display tracking-tight text-yellow-300 mt-1">{stories[nusatalesStoryIndex].title}</h4>
          <p className="text-[9px] text-white/90 leading-relaxed italic mt-1">"{stories[nusatalesStoryIndex].intro}"</p>
        </div>
        <div className="flex gap-2 text-[9px] font-mono">
          <button onClick={() => setNusatalesStoryIndex(0)}
            className={`px-2 py-1 rounded border cursor-pointer ${nusatalesStoryIndex === 0 ? "bg-purple-600 text-white border-purple-700" : "bg-purple-50 hover:bg-purple-100"}`}>
            Roro Jonggrang
          </button>
          <button onClick={() => setNusatalesStoryIndex(1)}
            className={`px-2 py-1 rounded border cursor-pointer ${nusatalesStoryIndex === 1 ? "bg-purple-600 text-white border-purple-700" : "bg-purple-50 hover:bg-purple-100"}`}>
            Sangkuriang
          </button>
        </div>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────
  // JityGeld Fallback
  // ─────────────────────────────────────────────────────────────────
  const JityGeldFallback = (
    <div className="w-full flex justify-center" style={{ maxHeight: "220px", overflow: "hidden" }}>
      <img 
        src="/assets/Project-JityGeld.png" 
        alt="JityGeld Preview Fallback" 
        className="w-full h-full object-contain rounded-lg border border-near-black/10 max-h-[140px]"
      />
    </div>
  );

  // ─────────────────────────────────────────────────────────────────
  // Portalia static simulator (no deployed URL — UI/UX design)
  // ─────────────────────────────────────────────────────────────────
  const PortaliaSimulator = (
    <motion.div
      key="sim-portalia"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full flex flex-col gap-3"
    >
      <div className="w-full flex-1 bg-card-bg-light border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-center items-center text-near-black relative group" style={{ minHeight: "420px" }}>
        <img 
          src="/assets/Project-Portalia.png" 
          alt="Portalia Official Showcase" 
          className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <PortaliaActionBar />
    </motion.div>
  );

  // ─────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────
  return (
    <section id="projects" className="min-h-screen w-full bg-cream py-12 px-6 md:px-12 flex flex-col justify-between border-b border-near-black/10">

      {/* ── Tab Select Header ── */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-near-black/10 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-near-black uppercase tracking-tight leading-none">
              <SplitText
                text="Featured Projects"
                delay={0.1}
                stagger={0.07}
                once={false}
                threshold={0.3}
              />
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-near-black/50 mt-1">
              Select a folder below to explore live demos
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {PROJECTS.map((proj) => (
              <Magnetic key={proj.id}>
                <motion.button
                  data-magnetic
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  onClick={() => setActiveTab(proj.id)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-t-lg border-t border-x transition-colors cursor-pointer ${
                    activeTab === proj.id
                      ? "bg-brand-blue text-white border-brand-blue font-bold shadow-md"
                      : "bg-near-black/5 text-near-black/70 hover:bg-brand-blue/10 hover:text-brand-blue hover:border-brand-blue/20 border-transparent"
                  }`}
                >
                  📁 {proj.title}
                </motion.button>
              </Magnetic>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Main 12-col Grid ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-6"
      >

        {/* Left: Editorial description */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-1" data-project-detail>
          <AnimatePresence mode="wait">
            {PROJECTS.map((proj) => {
              if (proj.id !== activeTab) return null;
              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">{proj.subtitle}</span>
                    <h3 className="text-4xl md:text-5xl font-black font-display text-brand-blue uppercase tracking-tighter leading-none">
                      {proj.title}
                    </h3>
                    <div className="h-0.5 bg-brand-blue/30 w-24" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-near-black text-white text-xs font-mono rounded-md uppercase tracking-wider">
                    <User className="w-3.5 h-3.5 text-brand-blue" />
                    Role: {proj.role}
                  </div>

                  <p className="text-sm text-near-black/80 leading-relaxed font-sans font-light">
                    {proj.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-near-black/50 font-bold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 bg-near-black/5 text-near-black/80 font-mono text-[11px] rounded-md border border-near-black/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-near-black/50 font-bold">Core Contributions</h4>
                    <ul className="space-y-2.5">
                      {proj.contributions.map((con, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-near-black/90 leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {proj.link && (
                    <div className="pt-4">
                      <a
                        href={`https://${proj.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5 hover:text-brand-blue-hover hover:border-brand-blue-hover transition-all cursor-pointer group"
                      >
                        {proj.link}
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: Live demo viewport */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <AnimatePresence mode="wait">

            {/* JityGeld — live iframe */}
            {activeTab === "jitygeld" && (
              <motion.div
                key="embed-jitygeld"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserEmbed
                  url="jity-geld.vercel.app"
                  projectId="jitygeld"
                  githubUrl="https://github.com/jettt017/jityGeld"
                  fallbackContent={JityGeldFallback}
                />
              </motion.div>
            )}

            {/* MIA — live iframe */}
            {activeTab === "mia" && (
              <motion.div
                key="embed-mia"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserEmbed
                  url="mia-topaz-theta.vercel.app"
                  projectId="mia"
                  githubUrl="https://github.com/rafienajwan/mia"
                  fallbackContent={MiaFallback}
                />
              </motion.div>
            )}

            {/* E-Cycle — live iframe */}
            {activeTab === "e-cycle" && (
              <motion.div
                key="embed-ecycle"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserEmbed
                  url="e-cycleplatform.vercel.app"
                  projectId="e-cycle"
                  githubUrl="https://github.com/jettt017/e-cycle-platform"
                  fallbackContent={EcycleFallback}
                />
              </motion.div>
            )}

            {/* GrinBuds — live iframe */}
            {activeTab === "grinbuds" && (
              <motion.div
                key="embed-grinbuds"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserEmbed
                  url="grinbuds2.vercel.app"
                  projectId="grinbuds"
                  githubUrl="https://github.com/KurioSannn/GRINBUDSV2"
                  fallbackContent={GrinbudsFallback}
                />
              </motion.div>
            )}

            {/* Portalia — static simulator (no deployed URL) */}
            {activeTab === "portalia" && PortaliaSimulator}

            {/* NusaTales — live iframe */}
            {activeTab === "nusatales" && (
              <motion.div
                key="embed-nusatales"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserEmbed
                  url="nusatales.isslab.web.id"
                  projectId="nusatales"
                  githubUrl="https://github.com/viviovilala/nusatales"
                  fallbackContent={NusatalesFallback}
                />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Decorative Slide Indicator ── */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 border-t border-near-black/10 pt-4">
        <span>03 // FEATURED PROJECTS ({PROJECTS.length} TOTAL)</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4" />
        <span>CLICK TABS TO EXPLORE LIVE DEMOS</span>
      </div>
    </section>
  );
}
