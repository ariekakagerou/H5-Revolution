import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaYoutube, FaTiktok, FaHeart, FaStar, FaInstagram } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "./Logo";

/**
 * Footer Component
 * Dynamic styling matching Header:
 * - Light Mode: Stage Yellow (#fbbf24) with crisp obsidian-black text & new official logo.
 * - Dark Mode: Cyber-Idol (#0a0614) with neon pink/amber accents.
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
    <footer 
      className={`relative overflow-hidden border-t-2 ${
        isDark
          ? "bg-[#0a0614] text-slate-200 border-pink-950/40"
          : "bg-[#fbbf24] text-[#0f0f0f] border-amber-500/50"
      }`}
      style={{
        backgroundColor: isDark ? "#0a0614" : "#fbbf24",
        color: isDark ? "#f8fafc" : "#0f0f0f"
      }}
    >
      {/* Top laser accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${
        isDark
          ? "bg-gradient-to-r from-transparent via-pink-500/60 to-transparent"
          : "bg-gradient-to-r from-transparent via-amber-800/60 to-transparent"
      }`} />

      {/* Subtle Background Glows */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-pink-600/10" : "bg-yellow-400/20"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Top Row: Official Logo + Navigation */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12 items-start">
          
          {/* Brand & Official Logo */}
          <div className="flex-shrink-0 text-center lg:text-left w-full lg:w-auto">
            <Link to="/" className="inline-block mb-3" aria-label="H5-Revolution Home">
              <Logo size="lg" />
            </Link>
            <p className={`text-xs leading-relaxed max-w-xs mx-auto lg:mx-0 font-medium ${
              isDark ? "text-white/50" : "text-neutral-900"
            }`}>
              Indonesia's premier idol group — bringing the stage to life with every revolutionary performance.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  isDark
                    ? "text-white/60 hover:text-pink-400"
                    : "text-neutral-900 hover:text-black hover:underline"
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
            : "bg-gradient-to-r from-transparent via-black/15 to-transparent"
        }`} />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className={`text-[10px] font-black tracking-widest uppercase order-2 sm:order-1 ${
            isDark ? "text-white/40" : "text-neutral-900"
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
                    : "bg-black/10 border-black/20 hover:border-black hover:bg-black text-black hover:text-[#fbbf24]"
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest order-3 ${
            isDark ? "text-white/40" : "text-neutral-900"
          }`}>
            Made with <FaHeart className={`animate-pulse ${isDark ? "text-pink-500" : "text-rose-600"}`} /> for fans
          </div>
        </div>

        {/* Legal links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="/legal" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isDark ? "text-white/30 hover:text-pink-400" : "text-neutral-800 hover:text-black"
          }`}>Privacy</a>
          <a href="/legal" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isDark ? "text-white/30 hover:text-pink-400" : "text-neutral-800 hover:text-black"
          }`}>Terms</a>
          <a href="/legal" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isDark ? "text-white/30 hover:text-pink-400" : "text-neutral-800 hover:text-black"
          }`}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
