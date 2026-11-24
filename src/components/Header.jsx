import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaBars, FaTimes, FaChevronDown, 
  FaTicketAlt, FaStar, 
  FaInfoCircle, FaHistory, FaCalendarAlt,
  FaTwitter, FaInstagram, FaYoutube,
  FaSun, FaMoon, FaShoppingBag, FaBoxOpen, FaHeart, FaQrcode, FaUser,
  FaBell, FaBolt, FaMicrophone, FaVideo
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "./Logo";

/**
 * Header Component with Dynamic Yellow Theme in Light Mode & Cyber Theme in Dark Mode.
 */
const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const { theme, toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
      dropdown: [
        { name: "What is H5-R?", path: "/about#vision", icon: <FaInfoCircle /> },
        { name: "Our History", path: "/about#history", icon: <FaHistory /> }
      ]
    },
    { 
      name: "Theater", 
      path: "/theater",
      dropdown: [
        { name: "Theater Schedule", path: "/theater#schedule", icon: <FaCalendarAlt /> },
        { name: "Theater Guide", path: "/theater#guide", icon: <FaTicketAlt /> }
      ]
    },
    { 
      name: "Shows & Live", 
      path: "/shows",
      dropdown: [
        { name: "Virtual Shows", path: "/shows", icon: <FaCalendarAlt /> },
        { name: "Lightstick Controller", path: "/lightstick", icon: <FaBolt /> },
        { name: "Fan Chant Guide", path: "/fanchant", icon: <FaMicrophone /> },
        { name: "1-on-1 Meet & Greet", path: "/meet-greet", icon: <FaVideo /> }
      ]
    },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { 
      name: "Goods", 
      path: "/shop",
      dropdown: [
        { name: "Merch Store", path: "/shop", icon: <FaShoppingBag /> },
        { name: "Pesanan Saya", path: "/orders", icon: <FaBoxOpen /> },
        { name: "Photocard Binder", path: "/binder", icon: <FaStar /> },
        { name: "Wishlist Favorit", path: "/wishlist", icon: <FaHeart /> }
      ]
    },
    { 
      name: "Tickets", 
      path: "/tickets",
      dropdown: [
        { name: "Beli Tiket", path: "/tickets", icon: <FaTicketAlt /> },
        { name: "E-Ticket Digital Pass", path: "/my-tickets", icon: <FaQrcode /> }
      ]
    },
    { name: "Fan Club", path: "/fans", isPill: true }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  // Mobile Menu 2-Column Grid Items (Identical to idol official site design)
  const mobileGridItems = [
    { title: "SCHEDULE", subtitle: "", path: "/events" },
    { title: "TICKET", subtitle: "", path: "/tickets" },
    { title: "MY PASS", subtitle: "", path: "/my-tickets" },
    { title: "MY ORDERS", subtitle: "", path: "/orders" },
    { title: "NEWS", subtitle: "", path: "/shows" },
    { title: "DISCOGRAPHY", subtitle: "", path: "/showcase" },
    { title: "LIVE PHOTO", subtitle: "", path: "/fans" },
    { title: "WISHLIST", subtitle: "", path: "/wishlist" },
    { title: "GOODS", subtitle: "", path: "/shop" },
    { title: "PROFILE", subtitle: "", path: "/profile" },
    { 
      title: "出演依頼などのお問い合わせはこちら", 
      isSmallText: true, 
      path: "/about" 
    },
    { 
      title: "ライブ,イベント参加についての心得", 
      isSmallText: true, 
      path: "/legal" 
    },
    { title: "オーディション", subtitle: "", path: "/fans" },
    { title: "FAN CLUB", subtitle: "", path: "/fans" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? isDark
              ? "py-2 sm:py-3 bg-[#d6e31e] lg:bg-[#0f0a1e]/95 lg:backdrop-blur-xl border-b border-black/10 lg:border-pink-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
              : "py-2 sm:py-2.5 bg-[#d6e31e] lg:bg-[#fbbf24]/95 lg:backdrop-blur-xl border-b border-black/10 lg:border-amber-500/40 shadow-[0_4px_30px_rgba(245,158,11,0.25)]"
            : isDark
              ? "py-2.5 sm:py-4 lg:py-5 bg-[#d6e31e] lg:bg-[#0f0a1e]/80 lg:backdrop-blur-md border-b border-black/10 lg:border-white/5"
              : "py-2.5 sm:py-3 lg:py-4 bg-[#d6e31e] lg:bg-[#fbbf24] border-b border-black/10 lg:border-amber-500/40 shadow-sm"
        }`}
        style={{
          backgroundColor: undefined
        }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Section - Desktop */}
          <Link to="/" className="hidden lg:flex items-center flex-shrink-0" aria-label="H5-Revolution Home">
            <Logo size="md" />
          </Link>

          {/* Logo Section - Mobile (White Logo + OFFICIAL SITE Text matching reference) */}
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex lg:hidden flex-col items-start select-none py-1 group"
            aria-label="H5-Revolution Home"
          >
            <div className="flex items-center">
              <img 
                src="/images/h5-logo-transparent.png" 
                alt="H5-Revolution" 
                className="h-7 w-auto object-contain filter brightness-0 invert transition-transform group-hover:scale-105"
                style={{ filter: "brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}
              />
            </div>
            <span className="text-[9px] font-black tracking-[0.25em] text-white uppercase -mt-0.5 leading-none drop-shadow-sm">
              OFFICIAL SITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.isPill ? (
                  <Link 
                    to={item.path}
                    className={`nav-pill-btn px-5 py-2 rounded-sm text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 ${
                      isDark
                        ? "shimmer-btn bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-idol-pink"
                        : "bg-[#0f0f0f] text-[#fbbf24] hover:bg-black hover:text-amber-300 border border-black/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 relative ${
                      location.pathname === item.path 
                        ? isDark ? "text-pink-400 text-idol-glow" : "text-[#0f0f0f]"
                        : isDark ? "text-white/70 hover:text-pink-300" : "text-[#0f0f0f]/85 hover:text-black"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <FaChevronDown size={8} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />}
                    {/* Active underline */}
                    {location.pathname === item.path && (
                      <span className={`absolute -bottom-1.5 left-0 right-0 h-[2px] ${
                        isDark ? "bg-gradient-to-r from-pink-500 to-orange-500" : "bg-[#0f0f0f]"
                      }`} />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className={`${isDark ? 'glass-idol bg-[#12082a]' : 'bg-white border-amber-300 shadow-2xl'} rounded-sm border p-2 min-w-[200px]`}>
                      {item.dropdown.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          to={sub.path} 
                          className={`flex items-center gap-3 px-4 py-3 rounded-sm ${
                            isDark 
                              ? 'hover:bg-pink-500/10 text-white/60 hover:text-pink-300' 
                              : 'hover:bg-amber-100/70 text-[#0f0f0f] font-extrabold'
                          } text-[10px] font-bold transition-all uppercase tracking-widest`}
                        >
                          <span className={isDark ? "text-pink-400" : "text-amber-600"}>{sub.icon}</span>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Decorative stars */}
            <div className="flex items-center gap-1 ml-1 select-none">
              <span className={isDark ? "text-pink-400 text-xs animate-twinkle font-serif" : "text-[#0f0f0f] text-xs font-serif"}>✦</span>
              <span className={isDark ? "text-orange-400 text-[10px] animate-twinkle font-serif" : "text-amber-800 text-[10px] font-serif"} style={{ animationDelay: '0.7s' }}>✦</span>
            </div>
          </nav>

          {/* Right Actions / Theme Toggle / Socials */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Notifications Alert Button (Desktop) */}
            <Link
              to="/notifications"
              aria-label="Notifikasi"
              title="Pemberitahuan & Ticket War"
              className={`hidden lg:flex w-9 h-9 items-center justify-center rounded-sm transition-all duration-300 border relative ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400 shadow-sm"
                  : "bg-black/10 border-black/20 hover:bg-black/20 text-[#0f0f0f] shadow-sm"
              }`}
            >
              <FaBell size={13} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            </Link>

            {/* User Profile Button (Desktop) */}
            <Link
              to="/profile"
              aria-label="Member Profile"
              title="Profil Fan Member H5"
              className={`hidden lg:flex w-9 h-9 items-center justify-center rounded-sm transition-all duration-300 border ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400 shadow-sm"
                  : "bg-black/10 border-black/20 hover:bg-black/20 text-[#0f0f0f] shadow-sm"
              }`}
            >
              <FaUser size={13} />
            </Link>

            {/* Theme Switcher Button (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
              className={`hidden lg:flex w-9 h-9 items-center justify-center rounded-sm transition-all duration-300 border ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-amber-400 shadow-sm"
                  : "bg-black/10 border-black/20 hover:bg-black/20 text-[#0f0f0f] shadow-sm"
              }`}
            >
              {isDark ? <FaSun size={14} className="animate-spin-slow" /> : <FaMoon size={13} />}
            </button>

            {/* Social Links (Desktop) */}
            <div className="hidden xl:flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className={`w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300 text-sm border ${
                    isDark
                      ? "text-white/40 hover:text-pink-400 border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10"
                      : "text-[#0f0f0f]/80 hover:text-black border-black/15 hover:border-black/30 hover:bg-black/10"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Toggle (White Hamburger 3 Lines / White Close X) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded focus:outline-none transition-transform active:scale-95"
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} className="text-white drop-shadow-sm" />
              ) : (
                <div className="flex flex-col justify-between w-6 h-[17px]">
                  <span className="w-full h-[2.5px] bg-white rounded-full drop-shadow-sm" />
                  <span className="w-full h-[2.5px] bg-white rounded-full drop-shadow-sm" />
                  <span className="w-full h-[2.5px] bg-white rounded-full drop-shadow-sm" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu Overlay Rendered Via React Portal ──────────────── */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[99998] lg:hidden">
              
              {/* Dark Translucent Backdrop Overlay with Yellow Tint */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/75 backdrop-blur-md"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Fullscreen Mobile Menu Container */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-0 z-[99999] flex flex-col overflow-y-auto no-scrollbar pointer-events-auto"
              >
                {/* Fixed Top Bar Inside Modal (Yellow Neon Header + X Close Button) */}
                <div className="sticky top-0 z-50 w-full bg-[#d6e31e] px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/10 shadow-sm flex-shrink-0">
                  <Link 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="flex flex-col items-start select-none"
                    aria-label="H5-Revolution Home"
                  >
                    <div className="flex items-center">
                      <img 
                        src="/images/h5-logo-transparent.png" 
                        alt="H5-Revolution" 
                        className="h-7 w-auto object-contain filter brightness-0 invert"
                        style={{ filter: "brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}
                      />
                    </div>
                    <span className="text-[9px] font-black tracking-[0.25em] text-white uppercase -mt-0.5 leading-none drop-shadow-sm">
                      OFFICIAL SITE
                    </span>
                  </Link>
                  
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    aria-label="Close Mobile Menu"
                    className="w-10 h-10 flex items-center justify-center rounded focus:outline-none transition-transform active:scale-90"
                  >
                    <FaTimes size={24} className="text-white drop-shadow-sm" />
                  </button>
                </div>

                {/* Menu Body */}
                <div className="flex-1 flex flex-col justify-start">
                  
                  {/* Top Branding Section (Large White Logo + Model Number RGB + Official Site) */}
                  <div className="pt-6 pb-6 px-4 flex flex-col items-center justify-center text-center select-none">
                    <img 
                      src="/images/h5-logo-transparent.png" 
                      alt="H5-Revolution" 
                      className="h-16 sm:h-20 w-auto object-contain filter brightness-0 invert drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                      style={{ filter: "brightness(0) invert(1) drop-shadow(0 2px 14px rgba(0,0,0,0.8))" }}
                    />
                    <div className="text-white text-[11px] font-mono font-bold tracking-[0.25em] uppercase mt-2 drop-shadow-md">
                      MODEL NUMBER &quot;RGB&quot;
                    </div>
                    <div className="text-white text-base sm:text-lg font-black tracking-[0.25em] uppercase drop-shadow-md">
                      OFFICIAL SITE
                    </div>
                  </div>

                  {/* 2-Column Mobile Menu Grid (Identical to idol screenshot) */}
                  <div className="w-full border-t border-b border-black grid grid-cols-2 divide-x divide-y divide-black bg-black">
                    {mobileGridItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="min-h-[64px] sm:min-h-[72px] px-2 py-3 flex flex-col items-center justify-center text-center transition-colors duration-150 bg-[#d6e31e]/90 hover:bg-[#c5d117] active:bg-[#b0bd12] text-black select-none"
                      >
                        <span className={`text-black font-black uppercase text-center ${
                          item.isSmallText 
                            ? "text-[11px] sm:text-xs font-bold leading-tight px-1" 
                            : "text-sm sm:text-base tracking-wider leading-snug"
                        }`}>
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="text-[10px] font-mono font-bold text-black/80 tracking-widest mt-0.5">
                            {item.subtitle}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Controls / Quick Actions */}
                  <div className="py-6 px-4 flex flex-col items-center justify-center gap-4">
                    
                    {/* Theme Toggle Button */}
                    <button
                      onClick={toggleTheme}
                      className="px-4 py-2 rounded border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
                    >
                      {isDark ? <FaSun size={13} className="text-amber-400" /> : <FaMoon size={12} className="text-amber-200" />}
                      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                    </button>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                      {socialLinks.map((social, i) => (
                        <a 
                          key={i} 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={social.label}
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 text-sm transition-all"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>

                    <p className="text-white/60 text-[10px] font-mono tracking-widest uppercase">
                      H5-REVOLUTION © 2026 OFFICIAL SITE
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;
