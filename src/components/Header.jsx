import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaBars, FaTimes, FaGlobe, FaChevronDown, 
  FaShoppingBag, FaTicketAlt, FaTv, FaStar, 
  FaPlay, FaInfoCircle, FaHistory, FaCalendarAlt,
  FaTwitter, FaFacebookF, FaInstagram, FaYoutube 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Solid Professional Header Component
 * Maintains a consistent white background as requested (Image 2 style).
 */
const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
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
      name: "Members", 
      path: "/members",
      dropdown: [
        { name: "All Members", path: "/members", icon: <FaStar /> },
        { name: "Unit Groups", path: "/members#units", icon: <FaPlay /> }
      ]
    },
    { name: "Gallery", path: "/showcase" },
    { name: "Tickets", path: "/tickets", isPill: true },
    { 
      name: "Schedule", 
      path: "/theater",
      dropdown: [
        { name: "Theater Schedule", path: "/theater#schedule", icon: <FaCalendarAlt /> },
        { name: "Theater Guide", path: "/theater#guide", icon: <FaInfoCircle /> }
      ]
    },
    { name: "Shows", path: "/shows" },
    { name: "Join Us", path: "/fans" },
    { name: "Shop", path: "/shop" },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, color: "text-slate-700", hover: "hover:text-cyan-500", path: "https://twitter.com" },
    { icon: <FaFacebookF />, color: "text-[#f7b731]", hover: "hover:text-orange-600", path: "https://facebook.com", isBox: true },
    { icon: <FaInstagram />, color: "text-[#f7b731]", hover: "hover:text-pink-600", path: "https://instagram.com", isBox: true },
    { icon: <FaYoutube />, color: "text-[#f7b731]", hover: "hover:text-red-600", path: "https://youtube.com", isBox: true },
  ];

  const toggleMobileSubmenu = (menuName) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white shadow-md ${isScrolled ? "py-4 shadow-xl" : "py-6"}`}>
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex flex-col group flex-shrink-0">
          <div className="flex items-baseline leading-none">
             <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-[#f7b731] leading-none">H5-R</span>
          </div>
          <span className="text-[7px] md:text-[9px] font-bold tracking-[0.1em] text-slate-400 uppercase leading-none mt-1 ml-1 font-inter">(HIVE-REVOLUTION)</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.isPill ? (
                <Link 
                  to={item.path}
                  className="px-5 py-2 bg-[#fdf2d0] rounded-lg text-[11px] font-black uppercase tracking-widest text-[#9d7311] hover:bg-[#faebbb] transition-all shadow-sm flex items-center gap-2"
                >
                  {item.name}
                </Link>
              ) : (
                <Link 
                  to={item.path}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 ${location.pathname === item.path ? "text-[#f7b731]" : "text-slate-600 hover:text-[#f7b731]"}`}
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown size={8} className="text-slate-300 group-hover:rotate-180 transition-transform" />}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                   <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 min-w-[200px]">
                      {item.dropdown.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          to={sub.path} 
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-[10px] font-bold text-slate-500 hover:text-[#f7b731] transition-all uppercase tracking-widest"
                        >
                           <span className="text-slate-300">{sub.icon}</span>
                           {sub.name}
                        </Link>
                      ))}
                   </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-1 ml-1 select-none">
             <span className="text-yellow-400 text-xs animate-pulse font-serif">✦</span>
             <span className="text-yellow-200 text-[10px] animate-pulse font-serif" style={{ animationDelay: '0.5s' }}>✦</span>
          </div>
        </nav>

        {/* Right Actions / Socials */}
        <div className="flex items-center gap-4 flex-shrink-0">
           <div className="hidden xl:flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all p-2 rounded-lg ${social.color} ${social.hover} ${social.isBox ? 'bg-[#f7b731] !text-white hover:scale-110 shadow-sm' : 'text-xl hover:scale-110'}`}
                >
                  {social.icon}
                </a>
              ))}
           </div>
           
           {/* Mobile Menu Toggle */}
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all shadow-sm"
           >
             {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
               className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] lg:hidden"
               onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm z-[120] bg-white lg:hidden flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center justify-between p-8 border-b border-slate-50">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black italic text-[#f7b731] tracking-tighter">H5-R</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">OFFICIAL PORTAL</span>
                 </div>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-600 rounded-full border border-slate-100">
                    <FaTimes size={18} />
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 no-scrollbar">
                <nav className="space-y-3">
                   {navItems.map((item) => (
                     <div key={item.name} className="space-y-2">
                        <div 
                          className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all ${item.isPill ? 'bg-[#fdf2d0] text-[#9d7311] border border-[#faebbb]' : 'bg-slate-50 text-slate-700 border border-slate-100/50 hover:bg-slate-100'}`}
                          onClick={() => item.dropdown ? toggleMobileSubmenu(item.name) : (navigate(item.path), setIsMobileMenuOpen(false))}
                        >
                           <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                           {item.dropdown && <FaChevronDown className={`transition-transform duration-300 text-slate-400 ${expandedMobileMenu === item.name ? 'rotate-180 text-[#f7b731]' : ''}`} />}
                        </div>
                        <AnimatePresence>
                          {item.dropdown && expandedMobileMenu === item.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: "auto", opacity: 1 }} 
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 space-y-2 overflow-hidden"
                            >
                               {item.dropdown.map((sub, idx) => (
                                 <Link key={idx} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 text-[10px] font-bold text-slate-600 hover:text-[#f7b731] uppercase tracking-widest transition-all">
                                    <span className="text-[#f7b731]">{sub.icon}</span>
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

              <div className="p-8 border-t border-slate-50 bg-slate-50/30">
                 <div className="flex items-center justify-center gap-6">
                    {socialLinks.map((social, i) => (
                      <a key={i} href={social.path} target="_blank" rel="noopener noreferrer" className={`text-2xl ${social.color} hover:text-[#f7b731] transition-all transform hover:scale-125`}>
                         {social.icon}
                      </a>
                    ))}
                 </div>
                 <p className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-8">H5-Revolution © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;