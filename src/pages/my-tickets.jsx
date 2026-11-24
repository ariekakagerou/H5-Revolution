import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaTicketAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaQrcode, 
  FaBarcode, 
  FaDownload, 
  FaShareAlt, 
  FaStar, 
  FaShieldAlt, 
  FaArrowLeft,
  FaCheckCircle,
  FaInfoCircle
} from "react-icons/fa";
import SEO from "../components/SEO";

const MOCK_TICKETS = [
  {
    ticketId: "TKT-H5-2026-8921",
    eventTitle: "H5-REVOLUTION 1ST WORLD TOUR: CYBER HORIZON",
    eventType: "STADIUM CONCERT",
    date: "Sabtu, 28 Desember 2026",
    time: "19:00 WIB (Gate Open: 16:30 WIB)",
    venue: "Indonesia Arena, Gelora Bung Karno",
    city: "Jakarta, Indonesia",
    tier: "VIP ROYAL REVOLUTION",
    tierBadge: "VIP SOUNDCHECK + HI-TOUCH",
    section: "VIP CENTER",
    seat: "ROW A - SEAT 14",
    gate: "GATE 3A - VIP PASSAGE",
    holderName: "Reza Pratama",
    identityId: "31710*********0002",
    price: "$180.00",
    status: "ACTIVE",
    barcodeValue: "8920194820192837",
    perks: [
      "Akses Eksklusif Soundcheck Session",
      "Hi-Touch Session bersama seluruh Member H5",
      "Special Commemorative Holographic Lanyard & Pass",
      "Official Concert Tour Photocard Set (6 Member)",
      "Priority VIP Merchandise Fast-Lane"
    ]
  },
  {
    ticketId: "TKT-H5-2026-4412",
    eventTitle: "THEATER STAGE: DAWN OF NEW STARS",
    eventType: "THEATER SHOW",
    date: "Jumat, 12 Desember 2026",
    time: "19:30 WIB (Gate Open: 18:30 WIB)",
    venue: "H5 Official Theater Hall, FX Sudirman Lt. 4",
    city: "Jakarta Pusat, Indonesia",
    tier: "GENERAL SEAT TICKET",
    tierBadge: "THEATER OFFICIAL",
    section: "REGULAR ROW C",
    seat: "ROW C - SEAT 22",
    gate: "DOOR 1",
    holderName: "Reza Pratama",
    identityId: "31710*********0002",
    price: "$45.00",
    status: "ACTIVE",
    barcodeValue: "4412901928172901",
    perks: [
      "Tiket Pertunjukan Teater 120 Menit",
      "Random 1 Member Photocard Teater Edition",
      "Meet & Greet Farewell Send-Off di Pintu Keluar"
    ]
  }
];

