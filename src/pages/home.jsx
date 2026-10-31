import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import EventCard from "../components/EventCard";
import { FaChevronRight, FaPlay, FaCalendarAlt, FaMusic, FaArrowRight, FaHeart, FaStar, FaChevronLeft } from "react-icons/fa";
import SEO from "../components/SEO";

/* ─── Star Particles ────────────────────────────────── */
const StarField = ({ count = 40 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.7 ? 2 : 1,
    delay: `${Math.random() * 4}s`,
    duration: `${2 + Math.random() * 3}s`,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top, left: s.left,
            width: s.size, height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
};

/* ─── Calendar Section ──────────────────────────────── */
const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3));
  
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const numDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const events = {
    "2025-03-14": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-15": { type: 'Special', color: 'bg-orange-400' },
    "2025-03-17": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-19": { type: 'Event', color: 'bg-cyan-400' },
    "2025-03-20": { type: 'Special', color: 'bg-orange-400' },
    "2025-03-25": { type: 'Theater', color: 'bg-pink-500' },
    "2025-03-26": { type: 'Event', color: 'bg-cyan-400' },
    "2025-03-30": { type: 'Theater', color: 'bg-pink-500' }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Section glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/3 to-transparent pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <div className="flex items-center gap-4 mb-3">
            <button 
              onClick={prevMonth} 
              className="w-10 h-10 rounded-sm border border-pink-500/30 flex items-center justify-center text-pink-400/60 hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/60 transition-all"
            >
              <FaChevronLeft size={12} />
            </button>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {monthNames[month]} <span className="text-idol">&gt;{year}</span>
            </h2>
            <button 
              onClick={nextMonth} 
              className="w-10 h-10 rounded-sm border border-pink-500/30 flex items-center justify-center text-pink-400/60 hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/60 transition-all"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
          <p className="text-pink-400/40 font-bold uppercase tracking-[0.4em] text-[10px]">H5-REVOLUTION THEATER PROGRAM</p>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500 shadow-idol-pink" /> Theater</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400 shadow-idol-orange" /> Special</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400 shadow-idol-cyan" /> Event</span>
        </div>
      </div>

      <div className="glass-idol rounded-2xl p-4 md:p-10 relative overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-pink-500/40" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-pink-500/40" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-pink-500/40" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-pink-500/40" />

        <div className="grid grid-cols-7 mb-6 border-b border-white/5 pb-6">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="text-center text-[10px] md:text-xs font-black text-white/25 uppercase tracking-widest">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-3">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square rounded-sm opacity-10" />
          ))}

          {Array.from({ length: numDays }).map((_, i) => {
            const dateVal = i + 1;
            const dateStr = `${year}-${month.toString().padStart(2, '0')}-${dateVal.toString().padStart(2, '0')}`;
            const event = events[dateStr];

            return (
              <div 
                key={i} 
                className={`relative aspect-square rounded-sm border transition-all flex items-center justify-center group/cell cursor-pointer ${
                  event 
                    ? 'border-pink-500/30 bg-pink-500/8 hover:bg-pink-500/15 hover:border-pink-500/50' 
                    : 'border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/5'
                }`}
              >
                <span className={`text-base md:text-2xl font-black font-outfit ${event ? 'text-pink-300' : 'text-white/20'}`}>
                  {dateVal}
                </span>
                {event && (
                  <div className={`absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${event.color}`} />
                )}
                {event && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden md:group-hover/cell:block z-50">
                    <div className="bg-black/90 border border-pink-500/30 text-pink-300 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-sm whitespace-nowrap">
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

/* ─── Home Page ─────────────────────────────────────── */
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
    <div className="min-h-screen bg-[#0f0a1e] w-full overflow-x-hidden text-white">
      <SEO title="Home" description="Welcome to the official website of H5-Revolution. Experience the revolution in idol entertainment." />
      
      {/* ─── Hero Banner Section ──────────────────────────── */}
      <section className="relative min-h-[100svh] md:h-screen md:min-h-[600px] md:max-h-[1080px] w-full flex flex-col items-center justify-start md:justify-center overflow-hidden pb-20 md:pb-0"
        style={{ background: 'linear-gradient(160deg, #0f0a1e 0%, #1a0535 40%, #0d1a2e 100%)' }}
      >
        {/* Star field */}
        <StarField count={50} />

        {/* Stage spotlight cones */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-1/4 w-[400px] h-[600px] opacity-20"
            style={{ background: 'conic-gradient(from -10deg at 50% 0%, transparent 30%, rgba(236,72,153,0.3) 50%, transparent 70%)', animation: 'stage-light 4s ease-in-out infinite' }}
          />
          <div 
            className="absolute top-0 right-1/4 w-[400px] h-[600px] opacity-15"
            style={{ background: 'conic-gradient(from -10deg at 50% 0%, transparent 30%, rgba(249,115,22,0.3) 50%, transparent 70%)', animation: 'stage-light 4s ease-in-out infinite', animationDelay: '-2s' }}
          />
          {/* Deep glow orbs */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] animate-orb" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-4s' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/6 rounded-full blur-[80px]" />
        </div>

        {/* Horizontal line decoration */}
        <div className="absolute top-[72px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent z-10" />

        {/* Mobile Banner */}
        <div className="w-full md:hidden relative pt-[80px] z-10">
          <img 
            src="/images/h5-revolution-banner.jpg" 
            alt="H5-Revolution Banner" 
            className="w-full h-auto object-contain" 
            style={{ filter: 'drop-shadow(0 0 40px rgba(236,72,153,0.3))' }}
          />
        </div>

        {/* Desktop Banner */}
        <div 
          className="hidden md:block absolute inset-0 z-10 bg-center bg-cover bg-no-repeat" 
          style={{backgroundImage: "url('/images/h5-revolution-banner.jpg')"}}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-[#0f0a1e]/50 to-[#0f0a1e]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a1e]/60 to-[#0f0a1e]/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 mt-6 md:mt-0 flex-1 md:flex-none flex flex-col justify-center animate-fade-up w-full max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mx-auto mb-6 md:mb-8 px-4 py-2 border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm rounded-sm">
            <FaHeart className="text-pink-400 text-xs animate-pulse" />
            <span className="text-pink-300 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">The New Era Begins</span>
            <FaHeart className="text-pink-400 text-xs animate-pulse" />
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-2 font-display uppercase leading-none
            text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-300 to-pink-500
            drop-shadow-[0_0_40px_rgba(236,72,153,0.5)]">
            REVOLUTION
          </h1>

          {/* Subtitle line */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="h-[1px] w-10 md:w-16 bg-gradient-to-r from-transparent to-pink-500/50" />
            <p className="text-white/40 text-[9px] sm:text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold">
              We are H5 Official Group
            </p>
            <div className="h-[1px] w-10 md:w-16 bg-gradient-to-l from-transparent to-pink-500/50" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6 px-4 sm:px-0">
            <button className="shimmer-btn w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black tracking-[0.2em] text-xs md:text-sm rounded-sm hover:scale-105 hover:shadow-idol-pink transition-all duration-300 uppercase flex items-center justify-center gap-3">
              <FaPlay size={10} /> Watch New MV
            </button>
            <button className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-transparent text-pink-300 border border-pink-500/40 font-black tracking-[0.2em] text-xs md:text-sm rounded-sm hover:bg-pink-500/10 hover:border-pink-500/70 transition-all duration-300 flex items-center justify-center gap-2 uppercase group">
              Discover More
              <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
            {[
              { value: '5+', label: 'Members' },
              { value: '100+', label: 'Shows' },
              { value: '50K+', label: 'Fans' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg md:text-2xl font-black text-idol">{stat.value}</div>
                <div className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
          <div className="w-[1px] h-8 bg-gradient-to-b from-pink-500/60 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" />
        </div>
      </section>

      {/* ─── Ticker Tape ──────────────────────────────────── */}
      <div className="w-full bg-black border-y border-pink-500/20 py-2.5 overflow-hidden flex whitespace-nowrap z-20 relative">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee flex gap-10 items-center">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-pink-400 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">H5-Revolution First Tour 2025</span>
              <FaStar className="text-orange-400 text-[8px] shrink-0" />
              <span className="text-white/40 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">Tickets On Sale Now</span>
              <FaStar className="text-cyan-400 text-[8px] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── Information / News ───────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(180deg, #0f0a1e 0%, #12082a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-left mb-8 md:mb-12">
            <div className="badge-idol mb-4">
              <FaStar size={8} /> Latest Updates
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
              <span className="text-idol">LATEST</span> INFO
            </h2>
            <div className="idol-divider w-24" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* News list */}
            <div className="lg:col-span-2 space-y-3">
              {latestNews.map((news, index) => (
                <div 
                  key={index} 
                  className="group glass-idol rounded-sm p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 
                    hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:w-28 shrink-0">
                    <span className="text-orange-400 font-mono font-bold text-sm">{news.date}</span>
                    {news.isNew && (
                      <span className="bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-white/70 group-hover:text-pink-200 font-bold text-xs md:text-sm transition-colors flex-1 line-clamp-2">
                    {news.title}
                  </h3>
                  <FaChevronRight className="hidden sm:block text-white/20 group-hover:text-pink-400 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))}
              <div className="pt-4">
                <button className="text-pink-400 hover:text-orange-400 text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2 group transition-colors">
                  View All News <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Featured box */}
            <div className="relative rounded-sm overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-orange-600/10" />
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[200px] md:min-h-[240px]">
                <div className="w-14 h-14 md:w-16 md:h-16 border border-pink-500/40 flex items-center justify-center mb-5 md:mb-6 group-hover:border-pink-400 transition-all group-hover:shadow-idol-pink">
                  <FaCalendarAlt className="text-xl md:text-2xl text-pink-400 group-hover:text-pink-300 transition-colors" />
                </div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Upcoming Showcase</h3>
                <p className="text-white/40 text-sm mb-5 md:mb-6 font-medium">Join our exclusive fan meeting event in Tokyo.</p>
                <button className="shimmer-btn px-5 md:px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm text-xs font-bold tracking-widest uppercase hover:shadow-idol-pink transition-all">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Monthly Activity Calendar ──────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #12082a 0%, #0f0a1e 100%)' }}>
        <CalendarSection />
      </section>

      {/* ─── Members Highlight ────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0f0a1e' }}>
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div className="text-left">
              <div className="badge-idol mb-4"><FaStar size={8} /> Our Stars</div>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-2">
                MEET THE <br className="hidden md:block" /> <span className="text-idol">MEMBERS</span>
              </h2>
            </div>
            <Link to="/members" className="w-fit text-cyan-400 hover:text-pink-400 text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2 group transition-colors">
              Explore Profiles <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {sampleMembers.map((member, index) => (
              <div key={index} className="min-w-[260px] sm:min-w-[300px] md:min-w-0 snap-center transform hover:-translate-y-2 transition-transform duration-300">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Live Photos Gallery ────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(180deg, #0f0a1e 0%, #12082a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-idol mb-4 mx-auto inline-flex"><FaStar size={8} /> Live Archive</div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              LIVE <span className="text-cyan-glow" style={{ color: '#06b6d4' }}>MOMENTS</span>
            </h2>
            <p className="text-white/30 font-bold tracking-widest text-xs uppercase">Capturing the energy of H5-Revolution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {livePhotos.map((photo, index) => (
              <div key={index} className={`group relative rounded-sm overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-72 cursor-pointer border border-white/5 hover:border-pink-500/30 transition-all duration-300 ${index === 0 || index === 2 ? 'lg:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 to-[#0f0a1e]">
                  <div className="w-full h-full flex items-center justify-center">
                    <FaHeart className="text-white/10 text-4xl group-hover:text-pink-500/30 group-hover:scale-125 transition-all duration-500" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-sm mb-2 uppercase tracking-widest">
                    LIVE
                  </div>
                  <p className="text-cyan-400 font-mono text-xs mb-1">{photo.date}</p>
                  <h3 className="text-white font-bold text-sm line-clamp-2">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Fan Club Call to Action ─────────────────────── */}
      <section className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #12082a 0%, #0f0a1e 50%, #0d1a2e 100%)' }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
        </div>
        {/* Stage lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="badge-idol mb-8 mx-auto inline-flex">
            <FaMusic size={8} /> Fan Community
          </div>
          <div className="w-16 h-16 border border-pink-500/40 flex items-center justify-center mx-auto mb-8 hover:border-pink-400 hover:shadow-idol-pink transition-all duration-500">
            <FaMusic className="text-2xl text-pink-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Join the <br /> <span className="text-idol">Revolution</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Become an official member. Get exclusive access to behind-the-scenes content, early ticket sales, and special merchandise.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="shimmer-btn w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black tracking-[0.2em] text-sm rounded-sm hover:scale-105 hover:shadow-idol-pink transition-all duration-300 uppercase">
              Join Fan Club
            </button>
            <Link to="/shop" className="w-full sm:w-auto px-10 py-5 bg-transparent text-pink-300 border border-pink-500/40 font-black tracking-[0.2em] text-sm rounded-sm hover:bg-pink-500/10 hover:border-pink-500/70 transition-all duration-300 uppercase text-center">
              Visit Store
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
