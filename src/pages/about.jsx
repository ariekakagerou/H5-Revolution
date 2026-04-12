import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaHistory, FaLightbulb, FaRocket, FaHandHoldingHeart, FaMusic } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * About Page Component
 * Contains "What is H5-R?" and "Our History" sections.
 */
const About = () => {
  // Handle scroll to hash on load
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
    { year: "2023", title: "The Formation", desc: "H5-Revolution was formed in early 2023 with a mission to bring a new energy to the idol scene.", color: "text-pink-500", bg: "bg-pink-50" },
    { year: "2024", title: "Debut Single 'START LINE'", desc: "The group released their first single which reached top charts within days of release.", color: "text-orange-500", bg: "bg-orange-50" },
    { year: "2024", title: "First Theater Show", desc: "Established our permanent home theater where we perform daily for our fans.", color: "text-yellow-500", bg: "bg-yellow-50" },
    { year: "2025", title: "Global Tour Announcement", desc: "Expanding the revolution globally with our 2025 World Tour.", color: "text-cyan-500", bg: "bg-cyan-50" }
  ];

  return (
    <div className="min-h-screen bg-white font-inter text-slate-800 pb-24">
      <SEO title="About H5-Revolution" description="Learn about the vision and history of H5-Revolution." />

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-pink-100 bg-white/60 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="text-pink-500 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2 justify-center">
              <FaHeart /> Discover Our Soul
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-sm font-outfit leading-none"
          >
             ABOUT THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">REVOLUTION</span>
          </motion.h1>
          <p className="text-gray-500 text-lg md:text-xl font-bold tracking-wide max-w-2xl mx-auto leading-relaxed">
             Beyond music, we are a movement. Experience the evolution of the modern idol.
          </p>
        </div>
      </section>

      {/* ─── Section: What is H5-R? (#vision) ─────────────── */}
      <section id="vision" className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-100 rounded-full -z-10 blur-2xl opacity-60" />
               <div className="bg-white rounded-[3rem] p-4 shadow-2xl shadow-slate-200 border border-slate-50 rotate-[-2deg] relative group transition-all hover:rotate-0">
                  <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-100 relative">
                     <img src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="H5-R Vision" />
                     <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent flex flex-col justify-end p-10 text-white">
                        <FaStar className="text-yellow-400 text-4xl mb-4 animate-pulse" />
                        <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">THE REVOLUTION</h3>
                        <p className="text-white/80 font-bold uppercase tracking-widest text-xs">A New Era of Entertainment</p>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 uppercase tracking-tight">What is <span className="text-pink-500">H5-R?</span></h2>
                  <div className="w-20 h-2 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full" />
               </div>

               <p className="text-slate-500 font-bold text-lg mb-10 leading-relaxed">
                  H5-Revolution is more than just an idol group. We are a collective of dreamers, performers, and creators dedicated to reshaping the landscape of modern entertainment. 
                  Named after the "High-Five" of unity and the "Revolution" of change, we represent the strong bond between our members and our fans (The Revolutionaries).
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <FaLightbulb />, title: "Innovation", desc: "Merging traditional idol culture with bleeding-edge technology." },
                    { icon: <FaHandHoldingHeart />, title: "Unity", desc: "Building a supportive community where everyone belongs." },
                    { icon: <FaRocket />, title: "Ambition", desc: "Always pushing the boundaries of what's possible." },
                    { icon: <FaMusic />, title: "Passion", desc: "Every song, dance, and beat is fueled by pure artistic energy." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group p-2 transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-pink-500 text-xl group-hover:bg-pink-500 group-hover:text-white transition-all shadow-sm">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">{item.title}</h4>
                          <p className="text-[10px] font-bold text-gray-400 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ─── Section: Our History (#history) ─────────────── */}
      <section id="history" className="py-24 bg-slate-50/50">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 uppercase tracking-tight">OUR <span className="text-orange-500">HISTORY</span></h2>
               <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">The journey from start line to the stars</p>
               <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mt-4" />
            </div>

            <div className="relative space-y-12">
               {/* Timeline Line */}
               <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 via-orange-200 to-cyan-200 rounded-full" />

               {milestones.map((ms, i) => (
                 <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Circle Indicator */}
                    <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-slate-800 z-10" />

                    {/* Content Card */}
                    <div className="w-full md:w-[45%] pl-16 md:pl-0">
                       <motion.div 
                         whileHover={{ y: -5 }}
                         className={`bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden group`}
                       >
                          <div className={`absolute top-0 right-0 w-32 h-32 ${ms.bg} rounded-full -mr-16 -mt-16 transition-colors`} />
                          <div className="relative z-10">
                             <span className={`text-4xl font-black mb-2 block ${ms.color}`}>{ms.year}</span>
                             <h4 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">{ms.title}</h4>
                             <p className="text-sm font-bold text-gray-500 leading-relaxed italic">
                                "{ms.desc}"
                             </p>
                          </div>
                       </motion.div>
                    </div>

                    {/* Spacer for MD screens */}
                    <div className="hidden md:block w-[45%]" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
         <div className="max-w-2xl mx-auto bg-gradient-to-br from-pink-500 to-orange-400 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-pink-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <FaMusic size={60} className="mx-auto mb-8 opacity-40 animate-bounce" />
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">BE PART OF THE REVOLUTION</h3>
            <p className="text-white/80 font-bold mb-10 leading-relaxed uppercase tracking-widest text-xs">
               Our story is still being written, and it includes you. Join our global community today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-4 bg-white text-pink-500 font-black rounded-full uppercase text-xs hover:scale-105 transition-all shadow-lg">Join Fanclub</button>
               <button className="px-10 py-4 bg-pink-600 text-white font-black rounded-full uppercase text-xs border border-pink-400 hover:bg-pink-700 transition-all shadow-lg">View Schedule</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
