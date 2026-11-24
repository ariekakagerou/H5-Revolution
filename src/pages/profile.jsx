import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaUser, 
  FaCrown, 
  FaWallet, 
  FaStar, 
  FaMapMarkerAlt, 
  FaShoppingBag, 
  FaTicketAlt, 
  FaHeart, 
  FaEdit, 
  FaPlus, 
  FaTrash, 
  FaCheck, 
  FaShieldAlt, 
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import SEO from "../components/SEO";

const INITIAL_ADDRESSES = [
  {
    id: 1,
    title: "Apartemen (Alamat Utama)",
    recipientName: "Reza Pratama",
    phone: "081298765432",
    fullAddress: "Jl. Sudirman No. 45, Apartemen Senayan City Tower A Lt. 12",
    city: "Jakarta Pusat, DKI Jakarta",
    postalCode: "10270",
    isDefault: true,
    notes: "Tolong titipkan di resepsionis lobi utama"
  },
  {
    id: 2,
    title: "Kantor / Studio",
    recipientName: "Reza Pratama (Divisi IT)",
    phone: "081298765432",
    fullAddress: "Gedung Cyber 2 Tower Lt. 18, Jl. HR Rasuna Said Blok X-5",
    city: "Jakarta Selatan, DKI Jakarta",
    postalCode: "12950",
    isDefault: false,
    notes: "Pengiriman pada jam kerja 09:00 - 18:00 WIB"
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("addresses");
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  // New Address Form State
  const [newTitle, setNewTitle] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newPostal, setNewPostal] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const handleSetDefault = (id) => {
    setAddresses(prev => prev.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (!newName || !newPhone || !newAddress || !newCity) {
      alert("Harap lengkapi informasi alamat.");
      return;
    }

    const created = {
      id: Date.now(),
      title: newTitle || "Alamat Baru",
      recipientName: newName,
      phone: newPhone,
      fullAddress: newAddress,
      city: newCity,
      postalCode: newPostal || "10000",
      isDefault: addresses.length === 0,
      notes: newNotes
    };

    setAddresses([...addresses, created]);
    setIsAddingAddress(false);
    // Reset
    setNewTitle("");
    setNewName("");
    setNewPhone("");
    setNewAddress("");
    setNewCity("");
    setNewPostal("");
    setNewNotes("");
  };

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Profil Penggemar & Buku Alamat" description="Kelola profil keanggotaan fan club, saldo wallet, dan alamat pengiriman merchandise H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold">
                OFFICIAL FAN CLUB ACCOUNT
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Profil <span className="text-idol">Member</span>
              </h1>
            </div>
          </div>
        </div>

        {/* ─── Fan ID Card / Header Showcase ─────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c0e38] via-[#120826] to-[#0a0518] border border-pink-500/30 backdrop-blur-2xl shadow-2xl mb-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* User Avatar & Fan Tier */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 p-0.5 shadow-lg shadow-pink-500/30">
                  <div className="w-full h-full bg-[#160a2c] rounded-2xl flex items-center justify-center text-3xl font-black font-outfit text-white">
                    RP
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#160a2c] flex items-center justify-center text-[10px] text-white">
                  ✓
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-black font-outfit text-white">
                    Reza Pratama
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-[10px] uppercase font-mono tracking-wider flex items-center gap-1 shadow-sm">
                    <FaCrown size={9} /> VIP TIER 3
                  </span>
                </div>
                <p className="text-xs text-white/50 font-mono mt-0.5">
                  ID: <span className="text-pink-400 font-bold">REV-892109</span> • Oshi: <span className="text-white font-bold">Yuki Tanaka (Pink)</span>
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-white/60">
                  <span className="flex items-center gap-1 font-mono">
                    <FaEnvelope size={10} className="text-pink-400" /> fan@h5revolution.id
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <FaPhoneAlt size={10} className="text-pink-400" /> 081298765432
                  </span>
                </div>
              </div>
            </div>

            {/* Wallet & Loyalty Points Badges */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 min-w-[130px] text-center">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-0.5 flex items-center justify-center gap-1">
                  <FaWallet size={10} className="text-pink-400" /> H5 Wallet
                </span>
                <span className="font-mono font-black text-lg text-white">$120.00</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 min-w-[130px] text-center">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-0.5 flex items-center justify-center gap-1">
                  <FaStar size={10} className="text-amber-400" /> Fan Points
                </span>
                <span className="font-mono font-black text-lg text-amber-400">2,450 PTS</span>
              </div>
            </div>

          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
            <Link
              to="/orders"
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-pink-500/30 transition-all flex items-center gap-2.5 text-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaShoppingBag size={13} />
              </div>
              <div>
                <span className="font-bold text-white block">Pesanan Saya</span>
                <span className="text-[10px] text-white/40">3 Transaksi</span>
              </div>
            </Link>

            <Link
              to="/my-tickets"
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-pink-500/30 transition-all flex items-center gap-2.5 text-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaTicketAlt size={13} />
              </div>
              <div>
                <span className="font-bold text-white block">Tiket Digital</span>
                <span className="text-[10px] text-white/40">2 Tiket Aktif</span>
              </div>
            </Link>

            <Link
              to="/wishlist"
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-pink-500/30 transition-all flex items-center gap-2.5 text-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaHeart size={13} />
              </div>
              <div>
                <span className="font-bold text-white block">Wishlist</span>
                <span className="text-[10px] text-white/40">4 Item Disimpan</span>
              </div>
            </Link>

            <Link
              to="/fans"
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-pink-500/30 transition-all flex items-center gap-2.5 text-xs group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaCrown size={13} />
              </div>
              <div>
                <span className="font-bold text-white block">Fan Lounge</span>
                <span className="text-[10px] text-white/40">Exclusive Feeds</span>
              </div>
            </Link>
          </div>

        </div>

        {/* ─── Address Management Section ─────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <FaMapMarkerAlt size={16} />
              </div>
              <div>
                <h3 className="text-lg font-black font-outfit uppercase tracking-wider text-white">
                  Daftar Alamat Pengiriman
                </h3>
                <p className="text-xs text-white/50">Kelola alamat tersimpan untuk checkout lebih cepat</p>
              </div>
            </div>

            <button
              onClick={() => setIsAddingAddress(!isAddingAddress)}
              className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <FaPlus size={11} />
              <span>{isAddingAddress ? "Batal" : "Tambah Alamat Baru"}</span>
            </button>
          </div>

          {/* Form Add New Address */}
          {isAddingAddress && (
            <form onSubmit={handleSaveAddress} className="p-5 rounded-2xl bg-white/[0.02] border border-pink-500/30 space-y-4">
              <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider font-mono">
                Formulir Alamat Baru
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Label Alamat (e.g. Rumah, Kantor)</label>
                  <input 
                    type="text" 
                    value={newTitle} 
                    onChange={e => setNewTitle(e.target.value)} 
                    placeholder="Contoh: Rumah Orang Tua"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Nama Penerima</label>
                  <input 
                    type="text" 
                    required
                    value={newName} 
                    onChange={e => setNewName(e.target.value)} 
                    placeholder="Nama Lengkap"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Nomor WhatsApp / HP</label>
                  <input 
                    type="tel" 
                    required
                    value={newPhone} 
                    onChange={e => setNewPhone(e.target.value)} 
                    placeholder="0812xxxxxxx"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none font-mono" 
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Kota & Kode Pos</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      required
                      value={newCity} 
                      onChange={e => setNewCity(e.target.value)} 
                      placeholder="Jakarta Barat"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none" 
                    />
                    <input 
                      type="text" 
                      value={newPostal} 
                      onChange={e => setNewPostal(e.target.value)} 
                      placeholder="11530"
                      className="w-24 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none font-mono" 
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Alamat Lengkap</label>
                  <textarea 
                    rows={2}
                    required
                    value={newAddress} 
                    onChange={e => setNewAddress(e.target.value)} 
                    placeholder="Jalan, Gang, Blok, No Rumah, RT/RW"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none resize-none" 
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 mb-1">Catatan Kurir (Opsional)</label>
                  <input 
                    type="text" 
                    value={newNotes} 
                    onChange={e => setNewNotes(e.target.value)} 
                    placeholder="Patokan di samping minimarket..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none" 
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 cursor-pointer"
              >
                Simpan Alamat
              </button>
            </form>
          )}

          {/* Address Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div 
                key={addr.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  addr.isDefault 
                    ? "bg-gradient-to-br from-pink-950/30 to-purple-950/30 border-pink-500/60 shadow-lg shadow-pink-500/10" 
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white flex items-center gap-1.5">
                      {addr.title}
                    </span>
                    {addr.isDefault && (
                      <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-mono text-[9px] font-bold border border-pink-500/40">
                        ALAMAT UTAMA
                      </span>
                    )}
                  </div>

                  <p className="font-bold text-xs text-white">{addr.recipientName}</p>
                  <p className="font-mono text-xs text-pink-400 mb-2">{addr.phone}</p>
                  <p className="text-xs text-white/70 leading-relaxed mb-1">{addr.fullAddress}</p>
                  <p className="text-xs text-white/50 font-mono">{addr.city} ({addr.postalCode})</p>

                  {addr.notes && (
                    <p className="text-[11px] text-white/40 italic mt-2">"{addr.notes}"</p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  {!addr.isDefault ? (
                    <button
                      onClick={() => handleSetDefault(addr.id)}
                      className="text-xs text-pink-400 hover:text-pink-300 font-bold"
                    >
                      Jadikan Alamat Utama
                    </button>
                  ) : (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <FaCheck size={10} /> Dipilih saat Checkout
                    </span>
                  )}

                  <button
                    onClick={() => handleDeleteAddress(addr.id)}
                    className="p-1.5 text-white/40 hover:text-red-400 transition-colors"
                    title="Hapus alamat"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;