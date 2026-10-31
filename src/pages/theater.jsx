import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaInfoCircle, FaStar, FaClock, FaBus, FaTrain } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Theater Page Component
 * Dark Cyber-Idol Theme for H5-Revolution Permanent Theater.
 */
const Theater = () => {
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

  const schedule = [
    { day: "MON", date: "April 14", time: "18:30", title: "Evolution Team A-1", status: "Available" },
    { day: "TUE", date: "April 15", time: "18:30", title: "New Era Special Stage", status: "Sold Out" },
    { day: "WED", date: "April 16", time: "18:30", title: "Evolution Team B-2", status: "Available" },
    { day: "THU", date: "April 17", time: "18:30", title: "Solo Performance: Yuki", status: "Limited" },
    { day: "FRI", date: "April 18", time: "19:00", title: "Weekend Night Party", status: "Available" },
    { day: "SAT", date: "April 19", time: "14:00", title: "Matinee Show: H5-R", status: "Available" },
    { day: "SUN", date: "April 20", time: "15:00", title: "Anniversary Special", status: "Sold Out" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-slate-100 pb-16 md:pb-24 relative overflow-hidden">
      <SEO title="H5-R Theater" description="Get the latest schedule and guide for H5-Revolution's permanent theater." />

      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#160a2e] to-[#0f0a1e] border-b border-pink-900/30">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-sm flex items-center justify-center text-white shadow-idol-pink mb-4 md:mb-6"
          >
            <FaStar size={26} />
          </motion.div>

          <div className="badge-idol mb-3 md:mb-4">
            Official Live Stage
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-3 md:mb-4 font-outfit text-white">
            THE <span className="text-idol">THEATER</span>
          </h1>
          <p className="text-pink-400/70 font-mono font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] sm:text-xs px-2">
            Our Home. Your Live Cyber-Stage Experience.
          </p>
        </div>
      </section>

      {/* ─── Section: Theater Schedule (#schedule) ────────── */}
      <section id="schedule" className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Theater <span className="text-idol">Schedule</span>
            </h2>
            <p className="text-white/40 font-bold text-sm mt-1">Weekly Performance Calendar</p>
          </div>
          {/* Legend: horizontal scroll on mobile */}
          <div className="flex items-center gap-3 md:gap-4 text-xs font-mono font-bold uppercase tracking-widest text-white/50 overflow-x-auto pb-1 shrink-0 max-w-full">
            <span className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" /> Available</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)] shrink-0" /> Limited</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)] shrink-0" /> Sold Out</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10 hover:border-pink-500/50 hover:shadow-idol-pink transition-all group"
            >
              <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-sm bg-white/[0.04] border border-white/10 text-white shrink-0 p-2 group-hover:border-pink-500/40 transition-colors">
                  <span className="text-[10px] font-black uppercase text-pink-400 font-mono">{item.day}</span>
                  <span className="text-lg font-black font-mono leading-none mt-1">{item.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FaClock size={11} className="text-pink-400 shrink-0" />
                    <span className="text-xs font-mono text-white/50">{item.time} JST</span>
                  </div>
                  <h3 className="text-base md:text-xl font-black text-white uppercase tracking-tight group-hover:text-pink-300 transition-colors truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest border whitespace-nowrap ${
                  item.status === "Available" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" :
                  item.status === "Limited" ? "bg-orange-500/10 text-orange-400 border-orange-500/30" : "bg-red-500/10 text-red-400 border-red-500/30"
                }`}>
                  {item.status}
                </span>
                <button className={`px-4 md:px-6 py-2.5 md:py-3 rounded-sm font-black text-xs uppercase tracking-[0.15em] transition-all whitespace-nowrap ${
                  item.status === "Sold Out"
                    ? "bg-white/5 text-white/30 border border-white/10 cursor-not-allowed"
                    : "shimmer-btn bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-md hover:shadow-idol-pink"
                }`}>
                  {item.status === "Sold Out" ? "Full House" : "Apply Ticket"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Section: Theater Guide (#guide) ─────────────── */}
      <section id="guide" className="py-12 md:py-20 bg-[#0b0616]/90 border-y border-pink-950/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">

          {/* Guide Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="badge-idol mb-3">Guidelines</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3 md:mb-4">
                Theater <span className="text-idol">Guide</span>
              </h2>
              <p className="text-white/50 font-medium leading-relaxed text-sm">
                To ensure everyone enjoys the live show experience, please read our visitor guidelines before entering. Our theater is an intimate sanctuary for idols and fans alike.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                { icon: <FaInfoCircle />, title: "ID Check", desc: "Please bring a valid photo ID matching your reservation. Tickets are strictly non-transferable." },
                { icon: <FaTicketAlt />, title: "Ticket Exchange", desc: "Exchange your confirmation barcode for an entry pass 30 minutes before showtime." },
                { icon: <FaStar />, title: "Stage Rules", desc: "Photography, audio recording, and video filming are strictly prohibited during the live show." }
              ].map((guide, i) => (
                <div key={i} className="flex gap-4 md:gap-5 p-4 md:p-5 bg-white/[0.03] rounded-sm border border-white/5 group hover:border-pink-500/40 hover:bg-pink-500/[0.04] transition-all">
                  <div className="w-11 h-11 rounded-sm bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl group-hover:scale-110 transition-transform shrink-0">
                    {guide.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{guide.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Access/Map */}
          <div className="bg-[#12082a]/90 rounded-sm p-5 md:p-8 border border-white/10 relative shadow-2xl">
            <div className="mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
              <div className="w-11 h-11 bg-pink-500/10 border border-pink-500/20 rounded-sm flex items-center justify-center text-pink-400 shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight">Access &amp; Location</h3>
                <p className="text-xs font-mono text-pink-400/70">H5-R Theater, Akihabara District</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="aspect-video w-full bg-[#1b0d36] rounded-sm overflow-hidden relative group border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#240d46] to-[#0f0a1e] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <FaMapMarkerAlt className="text-pink-500 text-4xl drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] animate-bounce" />
                  <span className="mt-3 text-[10px] font-mono font-bold text-white uppercase tracking-[0.4em]">Akihabara Stage</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 md:p-4 bg-white/[0.03] rounded-sm border border-white/5 flex items-start gap-3">
                  <FaTrain className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black text-white uppercase mb-1">By Train</p>
                    <p className="text-[10px] text-white/50 leading-normal">5 min walk from Akihabara St. (JR Yamanote Line)</p>
                  </div>
                </div>
                <div className="p-3 md:p-4 bg-white/[0.03] rounded-sm border border-white/5 flex items-start gap-3">
                  <FaBus className="text-pink-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black text-white uppercase mb-1">By Bus</p>
                    <p className="text-[10px] text-white/50 leading-normal">Sudacho Bus Stop (Terminal 3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Theater;