const MyTickets = () => {
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(0);
  const activeTicket = MOCK_TICKETS[selectedTicketIndex];

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="E-Ticket Digital Pass H5-Revolution" description="Akses dan tunjukkan tiket digital konser & theater resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/tickets" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                DIGITAL CONCERT & THEATER PASS
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                E-Ticket <span className="text-idol">Digital Pass</span>
              </h1>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-all self-start sm:self-auto cursor-pointer"
          >
            <FaDownload size={11} className="text-pink-400" />
            <span>Download PDF Pass</span>
          </button>
        </div>

        {/* Ticket Selector Tabs (if multiple tickets) */}
        <div className="flex gap-2.5 mb-6 overflow-x-auto no-scrollbar pb-1">
          {MOCK_TICKETS.map((tkt, idx) => (
            <button
              key={tkt.ticketId}
              onClick={() => setSelectedTicketIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedTicketIndex === idx
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/20 font-outfit"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              <FaTicketAlt size={12} />
              <span>{tkt.eventType}: {tkt.tier}</span>
            </button>
          ))}
        </div>

        {/* ─── Cyber E-Ticket Card Layout ─────────────────────── */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#180d2e] via-[#120826] to-[#0d071a] border border-pink-500/30 backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Top Notch Glow Header */}
          <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-pink-950/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 font-mono font-bold text-[10px]">
                {activeTicket.eventType}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-[10px] flex items-center gap-1">
                <FaCheckCircle size={9} /> {activeTicket.status} VERIFIED
              </span>
            </div>

            <span className="font-mono text-xs text-white/60">
              ID: <strong className="text-white">{activeTicket.ticketId}</strong>
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Section (7 Cols) */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
                  OFFICIAL EVENT PASS
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-outfit text-white leading-tight">
                  {activeTicket.eventTitle}
                </h2>
                <div className="inline-block mt-2 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                  ★ {activeTicket.tier}
                </div>
              </div>

              {/* Event Schedule & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase block flex items-center gap-1">
                    <FaCalendarAlt size={10} className="text-pink-400" /> Tanggal Acara
                  </span>
                  <p className="text-xs font-bold text-white">{activeTicket.date}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase block flex items-center gap-1">
                    <FaClock size={10} className="text-pink-400" /> Waktu Mulai
                  </span>
                  <p className="text-xs font-bold text-white">{activeTicket.time}</p>
                </div>

                <div className="sm:col-span-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase block flex items-center gap-1">
                    <FaMapMarkerAlt size={10} className="text-pink-400" /> Lokasi Venue
                  </span>
                  <p className="text-xs font-bold text-white">{activeTicket.venue}</p>
                  <p className="text-[11px] text-white/50">{activeTicket.city}</p>
                </div>
              </div>

              {/* Seat Details Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Zona / Gate</span>
                  <span className="font-mono font-black text-xs sm:text-sm text-pink-400">{activeTicket.gate}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Section</span>
                  <span className="font-mono font-black text-xs sm:text-sm text-white">{activeTicket.section}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Seat No</span>
                  <span className="font-mono font-black text-xs sm:text-sm text-amber-400">{activeTicket.seat}</span>
                </div>
              </div>

              {/* Ticket Holder Info */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-white/60">
                <div>
                  <span className="text-[10px] uppercase text-white/40 block">Nama Pemegang Tiket</span>
                  <strong className="text-white">{activeTicket.holderName}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-white/40 block">No. Identitas Terdaftar</span>
                  <span className="font-mono text-white">{activeTicket.identityId}</span>
                </div>
              </div>

            </div>

            {/* Right Scannable Barcode & QR Area (5 Cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0518]/90 border border-pink-500/20 text-center relative">
              <span className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-wider mb-3">
                SCAN AT CONCERT TURNSTILE
              </span>

              {/* Mock QR Code */}
              <div className="p-3.5 bg-white rounded-2xl shadow-xl border-2 border-pink-500/50 mb-3">
                <svg className="w-40 h-40 text-black" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="5" y="5" width="25" height="25" fill="#111" rx="2" />
                  <rect x="9" y="9" width="17" height="17" fill="#fff" />
                  <rect x="13" y="13" width="9" height="9" fill="#111" />
                  <rect x="70" y="5" width="25" height="25" fill="#111" rx="2" />
                  <rect x="74" y="9" width="17" height="17" fill="#fff" />
                  <rect x="78" y="13" width="9" height="9" fill="#111" />
                  <rect x="5" y="70" width="25" height="25" fill="#111" rx="2" />
                  <rect x="9" y="74" width="17" height="17" fill="#fff" />
                  <rect x="13" y="78" width="9" height="9" fill="#111" />
                  <rect x="36" y="12" width="10" height="8" fill="#111" />
                  <rect x="52" y="8" width="8" height="14" fill="#ec4899" />
                  <rect x="36" y="36" width="16" height="16" fill="#111" rx="2" />
                  <rect x="58" y="38" width="14" height="8" fill="#111" />
                  <rect x="76" y="38" width="12" height="12" fill="#ec4899" />
                  <rect x="36" y="72" width="12" height="16" fill="#111" />
                  <rect x="54" y="68" width="10" height="10" fill="#111" />
                  <rect x="70" y="74" width="18" height="12" fill="#111" />
                </svg>
              </div>

              {/* Barcode Strip */}
              <div className="w-full bg-white p-2 rounded-lg mb-2">
                <div className="h-7 w-full flex justify-between items-center px-1 overflow-hidden">
                  {[3,1,2,4,1,3,2,1,4,2,3,1,2,1,3,4,1,2,3,1,4,2,1,3,2].map((w, idx) => (
                    <div 
                      key={idx} 
                      className="h-full bg-black" 
                      style={{ width: `${w * 2.5}px` }} 
                    />
                  ))}
                </div>
              </div>

              <span className="font-mono text-[11px] text-white/50 tracking-[0.2em]">
                {activeTicket.barcodeValue}
              </span>

              <p className="text-[10px] text-white/40 mt-3 leading-relaxed">
                Tunjukkan QR code ini pada petugas di pintu masuk gate venue. Jangan membagikan QR code kepada pihak lain.
              </p>
            </div>

          </div>

          {/* Perks Accordion Box */}
          <div className="p-6 bg-[#160a2c]/60 border-t border-white/10">
            <h4 className="text-xs font-black font-outfit uppercase tracking-wider text-pink-300 flex items-center gap-2 mb-3">
              <FaStar className="text-amber-400" size={12} />
              Fasilitas & Perks Tiket Anda ({activeTicket.tier})
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {activeTicket.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <FaCheckCircle className="text-emerald-400 shrink-0" size={11} />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyTickets;