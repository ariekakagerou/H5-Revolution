import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { 
  FaTruck, 
  FaBoxOpen, 
  FaCheckCircle, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUser, 
  FaPhoneAlt, 
  FaCopy, 
  FaCheck, 
  FaShieldAlt, 
  FaArrowLeft, 
  FaChevronRight, 
  FaShoppingBag, 
  FaStar, 
  FaPrint,
  FaShareAlt,
  FaHome,
  FaUndoAlt,
  FaAward
} from "react-icons/fa";
import SEO from "../components/SEO";

const TRACKING_STEPS = [
  {
    step: 1,
    title: "Pesanan Dikonfirmasi",
    desc: "Pembayaran telah berhasil diverifikasi oleh sistem H5-Revolution",
    time: "Hari ini, 09:15 WIB",
    location: "Sistem Pusat H5",
    icon: FaCheckCircle
  },
  {
    step: 2,
    title: "Sedang Dikemas (Quality Check)",
    desc: "Merchandise resmi diperiksa keasliannya dan dikemas dengan pelindung bubble wrap tebal",
    time: "Hari ini, 10:45 WIB",
    location: "H5 Official Fulfillment Hub (Jakarta Barat)",
    icon: FaBoxOpen
  },
  {
    step: 3,
    title: "Diserahkan ke Kurir",
    desc: "Paket telah diterima oleh tim kurir Idol Express Priority",
    time: "Hari ini, 12:30 WIB",
    location: "Logistics Sorting Center",
    icon: FaTruck
  },
  {
    step: 4,
    title: "Dalam Perjalanan (In Transit)",
    desc: "Paket sedang dalam perjalanan menuju kota tujuan penerima",
    time: "Hari ini, 14:10 WIB",
    location: "Hub Distribusi Regional",
    icon: FaTruck
  },
  {
    step: 5,
    title: "Sedang Diantar ke Alamat",
    desc: "Kurir sedang menuju alamat penerima",
    time: "Hari ini, 15:30 WIB",
    location: "Kurir Antar (Dimas Pratama)",
    icon: FaMapMarkerAlt
  },
  {
    step: 6,
    title: "Paket Telah Diterima",
    desc: "Paket telah diterima dengan baik oleh penerima di lokasi",
    time: "Hari ini, 16:45 WIB",
    location: "Alamat Penerima",
    icon: FaCheckCircle
  }
];

