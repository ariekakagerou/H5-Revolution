import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaDotCircle, FaUsers, FaLock, FaGlobe, FaTicketAlt, FaTv, FaHistory } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Shows Page Component
 * Dark Cyber-Idol Virtual Stage and Online Live Streams.
 */
const Shows = () => {
  const onlineShows = [
    { id: 1, title: "Virtual Theater: Team A Evolution", type: "Theater", date: "LIVE NOW", visitors: "12.4k", image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80", live: true },
    { id: 2, title: "Global Online Concert 2026", type: "Concert", date: "April 25, 2026", visitors: "Upcoming", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", live: false },
    { id: 3, title: "Special Cyber Fan Meet", type: "Fan Meet", date: "May 10, 2026", visitors: "Upcoming", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", live: false }
  ];

  const archiveShows = [
    { title: "Debut Anniversary Live Stage", date: "Jan 10, 2026", duration: "120 min" },
    { title: "Winter Cyber Special Stage", date: "Dec 25, 2025", duration: "90 min" },
    { title: "Autumn Acoustic Night Unplugged", date: "Nov 15, 2025", duration: "105 min" }
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white pb-24 relative overflow-hidden">
      <SEO title="Live Shows - H5-R" description="Watch H5-Revolution online concerts and virtual theater shows from anywhere in the world." />

      {/* Ambient Glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Hero / Live Featured Show ─────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden border-b border-pink-900/30">
        {/* Background Video/Image */}
        <div className="absolute inset-0 opacity-30">
           <img 
             src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=1600&q=80" 
             className="w-full h-full object-cover" 
             alt="Live Background"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-[#0f0a1e]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-16">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex items-center gap-2 px-3.5 py-1 bg-red-600/90 border border-red-500/50 rounded-sm text-[10px] font-black tracking-widest uppercase mb-6 mx-auto w-fit shadow-[0_0_20px_rgba(239,68,68,0.6)]"
           >
              <FaDotCircle className="animate-pulse" size={10} /> LIVE BROADCAST
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl font-outfit"
           >
              VIRTUAL <span className="text-idol">THEATER</span>
           </motion.h1>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/70 font-mono text-xs">
                 <FaUsers className="text-pink-400" /> 12,483 Fans Streaming
              </div>
              <div className="flex items-center gap-2 text-white/70 font-mono text-xs">
                 <FaGlobe className="text-cyan-400" /> Ultra HD Global Sync
              </div>
           </div>

           <button className="shimmer-btn group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-sm flex items-center justify-center gap-3 shadow-idol-pink hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs mx-auto">
              <FaPlay size={12} /> Enter Virtual Stage
           </button>
        </div>
      </section>

      {/* ─── Online Shows List ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="flex items-center justify-between mb-12">
            <div>
               <div className="badge-idol mb-3">Live Broadcasts</div>
               <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                 Upcoming <span className="text-idol">Streams</span>
               </h2>
               <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-1">Get your digital passes ready</p>
            </div>
            <FaTv className="text-4xl text-pink-500/30" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineShows.map((show) => (
              <motion.div 
                key={show.id}
                whileHover={{ y: -6 }}
                className="bg-[#12082a]/80 backdrop-blur-md rounded-sm overflow-hidden border border-white/10 hover:border-pink-500/50 hover:shadow-idol-pink transition-all group"
              >
                 <div className="relative aspect-video overflow-hidden">
                    <img src={show.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={show.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12082a] via-[#12082a]/40 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                       <span className="px-2.5 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm text-[9px] font-black uppercase tracking-widest text-pink-300">
                          {show.type}
                       </span>
                    </div>
                    {show.live && (
                       <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 bg-red-600 rounded-sm text-[9px] font-black uppercase tracking-widest animate-pulse shadow-md">
                          Live Now
                       </div>
                    )}
                 </div>
                 <div className="p-6">
                    <p className="text-pink-400 font-mono font-bold text-[10px] tracking-[0.2em] uppercase mb-2">{show.date}</p>
                    <h3 className="text-lg font-black text-white mb-6 line-clamp-2 uppercase tracking-tight group-hover:text-pink-300 transition-colors">
                      {show.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                       <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
                          <FaUsers size={12} /> {show.visitors}
                       </div>
                       <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-all">
                          Buy Pass <FaTicketAlt size={11} />
                       </button>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* ─── Archive / VOD Section ─────────────────────────── */}
      <section className="py-20 bg-[#0b0616]/90 border-y border-pink-950/40 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-4 mb-10">
               <FaHistory className="text-2xl text-orange-400" />
               <h2 className="text-3xl font-black uppercase tracking-tight">Show <span className="text-idol">Archive</span></h2>
               <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {archiveShows.map((arch, i) => (
                 <div key={i} className="bg-white/[0.03] border border-white/5 p-5 rounded-sm flex items-center justify-between group hover:border-pink-500/40 hover:bg-pink-500/[0.03] transition-all">
                    <div className="flex items-center gap-5">
                       <div className="w-11 h-11 bg-pink-500/10 border border-pink-500/20 rounded-sm flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform shrink-0">
                          <FaPlay size={12} />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm uppercase tracking-tight mb-1 group-hover:text-pink-300 transition-colors text-white">{arch.title}</h4>
                          <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{arch.date} • {arch.duration}</p>
                       </div>
                    </div>
                    <FaLock size={12} className="text-white/20 group-hover:text-orange-400 transition-colors" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── Streaming Info ────────────────────────────────── */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center relative z-10">
         <div className="badge-idol mb-4 mx-auto inline-flex">Streaming Specs</div>
         <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Experience H5-R From Anywhere</h3>
         <p className="text-white/50 leading-relaxed mb-8 text-sm max-w-2xl mx-auto">
            Our cyber-virtual platform supports 4K HDR streaming, multi-angle camera feeds, and real-time interactive fan lightstick synchronization.
         </p>
         <div className="flex justify-center gap-8 text-white/30 font-mono text-xs font-bold uppercase tracking-widest">
            <span>4K ULTRA HD</span>
            <span>•</span>
            <span>SPATIAL AUDIO</span>
            <span>•</span>
            <span>RGB SYNC</span>
         </div>
      </section>

    </div>
  );
};

export default Shows;
