import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, ThumbsUp, Send, Check, MessageSquare, Inbox, Trash2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import SplitText from "./SplitText";
import Magnetic from "./Magnetic";

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  text: string;
  date: string;
}

export default function Contact() {
  const [activeView, setActiveView] = useState<"info" | "form">("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  // Load from localStorage if available
  useEffect(() => {
    const data = localStorage.getItem("portfolio_messages");
    if (data) {
      try {
        setSavedMessages(JSON.parse(data));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMsg: SavedMessage = {
      id: Date.now().toString(),
      name,
      email,
      text: message,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newMsg, ...savedMessages];
    setSavedMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));

    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveView("info");
    }, 2500);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = savedMessages.filter(m => m.id !== id);
    setSavedMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-cream p-6 md:p-12 flex flex-col justify-between border-b border-near-black/10 select-none">
      
      {/* Running Page Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-10 md:my-16">
        
        {/* Left Column: Massive Stacked Typo "Work with Me!" */}
        <div className="lg:col-span-5 text-left">
          <h2 className="text-[14vw] lg:text-[7vw] font-black font-display text-brand-blue uppercase leading-[0.85] tracking-tighter">
            {/* Each word on its own line, cascading delay */}
            <span style={{ display: "block" }}>
              <SplitText text="Work" delay={0} stagger={0.09} once={false} threshold={0.3} />
            </span>
            <span style={{ display: "block" }}>
              <SplitText text="with" delay={0.12} stagger={0.09} once={false} threshold={0.3} />
            </span>
            <span style={{ display: "block" }}>
              <SplitText text="Me!" delay={0.24} stagger={0.09} once={false} threshold={0.3} />
            </span>
          </h2>
        </div>

        {/* Right Column: Descriptions & Interactive Dark Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl font-black font-display text-near-black leading-snug tracking-tight uppercase">
            BUILDING MODERN AND USER-FOCUSED DIGITAL EXPERIENCES THROUGH CREATIVE DESIGN AND SCALABLE TECHNOLOGY SOLUTIONS.
          </p>

          {/* Interactive Card Container */}
          <div className="bg-[#1A1A1A] text-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden min-h-[350px] border border-white/5 flex flex-col justify-between">
            
            {/* Folder tab design internally */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                {activeView === "info" ? "CONTACT ME!" : "SEND A MESSAGE!"}
              </span>
              
              <div className="flex gap-2">
                <Magnetic>
                  <motion.button 
                    data-magnetic
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveView("info")}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase cursor-pointer transition-colors ${
                      activeView === "info" ? "bg-white text-[#1A1A1A] font-bold" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    Contacts
                  </motion.button>
                </Magnetic>
                <Magnetic>
                  <motion.button 
                    data-magnetic
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveView("form")}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase cursor-pointer transition-colors ${
                      activeView === "form" ? "bg-white text-[#1A1A1A] font-bold" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    Message Form
                  </motion.button>
                </Magnetic>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeView === "info" ? (
                /* 1. Contact Information list with animated copy buttons */
                <motion.div 
                  key="contact-info"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4 flex-1 flex flex-col justify-center"
                >
                  {/* Phone Row */}
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-blue hover:bg-white/10 transition-colors group cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/40 block group-hover:text-brand-blue/80 transition-colors">PHONE NUMBER</span>
                        <span className="text-sm font-mono font-bold">{PERSONAL_INFO.phone}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-brand-blue group-hover:text-white">Active</span>
                  </motion.div>

                  {/* Mail Row */}
                  <motion.a 
                    whileHover={{ scale: 1.02, x: 8 }}
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-blue hover:bg-white/10 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/40 block group-hover:text-brand-blue/80 transition-colors">EMAIL ADDRESS</span>
                        <span className="text-sm font-mono font-bold">{PERSONAL_INFO.email}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-brand-blue text-white px-2 py-0.5 rounded">Primary</span>
                  </motion.a>

                  {/* Github Row */}
                  <motion.a 
                    whileHover={{ scale: 1.02, x: 8 }}
                    href={`https://${PERSONAL_INFO.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-blue hover:bg-white/10 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <ThumbsUp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/40 block group-hover:text-brand-blue/80 transition-colors">GITHUB PROFILE</span>
                        <span className="text-sm font-mono font-bold underline">{PERSONAL_INFO.github}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-brand-blue group-hover:text-white">Explore →</span>
                  </motion.a>
                </motion.div>
              ) : (
                /* 2. Interactive message form */
                <motion.div 
                  key="contact-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4 flex-1"
                >
                  {submitted ? (
                    <motion.div 
                      initial={{ scale: 0.9 }} 
                      animate={{ scale: 1 }} 
                      className="text-center py-8 space-y-3 flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="font-display font-black text-lg">Message Submitted!</h4>
                      <p className="text-xs text-white/60 max-w-xs">Terima kasih banyak! Pesan Anda telah terekam secara lokal di portofolio Gani.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono text-white/50 block">YOUR NAME</label>
                          <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs focus:outline-brand-blue text-white hover:bg-white/10 hover:border-brand-blue/50 transition-colors" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono text-white/50 block">YOUR EMAIL</label>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs focus:outline-brand-blue text-white hover:bg-white/10 hover:border-brand-blue/50 transition-colors" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-white/50 block">MESSAGE BODY</label>
                        <textarea 
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Saya tertarik untuk berkolaborasi dalam proyek..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs focus:outline-brand-blue text-white h-24 resize-none hover:bg-white/10 hover:border-brand-blue/50 transition-colors"
                        />
                      </div>

                      <Magnetic>
                        <motion.button 
                          data-magnetic
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit" 
                          className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send Message
                        </motion.button>
                      </Magnetic>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Local Inbox Drawer Panel (Hidden premium Easter egg detail) */}
          {savedMessages.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              className="border-t border-near-black/15 pt-4 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-near-black/60">
                <Inbox className="w-4 h-4 text-brand-blue" />
                <span>LOCAL SUBMITTED INBOX ({savedMessages.length})</span>
              </div>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2">
                {savedMessages.map((msg) => (
                  <div key={msg.id} className="bg-card-bg border rounded-xl p-3 flex justify-between items-start text-xs shadow-xs hover:border-brand-blue transition-colors">
                    <div className="space-y-1 text-left flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-near-black">{msg.name}</span>
                        <span className="text-[9px] font-mono text-near-black/40">{msg.date}</span>
                      </div>
                      <span className="text-[10px] text-brand-blue font-mono block">{msg.email}</span>
                      <p className="text-near-black/80 font-light italic mt-1">"{msg.text}"</p>
                    </div>
                    <button 
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="ml-4 p-1 rounded-md text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Hapus pesan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 mt-10 border-t border-near-black/10 pt-4">
        <span>05 // WORK WITH ME!</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>GET IN TOUCH ONLINE</span>
      </div>
    </section>
  );
}
