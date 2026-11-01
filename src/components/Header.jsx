import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaBars, FaTimes, FaChevronDown, 
  FaTicketAlt, FaStar, 
  FaInfoCircle, FaHistory, FaCalendarAlt,
  FaTwitter, FaInstagram, FaYoutube,
  FaSun, FaMoon
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
    { name: "Virtual Shows", path: "/shows" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Goods", path: "/shop" },
    { name: "Tickets", path: "/tickets" },
    { name: "Fan Club", path: "/fans", isPill: true }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  const toggleMobileSubmenu = (menuName) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? isDark
              ? "py-3 bg-[#0f0a1e]/95 backdrop-blur-xl border-b border-pink-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
              : "py-2.5 bg-[#fbbf24]/95 backdrop-blur-xl border-b border-amber-500/40 shadow-[0_4px_30px_rgba(245,158,11,0.25)]"
            : isDark
              ? "py-4 sm:py-5 bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/5"
              : "py-3 sm:py-4 bg-[#fbbf24] border-b border-amber-500/40 shadow-sm"
        }`}
        style={{
          backgroundColor: isDark 
            ? (isScrolled ? "rgba(15, 10, 30, 0.95)" : "rgba(15, 10, 30, 0.8)")
            : "#fbbf24"
        }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="H5-Revolution Home">
            <Logo size="md" />
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
            
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
              className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300 border ${
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
            
            {/* Mobile Menu Toggle (Hamburger / X) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-sm transition-all border ${
                isDark
                  ? "text-white/80 bg-white/5 border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-300"
                  : "text-[#0f0f0f] bg-black/10 border-black/20 hover:bg-black/20 shadow-sm"
              }`}
            >
              {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu Drawer Rendered Via React Portal ──────────────── */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[99998] lg:hidden">
              
              {/* Darkened Backdrop Overlay */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Slide-out Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                className={`fixed inset-y-0 right-0 w-[88%] sm:w-[380px] max-w-full z-[99999] flex flex-col border-l shadow-[-15px_0_50px_rgba(0,0,0,0.85)] ${
                  isDark 
                    ? 'border-pink-500/30 text-white' 
                    : 'border-amber-400/60 text-[#0f0f0f]'
                }`}
                style={{
                  backgroundColor: isDark ? "#0f0a1e" : "#fffdf0"
                }}
              >
                {/* Drawer Header */}
                <div className={`flex items-center justify-between p-4 sm:p-5 border-b ${
                  isDark ? 'border-pink-500/20 bg-[#160a2c]/80' : 'border-amber-400/60 bg-[#fbbf24]'
                }`}>
                  <Link 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="flex items-center"
                    aria-label="H5-Revolution Home"
                  >
                    <Logo size="sm" />
                  </Link>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle Theme Mode"
                      className={`w-9 h-9 flex items-center justify-center rounded-sm border transition-all ${
                        isDark 
                          ? "bg-white/5 border-white/10 text-amber-400 hover:border-pink-500/50" 
                          : "bg-black/10 border-black/20 text-[#0f0f0f] hover:bg-black/20"
                      }`}
                    >
                      {isDark ? <FaSun size={13} /> : <FaMoon size={12} />}
                    </button>
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      aria-label="Close Mobile Menu"
                      className={`w-9 h-9 flex items-center justify-center rounded-sm border transition-all ${
                        isDark 
                          ? 'text-white/80 border-white/15 bg-white/5 hover:text-pink-300 hover:border-pink-500/40' 
                          : 'text-black border-black/20 bg-black/10 hover:bg-black/20'
                      }`}
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>
                </div>

                {/* Nav Links Scrollable Area */}
                <div className="flex-1 overflow-y-auto py-5 px-4 sm:px-5 no-scrollbar">
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <div key={item.name} className="space-y-1">
                        {item.dropdown ? (
                          <div>
                            <button
                              type="button"
                              onClick={() => toggleMobileSubmenu(item.name)}
                              className={`w-full flex items-center justify-between p-3.5 rounded-sm transition-all border ${
                                isDark
                                  ? 'bg-white/[0.04] text-white/90 border-white/10 hover:bg-pink-500/10 hover:border-pink-500/30'
                                  : 'bg-white text-gray-900 border-amber-300/80 hover:bg-amber-100 hover:border-amber-400 font-extrabold'
                              }`}
                            >
                              <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                              <FaChevronDown className={`transition-transform duration-300 text-xs ${
                                expandedMobileMenu === item.name 
                                  ? 'rotate-180 text-pink-400' 
                                  : isDark ? 'text-white/40' : 'text-gray-500'
                              }`} />
                            </button>

                            <AnimatePresence>
                              {expandedMobileMenu === item.name && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }} 
                                  animate={{ height: "auto", opacity: 1 }} 
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-3 pt-1 space-y-1 overflow-hidden"
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 p-2.5 rounded-sm text-[11px] font-black uppercase tracking-wider transition-all border ${
                                      isDark 
                                        ? 'bg-pink-500/10 border-pink-500/30 text-pink-300' 
                                        : 'bg-amber-200 border-amber-400 text-black'
                                    }`}
                                  >
                                    <span className="text-pink-400">✦</span>
                                    Overview {item.name}
                                  </Link>
                                  {item.dropdown.map((sub, idx) => (
                                    <Link 
                                      key={idx} 
                                      to={sub.path} 
                                      onClick={() => setIsMobileMenuOpen(false)} 
                                      className={`flex items-center gap-3 p-2.5 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all border ${
                                        isDark 
                                          ? 'bg-white/[0.02] border-white/5 text-white/70 hover:text-pink-300 hover:border-pink-500/20' 
                                          : 'bg-white border-amber-200 text-gray-700 hover:text-black hover:bg-amber-50'
                                      }`}
                                    >
                                      <span className={isDark ? "text-pink-400" : "text-amber-600"}>{sub.icon}</span>
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between p-3.5 rounded-sm transition-all border ${
                              item.isPill 
                                ? 'nav-pill-btn bg-[#0f0f0f] text-[#fbbf24] font-black border-black shadow-md' 
                                : location.pathname === item.path
                                  ? isDark 
                                    ? 'bg-pink-500/20 text-pink-300 border-pink-500/40 font-black' 
                                    : 'bg-amber-300 text-black border-amber-500 font-black'
                                  : isDark
                                    ? 'bg-white/[0.04] text-white/80 border-white/10 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-500/30 font-bold'
                                    : 'bg-white text-gray-900 border-amber-200/80 hover:bg-amber-100 hover:text-black font-extrabold'
                            }`}
                          >
                            <span className="text-xs uppercase tracking-widest">{item.name}</span>
                            {location.pathname === item.path && (
                              <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-pink-400' : 'bg-black'}`} />
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Social Footer in Drawer */}
                <div className={`p-4 sm:p-5 border-t ${
                  isDark ? 'border-white/10 bg-black/40' : 'border-amber-400/60 bg-[#fbbf24]'
                }`}>
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((social, i) => (
                      <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={social.label}
                        className={`w-10 h-10 rounded-sm flex items-center justify-center text-base transition-all border ${
                          isDark 
                            ? 'text-white/60 hover:text-pink-400 border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 bg-white/5' 
                            : 'text-black hover:text-black border-black/20 hover:border-black bg-black/10'
                        }`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className={`text-center text-[10px] font-mono font-bold uppercase tracking-widest mt-3 ${
                    isDark ? 'text-pink-400/60' : 'text-neutral-900 font-extrabold'
                  }`}>
                    H5-Revolution © 2026
                  </p>
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
