import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaInfoCircle, FaStar, FaClock, FaBus, FaTrain } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Theater Page Component
 * Contains "Theater Schedule" and "Theater Guide" sections.
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
    <div className="min-h-screen bg-slate-50 font-inter text-slate-800 pb-24">
      <SEO title="H5-R Theater" description="Get the latest schedule and guide for H5-Revolution's permanent theater." />

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-400 rounded-3xl flex items-center justify-center text-white shadow-xl mb-8 -rotate-6"
          >
            <FaStar size={36} />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 font-outfit">
             THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">THEATER</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">Our Home. Your Experience.</p>
        </div>
      </section>

      {/* ─── Section: Theater Schedule (#schedule) ────────── */}
      <section id="schedule" className="py-24 px-6 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
               <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Theater <span className="text-pink-500">Schedule</span></h2>
               <p className="text-gray-400 font-bold text-sm">Weekly Performance Calendar</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400" /> Available</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400" /> Limited</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400" /> Sold Out</span>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-4">
            {schedule.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white rounded-[1.5rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-slate-100 hover:border-pink-200 transition-all group"
              >
                 <div className="flex items-center gap-8 w-full md:w-auto">
                    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800 shrink-0">
                       <span className="text-xs font-black uppercase text-pink-500">{item.day}</span>
                       <span className="text-lg font-black leading-none">{item.date.split(' ')[1]}</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                           <FaClock size={12} className="text-gray-300" />
                           <span className="text-xs font-bold text-gray-400">{item.time} JST</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight group-hover:text-pink-600 transition-colors">{item.title}</h3>
                    </div>
                 </div>

                 <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      item.status === "Available" ? "bg-green-50 text-green-500" :
                      item.status === "Limited" ? "bg-orange-50 text-orange-500" : "bg-red-50 text-red-500"
                    }`}>
                       {item.status}
                    </span>
                    <button className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                      item.status === "Sold Out" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    }`}>
                       {item.status === "Sold Out" ? "Full House" : "Apply Ticket"}
                    </button>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* ─── Section: Theater Guide (#guide) ─────────────── */}
      <section id="guide" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60" />
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Guide Info */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">Theater <span className="text-orange-500">Guide</span></h2>
                  <p className="text-slate-500 font-bold leading-relaxed">
                     To ensure everyone has a great time, please read our visitor guidelines before your first visit. Our theater is a sacred place for fans and members alike.
                  </p>
               </div>

               <div className="space-y-6">
                  {[
                    { icon: <FaInfoCircle />, title: "ID Check", desc: "Please bring a valid photo ID. Tickets are non-transferable." },
                    { icon: <FaTicketAlt />, title: "Ticket Exchange", desc: "Exchange your confirmation for a physical ticket 30 mins before." },
                    { icon: <FaStar />, title: "Rules", desc: "Photography and recording are strictly prohibited during shows." }
                  ].map((guide, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                       <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 text-2xl group-hover:scale-110 transition-transform">
                          {guide.icon}
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-1">{guide.title}</h4>
                          <p className="text-xs font-bold text-gray-400 leading-relaxed">{guide.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Access/Map */}
            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative shadow-2xl">
               <div className="mb-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-pink-500">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Access & Location</h3>
                    <p className="text-xs font-bold text-gray-400">H5-R Theater, Akihabara District</p>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="aspect-video w-full bg-slate-200 rounded-3xl overflow-hidden relative group">
                     {/* Placeholder for Map */}
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700">
                        <FaMapMarkerAlt className="text-pink-500 text-5xl drop-shadow-lg animate-bounce" />
                        <span className="mt-4 text-[10px] font-black text-white uppercase tracking-[0.4em]">Map View</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-6 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
                        <FaTrain className="text-cyan-500" />
                        <div>
                           <p className="text-[10px] font-black text-slate-800 uppercase mb-1">By Train</p>
                           <p className="text-[10px] font-bold text-gray-400">5 min walk from Akihabara St. (JR Yamanote Line)</p>
                        </div>
                     </div>
                     <div className="p-6 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
                        <FaBus className="text-purple-500" />
                        <div>
                           <p className="text-[10px] font-black text-slate-800 uppercase mb-1">By Bus</p>
                           <p className="text-[10px] font-bold text-gray-400">Sudacho Bus Stop (Terminal 3)</p>
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
