import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaBars, FaTimes, FaGlobe, FaChevronDown, 
  FaShoppingBag, FaTicketAlt, FaTv, FaStar, 
  FaPlay, FaInfoCircle, FaHistory, FaCalendarAlt,
  FaTwitter, FaFacebookF, FaInstagram, FaYoutube,
  FaSun, FaMoon
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Header Component with Theme Switcher (Dark & Light Mode)
 * Dark cyber-idol glassmorphism or bright idol stage glassmorphism.
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? isDark
          ? "py-3 bg-[#0f0a1e]/95 backdrop-blur-xl border-b border-pink-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "py-3 bg-white/95 backdrop-blur-xl border-b border-pink-100 shadow-[0_4px_30px_rgba(236,72,153,0.08)]"
        : isDark
          ? "py-5 bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-white/80 backdrop-blur-md border-b border-pink-100/60"
    }`}>
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex flex-col group flex-shrink-0">
          <div className="flex items-baseline leading-none">
            <span className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none
              bg-gradient-to-r from-pink-400 via-orange-400 to-pink-500 bg-clip-text text-transparent
              drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]
              transition-all duration-300">
              H5-R
            </span>
          </div>
          <span className="text-[7px] md:text-[9px] font-bold tracking-[0.1em] text-pink-400/50 uppercase leading-none mt-1 ml-1 font-mono">
            (HIVE-REVOLUTION)
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.isPill ? (
                <Link 
                  to={item.path}
                  className="shimmer-btn px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-sm text-[11px] font-black uppercase tracking-widest text-white hover:shadow-idol-pink transition-all duration-300 flex items-center gap-2"
                >
                  {item.name}
                </Link>
              ) : (
                <Link 
                  to={item.path}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 relative ${
                    location.pathname === item.path 
                      ? "text-pink-400 text-idol-glow" 
                      : isDark ? "text-white/60 hover:text-pink-300" : "text-gray-600 hover:text-pink-500"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown size={8} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
                  {/* Active underline */}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-pink-500 to-orange-500" />
                  )}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className={`${isDark ? 'glass-idol' : 'bg-white border-pink-100 shadow-xl'} rounded-sm border p-2 min-w-[200px]`}>
                    {item.dropdown.map((sub, idx) => (
                      <Link 
                        key={idx} 
                        to={sub.path} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm ${isDark ? 'hover:bg-pink-500/10 text-white/50 hover:text-pink-300' : 'hover:bg-pink-50 text-gray-600 hover:text-pink-500'} text-[10px] font-bold transition-all uppercase tracking-widest`}
                      >
                        <span className="text-pink-500/60">{sub.icon}</span>
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
            <span className="text-pink-400 text-xs animate-twinkle font-serif">✦</span>
            <span className="text-orange-400 text-[10px] animate-twinkle font-serif" style={{ animationDelay: '0.7s' }}>✦</span>
          </div>
        </nav>

        {/* Right Actions / Theme Toggle / Socials */}
        <div className="flex items-center gap-3 flex-shrink-0">
          
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            title={isDark ? "Beralih ke Mode Terang (Light Mode)" : "Beralih ke Mode Gelap (Dark Mode)"}
            className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300 border ${
              isDark 
                ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-amber-400 shadow-sm"
                : "bg-pink-50 border-pink-200 hover:border-pink-400 hover:bg-pink-100 text-pink-600 shadow-sm"
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
                    : "text-gray-400 hover:text-pink-500 border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-sm transition-all border ${
              isDark
                ? "text-white/70 bg-white/5 border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-300"
                : "text-gray-700 bg-gray-50 border-gray-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500"
            }`}
          >
            {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed inset-y-0 right-0 w-[85%] max-w-sm z-[120] lg:hidden flex flex-col 
                ${isDark ? 'bg-[#0f0a1e] border-pink-900/30 text-white' : 'bg-white border-pink-100 text-gray-800'}
                border-l shadow-2xl`}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-pink-500/20">
                <div className="flex flex-col">
                  <span className="text-3xl font-black italic bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent tracking-tighter">
                    H5-R
                  </span>
                  <span className="text-[9px] font-bold text-pink-400/50 uppercase tracking-widest leading-none mt-1 font-mono">OFFICIAL PORTAL</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className={`w-9 h-9 flex items-center justify-center rounded-sm border ${
                      isDark 
                        ? "bg-white/5 border-white/10 text-amber-400" 
                        : "bg-pink-50 border-pink-200 text-pink-500"
                    }`}
                  >
                    {isDark ? <FaSun size={13} /> : <FaMoon size={12} />}
                  </button>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`w-9 h-9 flex items-center justify-center rounded-sm border ${
                      isDark ? 'text-white/50 border-white/10' : 'text-gray-400 border-gray-200'
                    }`}
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 no-scrollbar">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div 
                        className={`flex items-center justify-between p-3.5 rounded-sm cursor-pointer transition-all ${
                          item.isPill 
                            ? 'bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-400 border border-pink-500/40' 
                            : isDark
                              ? 'bg-white/[0.03] text-white/70 border border-white/5 hover:bg-pink-500/10 hover:text-pink-300'
                              : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-pink-50 hover:text-pink-500'
                        }`}
                        onClick={() => item.dropdown ? toggleMobileSubmenu(item.name) : (navigate(item.path), setIsMobileMenuOpen(false))}
                      >
                        <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                        {item.dropdown && (
                          <FaChevronDown className={`transition-transform duration-300 text-xs ${expandedMobileMenu === item.name ? 'rotate-180 text-pink-400' : 'opacity-40'}`} />
                        )}
                      </div>
                      <AnimatePresence>
                        {item.dropdown && expandedMobileMenu === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((sub, idx) => (
                              <Link 
                                key={idx} 
                                to={sub.path} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className={`flex items-center gap-3 p-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${
                                  isDark ? 'bg-white/[0.02] text-white/50 hover:text-pink-300' : 'bg-gray-50 text-gray-500 hover:text-pink-500'
                                }`}
                              >
                                <span className="text-pink-500/60">{sub.icon}</span>
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Social Footer */}
              <div className={`p-6 border-t ${isDark ? 'border-white/5 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
                <div className="flex items-center justify-center gap-5">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`text-lg transition-all transform hover:scale-125 ${
                        isDark ? 'text-white/30 hover:text-pink-400' : 'text-gray-400 hover:text-pink-500'
                      }`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-center text-[9px] font-mono font-bold text-pink-400/50 uppercase tracking-widest mt-4">
                  H5-Revolution © 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
