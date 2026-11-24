import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaExchangeAlt, 
  FaComments, 
  FaChevronDown, 
  FaChevronUp, 
  FaArrowLeft,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import SEO from "../components/SEO";

const FAQS = [
  {
    q: "Berapa lama masa garansi resmi Lightstick V2?",
    a: "Lightstick resmi H5-Revolution dilindungi garansi servis & ganti unit selama 12 bulan (1 tahun) sejak tanggal pembelian untuk kendala Bluetooth modul dan LED."
  },
  {
    q: "Bagaimana cara menukar ukuran (size exchange) T-Shirt Tour?",
    a: "Penukaran ukuran kaos konser dapat diajukan maksimal 3 hari kerja setelah paket diterima, dengan syarat tag resmi masih terpasang dan belum dicuci."
  },
  {
    q: "Apakah tiket konser yang sudah dibeli bisa dipindahtangankan?",
    a: "E-Ticket konser terikat pada identitas pembeli. Pemindahtanganan hanya dapat dilakukan melalui surat kuasa resmi bermeterai saat penukaran wristband di venue."
  },
  {
    q: "Bagaimana jika photocard yang saya terima cacat produksi?",
    a: "Kirimkan video unboxing paket tanpa jeda melalui formulir garansi di bawah ini, tim warehouse kami akan mengirimkan kartu pengganti secara gratis."
  }
];

const HelpCenter = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [claimType, setClaimType] = useState("WARRANTY");
  const [orderNumber, setOrderNumber] = useState("");
  const [claimDetail, setClaimDetail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    if (!orderNumber || !claimDetail) {
      alert("Harap isi nomor pesanan dan detail kendala Anda.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Pusat Bantuan & Garansi Merchandise" description="Layanan klaim garansi lightstick, penukaran merchandise, dan panduan fans resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

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
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <FaShieldAlt size={10} /> 100% OFFICIAL AFTER-SALES CARE
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Pusat Bantuan & <span className="text-idol">Garansi</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281298765432" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <FaComments size={12} />
              <span>Live Support WA</span>
            </a>
          </div>
        </div>

        {/* ─── Warranty & Exchange Form ────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-2xl mb-8 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
              <FaExchangeAlt size={14} />
            </div>
            <div>
              <h3 className="text-base font-black font-outfit uppercase tracking-wider text-white">
                Formulir Klaim Garansi & Retur
              </h3>
              <p className="text-[11px] text-white/40">Pengajuan klaim lightstick rusak atau tukar ukuran pakaian</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                ✓
              </div>
              <h4 className="font-bold text-white text-base">Tiket Bantuan Berhasil Dibuat!</h4>
              <p className="text-xs text-white/70 max-w-sm mx-auto">
                Nomor Tiket Anda: <strong className="text-emerald-300 font-mono">#TKT-CARE-8821</strong>. Tim layanan fans H5 akan menghubungi Anda via WhatsApp dalam 1x24 jam.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
              >
                Ajukan Klaim Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitClaim} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1.5 uppercase font-mono">
                    Jenis Layanan
                  </label>
                  <select
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-pink-500 focus:outline-none"
                  >
                    <option value="WARRANTY" className="bg-[#120826]">Klaim Garansi Kerusakan Lightstick / Elektronik</option>
                    <option value="EXCHANGE" className="bg-[#120826]">Penukaran Ukuran Baju Tour Tee</option>
                    <option value="DAMAGED" className="bg-[#120826]">Komplain Paket Rusak saat Pengiriman</option>
                    <option value="OTHER" className="bg-[#120826]">Pertanyaan Seputar Tiket Konser</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1.5 uppercase font-mono">
                    Nomor Pesanan (Order ID)
                  </label>
                  <input 
                    type="text"
                    required
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Contoh: H5-948201"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white font-mono placeholder-white/30 focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 mb-1.5 uppercase font-mono">
                    Detail Kendala / Permintaan
                  </label>
                  <textarea 
                    rows={3}
                    required
                    value={claimDetail}
                    onChange={(e) => setClaimDetail(e.target.value)}
                    placeholder="Jelaskan kendala produk atau ukuran yang ingin ditukar..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
              >
                Kirim Pengajuan Bantuan
              </button>
            </form>
          )}
        </div>

        {/* ─── Frequently Asked Questions (FAQ) ───────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <FaQuestionCircle className="text-cyan-400" size={16} />
            <h3 className="text-base font-black font-outfit uppercase tracking-wider text-white">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;

              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left text-xs font-bold text-white hover:text-pink-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 text-xs text-white/60 leading-relaxed border-t border-white/5 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;