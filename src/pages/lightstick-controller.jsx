import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaBluetooth, 
  FaBluetoothB, 
  FaBolt, 
  FaMusic, 
  FaBatteryFull, 
  FaSlidersH, 
  FaExpand, 
  FaCompress, 
  FaStar,
  FaCheckCircle,
  FaSyncAlt
} from "react-icons/fa";
import SEO from "../components/SEO";

const MEMBER_THEMES = [
  { id: "yuki", name: "Yuki Tanaka", color: "#ec4899", glow: "rgba(236, 72, 153, 0.9)", role: "Center / Main Vocal", label: "Cherry Pink" },
  { id: "sakura", name: "Sakura Yamamoto", color: "#06b6d4", glow: "rgba(6, 182, 212, 0.9)", role: "Lead Vocal", label: "Cyber Cyan" },
  { id: "rin", name: "Rin Hoshizora", color: "#f97316", glow: "rgba(249, 115, 22, 0.9)", role: "Main Dancer", label: "Solar Orange" },
  { id: "aoi", name: "Aoi Kirishima", color: "#a855f7", glow: "rgba(168, 85, 247, 0.9)", role: "Visual / Rap", label: "Hyper Violet" },
  { id: "mei", name: "Mei Ling", color: "#10b981", glow: "rgba(16, 185, 129, 0.9)", role: "Sub Vocal", label: "Emerald Laser" },
  { id: "all", name: "H5 Group Stage", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.9)", role: "Concert Finale", label: "Radiant Gold" }
];

const LIGHT_MODES = [
  { id: "steady", label: "Steady On", icon: "💡", desc: "Cahaya konstan tanpa kedip" },
  { id: "pulse", label: "Breathing", icon: "✨", desc: "Denyut halus berirama" },
  { id: "strobe", label: "High Strobe", icon: "⚡", desc: "Kedipan cepat konser" },
  { id: "rainbow", label: "Rainbow Flow", icon: "🌈", desc: "Pergantian warna dinamis" },
  { id: "stage_sync", label: "Concert Sync", icon: "📡", desc: "Tersambung ke panggung konser" }
];

