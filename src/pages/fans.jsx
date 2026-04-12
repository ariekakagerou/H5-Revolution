import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaTrophy, FaComments, FaImage, FaAward, FaUsers, FaUnlockAlt, FaTshirt, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Fans Component
 * Redesigned Fan Club page based on the user-provided layout.
 * Includes Join Form, Fan of the Month, Fan Art Showcase, and Forum sections.
 */
const Fans = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const forumPosts = [
    { id: 1, title: "Fanart Showcase ideas!", icon: <FaImage className="text-yellow-400" /> },
    { id: 2, title: "Best H5-R Concert Moments?", icon: <FaHeart className="text-pink-400" /> },
    { id: 3, title: "What H5-R Songs Do You Love!", icon: <FaComments className="text-orange-400" /> },
  ];

  const fanArt = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pb-12">
      <SEO title="Fan Club" description="Join the official H5-Revolution Fan Club and get exclusive rewards." />

      {/* ── Background Elements ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ── Breadcrumb ── */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <span className="hover:text-pink-500 cursor-pointer transition-colors">Home</span>
           <span className="text-gray-300">•</span>
           <span className="text-pink-500">Fans</span>
        </nav>

        {/* ── Hero Section (Join FanClub) ────────────────────── */}
        <section className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200 overflow-hidden mb-12">
           <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Left Content: Form */}
              <div className="lg:col-span-5 p-10 md:p-14">
                 <div className="mb-8 relative">
                    <h1 className="text-5xl font-black text-gray-800 leading-tight mb-3 tracking-tighter">
                       Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Fanclub!</span>
                    </h1>
                    <p className="text-gray-500 font-bold tracking-wide">Get Exclusive Updates & Rewards!</p>
                    <div className="absolute -top-6 -right-10 text-orange-200 opacity-40 hidden md:block">
                       <FaStar size={40} className="animate-pulse" />
                    </div>
                 </div>

                 <form className="space-y-4 mb-10">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all font-medium"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all font-medium"
                    />
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                       Join Now <FaChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </form>

                 <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: <FaUnlockAlt className="text-yellow-400" />, label: "Exclusive Content", desc: "Unlock All Access" },
                      { icon: <FaTshirt className="text-orange-400" />, label: "Merchandise", desc: "Exclusive Content" },
                      { icon: <FaCalendarAlt className="text-pink-400" />, label: "Fan Events", desc: "Full Exclusive only" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col items-start gap-2 group hover:border-pink-200 transition-colors">
                         <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
                            {item.icon}
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight leading-none mb-1">{item.label}</p>
                            <p className="text-[8px] font-bold text-slate-400 truncate">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Right Content: Photo */}
              <div className="lg:col-span-7 h-full relative min-h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1000&q=80" 
                   alt="H5-Revolution Group" 
                   className="w-full h-full object-cover"
                 />
                 {/* Decorative floating sparkles */}
                 <div className="absolute top-10 left-10 text-yellow-300 animate-pulse"><FaStar size={20} /></div>
                 <div className="absolute bottom-20 right-20 text-white animate-pulse delay-1000"><FaStar size={14} /></div>
              </div>
           </div>
        </section>

        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           
           {/* Left Content Column (Activities) */}
           <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-3 mb-2">
                 <h2 className="text-3xl font-black text-slate-800 tracking-tight">Fan Activities</h2>
                 <FaStar className="text-yellow-400 animate-pulse" />
              </div>

              {/* Fan Art Showcase */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <h3 className="text-xl font-black text-slate-800">Fan Art Showcase</h3>
                       <FaStar className="text-orange-300 text-xs" />
                       <p className="text-slate-400 text-xs font-bold hidden md:block">Share and admire amazing fan art created by our talented fans!</p>
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[10px] font-black rounded-lg shadow-md hover:scale-105 transition-all uppercase flex items-center gap-2">
                       View All <FaChevronRight size={10} />
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {fanArt.map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                         <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Photo Contests & Community */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Photo Contests */}
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                       <FaImage className="text-pink-400" />
                       <h3 className="text-xl font-black text-slate-800">Photo Contests</h3>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                          <img src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=200&q=80" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                          <h4 className="font-black text-slate-800 text-sm mb-1 leading-tight">Fan Night in Tokyo Contest</h4>
                          <p className="text-[10px] font-bold text-slate-400 mb-2">June 10-20, 2024</p>
                          <p className="text-[10px] font-medium text-slate-500 leading-relaxed line-clamp-2">Share your best concert photo for a chances to win exclusive H5-R merchandise!</p>
                       </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                       <button className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[10px] font-black rounded-lg shadow-md hover:scale-105 transition-all uppercase flex items-center gap-2">
                          Submit Photos <FaChevronRight size={10} />
                       </button>
                    </div>
                 </div>

                 {/* Fan Community */}
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                       <FaUsers className="text-cyan-400" />
                       <h3 className="text-xl font-black text-slate-800">Fan Community</h3>
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4 shadow-sm">
                       <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&q=80" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Column (Sidebar) */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Fan of the Month */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-black text-slate-800">Fan of the Month</h3>
                    <FaTrophy className="text-yellow-400 drop-shadow-sm animate-bounce" />
                 </div>
                 
                 <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 mb-6 border border-slate-100">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                       <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-slate-400">June 2024</p>
                       <h4 className="text-xl font-black text-slate-800 flex items-center gap-2">Emiko <FaStar className="text-yellow-400 text-xs" /></h4>
                       <p className="text-[10px] font-bold text-slate-300">@Emiko-R</p>
                    </div>
                 </div>

                 <p className="text-xs font-medium text-slate-500 leading-relaxed mb-8">
                    Congratulations Emiko for being an amazing H5-R superfan! 💖 Thank you for your incredible support and contributions to the fan community!
                 </p>

                 <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs uppercase group">
                    View Hall of Fame <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              {/* Forum Posts */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                 <h3 className="text-lg font-black text-slate-800 mb-6 uppercase tracking-tight">Forum Posts</h3>
                 <div className="space-y-4">
                    {forumPosts.map((post) => (
                       <div key={post.id} className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
                          <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">{post.icon}</div>
                          <span className="text-xs font-bold text-slate-700 group-hover:text-pink-500 transition-colors uppercase">{post.title}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Recent Forum Posts */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Recent Forum Posts</h3>
                    <FaStar className="text-orange-300 text-xs animate-pulse" />
                 </div>
                 <div className="space-y-4 mb-8">
                    {forumPosts.map((post) => (
                       <div key={post.id} className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                             <span className="text-[10px] font-bold text-slate-600 group-hover:text-pink-500 transition-colors uppercase">{post.title}</span>
                          </div>
                          <FaChevronRight size={8} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                       </div>
                    ))}
                 </div>
                 <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs uppercase group">
                    View Hall of Fame <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

           </div>

        </div>

        {/* ── Footer decorative ── */}
        <div className="mt-20 flex flex-col items-center gap-4 text-slate-200">
           <div className="flex gap-12">
              <FaStar size={16} />
              <FaStar size={24} className="mt-4" />
              <FaStar size={18} />
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.5em]">H5-Revolution Official Community</p>
        </div>

      </div>
    </div>
  );
};

export default Fans;