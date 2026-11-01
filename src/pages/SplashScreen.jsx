import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaStar, FaCrown } from "react-icons/fa";

/**
 * SplashScreen Component
 * Theme: Luminous Stage Idol Opening Sequence (Light Pastel Cyber-Idol Edition)
 * Recreated with exact styling from official reference:
 * - Soft pastel warm cream & peach stage background
 * - Halftone dot matrix patterns and flowing abstract wave ribbons
 * - Faint giant "H5-R" watermark in the background
 * - Central glowing squircle emblem with crown, swoosh, and star badge
 * - Dual glowing orbital rings with sparkles
 * - Vibrant gradient typography for "H5-REVOLUTION"
 * - Rounded pill progress bar with real-time status & percentage
 */
const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING STAGE SYSTEM...");

  useEffect(() => {
    // Progress counter animation from 0 to 100 over ~2.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 2;
        if (next === 26) setStatusText("CALIBRATING LIGHTSTICK SIGNALS...");
        if (next === 56) setStatusText("SYNCING AUDIO STAGE VISUALIZER...");
        if (next === 78) setStatusText("INITIALIZING STAGE SYSTEM...");
        if (next >= 96) setStatusText("STAGE READY • WELCOME REVOLUTIONARIES!");
        return next;
      });
    }, 45);

    // Auto complete after 3.1 seconds
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(6px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#fff7f9] via-[#fffbf5] to-[#fef2f6] text-gray-800 overflow-hidden select-none"
    >
      {/* ── Ambient Background & Wavy Ribbons ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-gradient-to-tr from-pink-300/25 via-amber-200/20 to-rose-300/20 rounded-full blur-[120px]" />

        {/* Top-Right Halftone Dot Pattern */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="dots-tr" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1.5" fill="#f43f5e" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#dots-tr)" />
          </svg>
        </div>

        {/* Bottom-Left Halftone Dot Pattern */}
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="dots-bl" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1.5" fill="#f43f5e" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#dots-bl)" />
          </svg>
        </div>

        {/* Top-Left Smooth Wavy Ribbon */}
        <svg
          className="absolute -top-10 -left-10 w-[380px] sm:w-[500px] h-[280px] sm:h-[360px] opacity-75"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M-50 80 C 80 20, 160 180, 320 60 C 370 20, 420 100, 450 140 C 320 260, 140 120, -50 220 Z"
            fill="url(#ribbon-grad-tl)"
          />
          <defs>
            <linearGradient id="ribbon-grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom-Right Smooth Wavy Ribbon */}
        <svg
          className="absolute -bottom-16 -right-16 w-[420px] sm:w-[600px] h-[320px] sm:h-[420px] opacity-80"
          viewBox="0 0 500 350"
          fill="none"
        >
          <path
            d="M50 350 C 150 200, 260 300, 420 180 C 480 130, 520 80, 560 60 C 560 220, 380 340, 150 380 Z"
            fill="url(#ribbon-grad-br)"
          />
          <defs>
            <linearGradient id="ribbon-grad-br" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#fb923c" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Faint Giant Background Watermark "H5-R" */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="font-outfit font-black italic text-[24vw] tracking-tighter text-pink-500/[0.04] transform -rotate-3">
            H5-R
          </span>
        </div>

        {/* Soft Sparkle Stars Floating */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-pink-300 animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse opacity-70" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-rose-400 animate-ping opacity-50" />
      </div>

      {/* ── Main Center Content ── */}
      <div className="relative z-20 flex flex-col items-center max-w-xl w-full px-6">
        
        {/* Central Logo Box with Orbital Rings */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="relative mb-8 flex items-center justify-center"
        >
          {/* Outer Glowing Orbital Ellipses */}
          <div className="absolute w-52 sm:w-64 h-52 sm:h-64 pointer-events-none flex items-center justify-center">
            {/* Orbital Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 sm:w-56 h-44 sm:h-56 rounded-full border border-pink-300/60 shadow-[0_0_15px_rgba(244,63,94,0.3)] transform -rotate-[28deg] scale-y-[0.42] flex items-center justify-end"
            >
              {/* Star Sparkle on Ring */}
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#fff,0_0_20px_#f43f5e] transform scale-y-[2.38]" />
            </motion.div>

            {/* Orbital Ring 2 (Cross Angle) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full border border-amber-300/50 shadow-[0_0_12px_rgba(251,146,60,0.25)] transform rotate-[32deg] scale-y-[0.38] flex items-center justify-start"
            >
              {/* Little Star Glow */}
              <div className="w-2.5 h-2.5 rounded-full bg-amber-100 shadow-[0_0_10px_#fff] transform scale-y-[2.63]" />
            </motion.div>
          </div>

          {/* Central Squircle Emblem */}
          <div className="relative w-28 sm:w-32 h-28 sm:h-32 rounded-3xl bg-gradient-to-br from-[#ff2a85] via-[#f43f5e] to-[#ff7b1c] shadow-[0_16px_36px_rgba(244,63,94,0.38)] p-1 flex flex-col items-center justify-center overflow-hidden">
            
            {/* Shimmer Light Reflection Sweep */}
            <motion.div
              animate={{ x: ["-140%", "220%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12"
            />

            {/* Inner Crown */}
            <FaCrown className="text-white text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] mb-1" />

            {/* Brand Logo Text "H5-R" */}
            <div className="text-center relative z-10">
              <span className="font-outfit font-black italic tracking-tighter text-2xl sm:text-3xl text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
                H5-R
              </span>
            </div>

            {/* White Curved Swoosh Orbit on Bottom */}
            <div className="absolute -bottom-1 -left-3 w-32 h-14 border-b-4 border-l-2 border-white/90 rounded-[50%] transform -rotate-12 pointer-events-none drop-shadow-sm" />
          </div>

          {/* Top-Right Star Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white shadow-lg border border-pink-100 flex items-center justify-center"
          >
            <FaStar className="text-amber-500 text-xs sm:text-sm drop-shadow-sm" />
          </motion.div>
        </motion.div>

        {/* ── Brand Typography Section ── */}
        <div className="text-center mb-8">
          
          {/* Stage Idol Revolution Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <FaBolt className="text-amber-500 text-[11px]" />
            <span className="font-bold tracking-[0.35em] uppercase text-[10px] sm:text-[11px] text-gray-600">
              STAGE IDOL REVOLUTION
            </span>
            <FaBolt className="text-amber-500 text-[11px]" />
          </motion.div>

          {/* Main Title: H5-REVOLUTION */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 160 }}
            className="font-outfit font-black italic text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase mb-2"
            style={{
              background: "linear-gradient(90deg, #ff1b7a 0%, #f43f5e 40%, #f97316 75%, #ff8400 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 16px rgba(244,63,94,0.22))",
            }}
          >
            H5-REVOLUTION
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="font-mono text-gray-500 text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase"
          >
            RISE &amp; SHINE • LIVE CYBER CONCERT
          </motion.p>
        </div>

        {/* ── Progress Bar & Status Line ── */}
        <div className="w-full max-w-sm sm:max-w-md space-y-2">
          
          <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono tracking-wider">
            <span className="text-gray-600 font-bold uppercase truncate max-w-[280px]">
              {statusText}
            </span>
            <span className="text-gray-900 font-black font-outfit text-xs">
              {progress}%
            </span>
          </div>

          {/* Smooth Rounded Pill Progress Track */}
          <div className="w-full h-2 sm:h-2.5 bg-gray-200/80 rounded-full overflow-hidden p-[1px] shadow-inner">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#ff2a85] via-[#ff6b2b] to-[#ffb703] shadow-[0_0_12px_rgba(255,42,133,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>

      {/* ── Footer System Tag ── */}
      <div className="absolute bottom-6 text-center text-gray-400 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] pointer-events-none">
        © 2026 H5-REVOLUTION • MAINFRAME V2.5 ONLINE
      </div>
    </motion.div>
  );
};

export default SplashScreen;
