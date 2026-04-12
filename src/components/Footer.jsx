import React from "react";
import { FaXTwitter, FaYoutube, FaTiktok, FaHeart, FaStar } from "react-icons/fa6";

/**
 * Footer Component
 * Simplified version with a clean, modern aesthetic.
 * Focuses on essential navigation and brand presence.
 */
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-50/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          
          {/* Brand Logo */}
          <div className="mb-8 text-center group cursor-pointer">
            <div className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              H5-REVOLUTION
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <FaStar className="text-yellow-400 text-[10px] animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.4em] uppercase">Rise & Shine</span>
              <FaStar className="text-yellow-400 text-[10px] animate-pulse" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-10">
            {[
              { icon: FaXTwitter, label: "Twitter" },
              { icon: FaYoutube, label: "YouTube" },
              { icon: FaTiktok, label: "TikTok" }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-125"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>

          {/* Copyright & Info */}
          <div className="w-full pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              © 2025 H5-REVOLUTION • All Rights Reserved
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Made with <FaHeart className="text-pink-400 animate-pulse" /> for fans globally
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-[10px] font-black text-gray-400 hover:text-orange-400 transition-colors uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-[10px] font-black text-gray-400 hover:text-orange-400 transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;