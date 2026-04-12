import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaChevronRight, FaStar, FaTicketAlt, FaShieldAlt, FaUnlockAlt, FaTshirt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Tickets Component
 * Redesigned Ticket purchase page based on the user-provided layout.
 * Includes Search filters, Event List, and Order Summary sidebar.
 */
const Tickets = () => {
  const [activeMonth, setActiveMonth] = useState("May 2022");
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      title: "Summer Live Concert",
      date: "May 21, 2022",
      location: "Tokyo Dome, Tokyo, Japan",
      type: "Standard",
      price: "¥5,500",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80",
    },
    {
      id: 2,
      title: "Fan Meet & Greet",
      date: "June 05, 2022",
      location: "Akihabara Hall, Tokyo, Japan",
      type: "Early Entry",
      price: "¥12,000",
      image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=400&q=80",
    },
    {
      id: 3,
      title: "Special Mini Live",
      date: "June 25, 2022",
      location: "Osaka, Japan",
      type: "Free Entry",
      price: "¥30,000",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pb-12">
      <SEO title="Get Tickets" description="Secure your tickets for H5-Revolution concerts and fan meetings." />

      {/* ── Background Elements ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ── Breadcrumb ── */}
        <nav className="mb-4 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <span className="hover:text-pink-500 cursor-pointer transition-colors">Home</span>
           <span className="text-gray-300">•</span>
           <span className="text-pink-500">Tickets</span>
        </nav>

        {/* ── Hero Section ────────────────────────────────── */}
        <section className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200 overflow-hidden mb-8 relative">
           <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 p-10 md:p-14 lg:pr-20">
                 <div className="mb-10 relative">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-800 leading-tight mb-4 tracking-tighter">
                       Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Tickets!</span>
                       <span className="inline-block ml-3 text-yellow-300"><FaStar size={24} className="animate-pulse" /></span>
                    </h1>
                    <p className="text-gray-500 font-bold tracking-wide">Don't miss out on H5-R's exciting concerts and fan meets!</p>
                 </div>

                 {/* Filters Bar */}
                 <div className="flex flex-wrap items-center gap-4">
                    <div className="relative flex-1 min-w-[200px]">
                       <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input 
                         type="text" 
                         placeholder="Search events..." 
                         className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all font-medium text-sm"
                       />
                    </div>
                    <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 overflow-hidden">
                       {["Upcoming", "May 2022", "June 2022"].map((tab) => (
                         <button
                           key={tab}
                           onClick={() => setActiveMonth(tab)}
                           className={`px-4 py-3 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                             activeMonth === tab ? "bg-white text-pink-600 shadow-sm" : "text-gray-500 hover:bg-white/50"
                           }`}
                         >
                           {tab}
                         </button>
                       ))}
                    </div>
                    <select className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 focus:outline-none text-xs font-bold text-gray-500">
                       <option>All Locations</option>
                       <option>Tokyo</option>
                       <option>Osaka</option>
                    </select>
                 </div>
              </div>
              
              <div className="lg:col-span-4 h-full hidden lg:block border-l border-slate-50">
                 <img 
                   src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80" 
                   className="w-full h-full object-cover" 
                 />
              </div>
           </div>
        </section>

        {/* ── Sub Hero Action ── */}
        <div className="flex justify-center mb-12">
           <button className="px-14 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black rounded-full flex items-center justify-center gap-2 shadow-xl shadow-orange-100 hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <FaTicketAlt /> Buy Tickets Now <FaChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           
           {/* Left Content: Ticket List */}
           <div className="lg:col-span-8 space-y-6">
              {events.map((event) => (
                 <motion.div 
                   key={event.id}
                   whileHover={{ scale: 1.01 }}
                   className="bg-white/90 backdrop-blur-md rounded-[2rem] p-4 flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-slate-100 hover:border-pink-200 transition-all group relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-transparent -z-10 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors" />
                    
                    <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                       <img src={event.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                       <h3 className="text-xl font-black text-slate-800 mb-2 truncate group-hover:text-pink-600 transition-colors uppercase tracking-tight">{event.title}</h3>
                       <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1 text-slate-400 text-xs font-bold mb-4 justify-center sm:justify-start">
                          <span className="flex items-center gap-1"><FaCalendarAlt className="text-orange-400" /> {event.date}</span>
                          <span className="hidden sm:inline opacity-50">•</span>
                          <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-pink-400" /> {event.location}</span>
                       </div>
                       <div className="flex items-center gap-3 justify-center sm:justify-start">
                          <div className="px-4 py-1.5 bg-yellow-400/10 text-yellow-600 rounded-lg text-[10px] font-black uppercase flex items-center gap-2">
                             <FaStar size={10} /> {event.type}
                          </div>
                          <span className="text-xs font-bold text-slate-400">From <span className="text-slate-800">{event.price}</span></span>
                       </div>
                    </div>

                    <div className="w-full sm:w-auto">
                       <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all group/btn">
                          Buy Tickets <FaChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </motion.div>
              ))}
           </div>

           {/* Right Content: Sidebar */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Order Summary */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Order Summary</h3>
                    <FaStar className="text-orange-300 text-xs animate-pulse" />
                 </div>
                 
                 <div className="space-y-4 mb-10 pb-6 border-b border-slate-50">
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-xs font-black text-slate-800 mb-1">Summer Live Concert</p>
                          <p className="text-[10px] font-bold text-slate-400 italic">2 x VIP Pass</p>
                       </div>
                       <span className="text-xs font-black text-slate-800">¥24,000</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-black text-slate-400">Subtotal</span>
                    <span className="text-2xl font-black text-slate-800 tracking-tighter">¥24,000</span>
                 </div>

                 <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                    Proceed to Checkout <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 
                 <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-[10px] font-bold">
                    <FaShieldAlt className="text-cyan-400" /> Secure payment
                    <div className="flex gap-1 ml-1 opacity-60">
                       <span className="w-6 h-4 bg-slate-200 rounded-sm"></span>
                       <span className="w-6 h-4 bg-slate-200 rounded-sm"></span>
                    </div>
                 </div>
              </div>

              {/* Join Fanclub Sidebar Widget */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group">
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-50 rounded-full blur-3xl -z-10 group-hover:bg-pink-100 transition-colors" />
                 <h3 className="text-lg font-black text-slate-800 mb-8 uppercase tracking-tight flex items-center gap-2">
                    Join The Fanclub! <FaStar className="text-yellow-400 text-xs" />
                 </h3>
                 <div className="space-y-6 mb-10">
                    {[
                      { icon: <FaUnlockAlt className="text-yellow-400" />, label: "Exclusive Content" },
                      { icon: <FaTshirt className="text-orange-400" />, label: "Merchandise" },
                      { icon: <FaCalendarAlt className="text-pink-400" />, label: "Fan Events" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                         <div className="p-2 bg-slate-50 rounded-lg group-hover/item:scale-110 transition-transform">{item.icon}</div>
                         <span className="text-xs font-black text-slate-600 uppercase tracking-tight">{item.label}</span>
                      </div>
                    ))}
                 </div>
                 <div className="flex gap-2 mb-8 opacity-40 justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" />
                 </div>
              </div>

           </div>
        </div>

        {/* ── Bottom Section ────────────────────────────── */}
        <div className="mt-16 bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start">
              <div className="text-left">
                 <h4 className="text-2xl font-black text-slate-800 mb-1">Fan Activities</h4>
                 <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>
              </div>
              <div className="flex items-center gap-10">
                 <div className="flex items-center gap-3">
                    <FaUnlockAlt className="text-yellow-400 text-xl" />
                    <div>
                      <p className="text-[10px] font-black text-slate-800 leading-none mb-1">Exclusive Content</p>
                      <p className="text-[8px] font-bold text-slate-400">View, share and collect passes</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <FaTshirt className="text-orange-400 text-xl" />
                    <div>
                      <p className="text-[10px] font-black text-slate-800 leading-none mb-1">Merchandise</p>
                      <p className="text-[8px] font-bold text-slate-400">Exclusive Merchandise</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-pink-400 text-xl" />
                    <div>
                      <p className="text-[10px] font-black text-slate-800 leading-none mb-1">Fan Events</p>
                      <p className="text-[8px] font-bold text-slate-400">Meet & signed poster</p>
                    </div>
                 </div>
              </div>
           </div>
           <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all uppercase text-xs">
              View Now <FaChevronRight size={10} />
           </button>
        </div>

        {/* Final Small FanClub box */}
        <div className="mt-8 flex justify-end">
           <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-8 shadow-sm border border-slate-100">
              <div className="flex flex-col gap-1">
                 <h5 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Join The Fanclub!</h5>
                 <div className="flex gap-4 text-[8px] font-bold text-slate-400">
                    <span>Exclusive Content</span>
                    <span>Merchandise</span>
                    <span>Fan Events</span>
                 </div>
              </div>
              <button className="bg-yellow-400 text-white font-black px-6 py-2 rounded-lg text-[10px] hover:bg-orange-400 transition-colors uppercase">
                 Join Now <FaChevronRight size={8} className="inline ml-1" />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Tickets;
