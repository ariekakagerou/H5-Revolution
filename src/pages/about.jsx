import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaHistory, FaLightbulb, FaRocket, FaHandHoldingHeart, FaMusic } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * About Page Component
 * Dark Cyber-Idol Vision and Group History.
 */
const About = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  const milestones = [
    { year: "2023", title: "The Formation", desc: "H5-Revolution was formed in early 2023 with a mission to bring an electrifying cyber stage energy to the modern idol scene.", color: "text-pink-400", bg: "bg-pink-500/10" },
    { year: "2024", title: "Debut Single 'START LINE'", desc: "The group released their first single which reached top charts within days of live stage debut.", color: "text-orange-400", bg: "bg-orange-500/10" },
    { year: "2024", title: "Permanent Theater Launch", desc: "Established our permanent home theater in Akihabara where we perform live for our fans.", color: "text-amber-400", bg: "bg-amber-500/10" },
    { year: "2026", title: "Global Cyber Tour", desc: "Expanding the revolution globally with our 2026 World Stage Tour.", color: "text-cyan-400", bg: "bg-cyan-500/10" }
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white pb-16 md:pb-24 relative overflow-hidden">
      <SEO title="About H5-Revolution" description="Learn about the vision and history of H5-Revolution." />

      {/* Ambient Glows */}
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#160a2e] to-[#0f0a1e] border-b border-pink-900/30">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-idol mb-4 md:mb-6 mx-auto inline-flex"
          >
            <FaHeart size={10} /> Discover Our Soul
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-4 md:mb-6 font-outfit leading-none"
          >
             ABOUT THE <br/> <span className="text-idol">REVOLUTION</span>
          </motion.h1>
          <p className="text-white/50 text-sm md:text-base lg:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
             Beyond performance, we are a digital movement. Experience the evolution of the modern cyber-idol stage.
          </p>
        </div>
      </section>

      {/* ─── Section: What is H5-R? (#vision) ─────────────── */}
      <section id="vision" className="py-12 md:py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
               <div className="bg-[#12082a]/90 rounded-sm p-4 border border-white/10 hover:border-pink-500/50 shadow-2xl hover:shadow-idol-pink transition-all duration-500 group">
                  <div className="rounded-sm overflow-hidden aspect-[4/3] sm:aspect-[4/5] bg-[#1a0c36] relative">
                     <img
                       src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80"
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                       alt="H5-R Vision"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-[#0f0a1e]/40 to-transparent flex flex-col justify-end p-4 sm:p-8 text-white">
                        <FaStar className="text-amber-400 text-3xl mb-3 animate-pulse" />
                        <h3 className="text-xl sm:text-3xl font-black mb-1 uppercase tracking-tight">THE REVOLUTION</h3>
                        <p className="text-pink-400/80 font-mono font-bold uppercase tracking-widest text-xs">A New Era of Entertainment</p>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <div className="mb-6 md:mb-8">
                  <div className="badge-idol mb-3">Group Philosophy</div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight">What is <span className="text-idol">H5-R?</span></h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full" />
               </div>

               <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  H5-Revolution is more than just an idol group. We are a collective of dreamers, performers, and creators dedicated to reshaping the landscape of modern stage entertainment.
                  Named after the "High-Five" of unity and the "Revolution" of innovation, we represent the unbreakable bond between members and our fans worldwide.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: <FaLightbulb />, title: "Innovation", desc: "Merging traditional idol live stages with next-gen technology." },
                    { icon: <FaHandHoldingHeart />, title: "Unity", desc: "Building a global community where every fan belongs." },
                    { icon: <FaRocket />, title: "Ambition", desc: "Pushing the boundaries of performance and music production." },
                    { icon: <FaMusic />, title: "Passion", desc: "Every song and dance choreography is fueled by pure artistic devotion." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/[0.03] border border-white/5 rounded-sm hover:border-pink-500/40 hover:bg-pink-500/[0.03] transition-all">
                       <div className="w-10 h-10 md:w-11 md:h-11 rounded-sm bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-lg shrink-0">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{item.title}</h4>
                          <p className="text-[11px] text-white/50 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ─── Section: Our History (#history) ─────────────── */}
      <section id="history" className="py-12 md:py-20 bg-[#0b0616]/90 border-y border-pink-950/40 relative overflow-hidden">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
               <div className="badge-idol mb-3 mx-auto inline-flex">Chronology</div>
               <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">OUR <span className="text-idol">HISTORY</span></h2>
               <p className="text-white/40 font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs">The journey from start line to the stars</p>
            </div>

            <div className="relative space-y-6 md:space-y-8">
               {/* Timeline Line */}
               <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500/60 via-orange-500/40 to-cyan-500/40" />

               {milestones.map((ms, i) => (
                 <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Circle Indicator */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-2 border-[#0f0a1e] shadow-idol-pink z-10 mt-2 md:mt-0" />

                    {/* Content Card */}
                    <div className="w-full md:w-[46%] pl-10 md:pl-0">
                       <motion.div
                         whileHover={{ y: -4 }}
                         className="bg-[#12082a]/90 p-5 md:p-8 rounded-sm border border-white/10 hover:border-pink-500/50 shadow-xl transition-all"
                       >
                          <span className={`text-2xl md:text-3xl font-black font-mono mb-2 block ${ms.color}`}>{ms.year}</span>
                          <h4 className="text-sm md:text-lg font-black text-white mb-2 uppercase tracking-tight">{ms.title}</h4>
                          <p className="text-xs text-white/60 leading-relaxed">
                             {ms.desc}
                          </p>
                       </motion.div>
                    </div>

                    {/* Spacer for MD screens */}
                    <div className="hidden md:block w-[46%]" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────── */}
      <section className="py-12 md:py-20 px-4 sm:px-6 text-center relative z-10">
         <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1c0a38] to-[#0f0a1e] p-6 sm:p-8 md:p-12 rounded-sm text-white shadow-2xl border border-pink-500/30 relative overflow-hidden">
            <FaMusic size={36} className="mx-auto mb-4 md:mb-6 text-pink-400" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 uppercase tracking-tight">BE PART OF THE REVOLUTION</h3>
            <p className="text-white/60 text-xs md:text-sm font-medium mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto uppercase tracking-wider">
               Our story is still being written, and it includes you. Join our global fan community today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
               <button className="shimmer-btn w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-sm uppercase tracking-[0.2em] text-xs hover:shadow-idol-pink transition-all">
                 Join Fanclub
               </button>
               <Link to="/theater#schedule" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-transparent border border-pink-500/40 text-pink-300 font-black rounded-sm uppercase tracking-[0.2em] text-xs hover:bg-pink-500/10 transition-all text-center">
                 View Stage Schedule
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
