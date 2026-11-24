import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaPlay, 
  FaPause, 
  FaVolumeUp, 
  FaMusic, 
  FaMicrophone, 
  FaStar,
  FaCheckCircle,
  FaLightbulb
} from "react-icons/fa";
import SEO from "../components/SEO";

const SONGS_FANCHANT = [
  {
    id: "revolutionary-dawn",
    title: "Revolutionary Dawn (Title Track)",
    album: "'Shining Stars' 1st Full Album",
    duration: "3:42",
    tempo: "132 BPM (High Energy)",
    introShout: "YUKI! • SAKURA! • RIN! • AOI! • MEI! • H5-REVOLUTION!",
    sections: [
      {
        part: "[INTRO INSTRUMENTAL - 0:00 - 0:15]",
        lines: [
          { idol: "(Powerful synth & bass drop opens the stadium)", chant: "H! 5! REV-O-LU-TION! (4X)" }
        ]
      },
      {
        part: "[VERSE 1 - Yuki & Sakura]",
        lines: [
          { idol: "Kono sekai no katasumi de, hikari wo sagashiteta", chant: "IKUZO!" },
          { idol: "Kimi no koe ga todoita hi, subete ga kawatta", chant: "YUKI TANAKA!" },
          { idol: "Tsumazui te mo furimukazu ni hashiridasu kara", chant: "SAKURA!" }
        ]
      },
      {
        part: "[PRE-CHORUS - Rin & Aoi]",
        lines: [
          { idol: "Mune no oku de moeru honoo, keshite kienai", chant: "MOERO!" },
          { idol: "Mirai e tsuzuku kono doa wo, ima akete miseru", chant: "SAIKO NO STAGE!" }
        ]
      },
      {
        part: "[CHORUS - ALL MEMBERS]",
        lines: [
          { idol: "We are the Revolution, terashidase Cyber Horizon!", chant: "WOAH-OH-OH!" },
          { idol: "Kimi to kakenukeru kono toki wa tomerarenai", chant: "H-5!" },
          { idol: "Hoshikuzu no you ni chirabatta yume wo atsumete", chant: "KAGAYAKE!" },
          { idol: "Tatta hitotsu no hikari ni naru, Forever with you!", chant: "DAISUKI H5!" }
        ]
      },
      {
        part: "[DANCE BREAK & OUTRO]",
        lines: [
          { idol: "(Center dance formation beat drop)", chant: "YUKI! SAKURA! RIN! AOI! MEI! WE! ARE! H5!" }
        ]
      }
    ]
  },
  {
    id: "shining-stars",
    title: "Shining Stars",
    album: "Stage Tour Anthem",
    duration: "4:05",
    tempo: "124 BPM",
    introShout: "TSUNAGARE BOKURA NO HIKARI!",
    sections: [
      {
        part: "[VERSE 1 - Mei Ling]",
        lines: [
          { idol: "Yozora ni ukabu ikutsu mono seiza", chant: "MEI-CHAN!" },
          { idol: "Kimi to boku wo tsunagu kizuna no ito", chant: "TSUNAGARE!" }
        ]
      },
      {
        part: "[CHORUS - ALL MEMBERS]",
        lines: [
          { idol: "Shining stars in the midnight sky!", chant: "SHINE ON!" },
          { idol: "Doko made mo toberu to shinjite", chant: "H5 FLY HIGH!" }
        ]
      }
    ]
  }
];

const FanChant = () => {
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [isPlayingGuide, setIsPlayingGuide] = useState(false);
  const activeSong = SONGS_FANCHANT[selectedSongIndex];

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Panduan Fan Chant Konser Resmi" description="Pelajari lirik dan sorakan teriakan fan chant konser resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/shows" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <FaMicrophone size={10} /> OFFICIAL CONCERT CHEER GUIDE
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Fan Chant <span className="text-idol">Guide</span>
              </h1>
            </div>
          </div>

          <Link
            to="/lightstick"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Buka Virtual Lightstick</span>
          </Link>
        </div>

        {/* Song Selector Tabs */}
        <div className="flex gap-2.5 mb-6 overflow-x-auto no-scrollbar pb-1">
          {SONGS_FANCHANT.map((song, idx) => (
            <button
              key={song.id}
              onClick={() => {
                setSelectedSongIndex(idx);
                setIsPlayingGuide(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedSongIndex === idx
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25 font-outfit"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              <FaMusic size={11} />
              <span>{song.title}</span>
            </button>
          ))}
        </div>

        {/* ─── Cheering Legend / Tips Box ──────────────────────── */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/30" />
              <span className="text-white/60">Teks Putih: Lirik Vokal Idol</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-pink-300 font-bold font-mono">Teks Pink Tebal: Teriakan Fans</span>
            </div>
          </div>

          <button
            onClick={() => setIsPlayingGuide(!isPlayingGuide)}
            className="px-3.5 py-1.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {isPlayingGuide ? <FaPause size={10} /> : <FaPlay size={10} />}
            <span>{isPlayingGuide ? "Jeda Audio Ketukan" : "Putar Audio Irama Panduan"}</span>
          </button>
        </div>

        {/* ─── Main Fan Chant Sheet ───────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
          
          {/* Sheet Header */}
          <div className="pb-6 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              {activeSong.album} • {activeSong.tempo}
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-outfit text-white">
              {activeSong.title}
            </h2>

            {/* Intro Shout Highlight */}
            <div className="mt-4 p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/40 text-center">
              <span className="text-[10px] font-mono uppercase text-pink-400 font-bold block mb-0.5">
                [INTRO OPENING SHOUT - TERIAKAN BERSAMA SAAT INTRO]
              </span>
              <p className="font-mono font-black text-sm text-pink-300 tracking-wider">
                📢 {activeSong.introShout}
              </p>
            </div>
          </div>

          {/* Lyrics & Chants by Section */}
          <div className="space-y-6">
            {activeSong.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest pb-1 border-b border-white/5">
                  {section.part}
                </h4>

                <div className="space-y-2.5 pl-2">
                  {section.lines.map((line, lIdx) => (
                    <div key={lIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                      <p className="text-white/80 leading-relaxed font-medium">
                        {line.idol}
                      </p>
                      <span className="font-mono font-black text-xs text-pink-400 bg-pink-500/10 border border-pink-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 self-start sm:self-auto shadow-sm">
                        🗣️ {line.chant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default FanChant;