import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar, FaMusic } from "react-icons/fa";

/**
 * SplashScreen Component
 * Design: High-energy, premium idol revolution theme.
 * Features: Gradient backgrounds, animated orbs, glassmorphism, and staggered text animations.
 */
const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    // Menampilkan splash screen selama tepat 5 detik sebelum pindah
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[80vw] h-[80vw] bg-pink-300/20 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-20 w-[70vw] h-[70vw] bg-cyan-400/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-pink-400/20 rounded-full blur-[150px]"
        />
      </div>

      {/* ── Grid Pattern Overlay ── */}
      <div className="absolute inset-0 z-10 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      {/* ── Main Content ── */}
      <div className="relative z-20 flex flex-col items-center max-w-lg w-full px-6">
        
        {/* Revolving Icon with Glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="relative mb-10"
        >
          <div className="w-28 h-28 bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-400 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)] rotate-12 relative overflow-hidden group">
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
            <FaMusic className="text-5xl text-white -rotate-12 drop-shadow-lg" />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.3)] border border-pink-100"
          >
            <FaHeart className="text-pink-500 text-lg animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Text Animation with Pulse Glow */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <FaStar className="text-yellow-400 text-xs animate-spin-slow" />
            <span className="text-pink-500 text-xs font-black tracking-[0.5em] uppercase drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
              The Revolution
            </span>
            <FaStar className="text-yellow-400 text-xs animate-spin-slow" />
          </motion.div>
          
          <div className="overflow-hidden flex justify-center py-2 h-24">
             {"H5-REVOLUTION".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.5 + (index * 0.05),
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`text-6xl md:text-7xl font-black ${char === "-" ? 'text-gray-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400'} tracking-tighter drop-shadow-[0_10px_20px_rgba(236,72,153,0.2)]`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
             ))}
          </div>
        </div>

        {/* Floating elements for extra flair */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 text-cyan-400"
        >
          <FaStar size={32} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 text-pink-400"
        >
          <FaHeart size={24} />
        </motion.div>
      </div>

      {/* ── Style Override for spin ── */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default SplashScreen;
