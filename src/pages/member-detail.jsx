import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, FaChevronLeft, FaChevronRight, FaExpandAlt, FaTimes,
  FaCalendarAlt, FaStar, FaHeart, FaPlay, FaShoppingBag, FaImage, 
  FaUser, FaTag, FaUsers, FaRulerVertical, FaTint, FaMapMarkerAlt,
  FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaQuoteLeft, FaQuoteRight
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import SEO from "../components/SEO";

/**
 * Enhanced Member Detail Data
 * Matches the official idol profiles with Japanese names, photos gallery,
 * detailed statistics, and custom stage color accents.
 */
const membersData = {
  "yuki-tanaka": {
    name: "Yuki Tanaka",
    japaneseName: "田中 由紀",
    nickname: "Yuki",
    role: "LEADER & MAIN VOCALIST",
    position: "Leader, Main Vocalist",
    shortBio: "The leader of H5-Revolution, known for her powerful vocals and bright personality that always inspires the group and fans.",
    about: "A passionate leader with a strong love for music and performance. Yuki always brings positive energy, both on and off stage, and continues to grow as an artist together with H5-Revolution.",
    quote: "I will sing until my voice reaches the stars!",
    birthdate: "10 March 2004",
    age: "21 YEARS",
    zodiac: "PISCES",
    zodiacSign: "♓",
    hobbies: "DANCING, SINGING",
    height: "162 cm",
    bloodType: "O",
    origin: "Tokyo, Japan",
    colorName: "PINK",
    colorHex: "#ec4899",
    colorBadge: "bg-pink-500",
    watermark: "YUKI",
    photos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    },
    gallery: [
      { id: 1, title: "Cyber-Stage Live Tour 2026", url: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80" },
      { id: 2, title: "START LINE Debut Photobook", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
      { id: 3, title: "Summer Festival Special Stage", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" },
      { id: 4, title: "Backstage Candid Shot", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" }
    ],
    videos: [
      { id: 1, title: "Yuki Solo Stage: 'Starfall Melodies' Fancam", duration: "03:42", views: "245K", thumb: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80" },
      { id: 2, title: "Behind The Scenes: Yuki Vocal Recording Studio", duration: "08:15", views: "189K", thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80" },
      { id: 3, title: "H5-Revolution Live Theater Opening Performance", duration: "04:20", views: "310K", thumb: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80" }
    ],
    schedule: [
      { date: "APR 17", title: "Solo Performance: Yuki Special Stage", time: "18:30 JST", status: "Limited" },
      { date: "APR 19", title: "Matinee Show: H5-Revolution Full Stage", time: "14:00 JST", status: "Available" },
      { date: "APR 26", title: "Weekly Theater Stage: Team Cyber", time: "19:00 JST", status: "Available" }
    ],
    goods: [
      { id: 1, name: "Yuki Official Acrylic Standee 2026", price: "¥1,800", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { id: 2, name: "Stage Photo Card Set (Yuki Special)", price: "¥1,200", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
      { id: 3, name: "Signature Pink Light Stick Penlight", price: "¥3,500", image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=400&q=80" }
    ]
  },
  "sakura-yamamoto": {
    name: "Sakura Yamamoto",
    japaneseName: "山本 さくら",
    nickname: "Sakura",
    role: "MAIN DANCER & SUB VOCALIST",
    position: "Main Dancer, Sub Vocalist",
    shortBio: "A versatile performer with exceptional dancing skills. Sakura brings energy and precision to every performance.",
    about: "Sakura trained in contemporary dance and hip-hop for over 10 years before joining H5-Revolution. She acts as the group's energetic dance captain.",
    quote: "Dancing is my way of speaking directly to the world!",
    birthdate: "22 August 2002",
    age: "23 YEARS",
    zodiac: "LEO",
    zodiacSign: "♌",
    hobbies: "CHOREOGRAPHY, SNEAKERS",
    height: "165 cm",
    bloodType: "B",
    origin: "Osaka, Japan",
    colorName: "CYAN",
    colorHex: "#06b6d4",
    colorBadge: "bg-cyan-500",
    watermark: "SAKURA",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    },
    gallery: [],
    videos: [],
    schedule: [],
    goods: []
  },
  "mika-sato": {
    name: "Mika Sato",
    japaneseName: "佐藤 美香",
    nickname: "Mika",
    role: "VOCALIST & VISUAL",
    position: "Vocalist, Visual",
    shortBio: "The charming vocalist with a sweet voice and warm presence that captivates audiences worldwide.",
    about: "Mika has a natural flair for fashion and aesthetics. Her soulful harmonies add richness to H5-Revolution's cyber sound.",
    quote: "I want to be the reason someone smiles today!",
    birthdate: "3 December 2004",
    age: "20 YEARS",
    zodiac: "SAGITTARIUS",
    zodiacSign: "♐",
    hobbies: "FASHION, PHOTOGRAPHY",
    height: "160 cm",
    bloodType: "O",
    origin: "Kyoto, Japan",
    colorName: "SKY BLUE",
    colorHex: "#38bdf8",
    colorBadge: "bg-sky-400",
    watermark: "MIKA",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    },
    gallery: [],
    videos: [],
    schedule: [],
    goods: []
  },
  "rin-hayashi": {
    name: "Rin Hayashi",
    japaneseName: "林 凛",
    nickname: "Rin",
    role: "MAIN RAPPER & PRODUCER",
    position: "Main Rapper, Producer",
    shortBio: "Known for her fierce rhythm and stage command, Rin pens the sharp rhymes that define H5-Revolution's music.",
    about: "Off-stage gentle and thoughtful, Rin turns into an electrifying force when the stage spotlight hits.",
    quote: "Let my rhythm guide your heartbeat across the stage!",
    birthdate: "10 June 2001",
    age: "24 YEARS",
    zodiac: "GEMINI",
    zodiacSign: "♊",
    hobbies: "BEATBOXING, GARDENING",
    height: "167 cm",
    bloodType: "AB",
    origin: "Nagoya, Japan",
    colorName: "PURPLE",
    colorHex: "#a855f7",
    colorBadge: "bg-purple-500",
    watermark: "RIN",
    photos: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    },
    gallery: [],
    videos: [],
    schedule: [],
    goods: []
  },
  "hana-kimura": {
    name: "Hana Kimura",
    japaneseName: "木村 花",
    nickname: "Hana",
    role: "LEAD VOCALIST & MAKNAE",
    position: "Lead Vocalist, Maknae",
    shortBio: "The youngest member with boundless positivity and soaring high notes that brighten every stadium.",
    about: "Hana's natural charm and cheerful energy make her beloved by all members and fans.",
    quote: "Sunshine follows wherever our stage lights shine!",
    birthdate: "28 January 2005",
    age: "20 YEARS",
    zodiac: "AQUARIUS",
    zodiacSign: "♒",
    hobbies: "GAMING, COOKING",
    height: "158 cm",
    bloodType: "A",
    origin: "Fukuoka, Japan",
    colorName: "MINT GREEN",
    colorHex: "#10b981",
    colorBadge: "bg-emerald-500",
    watermark: "HANA",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80"
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    },
    gallery: [],
    videos: [],
    schedule: [],
    goods: []
  }
};

// Aliases for route param flexibility
membersData["rio-watanabe"] = membersData["rin-hayashi"];
membersData["hana-ito"] = membersData["hana-kimura"];

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  const memberKey = id ? id.toLowerCase() : "yuki-tanaka";
  const member = membersData[memberKey] || membersData["yuki-tanaka"];

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActivePhotoIndex(0);
    setActiveTab("profile");
  }, [id]);

  const photos = member.photos && member.photos.length > 0 ? member.photos : [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
  ];

  const handlePrevPhoto = (e) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for carousel and modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevPhoto();
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photos.length]);

  return (
    <div className={`min-h-screen font-inter transition-colors duration-300 pb-20 md:pb-28 relative overflow-hidden ${
      isDark ? "bg-[#0f0a1e] text-white" : "bg-[#fffaf3] text-[#1f2937]"
    }`}>
      <SEO 
        title={`${member.name} - Profile | H5-Revolution`} 
        description={member.shortBio} 
      />

      {/* Ambient background glows */}
      <div 
        className="absolute top-10 right-10 w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ backgroundColor: member.colorHex }}
      />
      <div 
        className="absolute top-1/2 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: "#fbbf24" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 relative z-10">
        
        {/* ── Breadcrumb Navigation ── */}
        <div className="mb-6">
          <Link 
            to="/members" 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              isDark 
                ? "bg-[#160a2e] text-white/70 hover:text-white border border-pink-500/20 hover:border-pink-500/50" 
                : "bg-white text-gray-700 hover:text-black border border-amber-200/60 hover:bg-amber-50/50"
            }`}
          >
            <FaArrowLeft size={10} className="text-pink-500" />
            <span>MEMBERS &gt; {member.name}</span>
          </Link>
        </div>

        {/* ── Main Two-Column Layout (Desktop) / Stacked (Mobile) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN: Photo Carousel & Thumbnails
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            
            {/* Main Photo Card */}
            <div 
              className={`relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 transition-all duration-300 group ${
                isDark 
                  ? "bg-[#180a36] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" 
                  : "bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 border-white shadow-[0_15px_35px_rgba(236,72,153,0.15)]"
              }`}
            >
              {/* Background Watermark Vertical Name */}
              <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center select-none pointer-events-none z-0">
                <span className={`font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter uppercase font-outfit ${
                  isDark ? "text-white/10" : "text-white/60"
                }`}>
                  {member.watermark}
                </span>
              </div>

              {/* Active Image */}
              <motion.img 
                key={activePhotoIndex}
                initial={{ opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={photos[activePhotoIndex]} 
                alt={`${member.name} - ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover object-top relative z-10 select-none cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Fullscreen Expand Icon Button (Top Right) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-white/85 hover:bg-white text-gray-800 shadow-md backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110"
                aria-label="View Fullscreen"
              >
                <FaExpandAlt size={12} className="text-gray-700" />
              </button>

              {/* Navigation Arrow Left */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Previous Photo"
              >
                <FaChevronLeft size={11} className="text-gray-800" />
              </button>

              {/* Navigation Arrow Right */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Next Photo"
              >
                <FaChevronRight size={11} className="text-gray-800" />
              </button>

              {/* Slide Counter Pill (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-gray-800 shadow-sm border border-black/5">
                {activePhotoIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4">
              {photos.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all duration-200 relative ${
                    activePhotoIndex === idx
                      ? "ring-2 ring-pink-500 ring-offset-2 scale-105 shadow-md"
                      : "opacity-70 hover:opacity-100 hover:scale-102 border border-black/10"
                  }`}
                  aria-label={`Show photo ${idx + 1}`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN: Member Info, Stats, Tabs & Details
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col relative">
            
            {/* Header Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm border ${
                isDark 
                  ? "bg-[#180a36] border-pink-500/30 text-pink-300" 
                  : "bg-white border-pink-100 text-gray-800"
              }`}>
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse inline-block" />
                ACTIVE STAGE IDOL
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm border ${
                isDark 
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300" 
                  : "bg-amber-50 border-amber-200 text-amber-600"
              }`}>
                <FaStar size={10} className="text-amber-500" />
                TOP RANK
              </span>
            </div>

            {/* Member Title Section & Signature */}
            <div className="relative mb-5">
              
              {/* Handwritten Signature Graphic (Top Right on desktop) */}
              <div className="hidden sm:block absolute right-2 top-0 pointer-events-none select-none">
                <div className="relative">
                  {/* Subtle Pastel Star Watermark */}
                  <div className="absolute -top-3 -right-2 w-28 h-28 text-pink-100 opacity-60">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
                    </svg>
                  </div>
                  {/* Signature Text & Doodle */}
                  <div className="relative font-serif italic text-3xl md:text-4xl text-pink-400 font-bold tracking-wider -rotate-6 drop-shadow-sm flex items-center gap-1">
                    <span>{member.nickname}</span>
                    <span className="text-xs text-pink-400 font-sans font-bold">✨</span>
                  </div>
                </div>
              </div>

              {/* Member Name */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight font-outfit mb-1 ${
                isDark ? "text-white" : "text-[#111827]"
              }`}>
                {member.name}
              </h1>

              {/* Role / Position */}
              <h2 className="text-pink-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
                {member.role}
              </h2>

              {/* Short Bio Paragraph */}
              <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl font-medium ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}>
                {member.shortBio}
              </p>
            </div>

            {/* ── 4 Quick Stat Cards ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
              
              {/* 1. Age */}
              <div className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                isDark ? "bg-[#140b2e] border-pink-500/20 shadow-sm" : "bg-white border-pink-100/70 shadow-sm"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                  <FaCalendarAlt size={16} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">AGE</div>
                  <div className={`text-xs sm:text-sm font-black uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
                    {member.age}
                  </div>
                </div>
              </div>

              {/* 2. Zodiac */}
              <div className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                isDark ? "bg-[#140b2e] border-pink-500/20 shadow-sm" : "bg-white border-pink-100/70 shadow-sm"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0 font-serif font-black text-lg">
                  {member.zodiacSign || "★"}
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">ZODIAC</div>
                  <div className={`text-xs sm:text-sm font-black uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
                    {member.zodiac}
                  </div>
                </div>
              </div>

              {/* 3. Hobbies */}
              <div className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                isDark ? "bg-[#140b2e] border-pink-500/20 shadow-sm" : "bg-white border-pink-100/70 shadow-sm"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                  <FaStar size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">HOBBIES</div>
                  <div className={`text-[10px] sm:text-xs font-black uppercase leading-tight truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                    {member.hobbies}
                  </div>
                </div>
              </div>

              {/* 4. Member Color */}
              <div className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                isDark ? "bg-[#140b2e] border-pink-500/20 shadow-sm" : "bg-white border-pink-100/70 shadow-sm"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                  <FaTint size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">MEMBER COLOR</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span 
                      className="w-3.5 h-3.5 rounded-sm shrink-0 border border-black/10 shadow-sm"
                      style={{ backgroundColor: member.colorHex }}
                    />
                    <span className={`text-[10px] sm:text-xs font-black uppercase truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                      {member.colorName}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Tabs Navigation Bar ── */}
            <div className={`rounded-2xl p-1.5 border shadow-sm flex items-center gap-1.5 mb-6 overflow-x-auto no-scrollbar ${
              isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
            }`}>
              {[
                { id: "profile", label: "PROFILE", icon: <FaUser size={11} /> },
                { id: "gallery", label: "GALLERY", icon: <FaImage size={11} /> },
                { id: "videos", label: "VIDEOS", icon: <FaPlay size={10} /> },
                { id: "schedule", label: "SCHEDULE", icon: <FaCalendarAlt size={11} /> },
                { id: "goods", label: "GOODS", icon: <FaShoppingBag size={11} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-md"
                      : isDark
                        ? "text-white/60 hover:text-white hover:bg-white/5"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* ── Tab Content: PROFILE (Default) ── */}
            {activeTab === "profile" && (
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-5 sm:p-7 md:p-8 border shadow-sm mb-6 ${
                  isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Profile Information Table */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                      <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        PROFILE INFORMATION
                      </h3>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm">
                      {[
                        { icon: <FaUser size={13} />, label: "REAL NAME", value: `${member.name} (${member.japaneseName})` },
                        { icon: <FaTag size={13} />, label: "NICKNAME", value: member.nickname },
                        { icon: <FaUsers size={13} />, label: "POSITION", value: member.position },
                        { icon: <FaCalendarAlt size={13} />, label: "BIRTHDATE", value: member.birthdate },
                        { icon: <FaRulerVertical size={13} />, label: "HEIGHT", value: member.height },
                        { icon: <FaTint size={13} />, label: "BLOOD TYPE", value: member.bloodType },
                        { icon: <FaMapMarkerAlt size={13} />, label: "ORIGIN", value: member.origin }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center justify-between pb-3 border-b last:border-b-0 ${
                            isDark ? "border-white/5" : "border-gray-100"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 text-gray-400 w-36 sm:w-40 shrink-0">
                            <span className="text-pink-500">{item.icon}</span>
                            <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider">{item.label}</span>
                          </div>
                          <div className={`font-semibold text-right ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: About Member & Quote Card */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                        <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                          ABOUT {member.nickname}
                        </h3>
                      </div>
                      
                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium ${
                        isDark ? "text-white/70" : "text-gray-600"
                      }`}>
                        {member.about}
                      </p>
                    </div>

                    {/* Cute Quote Card */}
                    <div className={`rounded-2xl p-5 sm:p-6 border relative text-center shadow-sm ${
                      isDark 
                        ? "bg-pink-500/10 border-pink-500/30" 
                        : "bg-pink-50/80 border-pink-100/90"
                    }`}>
                      <div className="text-pink-400 text-xl font-serif font-black mb-2 flex justify-center">
                        <FaQuoteLeft size={16} />
                      </div>
                      <p className={`font-bold italic text-sm sm:text-base leading-snug tracking-tight mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        "{member.quote}"
                      </p>
                      <div className="text-pink-400 text-xl font-serif font-black flex justify-center">
                        <FaQuoteRight size={16} />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ── Tab Content: GALLERY ── */}
            {activeTab === "gallery" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 border shadow-sm mb-6 ${
                  isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    STAGE PHOTO GALLERY
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(member.gallery && member.gallery.length > 0 ? member.gallery : member.photos.map((url, i) => ({ id: i, title: `Stage Cut ${i + 1}`, url }))).map((item, i) => (
                    <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer shadow-sm">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-white text-[11px] font-bold truncate">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Tab Content: VIDEOS ── */}
            {activeTab === "videos" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 border shadow-sm mb-6 ${
                  isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    OFFICIAL FANCAMS & STAGE VIDEOS
                  </h3>
                </div>
                <div className="space-y-3">
                  {(member.videos && member.videos.length > 0 ? member.videos : [
                    { id: 1, title: `${member.name} Solo Stage Performance`, duration: "03:45", views: "150K", thumb: member.photos[0] }
                  ]).map((video) => (
                    <div key={video.id} className={`p-3 rounded-2xl border flex items-center gap-4 transition-all hover:border-pink-400 group cursor-pointer ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-gray-50/70 border-gray-100"
                    }`}>
                      <div className="relative w-28 h-18 sm:w-36 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-black">
                        <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10">
                          <div className="w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg">
                            <FaPlay size={9} className="ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9px] font-mono font-bold">
                          {video.duration}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-xs sm:text-sm font-black mb-1 group-hover:text-pink-500 transition-colors line-clamp-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                          {video.title}
                        </h4>
                        <p className="text-[10px] font-mono text-gray-400">{video.views} Views • Official Stage</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Tab Content: SCHEDULE ── */}
            {activeTab === "schedule" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 border shadow-sm mb-6 ${
                  isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    UPCOMING THEATER PERFORMANCES
                  </h3>
                </div>
                <div className="space-y-3">
                  {(member.schedule && member.schedule.length > 0 ? member.schedule : [
                    { date: "APR 20", title: "H5-Revolution Special Stage", time: "18:30 JST", status: "Available" }
                  ]).map((item, i) => (
                    <div key={i} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-gray-50/80 border-gray-100"
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/20 flex flex-col items-center justify-center shrink-0">
                          <span className="text-[10px] font-black uppercase">{item.date.split(" ")[0]}</span>
                          <span className="text-base font-black leading-none">{item.date.split(" ")[1]}</span>
                        </div>
                        <div>
                          <h4 className={`text-xs sm:text-sm font-black mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h4>
                          <span className="text-[10px] font-mono text-gray-400">{item.time}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Tab Content: GOODS ── */}
            {activeTab === "goods" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 border shadow-sm mb-6 ${
                  isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    OFFICIAL MEMBER GOODS
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(member.goods && member.goods.length > 0 ? member.goods : [
                    { id: 1, name: `${member.name} Acrylic Stand`, price: "¥1,800", image: member.photos[0] }
                  ]).map((item) => (
                    <div key={item.id} className={`rounded-2xl p-3 border shadow-sm flex flex-col justify-between ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-gray-50/70 border-gray-100"
                    }`}>
                      <div className="aspect-square rounded-xl overflow-hidden mb-2.5 bg-white">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold line-clamp-1 mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{item.name}</h4>
                        <p className="text-pink-500 font-mono font-black text-xs">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Bottom Card: SOCIAL MEDIA ── */}
            <div className={`rounded-3xl p-5 sm:p-6 border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDark ? "bg-[#140b2e] border-pink-500/20" : "bg-white border-pink-100/70"
            }`}>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                <h3 className={`text-sm sm:text-base font-black uppercase tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  SOCIAL MEDIA
                </h3>
              </div>

              {/* Social Icon Buttons (Instagram, X, YouTube, TikTok) */}
              <div className="flex items-center gap-2.5">
                {[
                  { icon: <FaInstagram size={17} />, href: member.social.instagram, label: "Instagram" },
                  { icon: <FaTwitter size={16} />, href: member.social.twitter, label: "X" },
                  { icon: <FaYoutube size={17} />, href: member.social.youtube, label: "YouTube" },
                  { icon: <FaTiktok size={15} />, href: member.social.tiktok, label: "TikTok" }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-500 border border-pink-100 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-transform hover:scale-110 z-50"
              aria-label="Close Fullscreen"
            >
              <FaTimes />
            </button>

            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-transform hover:scale-110 z-50"
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-transform hover:scale-110 z-50"
              aria-label="Next"
            >
              <FaChevronRight size={18} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={photos[activePhotoIndex]}
              alt={`${member.name} Fullscreen`}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-white text-xs font-mono font-bold tracking-widest backdrop-blur-md">
              {activePhotoIndex + 1} / {photos.length} • {member.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MemberDetail;
