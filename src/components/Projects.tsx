import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, Search, Star, MapPin, Check, Plus, ShoppingBag, 
  Trash, Calculator, Leaf, Smartphone, Sparkles, Award, User, 
  ChevronRight, ArrowRight, ShieldCheck, Database, Server, Cpu
} from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  // Global projects state
  const [activeTab, setActiveTab] = useState<string>("mia");

  // ----------------------------------------------------
  // Interactive Simulators States
  // ----------------------------------------------------

  // 1. MIA Marketplace State
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

  // 2. E-Cycle Platform State
  const [ecycleWeight, setEcycleWeight] = useState<number>(1);
  const [ecycleDevice, setEcycleDevice] = useState<string>("smartphone");
  const [ecycleEstimatedVal, setEcycleEstimatedVal] = useState<number>(12450);
  const [ecyclePoints, setEcyclePoints] = useState<number>(180);
  const [ecycleHistory, setEcycleHistory] = useState<Array<{device: string, weight: number, carbon: number}>>([]);
  const [ecycleLocation, setEcycleLocation] = useState<string>("Jakarta");

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

    // Add to simulated history
    setEcycleHistory([{ device: ecycleDevice, weight: ecycleWeight, carbon: Math.round(ecycleWeight * 2.4) }, ...ecycleHistory]);
  };

  // 3. GrinBuds State
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

  // 4. Portalia State
  const [portaliaProducts, setPortaliaProducts] = useState<Array<{id: number, name: string, price: number, cat: string, seller: string}>>([
    { id: 1, name: "Mechanical Keyboard RGB", price: 250000, cat: "Electronics", seller: "Wibulu" },
    { id: 2, name: "Buku Alpro Semester 2", price: 45000, cat: "Books", seller: "Jett" },
    { id: 3, name: "Ayam Geprek Jos", price: 15000, cat: "Foods", seller: "Nikki Store" }
  ]);
  const [portaliaNewName, setPortaliaNewName] = useState<string>("");
  const [portaliaNewPrice, setPortaliaNewPrice] = useState<string>("");
  const [portaliaNewCat, setPortaliaNewCat] = useState<string>("Electronics");
  const [portaliaFormOpen, setPortaliaFormOpen] = useState(false);

  const handleAddPortaliaProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portaliaNewName || !portaliaNewPrice) return;
    const item = {
      id: Date.now(),
      name: portaliaNewName,
      price: parseInt(portaliaNewPrice) || 10000,
      cat: portaliaNewCat,
      seller: "Saya (Gani)"
    };
    setPortaliaProducts([item, ...portaliaProducts]);
    setPortaliaNewName("");
    setPortaliaNewPrice("");
    setPortaliaFormOpen(false);
  };

  // 5. NusaTales Story State
  const [nusatalesStoryIndex, setNusatalesStoryIndex] = useState(0);
  const [nusatalesArchNode, setNusatalesArchNode] = useState<string>("laravel");

  const stories = [
    { title: "Roro Jonggrang", intro: "Temukan rahasia di balik terciptanya seribu candi dalam 1 malam melalui kisah cinta dan janji yang terlanggar...", excerpt: "Maka berdirilah Candi Prambanan yang megah sebagai saksi keajaiban..." },
    { title: "Sangkuriang", intro: "Kisah terbentuknya Tangkuban Perahu dari amarah seorang putra dan keteguhan hati seorang ibu...", excerpt: "Dengan sekali tendangan, perahu raksasa itu terbalik menjadi gunung..." }
  ];

  return (
    <section id="projects" className="min-h-screen w-full bg-cream py-12 px-6 md:px-12 flex flex-col justify-between border-b border-near-black/10">
      
      {/* Tab Select Header */}
      <div className="max-w-7xl mx-auto w-full mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-near-black/10 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-near-black uppercase tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-near-black/50 mt-1">
              Select a folder below to explore live interactive simulators
            </p>
          </div>
          
          {/* Custom Folder Tab select bar */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(proj.id);
                  // Play a sound representation or small triggers
                }}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-t-lg border-t border-x transition-all cursor-pointer ${
                  activeTab === proj.id 
                    ? "bg-brand-blue text-white border-brand-blue font-bold shadow-md"
                    : "bg-near-black/5 text-near-black/70 hover:bg-near-black/10 border-transparent"
                }`}
              >
                📁 {proj.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch my-6">
        
        {/* Left Side: Detailed Description (Editorial Layout) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-1">
          {PROJECTS.map((proj) => {
            if (proj.id !== activeTab) return null;
            return (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Visual Title */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                    {proj.subtitle}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black font-display text-brand-blue uppercase tracking-tighter leading-none">
                    {proj.title}
                  </h3>
                  <div className="h-0.5 bg-brand-blue/30 w-24"></div>
                </div>

                {/* Role Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-near-black text-white text-xs font-mono rounded-md uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-brand-blue" />
                  Role: {proj.role}
                </div>

                {/* Narrative */}
                <p className="text-sm text-near-black/80 leading-relaxed font-sans font-light">
                  {proj.description}
                </p>

                {/* Tech Stack Horizontal Pills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-near-black/50 font-bold">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 bg-near-black/5 text-near-black/80 font-mono text-[11px] rounded-md border border-near-black/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-near-black/50 font-bold">
                    Core Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {proj.contributions.map((con, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-near-black/90 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1 shrink-0"></span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link button if exists */}
                {proj.link && (
                  <div className="pt-4">
                    <a 
                      href={`https://${proj.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-brand-blue font-bold border-b-2 border-brand-blue pb-0.5 hover:text-[#196ebf] hover:border-[#196ebf] transition-all cursor-pointer group"
                    >
                      {proj.link}
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Responsive App Simulator viewport */}
        <div className="lg:col-span-7 bg-white/40 rounded-3xl border border-near-black/5 p-4 sm:p-6 shadow-inner flex flex-col justify-center min-h-[500px]">
          
          <AnimatePresence mode="wait">
            
            {/* 1. MIA Simulator */}
            {activeTab === "mia" && (
              <motion.div 
                key="sim-mia"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full bg-white border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col aspect-[1.3] text-near-black"
              >
                {/* Browser bar */}
                <div className="bg-near-black/5 px-4 py-2 flex items-center justify-between border-b border-near-black/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="bg-white px-4 py-0.5 rounded-md border text-[10px] font-mono text-near-black/60 w-1/2 text-center select-none truncate">
                    mia-topaz-theta.vercel.app
                  </div>
                  <div className="w-6"></div>
                </div>

                {/* Sub-header web menu */}
                <div className="bg-white border-b border-near-black/5 px-4 py-2.5 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-4 font-semibold">
                    <span className="text-brand-blue font-black text-lg">Mla</span>
                    <span className="text-brand-blue font-bold border-b border-brand-blue">Explore</span>
                    <span className="text-near-black/50">Categories</span>
                    <span className="text-near-black/50">About Us</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono bg-near-black/5 px-2 py-1 rounded">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    Surabaya, ID
                  </div>
                </div>

                {/* Interactive Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                  {/* Banner */}
                  <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl p-4 text-white flex justify-between items-center relative overflow-hidden">
                    <div className="z-10">
                      <h4 className="font-bold text-sm">Diskon Kuliner Lokal</h4>
                      <p className="text-[10px] text-white/80">Support UMKM terdekat dari rumahmu</p>
                    </div>
                    <ShoppingBag className="w-8 h-8 opacity-25" />
                  </div>

                  {/* Filter tabs */}
                  <div className="flex gap-1.5 border-b pb-2 select-none">
                    {["All", "Foods", "Drinks", "Fashion"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedMiaCategory(cat)}
                        className={`px-3 py-1 rounded-full text-[10px] transition-colors cursor-pointer ${
                          selectedMiaCategory === cat 
                            ? "bg-brand-blue text-white font-bold" 
                            : "bg-near-black/5 text-near-black/70 hover:bg-near-black/10"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {miaProducts
                      .filter(p => selectedMiaCategory === "All" || p.category === selectedMiaCategory)
                      .map((p) => (
                        <div key={p.name} className="border rounded-xl p-3 bg-cream/10 flex flex-col justify-between hover:border-brand-blue transition-colors">
                          <div>
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-[9px] uppercase font-mono text-brand-blue bg-brand-blue/10 px-1 rounded">
                                {p.category}
                              </span>
                              <div className="flex items-center gap-0.5 text-amber-500 font-bold text-[10px]">
                                <Star className="w-3 h-3 fill-amber-500" />
                                {p.rating}
                              </div>
                            </div>
                            <h5 className="font-bold text-near-black text-[11px] truncate">{p.name}</h5>
                            <p className="text-[9px] text-near-black/60 line-clamp-2 mt-1">{p.desc}</p>
                          </div>
                          <div className="flex justify-between items-center mt-2.5 pt-2 border-t text-[10px] text-near-black/50">
                            <span className="flex items-center gap-1 font-mono">
                              <MapPin className="w-2.5 h-2.5" /> {p.distance}
                            </span>
                            <button className="text-brand-blue font-bold hover:underline cursor-pointer">Kunjungi →</button>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Dynamic interactive Review list / Form */}
                  <div className="border-t pt-4 space-y-3">
                    <h5 className="font-bold text-xs">Ulasan Pengunjung</h5>
                    
                    {/* Simulated Submitted Reviews */}
                    <div className="space-y-2">
                      {miaReviews.map((rev, i) => (
                        <div key={i} className="bg-near-black/5 p-2 rounded-lg text-[10px]">
                          <div className="flex justify-between font-bold mb-1">
                            <span>{rev.name}</span>
                            <div className="flex text-amber-500">
                              {Array.from({ length: rev.rating }).map((_, rIdx) => (
                                <Star key={rIdx} className="w-2.5 h-2.5 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-near-black/70 italic">"{rev.text}"</p>
                        </div>
                      ))}
                    </div>

                    {/* Quick Review Form */}
                    <form onSubmit={handleAddMiaReview} className="bg-cream/10 border p-3 rounded-xl space-y-2">
                      <span className="text-[10px] font-bold text-brand-blue block">Tinggalkan Ulasan untuk UMKM</span>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Nama Anda"
                          value={miaReviewName}
                          onChange={(e) => setMiaReviewName(e.target.value)}
                          className="border bg-white rounded p-1 text-[10px] flex-1 focus:outline-brand-blue" 
                        />
                        <select
                          value={miaReviewRating}
                          onChange={(e) => setMiaReviewRating(parseInt(e.target.value))}
                          className="border bg-white rounded p-1 text-[10px] focus:outline-brand-blue"
                        >
                          <option value="5">⭐⭐⭐⭐⭐</option>
                          <option value="4">⭐⭐⭐⭐</option>
                          <option value="3">⭐⭐⭐</option>
                        </select>
                      </div>
                      <textarea 
                        placeholder="Tulis ulasan pengalaman menjelajah..."
                        value={miaReviewText}
                        onChange={(e) => setMiaReviewText(e.target.value)}
                        className="border bg-white rounded p-1 text-[10px] w-full focus:outline-brand-blue h-12 resize-none"
                      />
                      <button type="submit" className="w-full bg-brand-blue text-white text-[10px] font-bold py-1.5 rounded cursor-pointer hover:bg-[#196ebf] transition-colors">
                        Kirim Ulasan
                      </button>
                    </form>
                    
                    {miaFormSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="p-2 bg-emerald-500 text-white text-center rounded text-[10px] font-bold"
                      >
                        Terima kasih! Ulasan ditambahkan secara lokal.
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. E-Cycle Simulator */}
            {activeTab === "e-cycle" && (
              <motion.div 
                key="sim-ecycle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full bg-[#FAFAF9] border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col aspect-[1.3] text-near-black"
              >
                {/* Simulator header bar */}
                <div className="bg-emerald-800 text-white px-4 py-3 flex justify-between items-center border-b">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span className="font-display font-black text-sm tracking-tight">E-CYCLE PLATFORM</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono text-emerald-300">
                    EcoScore: +{ecyclePoints} Pts
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                  {/* Hero green banner */}
                  <div className="bg-emerald-950 text-white p-4 rounded-xl relative overflow-hidden flex flex-col justify-between select-none shadow-sm">
                    <div className="z-10">
                      <h4 className="text-emerald-400 font-mono text-[9px] uppercase tracking-widest font-bold">ECO IMPACT</h4>
                      <h3 className="text-lg font-black font-display tracking-tight leading-none mt-1">Your Old Gadgets Are Valuable</h3>
                      <p className="text-[10px] text-white/70 mt-1 max-w-sm">Mulai daur ulang sampah elektronikmu untuk menyelamatkan bumi dari tumpukan logam berat.</p>
                    </div>
                    {/* Visual Carbon counter */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center z-10">
                      <div>
                        <span className="text-[10px] text-white/50 block">Total E-Waste Prevented</span>
                        <span className="font-mono text-xl font-bold text-emerald-300">12,450 Kg</span>
                      </div>
                      <span className="text-[9px] font-mono bg-emerald-800 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-700">LIVE MONITOR</span>
                    </div>
                  </div>

                  {/* Calculator Widget */}
                  <div className="border border-emerald-200/50 bg-emerald-500/5 p-4 rounded-xl space-y-3">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                      <Calculator className="w-4 h-4" />
                      <span>E-Waste Carbon Calculator</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-mono text-near-black/60 uppercase block mb-1">Select Device Category</label>
                        <select 
                          value={ecycleDevice} 
                          onChange={(e) => setEcycleDevice(e.target.value)}
                          className="w-full bg-white border border-emerald-300 rounded p-1.5 text-xs focus:outline-emerald-600"
                        >
                          <option value="smartphone">📱 Smartphone / Cellphone</option>
                          <option value="laptop">💻 Laptop / PC Box</option>
                          <option value="tablet">平板 Tablet / iPad</option>
                          <option value="battery">🔋 Rechargeable Battery</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-near-black/60 uppercase block mb-1">Weight of devices (Kg)</label>
                        <input 
                          type="number" 
                          min="1" 
                          value={ecycleWeight} 
                          onChange={(e) => setEcycleWeight(Math.max(1, parseFloat(e.target.value) || 1))}
                          className="w-full bg-white border border-emerald-300 rounded p-1 text-xs focus:outline-emerald-600 font-mono" 
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <span className="text-[10px] text-near-black/50 block font-mono">ESTIMATED PAYOUT</span>
                        <span className="text-sm font-bold text-emerald-700 font-mono">Rp {ecycleEstimatedVal.toLocaleString()}</span>
                      </div>
                      <button 
                        onClick={handleEcycleCalculate}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-4 py-1.5 rounded-lg cursor-pointer transition-colors shadow-xs"
                      >
                        Calculate Impact
                      </button>
                    </div>
                  </div>

                  {/* Drop point lists */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-emerald-800">Available Drop Points Nearby</h5>
                    <div className="space-y-1.5">
                      {[
                        { name: "E-Cycle Hub Jakarta", distance: "2.5 km", status: "Open" },
                        { name: "EcoDrop Bandung", distance: "145 km", status: "Open" },
                        { name: "UPN Veteran Surabaya Hub", distance: "0.2 km", status: "Open" }
                      ].map((dp, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 border rounded-lg bg-white hover:border-emerald-500 transition-colors">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                            <div>
                              <span className="font-semibold text-[11px]">{dp.name}</span>
                              <span className="text-[9px] text-near-black/40 font-mono block">{dp.distance} away</span>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                            {dp.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. GrinBuds Simulator */}
            {activeTab === "grinbuds" && (
              <motion.div 
                key="sim-grinbuds"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full flex justify-center aspect-[1.3]"
              >
                {/* Beautiful custom vector iPhone Mockup */}
                <div className="w-[300px] h-[440px] bg-near-black rounded-[40px] p-3 border-4 border-near-black/80 shadow-2xl relative flex flex-col overflow-hidden">
                  
                  {/* Speaker Ear Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-near-black rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Simulator Screen container */}
                  <div className="flex-1 bg-sky-50 rounded-[30px] overflow-hidden flex flex-col relative z-10 pt-4 text-near-black select-none">
                    
                    {/* Inner custom header bar */}
                    <div className="bg-sky-400 text-white p-3 flex justify-between items-center text-xs shadow-xs">
                      <span className="font-black tracking-tight font-display text-sm">GrinBuds</span>
                      <div className="flex items-center gap-1.5 bg-white/25 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold">
                        ⭐ {grinbudsScore}
                      </div>
                    </div>

                    {/* Dual inner views (Game vs parent dashboard) */}
                    <div className="flex justify-around bg-sky-100 p-1 text-[10px] font-mono">
                      <button 
                        onClick={() => setGrinbudsView("game")} 
                        className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                          grinbudsView === "game" ? "bg-sky-400 text-white font-bold" : "text-sky-700"
                        }`}
                      >
                        🎮 Main Game
                      </button>
                      <button 
                        onClick={() => setGrinbudsView("parent")} 
                        className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                          grinbudsView === "parent" ? "bg-sky-400 text-white font-bold" : "text-sky-700"
                        }`}
                      >
                        📊 Ortu Dashboard
                      </button>
                    </div>

                    {/* Dynamic View container */}
                    <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto">
                      {grinbudsView === "game" ? (
                        /* Learning Game View */
                        <div className="flex-1 flex flex-col justify-between text-center">
                          <div>
                            <span className="text-[10px] font-mono text-near-black/50 block">MODUL MEMBACA</span>
                            <div className="h-1.5 bg-near-black/10 rounded-full max-w-[120px] mx-auto mt-1 overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[60%]"></div>
                            </div>
                          </div>

                          <div className="my-2 space-y-2">
                            <span className="text-xs font-semibold text-near-black/70">Huruf apakah ini?</span>
                            <div className="w-16 h-16 bg-white border-2 border-sky-300 rounded-2xl flex items-center justify-center text-4xl font-extrabold text-sky-500 mx-auto shadow-sm">
                              q
                            </div>
                          </div>

                          {/* Options grid */}
                          <div className="grid grid-cols-2 gap-2 max-w-[200px] mx-auto">
                            {grinbudsOptions.map((opt) => (
                              <button
                                key={opt}
                                disabled={grinbudsFeedback !== null}
                                onClick={() => handleGrinbudsSelect(opt)}
                                className={`w-14 h-14 rounded-2xl font-black text-2xl border-2 flex items-center justify-center transition-all cursor-pointer ${
                                  grinbudsSelectedOption === opt
                                    ? opt === grinbudsAnswer
                                      ? "bg-emerald-400 border-emerald-600 text-white scale-95 shadow-inner"
                                      : "bg-rose-400 border-rose-600 text-white animate-shake"
                                    : "bg-white border-sky-200 text-near-black hover:border-sky-400 shadow-xs"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          {/* Result Feedback Banner */}
                          <div className="min-h-[40px] flex items-center justify-center pt-2">
                            {grinbudsFeedback === "correct" && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                className="text-xs text-emerald-600 font-bold flex items-center gap-1 justify-center"
                              >
                                <Sparkles className="w-4 h-4 text-emerald-500" />
                                Pintar! Betul sekali! (+10 XP)
                              </motion.div>
                            )}
                            {grinbudsFeedback === "incorrect" && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                className="text-xs text-rose-500 font-bold space-y-1"
                              >
                                <div>Oops, kurang tepat!</div>
                                <button onClick={handleGrinbudsReset} className="text-[10px] underline text-sky-500 cursor-pointer">Coba Lagi</button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Parent Dashboard Progress monitoring view */
                        <div className="flex-1 flex flex-col justify-between text-left space-y-3">
                          <div>
                            <h5 className="font-bold text-xs text-sky-800">Pantau Perkembangan Anak</h5>
                            <p className="text-[9px] text-near-black/50">Laporan real-time deteksi disleksia dini</p>
                          </div>

                          {/* Stats Boxes */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-emerald-50 border border-emerald-100 p-2 rounded-xl text-center">
                              <span className="text-[8px] text-emerald-600 font-mono block">WAKTU BELAJAR</span>
                              <span className="font-bold text-xs text-emerald-800">45 Menit</span>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 p-2 rounded-xl text-center">
                              <span className="text-[8px] text-purple-600 font-mono block">BENAR / SALAH</span>
                              <span className="font-bold text-xs text-purple-800">88% / 12%</span>
                            </div>
                          </div>

                          {/* Dyslexia diagnostic meter */}
                          <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl space-y-1.5">
                            <span className="text-[9px] font-bold text-amber-700 block">Deteksi Indikasi Disleksia</span>
                            <div className="h-2 bg-near-black/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[90%]"></div> {/* 90% accuracy healthy score */}
                            </div>
                            <div className="flex justify-between text-[8px] text-near-black/50 font-mono">
                              <span>RISIKO RENDAH</span>
                              <span>90% BEBAS REVERSAL</span>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold block text-near-black/60">Pencapaian Terbaru</span>
                            <div className="flex gap-1.5">
                              <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-xs">🏆</div>
                              <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-xs">🎓</div>
                              <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-xs">🌟</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. Portalia Simulator */}
            {activeTab === "portalia" && (
              <motion.div 
                key="sim-portalia"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full flex justify-center aspect-[1.3]"
              >
                {/* Mobile screen for campus marketplace */}
                <div className="w-[300px] h-[440px] bg-near-black rounded-[40px] p-3 border-4 border-near-black/80 shadow-2xl relative flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-near-black rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Simulator Screen */}
                  <div className="flex-1 bg-[#FAF9F5] rounded-[30px] overflow-hidden flex flex-col relative z-10 pt-4 text-near-black select-none">
                    {/* Header */}
                    <div className="bg-[#5850EC] text-white p-3 flex justify-between items-center text-xs shadow-md">
                      <span className="font-black tracking-tight font-display text-sm">Portalia</span>
                      <button 
                        onClick={() => setPortaliaFormOpen(!portaliaFormOpen)}
                        className="bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-full text-[9px] font-mono cursor-pointer transition-colors font-bold"
                      >
                        {portaliaFormOpen ? "Kembali" : "Jual Barang +"}
                      </button>
                    </div>

                    {/* View rendering */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col justify-between">
                      {portaliaFormOpen ? (
                        /* Interactive Add Product view */
                        <form onSubmit={handleAddPortaliaProduct} className="space-y-3 flex-1 text-left">
                          <h5 className="font-bold text-xs text-[#5850EC] mb-1">Unggah Produk Baru</h5>
                          <div>
                            <label className="text-[8px] font-mono text-near-black/60 uppercase block mb-0.5">Nama Barang</label>
                            <input 
                              type="text" 
                              required
                              placeholder="Contoh: Kalkulator Casio"
                              value={portaliaNewName}
                              onChange={(e) => setPortaliaNewName(e.target.value)}
                              className="w-full bg-white border rounded p-1 text-[10px] focus:outline-[#5850EC]" 
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[8px] font-mono text-near-black/60 uppercase block mb-0.5">Harga (Rp)</label>
                              <input 
                                type="number" 
                                required
                                placeholder="Harga Rp"
                                value={portaliaNewPrice}
                                onChange={(e) => setPortaliaNewPrice(e.target.value)}
                                className="w-full bg-white border rounded p-1 text-[10px] focus:outline-[#5850EC] font-mono" 
                              />
                            </div>
                            <div>
                              <label className="text-[8px] font-mono text-near-black/60 uppercase block mb-0.5">Kategori</label>
                              <select 
                                value={portaliaNewCat} 
                                onChange={(e) => setPortaliaNewCat(e.target.value)}
                                className="w-full bg-white border rounded p-1 text-[10px] focus:outline-[#5850EC]"
                              >
                                <option value="Electronics">Elektronik</option>
                                <option value="Books">Buku</option>
                                <option value="Foods">Makanan</option>
                              </select>
                            </div>
                          </div>

                          <button type="submit" className="w-full bg-[#5850EC] text-white text-[10px] font-bold py-1.5 rounded cursor-pointer hover:bg-[#483fd8] transition-colors shadow-xs">
                            Kirim ke Feed Kampus
                          </button>
                        </form>
                      ) : (
                        /* Marketplace Feed list */
                        <div className="space-y-2 flex-1">
                          <div className="flex gap-1.5 bg-near-black/5 p-1 rounded-md text-[9px]">
                            <Search className="w-3 h-3 text-near-black/40 mt-px" />
                            <input type="text" placeholder="Cari buku, laptop, kosan..." className="bg-transparent border-none text-[9px] w-full focus:outline-none" disabled />
                          </div>

                          <span className="text-[9px] font-bold text-[#5850EC] block">PRODUK TERBARU HARI INI</span>
                          
                          <div className="space-y-2">
                            {portaliaProducts.map((p) => (
                              <div key={p.id} className="bg-white p-2 rounded-xl border border-near-black/5 flex justify-between items-center hover:border-[#5850EC] transition-colors">
                                <div className="text-left">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[7px] bg-[#5850EC]/10 text-[#5850EC] px-1 rounded uppercase font-mono font-bold">
                                      {p.cat}
                                    </span>
                                    <span className="text-[7px] text-near-black/40 font-mono">Oleh {p.seller}</span>
                                  </div>
                                  <h6 className="font-bold text-[10px] leading-tight mt-0.5">{p.name}</h6>
                                  <span className="text-[9px] font-mono font-bold text-emerald-600 block">Rp {p.price.toLocaleString()}</span>
                                </div>
                                <button className="bg-[#5850EC] text-white text-[9px] font-bold px-2 py-1 rounded hover:bg-[#483fd8] transition-colors cursor-pointer">Beli</button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. NusaTales Simulator */}
            {activeTab === "nusatales" && (
              <motion.div 
                key="sim-nusatales"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full bg-[#FCFBF7] border border-near-black/15 rounded-2xl shadow-xl overflow-hidden flex flex-col aspect-[1.3] text-near-black"
              >
                {/* Header browser bar */}
                <div className="bg-[#9333EA] text-white px-4 py-2 flex items-center justify-between border-b">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="font-display font-black text-xs tracking-tight">NUSATALES PORTAL</span>
                  </div>
                  <div className="bg-white/10 px-3 py-0.5 rounded text-[9px] font-mono">
                    nusatales.isslab.web.id
                  </div>
                </div>

                {/* Sub-menu tabs (Story reader vs. backend diagram) */}
                <div className="bg-[#F3E8FF] px-4 py-1.5 flex justify-between items-center text-[10px] font-mono text-purple-800">
                  <div className="flex gap-4">
                    <button onClick={() => setNusatalesStoryIndex(0)} className={`font-bold hover:underline cursor-pointer ${nusatalesStoryIndex === 0 ? "text-purple-950 font-black" : ""}`}>
                      Roro Jonggrang
                    </button>
                    <button onClick={() => setNusatalesStoryIndex(1)} className={`font-bold hover:underline cursor-pointer ${nusatalesStoryIndex === 1 ? "text-purple-950 font-black" : ""}`}>
                      Sangkuriang
                    </button>
                  </div>
                  <span>Backend System: Laravel + MySQL</span>
                </div>

                {/* Interactive Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                  
                  {/* Story Reader */}
                  <div className="bg-purple-950 text-white rounded-xl p-4 text-center space-y-2 shadow-sm border border-purple-900 relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-radial-to-t from-black/20 via-transparent to-transparent"></div>
                    <span className="text-[8px] font-mono text-purple-300 uppercase tracking-widest font-bold">Kisah Budaya Nusantara</span>
                    <h4 className="text-base font-black font-display tracking-tight text-yellow-300">
                      {stories[nusatalesStoryIndex].title}
                    </h4>
                    <p className="text-[10px] text-white/90 leading-relaxed italic max-w-md mx-auto">
                      "{stories[nusatalesStoryIndex].intro}"
                    </p>
                    <div className="bg-white/10 px-3 py-1.5 rounded-lg text-[9px] inline-block mt-2 text-white/80">
                      {stories[nusatalesStoryIndex].excerpt}
                    </div>
                  </div>

                  {/* Interactive Backend Architecture Node Details */}
                  <div className="border border-purple-200 bg-purple-500/5 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 font-bold text-purple-900 mb-2.5">
                      <Database className="w-4 h-4" />
                      <span>Sistem Kreator & Backend Architecture</span>
                    </div>

                    {/* Simple vector node flow representing backend */}
                    <div className="flex items-center justify-between gap-1 select-none font-mono text-[9px] mb-3 bg-white p-2 rounded-lg border">
                      <button 
                        onClick={() => setNusatalesArchNode("laravel")}
                        className={`p-1.5 rounded border text-center transition-all cursor-pointer flex-1 ${
                          nusatalesArchNode === "laravel" ? "bg-purple-600 text-white border-purple-700 font-bold" : "bg-purple-50 hover:bg-purple-100"
                        }`}
                      >
                        Laravel Routing
                      </button>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
                      <button 
                        onClick={() => setNusatalesArchNode("controller")}
                        className={`p-1.5 rounded border text-center transition-all cursor-pointer flex-1 ${
                          nusatalesArchNode === "controller" ? "bg-purple-600 text-white border-purple-700 font-bold" : "bg-purple-50 hover:bg-purple-100"
                        }`}
                      >
                        REST Controller
                      </button>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
                      <button 
                        onClick={() => setNusatalesArchNode("mysql")}
                        className={`p-1.5 rounded border text-center transition-all cursor-pointer flex-1 ${
                          nusatalesArchNode === "mysql" ? "bg-purple-600 text-white border-purple-700 font-bold" : "bg-purple-50 hover:bg-purple-100"
                        }`}
                      >
                        MySQL ORM
                      </button>
                    </div>

                    {/* Explanatory Node text */}
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 text-[10px]">
                      {nusatalesArchNode === "laravel" && (
                        <div className="space-y-1">
                          <span className="font-bold text-purple-800 flex items-center gap-1">
                            <Cpu className="w-3.5 h-3.5" /> Laravel Web API Routing
                          </span>
                          <p className="text-near-black/70">Mengarahkan HTTP requests dengan middleware autentikasi JWT terproteksi. Menjamin pengiriman konten cerita terenkripsi dengan aman bagi user.</p>
                        </div>
                      )}
                      {nusatalesArchNode === "controller" && (
                        <div className="space-y-1">
                          <span className="font-bold text-purple-800 flex items-center gap-1">
                            <Server className="w-3.5 h-3.5" /> REST Controller Logic
                          </span>
                          <p className="text-near-black/70">Memproses payload serialisasi cerita, mengoordinasi analisis statistik interaksi pembaca, serta menghasilkan respons JSON standardisasi yang sangat responsif.</p>
                        </div>
                      )}
                      {nusatalesArchNode === "mysql" && (
                        <div className="space-y-1">
                          <span className="font-bold text-purple-800 flex items-center gap-1">
                            <Database className="w-3.5 h-3.5" /> Database Connectivity & ORM
                          </span>
                          <p className="text-near-black/70">Menggunakan Eloquent ORM Laravel untuk optimasi query relasional tabel cerita, data kreator, rating ulasan, serta mencatat history interaksi pembaca secara aman.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 border-t border-near-black/10 pt-4">
        <span>03 // FEATURED PROJECTS ({PROJECTS.length} TOTAL)</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>CLICK TABS TO TOGGLE SIMULATORS</span>
      </div>
    </section>
  );
}
