import React from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * H5-Revolution Official Logo Component
 * Uses the official idol branding image with automatic dark/light theme switching.
 * 
 * @param {string} size - "sm" | "md" | "lg" | "xl"
 * @param {string} className - extra wrapper classes
 */
const Logo = ({ size = "md", className = "" }) => {
  const { isDark } = useTheme();

  // Official logo image assets
  const logoSrc = isDark 
    ? "/images/h5-logo-dark.png" 
    : "/images/h5-logo-transparent.png";

  const sizeClasses = {
    sm: "h-8 sm:h-9 max-w-[140px] sm:max-w-[170px]",
    md: "h-10 sm:h-12 max-w-[170px] sm:max-w-[210px]",
    lg: "h-14 sm:h-16 max-w-[220px] sm:max-w-[260px]",
    xl: "h-20 sm:h-24 max-w-[280px] sm:max-w-[340px]",
  };

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img 
        src={logoSrc} 
        alt="H5-Revolution Official Idol Group" 
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        style={{
          filter: isDark 
            ? "drop-shadow(0 0 14px rgba(251, 191, 36, 0.55))" 
            : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))"
        }}
      />
    </div>
  );
};

export default Logo;
