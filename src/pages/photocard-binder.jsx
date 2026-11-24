import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaStar, 
  FaGift, 
  FaRedoAlt, 
  FaFilter, 
  FaCheck, 
  FaAward, 
  FaSearch,
  FaShareAlt,
  FaTimes
} from "react-icons/fa";
import SEO from "../components/SEO";

const PHOTOCARDS_DATA = [
  {
    id: "pc-1",
    memberName: "Yuki Tanaka",
    series: "CYBER HORIZON TOUR",
    rarity: "SSR",
    rarityColor: "from-amber-400 to-pink-500",
    image: "https://placehold.co/400x600/180a36/ec4899?text=Yuki+SSR",
    backSignature: "Selalu bersinar bersama kalian! Love, Yuki ♡",
    serial: "H5-PC-2026-YUK-001",
    isOwned: true
  },
  {
    id: "pc-2",
    memberName: "Sakura Yamamoto",
    series: "DAWN OF STARS",
    rarity: "SSR",
    rarityColor: "from-cyan-400 to-blue-500",
    image: "https://placehold.co/400x600/180a36/06b6d4?text=Sakura+SSR",
    backSignature: "Terima kasih telah mendengar nyanyianku. - Sakura ♫",
    serial: "H5-PC-2026-SAK-002",
    isOwned: true
  },
  {
    id: "pc-3",
    memberName: "Rin Hoshizora",
    series: "CYBER HORIZON TOUR",
    rarity: "SR",
    rarityColor: "from-orange-400 to-amber-500",
    image: "https://placehold.co/400x600/180a36/f97316?text=Rin+SR",
    backSignature: "Ayo kita menari tanpa lelah malam ini!! - Rin ☆",
    serial: "H5-PC-2026-RIN-003",
    isOwned: true
  },
  {
    id: "pc-4",
    memberName: "Aoi Kirishima",
    series: "VIRTUAL SHOWCASE V1",
    rarity: "SR",
    rarityColor: "from-purple-400 to-violet-500",
    image: "https://placehold.co/400x600/180a36/a855f7?text=Aoi+SR",
    backSignature: "Fokus ke mataku, dunia milik kita. - Aoi",
    serial: "H5-PC-2026-AOI-004",
    isOwned: true
  },
  {
    id: "pc-5",
    memberName: "Mei Ling",
    series: "THEATER SPECIAL",
    rarity: "R",
    rarityColor: "from-emerald-400 to-teal-500",
    image: "https://placehold.co/400x600/180a36/10b981?text=Mei+R",
    backSignature: "Semoga hari kalian penuh senyum manis! - Mei",
    serial: "H5-PC-2026-MEI-005",
    isOwned: true
  },
  {
    id: "pc-6",
    memberName: "Yuki Tanaka (Center Stage)",
    series: "THEATER SPECIAL",
    rarity: "SR",
    rarityColor: "from-pink-400 to-rose-500",
    image: "https://placehold.co/400x600/180a36/ec4899?text=Yuki+Stage",
    backSignature: "Sampai jumpa di panggung berikutnya! Yuki",
    serial: "H5-PC-2026-YUK-006",
    isOwned: false
  },
  {
    id: "pc-7",
    memberName: "Sakura Yamamoto (Acoustic)",
    series: "VIRTUAL SHOWCASE V1",
    rarity: "R",
    rarityColor: "from-cyan-400 to-blue-500",
    image: "https://placehold.co/400x600/180a36/06b6d4?text=Sakura+Acoustic",
    backSignature: "Nada ini khusus untukmu. Sakura",
    serial: "H5-PC-2026-SAK-007",
    isOwned: false
  },
  {
    id: "pc-8",
    memberName: "H5 All-Member Holographic Pass",
    series: "SPECIAL EDITION",
    rarity: "UR",
    rarityColor: "from-amber-300 via-pink-400 to-purple-500",
    image: "https://placehold.co/400x600/180a36/f59e0b?text=H5+All+UR",
    backSignature: "REVOLUSI KITA BARU SAJA DIMULAI! - H5-REVOLUTION",
    serial: "H5-PC-2026-UR-888",
    isOwned: false
  }
];

