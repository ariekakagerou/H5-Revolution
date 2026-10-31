import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaStar, FaBolt, FaChevronRight } from "react-icons/fa";

/**
 * SplashScreen Component
 * Theme: Dark Cyber-Idol Live Stage Opening Sequence.
 * Features: Deep dark stage background, holographic neon emblem, audio stage visualizer,
 * smooth loading progress bar, and seamless exit transition into the dark UI.
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
        if (next === 30) setStatusText("SYNCING LIGHTSTICK RGB SIGNALS...");
        if (next === 70) setStatusText("CALIBRATING STAGE LASERS...");
        if (next >= 98) setStatusText("STAGE READY • WELCOME REVOLUTIONARIES!");
        return next;
      });
    }, 45);

    // Auto complete after 3 seconds
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
        scale: 1.08, 
        filter: "blur(8px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070412] text-white overflow-hidden select-none"
    >
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsing stage orbs */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 right-10 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        {/* Stage laser lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(236,72,153,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      </div>

      {/* ── Skip Button ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onComplete}
        className="absolute top-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-white/50 hover:text-pink-300 text-[10px] font-mono font-bold uppercase tracking-widest transition-all"
      >
        Skip Intro <FaChevronRight size={8} />
      </motion.button>

      {/* ── Main Center Content ── */}
      <div className="relative z-20 flex flex-col items-center max-w-xl w-full px-6">
        
        {/* Holographic Glowing Emblem */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Outer Pulsing Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border border-dashed border-pink-500/40 flex items-center justify-center p-2"
          >
            <div className="w-full h-full rounded-full border border-orange-500/30" />
          </motion.div>

          {/* Central Logo Box */}
          <div className="absolute inset-2.5 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-sm flex items-center justify-center shadow-idol-pink overflow-hidden">
            {/* Shimmer light sweep */}
            <motion.div 
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black italic tracking-tighter text-white drop-shadow-md">
                H5-R
              </span>
            </div>
          </div>

          {/* Floating Sparkle Badge */}
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-1 w-7 h-7 bg-[#0f0a1e] rounded-sm border border-pink-400/80 flex items-center justify-center shadow-idol-pink"
          >
            <FaStar className="text-pink-400 text-xs animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Brand Name with Staggered Glow */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <FaBolt className="text-pink-400 text-[10px]" />
            <span className="text-pink-400 font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-idol-glow">
              STAGE IDOL REVOLUTION
            </span>
            <FaBolt className="text-orange-400 text-[10px]" />
          </motion.div>
          
          <div className="overflow-hidden flex justify-center py-1">
             {"H5-REVOLUTION".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.35 + (index * 0.04),
                    type: "spring",
                    stiffness: 140,
                    damping: 12
                  }}
                  className={`text-5xl md:text-6xl font-black tracking-tighter ${
                    char === "-" 
                      ? "text-pink-400/60" 
                      : "bg-gradient-to-r from-pink-400 via-orange-400 to-pink-500 bg-clip-text text-transparent"
                  } drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]`}
                >
                  {char}
                </motion.span>
             ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/40 font-mono text-[11px] tracking-[0.3em] uppercase mt-1"
          >
            RISE & SHINE • LIVE CYBER CONCERT
          </motion.p>
        </div>

        {/* ── Cyber Loading Bar ── */}
        <div className="w-full max-w-sm space-y-2.5">
          <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
            <span className="text-pink-400/80 truncate max-w-[260px]">{statusText}</span>
            <span className="text-white/80 font-bold">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-white/5 border border-white/10 rounded-sm overflow-hidden p-[1px]">
            <motion.div 
              className="h-full bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 rounded-sm shadow-[0_0_12px_rgba(236,72,153,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>

      {/* ── Footer System Tag ── */}
      <div className="absolute bottom-6 text-center text-white/20 font-mono text-[9px] uppercase tracking-[0.3em] pointer-events-none">
        © 2026 H5-REVOLUTION • MAINFRAME V2.6 ONLINE
      </div>
    </motion.div>
  );
};

export default SplashScreen;
