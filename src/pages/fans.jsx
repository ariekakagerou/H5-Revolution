import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaTrophy, FaComments, FaImage, FaAward, FaUsers, FaUnlockAlt, FaTshirt, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Fans Component
 * Dark Cyber-Idol Fan Community & Official Fan Club.
 */
const Fans = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const forumPosts = [
    { id: 1, title: "Next Tour Lightstick Sync Ideas!", icon: <FaImage className="text-pink-400" /> },
    { id: 2, title: "Best H5-R Concert Solo Moments?", icon: <FaHeart className="text-pink-400" /> },
    { id: 3, title: "What Songs Should Be on the New Album?", icon: <FaComments className="text-orange-400" /> },
  ];

  const fanArt = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white relative overflow-hidden pt-28 pb-20">
      <SEO title="Fan Club" description="Join the official H5-Revolution Fan Club and get exclusive rewards." />

      {/* Ambient background glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        
        {/* ── Breadcrumb ── */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-white/40 uppercase tracking-widest">
           <span>Home</span>
           <span>/</span>
           <span className="text-pink-400">Fans Community</span>
        </nav>

        {/* ── Hero Section (Join FanClub) ────────────────────── */}
        <section className="bg-[#12082a]/90 backdrop-blur-xl rounded-sm border border-white/10 shadow-2xl overflow-hidden mb-12">
           <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Left Content: Form */}
              <div className="lg:col-span-5 p-8 md:p-12">
                 <div className="mb-6">
                    <div className="badge-idol mb-3">Official Community</div>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2 uppercase tracking-tighter">
                       Join the <span className="text-idol">Fanclub!</span>
                    </h1>
                    <p className="text-white/50 text-sm font-medium">Get Exclusive Live Updates & Priority Pass!</p>
                 </div>

                 <form className="space-y-3 mb-8" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/[0.04] rounded-sm border border-white/10 focus:outline-none focus:border-pink-500/60 text-white placeholder-white/30 text-xs font-medium"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/[0.04] rounded-sm border border-white/10 focus:outline-none focus:border-pink-500/60 text-white placeholder-white/30 text-xs font-medium"
                    />
                    <button className="shimmer-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black py-4 rounded-sm flex items-center justify-center gap-2 shadow-idol-pink uppercase tracking-[0.2em] text-xs hover:scale-[1.01] transition-all">
                       Join Now <FaChevronRight size={11} />
                    </button>
                 </form>

                 <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <FaUnlockAlt className="text-pink-400" />, label: "Exclusive Access", desc: "Digital Backstage" },
                      { icon: <FaTshirt className="text-orange-400" />, label: "Member Merch", desc: "Priority Drops" },
                      { icon: <FaCalendarAlt className="text-cyan-400" />, label: "Live Events", desc: "Pre-sale Lottery" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-white/[0.02] rounded-sm border border-white/5 flex flex-col items-start gap-1.5 hover:border-pink-500/30 transition-colors">
                         <div className="p-1.5 bg-white/5 rounded-sm">
                            {item.icon}
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-tight leading-none mb-0.5">{item.label}</p>
                            <p className="text-[8px] text-white/40 truncate font-mono">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Right Content: Photo */}
              <div className="lg:col-span-7 h-full relative min-h-[420px] overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1000&q=80" 
                   alt="H5-Revolution Stage" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#12082a] via-transparent to-transparent hidden lg:block" />
              </div>
           </div>
        </section>

        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           
           {/* Left Content Column (Activities) */}
           <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 mb-1">
                 <h2 className="text-2xl font-black text-white uppercase tracking-tight">Fan Activities</h2>
                 <FaStar className="text-pink-400" size={14} />
              </div>

              {/* Fan Art Showcase */}
              <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-6 border border-white/10 shadow-lg">
                 <div className="flex items-center justify-between mb-6">
                    <div>
                       <h3 className="text-lg font-black text-white uppercase tracking-tight">Fan Art Showcase</h3>
                       <p className="text-white/40 text-xs hidden md:block mt-1">Creative artwork by Revolutionaries worldwide</p>
                    </div>
                    <button className="px-4 py-2 bg-white/5 border border-white/10 hover:border-pink-500/40 text-pink-300 text-[10px] font-black rounded-sm uppercase tracking-widest flex items-center gap-1.5 transition-all">
                       View All <FaChevronRight size={8} />
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {fanArt.map((img, i) => (
                      <div key={i} className="aspect-square rounded-sm overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all cursor-pointer group">
                         <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fan art" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Photo Contests & Community */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Photo Contests */}
                 <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-6 border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                         <FaImage className="text-pink-400" />
                         <h3 className="text-base font-black text-white uppercase tracking-tight">Photo Contests</h3>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                            <img src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=200&q=80" className="w-full h-full object-cover" alt="Contest" />
                         </div>
                         <div className="flex-1">
                            <h4 className="font-bold text-white text-xs mb-1 uppercase tracking-tight">Concert Lightstick Snap</h4>
                            <p className="text-[10px] font-mono text-pink-400 mb-1.5">Ends in 5 Days</p>
                            <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2">Submit your best stage cheering photo to win autographed merchandise!</p>
                         </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                       <button className="shimmer-btn px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] font-black rounded-sm uppercase tracking-widest flex items-center gap-1.5">
                          Submit Photo <FaChevronRight size={8} />
                       </button>
                    </div>
                 </div>

                 {/* Fan Community */}
                 <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-6 border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                         <FaUsers className="text-cyan-400" />
                         <h3 className="text-base font-black text-white uppercase tracking-tight">Global Community</h3>
                      </div>
                      <div className="rounded-sm overflow-hidden aspect-[16/9] mb-3 border border-white/10">
                         <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&q=80" className="w-full h-full object-cover" alt="Community" />
                      </div>
                    </div>
                    <p className="text-xs text-white/50">Connect with over 50,000 active fans in official chat rooms.</p>
                 </div>
              </div>
           </div>

           {/* Right Column (Sidebar) */}
           <div className="lg:col-span-4 space-y-6">
              
              {/* Fan of the Month */}
              <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-6 border border-white/10 relative">
                 <div className="flex items-center justify-between mb-5">
                    <h3 className="text-base font-black text-white uppercase tracking-tight">Fan of the Month</h3>
                    <FaTrophy className="text-amber-400" />
                 </div>
                 
                 <div className="bg-white/[0.03] rounded-sm p-3.5 flex items-center gap-4 mb-4 border border-white/5">
                    <div className="w-14 h-14 rounded-sm overflow-hidden border border-pink-500/40 shrink-0">
                       <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" className="w-full h-full object-cover" alt="Emiko" />
                    </div>
                    <div>
                       <p className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">October 2026</p>
                       <h4 className="text-base font-black text-white flex items-center gap-1.5">Emiko <FaStar className="text-amber-400 text-xs" /></h4>
                       <p className="text-[10px] font-mono text-white/40">@Emiko-R</p>
                    </div>
                 </div>

                 <p className="text-xs text-white/60 leading-relaxed mb-6">
                    Congratulations Emiko for attending all 12 theater shows this month! Thank you for your loyal devotion to H5-R!
                 </p>

                 <button className="shimmer-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black py-3 rounded-sm flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                    Hall of Fame <FaChevronRight size={10} />
                 </button>
              </div>

              {/* Forum Posts */}
              <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-6 border border-white/10">
                 <h3 className="text-sm font-black text-white mb-5 uppercase tracking-wider font-mono">Forum Discussions</h3>
                 <div className="space-y-2.5">
                    {forumPosts.map((post) => (
                       <div key={post.id} className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-sm transition-all border border-transparent hover:border-white/5">
                          <div className="p-1.5 bg-white/5 rounded-sm shrink-0">{post.icon}</div>
                          <span className="text-xs font-bold text-white/80 hover:text-pink-300 transition-colors line-clamp-1">{post.title}</span>
                       </div>
                    ))}
                 </div>
              </div>

           </div>

        </div>

        {/* ── Footer decorative ── */}
        <div className="mt-16 flex flex-col items-center gap-3 text-white/20">
           <div className="flex gap-8">
              <FaStar size={12} />
              <FaStar size={16} className="mt-2 text-pink-400/30" />
              <FaStar size={12} />
           </div>
           <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">H5-Revolution Official Fan Community</p>
        </div>

      </div>
    </div>
  );
};

export default Fans;
