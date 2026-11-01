import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaFilter,
  FaCalendarAlt,
  FaBroadcastTower,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import SEO from "../components/SEO";

/* ─── Data ──────────────────────────────────────────────── */
const upcomingShows = [
  {
    id: 1,
    day: "MON",
    date: 17,
    month: "NOV",
    title: "H5-Revolution Special Live — First Stage 2026 —",
    time: "19:00 WIB (On Air)",
    venue: "H5 Cyber Stage (Online)",
    desc: "Penampilan spesial pertama H5-Revolution di tahun 2026 dengan konsep baru dan kejutan spesial untuk semua fans!",
    status: "available",
    tag: "LIVE STREAMING",
    type: "concert",
    image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=600&q=80",
  },
  {
    id: 2,
    day: "SAT",
    date: 29,
    month: "NOV",
    title: "H5-Revolution Theater Special — Member Talk & Mini Live —",
    time: "16:00 WIB (On Air)",
    venue: "H5 Cyber Stage (Online)",
    desc: "Sesi talkshow eksklusif bersama member dan penampilan mini live dengan setlist spesial!",
    status: "limited",
    tag: "LIVE",
    type: "talkshow",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
  },
  {
    id: 3,
    day: "SUN",
    date: 14,
    month: "DEC",
    title: "H5-Revolution Year End Concert — Beyond The Stage —",
    time: "19:00 WIB (On Air)",
    venue: "H5 Cyber Stage (Online)",
    desc: "Konser penutup tahun dengan penampilan terbaik, dikemas spesial untuk seluruh fans H5-Revolution.",
    status: "soldout",
    tag: "LIVE",
    type: "concert",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80",
  },
];

const FILTER_TABS = ["Semua", "Live Streaming", "Onsite", "Concert", "Talkshow", "Special Event"];

