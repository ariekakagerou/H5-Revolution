import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaDotCircle, FaUsers, FaLock, FaGlobe, FaTicketAlt, FaTv, FaHistory } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Shows Page Component
 * For Online Concerts and Virtual Theater streaming.
 */
const Shows = () => {
  const onlineShows = [
    { id: 1, title: "Virtual Theater: Team A Evolution", type: "Theater", date: "LIVE NOW", visitors: "12.4k", image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80", live: true },
    { id: 2, title: "Global Online Concert 2025", type: "Concert", date: "April 25, 2025", visitors: "--", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", live: false },
    { id: 3, title: "Special Online Fan Meet", type: "Fan Meet", date: "May 10, 2025", visitors: "--", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", live: false }
  ];

  const archiveShows = [
    { title: "Debut Anniversary Live", date: "Jan 10, 2025", duration: "120 min" },
    { title: "Winter Special Stage", date: "Dec 25, 2024", duration: "90 min" },
    { title: "Autumn Acoustic Night", date: "Nov 15, 2024", duration: "105 min" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white pb-24">
      <SEO title="Live Shows - H5-R" description="Watch H5-Revolution online concerts and virtual theater shows from anywhere in the world." />

      {/* ─── Hero / Live Featured Show ─────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=1600&q=80" 
             className="w-full h-full object-cover" 
             alt="Live Background"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex items-center gap-2 px-4 py-1.5 bg-red-600 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 mx-auto w-fit shadow-lg shadow-red-900/40"
           >
              <FaDotCircle className="animate-pulse" /> LIVE NOW
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl font-outfit"
           >
              VIRTUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">THEATER</span>
           </motion.h1>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/60 font-bold text-sm">
                 <FaUsers className="text-pink-500" /> 12,483 Watching
              </div>
              <div className="flex items-center gap-2 text-white/60 font-bold text-sm">
                 <FaGlobe className="text-cyan-400" /> Global Stream
              </div>
           </div>

           <button className="group relative px-12 py-5 bg-white text-slate-900 font-black rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all uppercase text-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity" />
              <FaPlay /> Enter Virtual Stage
           </button>
        </div>
      </section>

      {/* ─── Online Shows List ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
         <div className="flex items-center justify-between mb-12">
            <div>
               <h2 className="text-3xl font-black uppercase tracking-tight">Upcoming <span className="text-pink-500">Streams</span></h2>
               <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">Get your online passes ready</p>
            </div>
            <FaTv className="text-4xl text-slate-800" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineShows.map((show) => (
              <motion.div 
                key={show.id}
                whileHover={{ y: -10 }}
                className="bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 group"
              >
                 <div className="relative aspect-video">
                    <img src={show.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={show.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 flex gap-2">
                       <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest">
                          {show.type}
                       </span>
                    </div>
                    {show.live && (
                       <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg text-[10px] font-black uppercase tracking-widest animate-pulse">
                          Live Now
                       </div>
                    )}
                 </div>
                 <div className="p-8">
                    <p className="text-pink-500 font-black text-[10px] tracking-[0.3em] uppercase mb-2">{show.date}</p>
                    <h3 className="text-xl font-black mb-6 line-clamp-2">{show.title}</h3>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2 text-slate-400 text-xs font-bold font-mono">
                          <FaUsers /> {show.visitors}
                       </div>
                       <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-all group/btn">
                          Buy Pass <FaTicketAlt className="group-hover/btn:rotate-12 transition-transform" />
                       </button>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* ─── Archive / VOD Section ─────────────────────────── */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
               <FaHistory className="text-2xl text-orange-500" />
               <h2 className="text-3xl font-black uppercase tracking-tight">Show <span className="text-orange-500">Archive</span></h2>
               <div className="flex-1 h-[1px] bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {archiveShows.map((arch, i) => (
                 <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group hover:border-pink-500/50 transition-all">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                          <FaPlay size={14} />
                       </div>
                       <div>
                          <h4 className="font-black text-sm uppercase tracking-tight mb-1 group-hover:text-pink-500 transition-colors">{arch.title}</h4>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{arch.date} • {arch.duration}</p>
                       </div>
                    </div>
                    <FaLock size={12} className="text-slate-700 group-hover:text-orange-400 transition-colors" />
                 </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
               <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all">
                  Load More Archives
               </button>
            </div>
         </div>
      </section>

      {/* ─── Streaming Info ────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
         <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full mx-auto mb-10" />
         <h3 className="text-xl font-bold mb-6">Experience H5-R From Anywhere</h3>
         <p className="text-slate-400 font-bold leading-relaxed mb-10">
            Our virtual platform supports 4K streaming, multi-angle camera views, and interactive fan chats. 
            Join thousands of Revolutionaries across the globe in every beat and every show.
         </p>
         <div className="flex justify-center gap-8 opacity-40">
            <span className="text-xs font-black tracking-widest uppercase">4K ULTRA HD</span>
            <span className="text-xs font-black tracking-widest uppercase">3D AUDIO</span>
            <span className="text-xs font-black tracking-widest uppercase">VR SUPPORT</span>
         </div>
      </section>

    </div>
  );
};

export default Shows;
