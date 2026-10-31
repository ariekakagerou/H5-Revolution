import React from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * H5-Revolution Brand Logo Component
 * High-definition cyber-idol emblem with dynamic theme reactivity.
 * 
 * @param {string} variant - "full" (emblem + text) | "compact" (emblem + H5-R) | "mark" (emblem only)
 * @param {string} size - "sm" | "md" | "lg" | "xl"
 * @param {string} className - extra wrapper classes
 */
const Logo = ({ variant = "full", size = "md", className = "" }) => {
  const { isDark } = useTheme();

  // Dimensions
  const sizes = {
    sm: { emblem: 28, text: "text-lg", sub: "text-[7px]", gap: "gap-2" },
    md: { emblem: 36, text: "text-2xl sm:text-3xl", sub: "text-[8px] sm:text-[9px]", gap: "gap-2.5" },
    lg: { emblem: 48, text: "text-3xl sm:text-4xl", sub: "text-[9px] sm:text-[10px]", gap: "gap-3" },
    xl: { emblem: 64, text: "text-4xl sm:text-5xl", sub: "text-[11px]", gap: "gap-3.5" },
  };

  const currentSize = sizes[size] || sizes.md;

  // Colors based on theme
  const gradStart = isDark ? "#ec4899" : "#d97706";
  const gradMid   = isDark ? "#f97316" : "#f59e0b";
  const gradEnd   = isDark ? "#fbbf24" : "#eab308";
  const textColor = isDark ? "#ffffff" : "#0f0f0f";
  const subColor  = isDark ? "rgba(244, 114, 182, 0.75)" : "#b45309";
  const filterGlow = isDark 
    ? "drop-shadow(0 0 10px rgba(236,72,153,0.65))" 
    : "drop-shadow(0 2px 8px rgba(245,158,11,0.35))";

  return (
    <div className={`inline-flex items-center ${currentSize.gap} group select-none ${className}`}>
      
      {/* ─── CYBER-IDOL EMBLEM (SVG) ─────────────────────────── */}
      <div 
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: currentSize.emblem, height: currentSize.emblem, filter: filterGlow }}
      >
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Primary Gradient */}
            <linearGradient id={`h5LogoGrad_${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradStart} />
              <stop offset="50%" stopColor={gradMid} />
              <stop offset="100%" stopColor={gradEnd} />
            </linearGradient>

            {/* Inner Shield Gradient */}
            <linearGradient id={`h5ShieldGrad_${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#240d42" : "#ffffff"} />
              <stop offset="100%" stopColor={isDark ? "#0f061e" : "#fef3c7"} />
            </linearGradient>

            {/* Core Accent Glow */}
            <radialGradient id={`h5CoreGlow_${isDark ? 'dark' : 'light'}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={gradStart} stopOpacity={isDark ? "0.45" : "0.25"} />
              <stop offset="100%" stopColor={gradStart} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Glow Disk */}
          <circle cx="32" cy="32" r="28" fill={`url(#h5CoreGlow_${isDark ? 'dark' : 'light'})`} />

          {/* Outer Cyber Hexagonal Crest */}
          <path 
            d="M32 3 L57 17 L57 47 L32 61 L7 47 L7 17 Z" 
            fill={`url(#h5ShieldGrad_${isDark ? 'dark' : 'light'})`}
            stroke={`url(#h5LogoGrad_${isDark ? 'dark' : 'light'})`}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Ring */}
          <path 
            d="M32 8 L52 19 L52 45 L32 56 L12 45 L12 19 Z" 
            fill="none"
            stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(245,158,11,0.25)"}
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* STYLIZED "H" (Left Column + Center Cross) */}
          <path 
            d="M20 18 L26 18 L26 28 L32 28 L32 18 L38 18 L38 46 L32 46 L32 34 L26 34 L26 46 L20 46 Z" 
            fill={isDark ? "#ffffff" : "#0f0f0f"}
            opacity={isDark ? "0.95" : "0.9"}
          />

          {/* STYLIZED "5" & ACCENT FLASH (Right Overlay) */}
          <path 
            d="M30 20 L44 20 L44 26 L36 26 C41 26 46 29 46 35 C46 41 40 45 32 45 C28 45 25 43.5 23 41.5 L27 37 C28.5 38.5 30.5 39.5 32.5 39.5 C36 39.5 38.5 37.5 38.5 34.5 C38.5 31.5 36 29.5 32 29.5 L30 29.5 Z" 
            fill={`url(#h5LogoGrad_${isDark ? 'dark' : 'light'})`}
          />

          {/* Central 4-Point Idol Star Flare (✦) Top Corner */}
          <path 
            d="M32 3 L33.5 8 L38.5 9.5 L33.5 11 L32 16 L30.5 11 L25.5 9.5 L30.5 8 Z" 
            fill={`url(#h5LogoGrad_${isDark ? 'dark' : 'light'})`}
          />

          {/* Little Star Bottom Accent */}
          <circle cx="32" cy="52" r="1.5" fill={isDark ? "#ffffff" : "#d97706"} />
        </svg>
      </div>

      {/* ─── TYPOGRAPHY / WORDMARK ───────────────────────────── */}
      {variant !== "mark" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span 
              className={`${currentSize.text} font-black italic tracking-tighter leading-none transition-all duration-300 font-display`}
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)"
                  : "linear-gradient(135deg, #0f0f0f 0%, #b45309 60%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: isDark ? "drop-shadow(0 0 14px rgba(236,72,153,0.4))" : "none"
              }}
            >
              {variant === "compact" ? "H5-R" : "H5-REVOLUTION"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span 
              className={`${currentSize.sub} font-black uppercase tracking-[0.28em] font-mono leading-none`}
              style={{ color: subColor }}
            >
              STAGE IDOL GROUP
            </span>
            <span className="text-[7px] font-mono opacity-40 leading-none" style={{ color: subColor }}>•</span>
            <span 
              className={`${currentSize.sub} font-bold uppercase tracking-[0.2em] font-mono leading-none opacity-80`}
              style={{ color: subColor }}
            >
              OFFICIAL
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

export default Logo;

