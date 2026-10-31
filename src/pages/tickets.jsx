import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChevronRight, FaStar, FaTicketAlt, FaShieldAlt, FaUnlockAlt, FaTshirt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Tickets Component
 * Dark Cyber-Idol Ticket Reservation & Passes.
 */
const Tickets = () => {
  const [activeMonth, setActiveMonth] = useState("Upcoming");
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      title: "Summer Live Concert 2026",
      date: "May 21, 2026",
      location: "Tokyo Dome, Tokyo, Japan",
      type: "Standard Pass",
      price: "¥5,500",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80",
    },
    {
      id: 2,
      title: "Exclusive Fan Meet & Greet",
      date: "June 05, 2026",
      location: "Akihabara Hall, Tokyo, Japan",
      type: "VIP Early Entry",
      price: "¥12,000",
      image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=400&q=80",
    },
    {
      id: 3,
      title: "Special Mini Live Stage",
      date: "June 25, 2026",
      location: "Osaka Arena, Japan",
      type: "Front Row Stage",
      price: "¥18,000",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white relative overflow-hidden pt-24 sm:pt-28 pb-20">
      <SEO title="Get Tickets" description="Secure your tickets for H5-Revolution concerts and fan meetings." />

      {/* Ambient background glows */}
      <div className="absolute top-20 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        
        {/* ── Breadcrumb ── */}
        <nav className="mb-4 flex items-center gap-2 text-xs font-mono font-bold text-white/40 uppercase tracking-widest">
          <span>Home</span>
          <span>/</span>
          <span className="text-pink-400">Tickets</span>
        </nav>

        {/* ── Hero Section ────────────────────────────────── */}
        <section className="bg-[#12082a]/90 backdrop-blur-xl rounded-sm border border-white/10 shadow-2xl overflow-hidden mb-6 sm:mb-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 p-5 sm:p-8 md:p-12 lg:pr-16">
              <div className="mb-6 sm:mb-8">
                <div className="badge-idol mb-3">Live Box Office</div>
                {/* Responsive heading */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-2 tracking-tighter uppercase">
                  Get Your <span className="text-idol">Tickets!</span>
                </h1>
                <p className="text-white/50 text-xs sm:text-sm font-medium">Don't miss out on H5-Revolution's electrifying cyber concerts & live showcases!</p>
              </div>

              {/* Filters Bar — wraps on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1 min-w-0">
                  <FaSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-white/40" size={12} />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events..." 
                    className="w-full pl-9 sm:pl-11 pr-4 py-3 bg-white/[0.04] rounded-sm border border-white/10 focus:outline-none focus:border-pink-500/50 text-white placeholder-white/30 text-xs font-medium"
                  />
                </div>
                {/* Tab filters: horizontal scroll on mobile */}
                <div className="flex bg-white/[0.03] p-1 rounded-sm border border-white/10 overflow-x-auto no-scrollbar shrink-0">
                  {["Upcoming", "May 2026", "June 2026"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveMonth(tab)}
                      className={`px-3 sm:px-3.5 py-2 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                        activeMonth === tab ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-sm" : "text-white/50 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 h-full hidden lg:block border-l border-white/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80" 
                className="w-full h-full object-cover" 
                alt="Concert stage"
              />
            </div>
          </div>
        </section>

        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Content: Ticket List */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {events.map((event) => (
              <motion.div 
                key={event.id}
                whileHover={{ y: -3 }}
                className="bg-[#12082a]/80 backdrop-blur-md rounded-sm border border-white/10 hover:border-pink-500/50 transition-all group relative overflow-hidden shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 sm:gap-6 p-4 sm:p-5">
                  {/* Event Image */}
                  <div className="w-full sm:w-44 h-44 sm:h-28 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={event.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} />
                  </div>

                  {/* Event Info */}
                  <div className="flex-1 pt-3 sm:pt-0">
                    <h3 className="text-sm sm:text-base font-black text-white mb-1.5 group-hover:text-pink-300 transition-colors uppercase tracking-tight line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-white/50 text-xs font-mono mb-3">
                      <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-pink-400 shrink-0" size={10} /> {event.date}</span>
                      <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-cyan-400 shrink-0" size={10} /> {event.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-sm text-[9px] font-black uppercase tracking-widest">
                        {event.type}
                      </span>
                      {/* Price — clearly legible */}
                      <span className="text-xs font-mono font-bold text-white/60">
                        From <span className="text-pink-400 font-black text-sm">{event.price}</span>
                      </span>
                    </div>
                  </div>

                  {/* CTA — full width on mobile */}
                  <div className="w-full sm:w-auto pt-3 sm:pt-0 shrink-0">
                    <button className="shimmer-btn w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-sm flex items-center justify-center gap-2 shadow-idol-pink uppercase tracking-widest text-xs">
                      Buy Pass <FaChevronRight size={9} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Content: Sidebar */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            
            {/* Order Summary */}
            <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-5 sm:p-6 border border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">Order Summary</h3>
                <FaStar className="text-pink-400 text-xs" />
              </div>
              
              <div className="space-y-3 mb-5 sm:mb-6 pb-4 border-b border-white/5">
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white mb-0.5 truncate">Summer Live Concert 2026</p>
                    <p className="text-[10px] font-mono text-pink-400">2 × VIP Pass</p>
                  </div>
                  <span className="text-xs font-mono font-black text-white shrink-0">¥24,000</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/40">Subtotal</span>
                {/* Clearly readable price */}
                <span className="text-xl sm:text-2xl font-mono font-black text-pink-400 tracking-tight">¥24,000</span>
              </div>

              <button className="shimmer-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-idol-pink text-xs uppercase tracking-widest">
                Proceed to Checkout <FaChevronRight size={10} />
              </button>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-white/30 text-[10px] font-mono uppercase tracking-wider">
                <FaShieldAlt className="text-emerald-400" /> 100% Encrypted & Verified
              </div>
            </div>

            {/* Join Fanclub Sidebar Widget */}
            <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-5 sm:p-6 border border-white/10">
              <div className="badge-idol mb-3">VIP Membership</div>
              <h3 className="text-base font-black text-white mb-4 uppercase tracking-tight">
                Join The Fanclub!
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <FaUnlockAlt className="text-pink-400" />, label: "Exclusive Backstage Streams" },
                  { icon: <FaTshirt className="text-orange-400" />, label: "Priority Merchandise Pre-order" },
                  { icon: <FaCalendarAlt className="text-cyan-400" />, label: "Official Lottery Pre-Sales" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/5 rounded-sm shrink-0">{item.icon}</div>
                    <span className="text-xs text-white/70 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Tickets;