const LightstickController = () => {
  const [selectedTheme, setSelectedTheme] = useState(MEMBER_THEMES[0]);
  const [activeMode, setActiveMode] = useState("pulse");
  const [brightness, setBrightness] = useState(90);
  const [isConnected, setIsConnected] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Audio beat simulation pulse
  const [beatPulse, setBeatPulse] = useState(false);

  useEffect(() => {
    if (!isPowerOn) return;
    const interval = setInterval(() => {
      setBeatPulse(prev => !prev);
    }, activeMode === "strobe" ? 250 : activeMode === "pulse" ? 1200 : 800);
    return () => clearInterval(interval);
  }, [activeMode, isPowerOn]);

  const handleToggleBluetooth = () => {
    if (isConnected) {
      setIsConnected(false);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
      }, 1500);
    }
  };

  const getLightstickAnimation = () => {
    if (!isPowerOn) return "";
    switch (activeMode) {
      case "pulse":
        return "animate-pulse";
      case "strobe":
        return "animate-ping";
      case "rainbow":
        return "animate-spin-slow";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden select-none">
      <SEO title="Virtual Lightstick V2 Controller" description="Kontrol dan sinkronisasi lightstick konser resmi H5-Revolution melalui smartphone." />

      {/* Dynamic Ambient Background Glow matched with active member color */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-40"
        style={{ 
          backgroundColor: isPowerOn ? selectedTheme.color : "transparent"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/shop" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold flex items-center gap-1.5">
                <FaBolt size={10} /> BLUETOOTH CONCERT SYNC APP
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Lightstick <span className="text-idol">Controller</span>
              </h1>
            </div>
          </div>

          {/* Bluetooth Status Indicator */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={handleToggleBluetooth}
              disabled={isConnecting}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isConnected 
                  ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/20" 
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white"
              }`}
            >
              <FaBluetooth size={12} className={isConnecting ? "animate-spin" : isConnected ? "text-cyan-400" : ""} />
              <span>{isConnecting ? "Menghubungkan..." : isConnected ? "STAGE CONNECTED" : "CONNECT STAGE"}</span>
            </button>

            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-mono text-emerald-400">
              <FaBatteryFull size={14} />
              <span>98%</span>
            </div>
          </div>
        </div>

        {/* ─── Main Controller Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: 3D Interactive Virtual Lightstick Hardware Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative">
            
            {/* Top Light Bulb Sphere */}
            <div className="relative mb-6">
              <div 
                className={`w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-white/20 flex items-center justify-center transition-all duration-500 relative cursor-pointer ${getLightstickAnimation()}`}
                style={{
                  backgroundColor: isPowerOn ? selectedTheme.color : "#1f1833",
                  boxShadow: isPowerOn 
                    ? `0 0 ${brightness}px ${selectedTheme.glow}, inset 0 0 40px rgba(255,255,255,0.6)`
                    : "none"
                }}
                onClick={() => setIsPowerOn(!isPowerOn)}
                title="Klik untuk on/off lightstick"
              >
                {/* Center Core H5 Hologram Logo */}
                <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/40 flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="font-outfit font-black text-xl tracking-tighter text-white drop-shadow-md">
                    H5
                  </span>
                  <span className="text-[7px] font-mono text-white/80 uppercase tracking-widest">
                    V2 STAGE
                  </span>
                </div>
              </div>

              {/* Holographic Ring Arc */}
              <div 
                className="absolute -inset-3 rounded-full border border-dashed border-white/30 pointer-events-none animate-spin-slow opacity-60"
              />
            </div>

            {/* Lightstick Handle Shaft */}
            <div className="w-14 h-40 bg-gradient-to-b from-[#241740] via-[#140b2a] to-[#0d071a] rounded-2xl border border-white/10 flex flex-col items-center justify-between py-4 shadow-xl relative">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
              </div>

              {/* Power Switch on Handle */}
              <button
                onClick={() => setIsPowerOn(!isPowerOn)}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all shadow-md cursor-pointer ${
                  isPowerOn 
                    ? "bg-gradient-to-tr from-pink-500 to-orange-500 border-white text-white shadow-pink-500/50" 
                    : "bg-white/10 border-white/20 text-white/40"
                }`}
                title="Power On / Off"
              >
                ⏻
              </button>

              <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase rotate-90 origin-center">
                H5-REV
              </span>
            </div>

            <div className="mt-6 text-center">
              <span className="font-bold text-sm text-white block">
                {isPowerOn ? selectedTheme.name : "Lightstick Mati"}
              </span>
              <span className="text-xs font-mono text-pink-400">
                {isPowerOn ? `${selectedTheme.label} • Mode ${activeMode.toUpperCase()}` : "Tekan tombol power untuk menyalakan"}
              </span>
            </div>

          </div>

          {/* RIGHT: Member Palettes & Control Deck (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Member Color Selector */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div>
                  <h3 className="text-sm font-black font-outfit uppercase tracking-wider text-white">
                    Pilih Warna Member (Oshi Color)
                  </h3>
                  <p className="text-[11px] text-white/40">Ganti warna panggung sesuai member favorit Anda</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30 font-bold">
                  OFFICIAL PRESETS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {MEMBER_THEMES.map((theme) => {
                  const isSelected = selectedTheme.id === theme.id;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setSelectedTheme(theme);
                        if (!isPowerOn) setIsPowerOn(true);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected 
                          ? "bg-white/[0.08] border-white/40 shadow-lg scale-[1.02]" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span 
                        className="w-7 h-7 rounded-full shrink-0 border border-white/30 shadow-md"
                        style={{ backgroundColor: theme.color }}
                      />
                      <div className="min-w-0">
                        <span className="font-bold text-xs text-white truncate block">{theme.name}</span>
                        <span className="text-[10px] text-white/50 truncate block">{theme.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Light Effects Mode */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div>
                  <h3 className="text-sm font-black font-outfit uppercase tracking-wider text-white">
                    Mode Efek Pencahayaan
                  </h3>
                  <p className="text-[11px] text-white/40">Sesuaikan ritme kedipan dengan tempo lagu</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LIGHT_MODES.map((mode) => {
                  const isSelected = activeMode === mode.id;

                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveMode(mode.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? "bg-gradient-to-br from-pink-950/40 to-purple-950/40 border-pink-500 shadow-md shadow-pink-500/20" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg">{mode.icon}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-pink-500 bg-pink-500 text-white" : "border-white/30"
                        }`} />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-white block">{mode.label}</span>
                        <span className="text-[10px] text-white/40 line-clamp-1">{mode.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Brightness Slider */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-4">
                <span className="text-xs font-mono text-white/60 shrink-0">Tingkat Kecerahan:</span>
                <input 
                  type="range"
                  min="20"
                  max="140"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full accent-pink-500 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-pink-400 w-12 text-right">
                  {Math.round((brightness / 140) * 100)}%
                </span>
              </div>
            </div>

            {/* Concert Cheering Shortcut Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-orange-950/40 border border-pink-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-white block">Siap Nonton Konser?</span>
                <span className="text-[11px] text-white/60">Buka panduan teriakan lirik lagu fans resmi</span>
              </div>
              <Link
                to="/fanchant"
                className="px-3.5 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
              >
                Lihat Fan Chant
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LightstickController;