import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBell, 
  FaTicketAlt, 
  FaTruck, 
  FaHeart, 
  FaCalendarAlt, 
  FaCheck, 
  FaTrash, 
  FaArrowLeft,
  FaBullhorn,
  FaStar
} from "react-icons/fa";
import SEO from "../components/SEO";

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    type: "TICKET_WAR",
    title: "⚡ SIAP-SIAP TICKET WAR PRESALE!",
    message: "Penjualan tiket presale H5-Revolution 1st World Tour: Cyber Horizon dibuka dalam 30 menit. Siapkan saldo dan data diri Anda!",
    time: "10 menit yang lalu",
    isRead: false,
    link: "/tickets",
    linkText: "Buka Halaman Tiket",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40"
  },
  {
    id: "notif-2",
    type: "SHIPPING",
    title: "📦 Paket Pesanan #H5-948201 Sedang Diantar!",
    message: "Kurir Dimas Pratama (Idol Express) sedang bergerak menuju alamat apartemen Anda. Pastikan ada penerima di lokasi.",
    time: "1 jam yang lalu",
    isRead: false,
    link: "/order-shipping/H5-948201",
    linkText: "Lacak Kurir Live",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
  },
  {
    id: "notif-3",
    type: "IDOL_MESSAGE",
    title: "💌 Pesan Khusus dari Yuki Tanaka",
    message: "'Terima kasih untuk semua fan art dan surat cinta yang kalian kirim di hari ulang tahunku! Aku sangat terharu... Love you all!'",
    time: "3 jam yang lalu",
    isRead: true,
    link: "/fans",
    linkText: "Buka Fan Lounge",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40"
  },
  {
    id: "notif-4",
    type: "EVENT",
    title: "🎤 Theater Stage: Dawn of Stars Dimulai Besok",
    message: "Jangan lupa e-ticket digital Anda sudah siap di halaman 'Tiket Saya'. Harap hadir di venue 45 menit sebelum gate dibuka.",
    time: "Kemarin",
    isRead: true,
    link: "/my-tickets",
    linkText: "Lihat E-Ticket",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40"
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filterType, setFilterType] = useState("ALL");

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleDelete = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotifs = notifications.filter(n => {
    if (filterType !== "ALL" && n.type !== filterType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Pusat Notifikasi & Info Ticket War" description="Pemberitahuan terkini seputar penjualan tiket konser, pengiriman pesanan, dan pesan idol H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/profile" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold flex items-center gap-1.5">
                <FaBell size={10} /> LIVE FAN ALERTS
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Notifikasi <span className="text-idol">Penting</span>
              </h1>
            </div>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all self-start sm:self-auto cursor-pointer"
            >
              <FaCheck size={11} className="text-emerald-400" />
              <span>Tandai Semua Dibaca ({unreadCount})</span>
            </button>
          )}
        </div>

        {/* Filter Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "ALL", label: "Semua Notifikasi" },
            { id: "TICKET_WAR", label: "Tiket & War Konser" },
            { id: "SHIPPING", label: "Status Pengiriman" },
            { id: "IDOL_MESSAGE", label: "Pesan Member Idol" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filterType === tab.id
                  ? "bg-pink-500 text-white shadow-md shadow-pink-500/30 font-outfit"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        {filteredNotifs.length === 0 ? (
          <div className="p-16 rounded-3xl bg-[#120826]/70 border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-3xl mx-auto">
              🔔
            </div>
            <h3 className="font-bold text-base text-white">Belum Ada Notifikasi Baru</h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto">
              Semua info pengiriman tiket dan pengumuman konser penting akan muncul di sini.
            </p>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredNotifs.map((item) => (
              <div 
                key={item.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  !item.isRead 
                    ? "bg-gradient-to-r from-[#1c0c38] to-[#120826] border-pink-500/40 shadow-lg shadow-pink-500/10" 
                    : "bg-[#120826]/70 border-white/5 text-white/70"
                }`}
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border ${item.badgeColor}`}>
                      {item.type}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{item.time}</span>
                    {!item.isRead && (
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    )}
                  </div>

                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{item.message}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={item.link}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    {item.linkText}
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-white/30 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors"
                    title="Hapus Notifikasi"
                  >
                    <FaTrash size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Notifications;