const PhotocardBinder = () => {
  const [cards, setCards] = useState(PHOTOCARDS_DATA);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [filterMember, setFilterMember] = useState("ALL");
  const [filterRarity, setFilterRarity] = useState("ALL");

  // Gacha unboxing modal state
  const [isOpeningPack, setIsOpeningPack] = useState(false);
  const [gachaResult, setGachaResult] = useState(null);
  const [isTearingPack, setIsTearingPack] = useState(false);

  const ownedCount = cards.filter(c => c.isOwned).length;
  const progressPercent = Math.round((ownedCount / cards.length) * 100);

  const toggleFlip = (id) => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  const handleOpenGacha = () => {
    setIsOpeningPack(true);
    setIsTearingPack(true);
    setGachaResult(null);

    setTimeout(() => {
      setIsTearingPack(false);
      // Pick random card
      const randomIndex = Math.floor(Math.random() * cards.length);
      const chosen = cards[randomIndex];
      setGachaResult(chosen);

      // Mark as owned
      setCards(prev => prev.map(c => c.id === chosen.id ? { ...c, isOwned: true } : c));
    }, 1800);
  };

  const filteredCards = cards.filter(c => {
    if (filterMember !== "ALL" && !c.memberName.includes(filterMember)) return false;
    if (filterRarity !== "ALL" && c.rarity !== filterRarity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Digital Photocard Binder & Album" description="Koleksi dan unboxing photocard resmi idol H5-Revolution dalam format 3D digital binder." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

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
                <FaAward size={10} /> OFFICIAL HOLOGRAPHIC BINDER
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Photocard <span className="text-idol">Binder</span>
              </h1>
            </div>
          </div>

          {/* Gacha Booster Pack CTA Button */}
          <button
            onClick={handleOpenGacha}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-pink-500/25 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <FaGift size={14} />
            <span>Buka Booster Pack (Gacha)</span>
          </button>
        </div>

        {/* ─── Collection Progress Bar & Summary ──────────────── */}
        <div className="p-6 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
              STATUS BINDER ALBUM
            </span>
            <h3 className="text-lg font-bold text-white">
              Terkumpul: <span className="text-pink-400 font-mono font-black">{ownedCount}</span> dari {cards.length} Kartu
            </h3>
            <p className="text-xs text-white/50">Klik kartu mana pun untuk membalik (3D Flip) dan membaca pesan tulisan tangan idol.</p>
          </div>

          <div className="sm:w-64 space-y-1.5 shrink-0">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white/60">Kelengkapan</span>
              <span className="text-pink-400 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {["ALL", "Yuki", "Sakura", "Rin", "Aoi", "Mei"].map((mem) => (
              <button
                key={mem}
                onClick={() => setFilterMember(mem)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterMember === mem 
                    ? "bg-pink-500 text-white shadow-md shadow-pink-500/30" 
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
                }`}
              >
                {mem === "ALL" ? "Semua Member" : mem}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-white/40">Rarity:</span>
            {["ALL", "UR", "SSR", "SR", "R"].map((rar) => (
              <button
                key={rar}
                onClick={() => setFilterRarity(rar)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-all ${
                  filterRarity === rar 
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40" 
                    : "border-white/10 text-white/40 hover:text-white"
                }`}
              >
                {rar}
              </button>
            ))}
          </div>
        </div>

        {/* ─── 3D Photocard Binder Grid ────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => {
            const isFlipped = flippedCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => card.isOwned && toggleFlip(card.id)}
                className={`perspective-1000 cursor-pointer select-none group ${!card.isOwned ? "opacity-40 grayscale" : ""}`}
                title={card.isOwned ? "Klik untuk membalik kartu" : "Belum didapatkan"}
              >
                <div 
                  className={`relative w-full aspect-[2/3] rounded-2xl transition-transform duration-700 transform-style-3d shadow-xl ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT SIDE (Idol Photo & Hologram) */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 backface-hidden bg-[#180a36] flex flex-col justify-between p-3.5 group-hover:border-pink-500/60 transition-colors">
                    
                    {/* Background Artwork */}
                    <img 
                      src={card.image} 
                      alt={card.memberName} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hologram Rainbow Sheen Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-cyan-500/20 mix-blend-overlay pointer-events-none" />

                    {/* Top Rarity Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-black text-black bg-gradient-to-r ${card.rarityColor} shadow-md`}>
                        {card.rarity}
                      </span>
                      {card.isOwned && (
                        <span className="w-5 h-5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-emerald-400 flex items-center justify-center text-[9px]">
                          ✓
                        </span>
                      )}
                    </div>

                    {/* Bottom Member Identity */}
                    <div className="relative z-10 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                      <span className="text-[8px] font-mono text-pink-400 uppercase tracking-widest block">
                        {card.series}
                      </span>
                      <h4 className="font-bold text-xs text-white truncate font-outfit">
                        {card.memberName}
                      </h4>
                    </div>
                  </div>

                  {/* BACK SIDE (Handwritten Note & Signature) */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-pink-500/40 backface-hidden rotate-y-180 bg-gradient-to-br from-[#1b0c36] via-[#120826] to-[#0a0518] p-5 flex flex-col justify-between text-center">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-pink-400/80 uppercase tracking-widest">
                        OFFICIAL AUTHENTIC CARD
                      </span>
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto text-xs font-black">
                        H5
                      </div>
                    </div>

                    {/* Handwritten Message Note */}
                    <div className="my-auto py-2">
                      <p className="text-xs font-serif italic text-pink-200 leading-relaxed drop-shadow">
                        "{card.backSignature}"
                      </p>
                      <span className="text-[10px] text-white/40 block mt-2 font-mono">
                        ~ {card.memberName}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[9px] font-mono text-white/40">
                      {card.serial}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ─── Gacha Unboxing Modal ────────────────────────────── */}
      {isOpeningPack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="max-w-md w-full bg-[#160a2c] border border-pink-500/40 rounded-3xl p-6 shadow-2xl text-center space-y-5 relative">
            <button
              onClick={() => setIsOpeningPack(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center"
            >
              <FaTimes size={12} />
            </button>

            {isTearingPack ? (
              <div className="py-12 space-y-4">
                <div className="w-24 h-36 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 border-2 border-white/40 shadow-2xl animate-bounce flex items-center justify-center text-3xl font-black text-white">
                  ✦
                </div>
                <h3 className="text-lg font-black font-outfit text-white animate-pulse">
                  Membuka Booster Pack...
                </h3>
                <p className="text-xs text-white/50">Mendeteksi kartu hologram acak untuk binder Anda</p>
              </div>
            ) : gachaResult ? (
              <div className="py-2 space-y-4 animate-fade-in">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-black">
                  🎉 KARTU BARU DIDAPATKAN!
                </span>

                <div className="w-48 aspect-[2/3] mx-auto rounded-2xl overflow-hidden border-2 border-pink-500 shadow-2xl relative">
                  <img src={gachaResult.image} alt={gachaResult.memberName} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black text-black bg-gradient-to-r from-amber-400 to-pink-500">
                    {gachaResult.rarity}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-black font-outfit text-white">{gachaResult.memberName}</h4>
                  <p className="text-xs text-pink-400 font-mono">{gachaResult.series}</p>
                </div>

                <button
                  onClick={() => setIsOpeningPack(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-xs uppercase tracking-widest"
                >
                  Simpan ke Binder Saya
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}

    </div>
  );
};

export default PhotocardBinder;