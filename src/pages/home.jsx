import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import EventCard from "../components/EventCard";
import { FaChevronRight, FaPlay, FaCalendarAlt, FaMusic, FaArrowRight, FaHeart, FaStar, FaChevronLeft } from "react-icons/fa";
import SEO from "../components/SEO";

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3)); // Star at April 2025
  
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const numDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  // Mock events (keyed by YYYY-MM-DD)
  const events = {
    "2025-03-14": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-15": { type: 'Special', color: 'bg-orange-400' },
    "2025-03-17": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-19": { type: 'Event', color: 'bg-yellow-400' },
    "2025-03-20": { type: 'Special', color: 'bg-orange-400' },
    "2025-03-25": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-26": { type: 'Event', color: 'bg-yellow-400' },
    "2025-03-30": { type: 'Theater', color: 'bg-pink-500' }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
         <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
            <div className="flex items-center gap-4 mb-2">
               <button onClick={prevMonth} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition-all"><FaChevronLeft size={12} /></button>
               <h2 className="text-3xl md:text-5xl font-black text-slate-800 uppercase tracking-tighter">
                  {monthNames[month]} <span className="text-pink-500">{year}</span>
               </h2>
               <button onClick={nextMonth} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition-all"><FaChevronRight size={12} /></button>
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">H5-REVOLUTION THEATER PROGRAM</p>
         </div>
         <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-300">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500" /> Theater</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400" /> Special</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400" /> Event</span>
         </div>
      </div>

      <div className="bg-white rounded-[3rem] p-4 md:p-10 border border-slate-100 shadow-2xl relative overflow-hidden">
         <div className="grid grid-cols-7 mb-6 border-b border-slate-50 pb-6">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <div key={day} className="text-center text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">{day}</div>
            ))}
         </div>

         <div className="grid grid-cols-7 gap-1 md:gap-4">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square bg-slate-50/20 rounded-2xl md:rounded-[2rem]" />
            ))}

            {Array.from({ length: numDays }).map((_, i) => {
              const dateVal = i + 1;
              const dateStr = `${year}-${month.toString().padStart(2, '0')}-${dateVal.toString().padStart(2, '0')}`;
              const event = events[dateStr];

              return (
                <div key={i} className={`relative aspect-square rounded-2xl md:rounded-[2rem] border transition-all flex items-center justify-center group/cell cursor-pointer ${
                  event ? 'border-pink-100 bg-pink-50/10 hover:bg-white hover:shadow-xl' : 'border-slate-50 bg-white hover:border-slate-200 shadow-sm'
                }`}>
                   <span className={`text-base md:text-2xl font-black font-outfit ${event ? 'text-pink-600' : 'text-slate-300'}`}>
                      {dateVal}
                   </span>
                   {event && (
                      <div className={`absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${event.color} shadow-lg`} />
                   )}
                   {event && (
                     <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden md:group-hover/cell:block z-50">
                        <div className="bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
                           H5-R {event.type}
                        </div>
                     </div>
                   )}
                </div>
              );
            })}
         </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sampleMembers = [
    {
      name: "Yuki Tanaka",
      position: "Leader & Main Vocalist",
      bio: "Passionate performer with 5 years of experience in J-Pop industry.",
      socialMedia: { twitter: "#", instagram: "#", youtube: "#" }
    },
    {
      name: "Sakura Yamamoto",
      position: "Main Dancer",
      bio: "Professional dancer specializing in contemporary and hip-hop styles.",
      socialMedia: { twitter: "#", instagram: "#" }
    },
    {
      name: "Mika Sato",
      position: "Vocalist",
      bio: "Rising star with a unique voice and charming personality.",
      socialMedia: { instagram: "#", youtube: "#" }
    }
  ];

  const latestNews = [
    { date: "09/12", title: "Amane Kisumi Health Condition Report", isNew: true },
    { date: "09/10", title: "#2J2 LAST TOUR 'Pages of You' Official Goods | Sales Start 9/14 (Sun) 20:00~", isNew: true },
    { date: "08/16", title: "[Unreleased Items] Birthday Memorial Goods | Sales Start 8/17 (Sun) 20:00~", isNew: false }
  ];

  const livePhotos = [
    { date: "2025.08.16", title: "Amane Kisumi Birthday Festival @Kawaguchi Insensity Hall" },
    { date: "2025.08.09", title: "#2J2 Live Series 'version up.30' @Zouk Tokyo" },
    { date: "2025.05.16", title: "Everyone's Happy Festival 2025 MAKE SOME NOISE! @Daikanyama UNIT" },
    { date: "2025.04.25", title: "#2J2 Live Series 'version up.27' @Zouk Tokyo" },
    { date: "2025.02.12", title: "#2J2 presents #2J2 Day ~Respect! Spotify O-EAST" }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-hidden text-gray-800">
      <SEO title="Home" description="Welcome to the official website of H5-Revolution. Experience the revolution in idol entertainment." />
      
      {/* ─── Hero Banner Section ──────────────────────────────── */}
      <section className="relative min-h-[100svh] md:h-screen md:min-h-[600px] md:max-h-[1080px] w-full flex flex-col items-center justify-start md:justify-center overflow-hidden bg-white pb-24 md:pb-0">
        
        {/* Colorful Abstract Orbs (Behind Banner) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-10 left-10 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-pink-300/30 rounded-full blur-[60px] md:blur-[100px] mix-blend-multiply animate-orb"></div>
           <div className="absolute bottom-10 right-10 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-cyan-300/30 rounded-full blur-[60px] md:blur-[100px] mix-blend-multiply animate-orb" style={{ animationDelay: '-3s' }}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-yellow-300/30 rounded-full blur-[60px] md:blur-[100px] mix-blend-multiply animate-orb" style={{ animationDelay: '-6s' }}></div>
        </div>

        {/* Mobile Banner */}
        <div className="w-full md:hidden relative pt-[80px] z-10">
          <img 
            src="/images/h5-revolution-banner.jpg" 
            alt="H5-Revolution Banner" 
            className="w-full h-auto object-contain shadow-xl shadow-pink-200" 
          />
        </div>

        {/* Desktop Banner Layer with bright gradient overlay */}
        <div 
          className="hidden md:block absolute inset-0 z-10 bg-center bg-cover bg-no-repeat" 
          style={{backgroundImage: "url('/images/h5-revolution-banner.jpg')"}}
        >
          {/* A soft bright gradient from bottom to make text legible but keep the bright feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          {/* Side colorful washes */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10"></div>
        </div>
        
        {/* Fun Overlay Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none z-10 mix-blend-overlay"></div>

        <div className="relative z-20 text-center px-6 mt-8 md:mt-20 flex-1 md:flex-none flex flex-col justify-center animate-fade-up w-full max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-5 py-2 rounded-full border border-pink-200 bg-white/60 backdrop-blur-md mx-auto shadow-sm">
            <span className="text-pink-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <FaHeart className="text-pink-400" /> The New Era Begins
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 tracking-tighter mb-4 drop-shadow-sm font-outfit uppercase break-words leading-none">
            REVOLUTION
          </h1>
          <p className="text-gray-600 text-[10px] sm:text-sm md:text-xl md:tracking-[0.5em] tracking-[0.2em] mb-12 uppercase font-bold bg-white/30 backdrop-blur-sm mx-auto px-4 py-1 rounded-lg">
            We are H5 Official Group
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="shimmer-btn w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-xl hover:shadow-pink-300/50 transition-all duration-300 uppercase">
                Watch New MV
             </button>
             <button className="w-full sm:w-auto px-10 py-4 bg-white/80 backdrop-blur-md text-pink-500 border-2 border-pink-100 font-black tracking-widest text-sm rounded-full hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2 uppercase group shadow-md shadow-pink-100">
                Discover More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* ─── Ticker Tape ──────────────────────────────────────── */}
      <div className="w-full bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 py-3 overflow-hidden flex whitespace-nowrap z-20 relative shadow-inner">
        <div className="animate-marquee flex gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-black text-sm tracking-widest uppercase text-shadow-sm">H5-Revolution First Tour 2025</span>
                <FaStar className="text-yellow-200 text-xs animate-spin-slow" />
                <span className="text-white font-black text-sm tracking-widest uppercase text-shadow-sm">Tickets On Sale Now</span>
                <FaStar className="text-yellow-200 text-xs animate-spin-slow" />
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* ─── Information / News ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tight mb-2">
              <span className="text-pink-500">LATEST</span> INFO
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {latestNews.map((news, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-pink-100 hover:border-pink-200 transition-all duration-300">
                  <div className="flex items-center gap-3 w-32 shrink-0">
                    <span className="text-orange-400 font-mono font-bold">{news.date}</span>
                    {news.isNew && (
                      <span className="bg-pink-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow-sm shadow-pink-200">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-gray-700 group-hover:text-pink-600 font-bold text-sm md:text-base transition-colors flex-1 line-clamp-2">
                    {news.title}
                  </h3>
                  <FaChevronRight className="hidden sm:block text-pink-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
              <div className="pt-4">
                 <button className="text-orange-500 text-sm font-bold tracking-widest uppercase hover:text-pink-500 flex items-center gap-2 group transition-colors">
                   View All News <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>

            {/* Featured Box */}
            <div className="bg-gradient-to-br from-pink-400 to-orange-400 p-1 rounded-2xl transition-all shadow-lg shadow-pink-200 group relative overflow-hidden hidden lg:block">
               <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
               <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 relative z-10 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 shadow-lg transition-all duration-500">
                     <FaCalendarAlt className="text-3xl text-pink-500 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 drop-shadow-sm">Upcoming Showcase</h3>
                  <p className="text-pink-50 text-sm mb-6 drop-shadow-sm font-medium">Join our exclusive fan meeting event in Tokyo.</p>
                  <button className="shimmer-btn px-6 py-2 bg-white text-pink-500 hover:text-orange-500 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md mt-auto">
                    Register
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Monthly Activity Calendar ─────────────────────────── */}
      <CalendarSection />

      {/* ─── Members Highlight ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-100 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black text-gray-800 uppercase tracking-tight mb-2">
                MEET THE <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">MEMBERS</span>
              </h2>
            </div>
            <Link to="/members" className="w-fit text-cyan-600 hover:text-pink-500 text-sm font-bold tracking-widest uppercase flex items-center gap-2 group transition-colors">
              Explore Profiles <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 box-content">
            {sampleMembers.map((member, index) => (
              <div key={index} className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center transform hover:-translate-y-2 transition-transform duration-300">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Live Photos Gallery ──────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tight mb-4">
              LIVE <span className="text-cyan-500">MOMENTS</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-wide">Capturing the energy of H5-Revolution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {livePhotos.map((photo, index) => (
              <div key={index} className={`group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-72 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 ${index === 0 || index === 2 ? 'lg:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gray-100">
                   {/* Placeholder for real images */}
                   <div className="w-full h-full bg-gradient-to-br from-pink-100 to-cyan-100 flex items-center justify-center">
                     <FaHeart className="text-white/50 text-4xl group-hover:scale-125 transition-transform duration-500" />
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <div className="inline-block bg-pink-500 text-white text-[10px] font-black px-2 py-1 rounded mb-2 uppercase shadow-sm">
                     LIVE
                   </div>
                   <p className="text-cyan-300 font-mono text-xs mb-1">{photo.date}</p>
                   <h3 className="text-white font-bold text-sm line-clamp-2">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Fan Club Call to Action ───────────────────────────── */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-cyan-100 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-pink-200 hover:scale-110 transition-transform duration-500 border border-pink-100">
             <FaMusic className="text-3xl text-pink-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-800 uppercase tracking-tighter mb-6">
            Join the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Revolution</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto">
            Become an official member. Get exclusive access to behind-the-scenes content, early ticket sales, and special merchandise.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="shimmer-btn w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black tracking-widest text-sm rounded-full hover:scale-105 shadow-xl shadow-pink-200 transition-all duration-300 uppercase">
              Join Fan Club
            </button>
            <Link to="/shop" className="w-full sm:w-auto px-10 py-5 bg-white text-pink-500 font-black tracking-widest text-sm rounded-full border border-pink-200 hover:bg-pink-50 hover:shadow-lg transition-all duration-300 uppercase text-center text-nowrap">
              Visit Store
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;