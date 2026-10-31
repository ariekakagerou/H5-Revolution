import React from "react";
import { FaXTwitter, FaYoutube, FaTiktok, FaHeart, FaStar } from "react-icons/fa6";

/**
 * Footer Component
 * Dark Cyber-Idol Theme matching H5-Revolution Stage aesthetic.
 */
const Footer = () => {
  return (
    <footer className="bg-[#0a0614] text-slate-200 border-t border-pink-950/40 relative overflow-hidden">
      {/* Top stage laser line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />

      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[350px] h-[200px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Brand Logo */}
          <div className="mb-8 text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black italic tracking-tighter bg-gradient-to-r from-pink-400 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300">
              H5-REVOLUTION
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <FaStar className="text-pink-400 text-[10px] animate-pulse" />
              <span className="text-[10px] font-bold text-pink-400/60 tracking-[0.4em] uppercase font-mono">
                RISE & SHINE • STAGE IDOL
              </span>
              <FaStar className="text-orange-400 text-[10px] animate-pulse" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {[
              { icon: FaXTwitter, label: "Twitter", href: "https://twitter.com" },
              { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
              { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-white/[0.04] border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-white/50 hover:text-pink-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-idol-pink"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright & Info */}
          <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] font-bold text-white/40 tracking-widest uppercase">
              © 2026 H5-REVOLUTION • All Rights Reserved
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              Made with <FaHeart className="text-pink-500 animate-pulse" /> for fans globally
            </div>

            <div className="flex items-center gap-6">
              <a href="/legal" className="text-[10px] font-bold text-white/40 hover:text-pink-400 transition-colors uppercase tracking-widest">Privacy</a>
              <a href="/legal" className="text-[10px] font-bold text-white/40 hover:text-pink-400 transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