const OrderShipping = () => {
  const { orderId: paramOrderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Load Order state from location or localStorage
  const [order, setOrder] = useState(() => {
    if (location.state?.order) {
      return location.state.order;
    }
    const saved = localStorage.getItem("h5-current-order");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      orderId: paramOrderId || "H5-839201",
      orderDate: new Date().toISOString(),
      items: [
        {
          id: 1,
          name: "H5-Revolution Official Lightstick v2",
          price: "$45.00",
          quantity: 1,
          image: "https://placehold.co/400x400/180a36/ec4899?text=Lightstick",
          variant: "Bluetooth Sync Stage Edition"
        },
        {
          id: 2,
          name: "'Shining Stars' 1st Full Album",
          price: "$25.00",
          quantity: 1,
          image: "https://placehold.co/400x400/180a36/06b6d4?text=Album",
          variant: "Special Photobook Edition"
        }
      ],
      shippingAddress: {
        name: "Reza Pratama",
        phone: "081298765432",
        email: "fan@h5revolution.id",
        address: "Jl. Sudirman No. 45, Apartemen Senayan City Tower A Lt. 12",
        city: "Jakarta Pusat, DKI Jakarta",
        postalCode: "10270",
        notes: "Tolong packing double bubble wrap untuk photocard"
      },
      courier: {
        name: "Idol Express Priority",
        etd: "1 - 2 Hari",
        price: 8.00
      },
      paymentMethod: {
        id: "qris",
        name: "QRIS Instant Pay"
      },
      pricing: {
        subtotal: 70.00,
        shipping: 8.00,
        discount: 10.50,
        insurance: 1.00,
        paymentFee: 0,
        total: 68.50
      },
      status: "IN_TRANSIT",
      trackingNumber: "H5EX9928192038ID"
    };
  });

  // Current active step in transit: starts at Step 4 (In Transit) for realistic feel
  const [currentStepIndex, setCurrentStepIndex] = useState(3); // 0-based: index 3 is step 4 (Dalam Perjalanan)
  const [copiedResi, setCopiedResi] = useState(false);
  const [isReceivedConfirmed, setIsReceivedConfirmed] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [reviewNote, setReviewNote] = useState("");

  const trackingNumber = order.trackingNumber || "H5EX9928192038ID";

  const handleCopyResi = () => {
    navigator.clipboard.writeText(trackingNumber);
    setCopiedResi(true);
    setTimeout(() => setCopiedResi(false), 2000);
  };

  // Simulate progress forward
  const handleAdvanceStep = () => {
    if (currentStepIndex < TRACKING_STEPS.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      if (nextIndex === TRACKING_STEPS.length - 1) {
        setIsReceivedConfirmed(true);
      }
    }
  };

  const handleResetStep = () => {
    setCurrentStepIndex(0);
    setIsReceivedConfirmed(false);
  };

  const handleConfirmReceived = () => {
    setCurrentStepIndex(TRACKING_STEPS.length - 1);
    setIsReceivedConfirmed(true);
    setShowRatingModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title={`Status Pengiriman #${order.orderId}`} description="Pelacakan langsung status pengiriman merchandise resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Stepper Wizard Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/shop" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE SHIPMENT TRACKER
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Status <span className="text-idol">Pengiriman</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#120826] border border-pink-900/40 px-3 py-1.5 rounded-full text-xs self-start sm:self-auto">
            <span className="text-white/40 font-mono hidden sm:inline">1. Keranjang</span>
            <FaChevronRight size={10} className="text-white/20 hidden sm:inline" />
            <span className="text-white/40 font-mono">2. Checkout</span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="text-white/40 font-mono">3. Pembayaran</span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[11px] shadow-sm">
              4. Pengiriman
            </span>
          </div>
        </div>

        {/* ─── Hero Shipment Status Card ──────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#160a2c] via-[#120826] to-[#0d071a] border border-pink-500/20 backdrop-blur-xl shadow-2xl mb-8 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {currentStepIndex === TRACKING_STEPS.length - 1 ? "PAKET TELAH SAMPAI" : "SEDANG DIKIRIM"}
                </span>
                <span className="text-xs font-mono text-white/50">
                  Pesanan #{order.orderId}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit text-white">
                {TRACKING_STEPS[currentStepIndex].title}
              </h2>
              <p className="text-xs text-white/70 mt-1 max-w-lg">
                {TRACKING_STEPS[currentStepIndex].desc}
              </p>
            </div>

            {/* Tracking Number / Resi Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 lg:w-72 shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">
                Nomor Resi Pengiriman
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-sm text-pink-400 truncate">
                  {trackingNumber}
                </span>
                <button
                  onClick={handleCopyResi}
                  className="px-2.5 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 text-xs font-mono flex items-center gap-1 shrink-0 transition-all"
                >
                  {copiedResi ? <FaCheck size={10} className="text-emerald-400" /> : <FaCopy size={10} />}
                  <span>{copiedResi ? "Disalin!" : "Salin"}</span>
                </button>
              </div>
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50 font-mono">
                <span>Ekspedisi:</span>
                <span className="text-white font-bold">{order.courier?.name || "Idol Express Priority"}</span>
              </div>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="py-6">
            <div className="relative">
              {/* Background Line */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1.5 bg-white/10 rounded-full z-0" />
              {/* Active Fill Line */}
              <div 
                className="absolute top-1/2 left-0 -translate-y-1/2 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-emerald-400 rounded-full z-0 transition-all duration-700 ease-out"
                style={{ width: `${(currentStepIndex / (TRACKING_STEPS.length - 1)) * 100}%` }}
              />

              {/* Steps Circles */}
              <div className="relative z-10 flex justify-between">
                {TRACKING_STEPS.map((step, idx) => {
                  const isDone = idx < currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  const Icon = step.icon;

                  return (
                    <div 
                      key={step.step} 
                      className="flex flex-col items-center cursor-pointer group"
                      onClick={() => setCurrentStepIndex(idx)}
                      title={`Klik untuk simulasi status: ${step.title}`}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isDone 
                          ? "bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/30" 
                          : isCurrent 
                          ? "bg-gradient-to-r from-pink-500 to-orange-500 border-white text-white shadow-lg shadow-pink-500/40 scale-110 animate-bounce-subtle" 
                          : "bg-[#180d2c] border-white/20 text-white/30"
                      }`}>
                        {isDone ? <FaCheck size={12} /> : <Icon size={12} />}
                      </div>

                      <span className={`text-[10px] font-mono mt-2 hidden sm:block text-center max-w-[80px] font-bold ${
                        isCurrent ? "text-pink-400" : isDone ? "text-emerald-400" : "text-white/30"
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Simulation Controls Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
              <span className="text-[11px] font-mono text-pink-300 font-bold">
                SIMULATOR PENGIRIMAN:
              </span>
              <span className="text-white/50 text-[11px]">
                Uji pergerakan kurir secara interaktif
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentStepIndex < TRACKING_STEPS.length - 1 ? (
                <button
                  onClick={handleAdvanceStep}
                  className="px-3.5 py-1.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 font-mono font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FaTruck size={11} />
                  <span>Simulasikan Perjalanan Paket &gt;</span>
                </button>
              ) : (
                <button
                  onClick={handleResetStep}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 border border-white/20 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FaUndoAlt size={10} />
                  <span>Reset Simulasi</span>
                </button>
              )}

              {!isReceivedConfirmed && (
                <button
                  onClick={handleConfirmReceived}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <FaCheckCircle size={11} />
                  <span>Konfirmasi Terima Pesanan</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* ─── Grid: Checkpoint Details & Shipping Address ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Detailed Tracking History Checkpoints (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center">
                    <FaTruck size={14} />
                  </div>
                  <div>
                    <h3 className="text-base font-black font-outfit uppercase tracking-wider text-white">
                      Riwayat Titik Pelacakan
                    </h3>
                    <p className="text-[11px] text-white/40">Log aktivitas kurir dan hub logistik</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <FaCheckCircle size={10} /> TERKONEKSI REALTIME
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10 before:z-0">
                {TRACKING_STEPS.slice(0, currentStepIndex + 1).reverse().map((checkpoint, index) => {
                  const isLatest = index === 0;

                  return (
                    <div key={checkpoint.step} className="relative z-10 flex items-start gap-4">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                        isLatest 
                          ? "bg-pink-500 border-white text-white shadow-md shadow-pink-500/50 scale-110" 
                          : "bg-[#180d2c] border-white/30 text-emerald-400"
                      }`}>
                        {isLatest ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        ) : (
                          <FaCheck size={10} />
                        )}
                      </div>

                      <div className="flex-1 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h4 className={`text-xs font-bold ${isLatest ? "text-pink-300 font-outfit text-sm" : "text-white"}`}>
                            {checkpoint.title}
                          </h4>
                          <span className="text-[10px] font-mono text-white/40">{checkpoint.time}</span>
                        </div>
                        <p className="text-xs text-white/70">{checkpoint.desc}</p>
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-pink-400/80">
                          <FaMapMarkerAlt size={10} />
                          <span>{checkpoint.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Courier & Driver Profile Card */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                  DP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-white">Dimas Pratama</h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30">
                      IDOL EXPRESS RIDER
                    </span>
                  </div>
                  <p className="text-xs text-white/50">Kurir Pengantar Terakreditasi • Plat Motor: B 4921 REV</p>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                    <FaStar size={10} /><FaStar size={10} /><FaStar size={10} /><FaStar size={10} /><FaStar size={10} />
                    <span className="text-white/60 text-[10px] ml-1">(4.98 • 2,410 Pengiriman)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${order.shippingAddress?.phone || "081298765432"}`}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <FaPhoneAlt size={10} className="text-pink-400" />
                  <span>Hubungi Kurir</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Package Contents & Shipping Address (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Destination Address Card */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/5">
                <FaMapMarkerAlt className="text-pink-400" size={14} />
                <h3 className="text-sm font-black font-outfit uppercase tracking-wider text-white">
                  Alamat Penerima
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <p className="font-bold text-white text-sm">{order.shippingAddress?.name}</p>
                <p className="text-pink-400 font-mono">{order.shippingAddress?.phone}</p>
                <p className="text-white/70 leading-relaxed">
                  {order.shippingAddress?.address}
                </p>
                <p className="text-white/50 font-mono">
                  {order.shippingAddress?.city} ({order.shippingAddress?.postalCode})
                </p>

                {order.shippingAddress?.notes && (
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-white/40 uppercase block mb-0.5">Catatan Kurir</span>
                    <p className="text-[11px] text-white/70 italic">"{order.shippingAddress.notes}"</p>
                  </div>
                )}
              </div>
            </div>

            {/* Package Items Card */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FaBoxOpen className="text-pink-400" size={14} />
                  <h3 className="text-sm font-black font-outfit uppercase tracking-wider text-white">
                    Isi Paket Merchandise ({order.items?.length || 1})
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <FaAward size={12} /> AUTHENTIC MERCH
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {order.items?.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-lg object-cover bg-white/5 shrink-0 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                      {item.variant && (
                        <p className="text-[10px] text-pink-400/80 truncate">{item.variant}</p>
                      )}
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[11px] font-mono text-white/50">Qty: {item.quantity}</span>
                        <span className="font-mono font-bold text-xs text-white">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Paid Pill */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-white/50">Total Lunas</span>
                <span className="font-mono font-black text-sm text-pink-400">
                  ${order.pricing?.total?.toFixed(2) || "47.25"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/shop"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all text-center"
              >
                <FaShoppingBag size={12} />
                <span>Belanja Merchandise Lainnya</span>
              </Link>

              <button
                onClick={() => window.print()}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FaPrint size={12} />
                <span>Cetak Bukti Resi / Struk</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ─── Rating / Feedback Modal ──────────────────────── */}
      {showRatingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full bg-[#160a2c] border border-pink-500/40 rounded-3xl p-6 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-pink-500/30">
              🎉
            </div>

            <div>
              <h3 className="text-xl font-black font-outfit text-white">Pesanan Selesai!</h3>
              <p className="text-xs text-white/70 mt-1">
                Terima kasih telah mendukung H5-Revolution dengan membeli merchandise resmi. Berikan rating untuk pengalaman belanja & kurir:
              </p>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className={`text-2xl transition-transform hover:scale-125 ${
                    star <= userRating ? "text-amber-400" : "text-white/20"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              rows={2}
              value={reviewNote}
              onChange={(e) => setReviewNote(e.target.value)}
              placeholder="Tulis ulasan merchandise atau pengiriman kurir..."
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none"
            />

            <button
              onClick={() => {
                setShowRatingModal(false);
                alert("Terima kasih atas ulasan bintang 5 Anda!");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
            >
              Kirim Ulasan & Selesai
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default OrderShipping;