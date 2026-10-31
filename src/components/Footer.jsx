import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaYoutube, FaTiktok, FaHeart, FaStar, FaInstagram } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Footer Component
 * Supports Dark (Cyber-Idol) and Light (Yellow/White/Black) themes.
 */
const Footer = () => {
  const { isDark } = useTheme();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Members", to: "/members" },
    { label: "Theater", to: "/theater" },
    { label: "Events", to: "/events" },
    { label: "Shop", to: "/shop" },
    { label: "Tickets", to: "/tickets" },
    { label: "Fan Club", to: "/fans" },
    { label: "About", to: "/about" },
  ];

  const socialLinks = [
    { icon: FaXTwitter, label: "Twitter", href: "https://twitter.com" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
    { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <footer className={`relative overflow-hidden border-t ${
      isDark
        ? "bg-[#0a0614] text-slate-200 border-pink-950/40"
        : "bg-[#111111] text-white border-yellow-800/30"
    }`}>
      {/* Top laser line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] ${
        isDark
          ? "bg-gradient-to-r from-transparent via-pink-500/60 to-transparent"
          : "bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
      }`} />

      {/* Background glows */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-pink-600/10" : "bg-yellow-500/8"
      }`} />
      <div className={`absolute top-0 right-1/4 w-[300px] h-[180px] rounded-full blur-[100px] pointer-events-none ${
        isDark ? "bg-orange-500/5" : "bg-amber-400/5"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Top Row: Logo + Nav */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12 items-start">
          
          {/* Brand */}
          <div className="flex-shrink-0 text-center lg:text-left w-full lg:w-auto">
            <div className="text-3xl md:text-4xl font-black italic tracking-tighter bg-gradient-to-r from-pink-400 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 mb-2">
              H5-REVOLUTION
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FaStar className={`text-[10px] animate-pulse ${isDark ? "text-pink-400" : "text-yellow-400"}`} />
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase font-mono ${isDark ? "text-pink-400/60" : "text-yellow-400/70"}`}>
                RISE & SHINE • STAGE IDOL
              </span>
              <FaStar className={`text-[10px] animate-pulse ${isDark ? "text-orange-400" : "text-amber-400"}`} />
            </div>
            <p className={`text-xs leading-relaxed max-w-xs mx-auto lg:mx-0 ${isDark ? "text-white/30" : "text-white/50"}`}>
              Indonesia's premier idol group — bringing the stage to life with every performance.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  isDark
                    ? "text-white/40 hover:text-pink-400"
                    : "text-white/50 hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-[1px] w-full mb-8 ${
          isDark
            ? "bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"
        }`} />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className={`text-[10px] font-bold tracking-widest uppercase order-2 sm:order-1 ${
            isDark ? "text-white/30" : "text-white/40"
          }`}>
            © 2026 H5-REVOLUTION • All Rights Reserved
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-white/50 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                    : "bg-white/[0.05] border-white/10 hover:border-yellow-400/60 hover:bg-yellow-400/10 text-white/40 hover:text-yellow-400"
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest order-3 ${
            isDark ? "text-white/30" : "text-white/40"
          }`}>
            Made with <FaHeart className={`animate-pulse ${isDark ? "text-pink-500" : "text-yellow-400"}`} /> for fans
          </div>
        </div>

        {/* Legal links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="/legal" className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isDark ? "text-white/20 hover:text-pink-400" : "text-white/30 hover:text-yellow-400"}`}>Privacy</a>
          <a href="/legal" className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isDark ? "text-white/20 hover:text-pink-400" : "text-white/30 hover:text-yellow-400"}`}>Terms</a>
          <a href="/legal" className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isDark ? "text-white/20 hover:text-pink-400" : "text-white/30 hover:text-yellow-400"}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