/* ─── Mini Interactive Calendar ─────────────────────────── */
const TheaterCalendar = () => {
  const today = new Date(2026, 10, 1); // Nov 2026 (untuk demo, sesuai referensi)
  const [current, setCurrent] = useState(today);

  const year = current.getFullYear();
  const month = current.getMonth();
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  // Convert Sun-start to Mon-start
  const startOffset = (firstDay + 6) % 7;

  const eventDates = { 17: "available", 29: "limited", 14: "soldout" };

  const prevMonth = () => setCurrent(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrent(new Date(year, month + 1, 1));

  const dayLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="bg-white dark:bg-[#130b24] rounded-2xl border border-amber-100/60 dark:border-pink-900/30 shadow-sm p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <FaCalendarAlt className="text-pink-500" size={14} />
        <div>
          <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">THEATER CALENDAR</h3>
          <p className="text-[10px] text-gray-500 dark:text-white/40">Jadwal pertunjukan bulan ini.</p>
        </div>
      </div>

      {/* Month Nav */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="w-7 h-7 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:border-pink-400 hover:text-pink-500 transition-all cursor-pointer">
          <FaChevronLeft size={10} />
        </button>
        <span className="text-xs font-black text-gray-900 dark:text-white tracking-widest uppercase">
          {monthNames[month]} {year}
        </span>
        <button onClick={nextMonth} className="w-7 h-7 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:border-pink-400 hover:text-pink-500 transition-all cursor-pointer">
          <FaChevronRight size={10} />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {dayLabels.map(d => (
          <div key={d} className={`text-center text-[9px] font-black py-1 ${d === "SUN" ? "text-pink-500" : "text-gray-400 dark:text-white/30"}`}>
            {d}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: startOffset }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const d = i + 1;
          const ev = eventDates[d];
          const isToday = d === 14 && month === 10; // Dec 14 sold out highlight
          return (
            <div
              key={d}
              className={`aspect-square flex flex-col items-center justify-center rounded-full text-[10px] font-bold cursor-default relative transition-all ${
                ev === "available"
                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-black"
                  : ev === "limited"
                  ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 font-black"
                  : ev === "soldout"
                  ? "bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 font-black"
                  : "text-gray-600 dark:text-white/50 hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {d}
              {ev && (
                <span className={`absolute bottom-0.5 w-1 h-1 rounded-full ${
                  ev === "available" ? "bg-emerald-500" : ev === "limited" ? "bg-orange-400" : "bg-pink-500"
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-around mt-4 pt-3 border-t border-gray-100 dark:border-white/10 text-[9px] font-bold">
        <span className="flex items-center gap-1 text-gray-600 dark:text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Available
        </span>
        <span className="flex items-center gap-1 text-gray-600 dark:text-white/60">
          <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Limited
        </span>
        <span className="flex items-center gap-1 text-gray-600 dark:text-white/60">
          <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" /> Sold Out
        </span>
      </div>
    </div>
  );
};

/* ─── Status Badge ──────────────────────────────────────── */
const StatusBadge = ({ status }) => {
  if (status === "available") return (
    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> AVAILABLE
    </span>
  );
  if (status === "limited") return (
    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-orange-500 dark:text-orange-400">
      <span className="w-2 h-2 rounded-full bg-orange-400" /> LIMITED
    </span>
  );
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-pink-600 dark:text-pink-400">
      <span className="w-2 h-2 rounded-full bg-pink-500" /> SOLD OUT
    </span>
  );
};

/* ─── Theater Page ──────────────────────────────────────── */
const Theater = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = upcomingShows.filter(show => {
    if (activeFilter === "Semua") return true;
    if (activeFilter === "Live Streaming") return show.tag === "LIVE STREAMING";
    if (activeFilter === "Onsite") return false; // placeholder
    if (activeFilter === "Concert") return show.type === "concert";
    if (activeFilter === "Talkshow") return show.type === "talkshow";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fffdf0] dark:bg-[#0f0a1e] text-gray-900 dark:text-white font-inter transition-colors duration-300 pb-24">
      <SEO title="The Theater | H5-Revolution" description="Jadwal pertunjukan dan live performance terbaru H5-Revolution di H5 Cyber Stage." />

      {/* ─── Hero Banner ─────────────────────────────────── */}
      <section className="relative h-56 sm:h-72 md:h-80 lg:h-[340px] overflow-hidden">
        {/* Background concert image */}
        <img
          src="https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=1600&q=80"
          alt="Theater Stage"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Subtle pink glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 to-transparent pointer-events-none" />

        {/* Script / italic brand in top-right */}
        <div className="absolute top-16 sm:top-20 right-6 sm:right-10 text-right hidden sm:block">
          <p
            className="text-2xl sm:text-3xl md:text-4xl text-white/80"
            style={{ fontFamily: "'Dancing Script', cursive, serif", fontStyle: "italic", textShadow: "0 0 20px rgba(236,72,153,0.4)" }}
          >
            H5-Revolution
          </p>
          <p
            className="text-base sm:text-xl md:text-2xl text-pink-300/80 mt-1"
            style={{ fontFamily: "'Dancing Script', cursive, serif", fontStyle: "italic" }}
          >
            Live Beyond Reality ✦
          </p>
        </div>

        {/* Hero content left */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-14 sm:pt-16">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/90 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
              <FaStar size={8} /> OFFICIAL LIVE STAGE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase font-outfit mb-2">
            <span className="text-white">THE </span>
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2px transparent",
                background: "linear-gradient(135deg, #facc15 0%, #f97316 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THEATER
            </span>
          </h1>

          <p className="text-white/70 text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
            Our Home. Your Live Cyber-Stage Experience.
          </p>
        </div>
      </section>

      {/* ─── Main Content: 2-col grid ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── LEFT COLUMN: Upcoming Shows (8 cols) ── */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Section Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-1 h-7 bg-pink-500 rounded-full inline-block" />
                UPCOMING THEATER
              </h2>
              <p className="text-gray-500 dark:text-white/50 text-sm mt-1 ml-3">
                Jadwal pertunjukan dan live performance terbaru.
              </p>
            </div>

            {/* Show Cards */}
            <div className="flex flex-col gap-4">
              {filtered.map((show, idx) => (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-[#130b24] rounded-2xl border border-amber-100/60 dark:border-pink-900/30 shadow-sm hover:shadow-md hover:border-pink-300/60 dark:hover:border-pink-500/40 transition-all overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row gap-0">

                    {/* Thumbnail with tag */}
                    <div className="relative sm:w-52 md:w-64 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent sm:bg-gradient-to-t sm:from-black/40 sm:to-transparent" />

                      {/* LIVE tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-pink-600/90 backdrop-blur-sm rounded-full text-white text-[9px] font-black uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping inline-block" />
                        {show.tag}
                      </div>

                      {/* Date badge bottom-left of image on mobile */}
                      <div className="absolute bottom-3 left-3 sm:hidden bg-black/70 backdrop-blur-sm border border-white/20 text-white rounded-xl px-3 py-1.5 text-center">
                        <div className="text-[9px] font-black text-pink-300 uppercase">{show.day}</div>
                        <div className="text-xl font-black font-outfit leading-none">{show.date}</div>
                        <div className="text-[9px] font-black text-white/60 uppercase">{show.month}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        {/* Status */}
                        <div className="flex items-center justify-between mb-2">
                          <StatusBadge status={show.status} />
                          {/* Desktop date badge */}
                          <div className="hidden sm:flex flex-col items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 rounded-xl px-3 py-2 text-center min-w-[54px]">
                            <span className="text-[9px] font-black text-pink-500 uppercase leading-none">{show.day}</span>
                            <span className="text-2xl font-black font-outfit text-gray-900 dark:text-white leading-tight">{show.date}</span>
                            <span className="text-[9px] font-black text-gray-500 dark:text-white/50 uppercase leading-none">{show.month}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-pink-500 transition-colors">
                          {show.title}
                        </h3>

                        {/* Meta: Time & Venue */}
                        <div className="flex flex-col gap-1 mb-2">
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/60">
                            <FaClock className="text-pink-400 shrink-0" size={10} />
                            <span>{show.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/60">
                            <FaMapMarkerAlt className="text-cyan-500 shrink-0" size={10} />
                            <span>{show.venue}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-500 dark:text-white/50 leading-relaxed line-clamp-2 hidden sm:block">
                          {show.desc}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        {show.status === "soldout" ? (
                          <button disabled className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-white/40 text-[11px] font-black uppercase tracking-widest cursor-not-allowed">
                            SOLD OUT
                          </button>
                        ) : (
                          <Link
                            to="/tickets"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[11px] font-black uppercase tracking-widest shadow-md shadow-pink-500/20 hover:scale-[1.02] hover:shadow-pink-500/40 active:scale-[0.98] transition-all"
                          >
                            VIEW DETAILS <FaArrowRight size={9} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16 text-gray-400 dark:text-white/40">
                  <p className="text-sm font-bold uppercase tracking-widest">No shows found for this filter.</p>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Sidebar (4 cols, sticky) ── */}
          <div className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-[100px]">

            {/* Theater Calendar */}
            <TheaterCalendar />

            {/* Quick Filter */}
            <div className="bg-white dark:bg-[#130b24] rounded-2xl border border-amber-100/60 dark:border-pink-900/30 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaFilter className="text-pink-500" size={12} />
                <div>
                  <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">QUICK FILTER</h3>
                  <p className="text-[10px] text-gray-500 dark:text-white/40">Cari event sesuai preferensimu.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {FILTER_TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeFilter === tab
                        ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-md shadow-pink-500/20"
                        : "bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-gray-200/80 dark:border-white/10 hover:border-pink-300 hover:text-pink-500 dark:hover:border-pink-500/40 dark:hover:text-pink-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Don't Miss Banner CTA */}
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80"
                alt="Don't Miss"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-800/80 via-pink-700/70 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-300 text-sm font-black mb-1">
                    <FaStar size={12} /> Don't Miss
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                    Our Next Show!
                  </h4>
                  <p className="text-white/80 text-[11px] mt-1 leading-relaxed max-w-[200px]">
                    Tetap terhubung dan dapatkan informasi terbaru seputar theater H5-Revolution.
                  </p>
                </div>
                <Link
                  to="/fans"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[11px] font-black uppercase tracking-wider w-fit shadow-md hover:scale-[1.02] transition-all"
                >
                  JOIN FAN CLUB <FaArrowRight size={9} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
