import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { 
  FaClock, 
  FaCopy, 
  FaCheckCircle, 
  FaQrcode, 
  FaUniversity, 
  FaShieldAlt, 
  FaChevronRight, 
  FaChevronDown, 
  FaChevronUp, 
  FaExclamationTriangle, 
  FaArrowLeft,
  FaCheck,
  FaWallet,
  FaCreditCard,
  FaDownload,
  FaShareAlt,
  FaTruck
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const OrderPayment = () => {
  const { orderId: paramOrderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Load order data from state or localStorage or mock
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
    // Fallback demo order
    return {
      orderId: paramOrderId || "H5-839201",
      orderDate: new Date().toISOString(),
      items: [
        {
          id: 1,
          name: "H5-Revolution Official Lightstick v2",
          price: "$45.00",
          quantity: 1,
          image: "https://placehold.co/400x400/180a36/ec4899?text=Lightstick"
        }
      ],
      shippingAddress: {
        name: "Reza Pratama",
        phone: "081298765432",
        address: "Jl. Sudirman No. 45, Apartemen Senayan City",
        city: "Jakarta Pusat, DKI Jakarta",
        postalCode: "10270"
      },
      courier: {
        name: "Idol Express Priority",
        etd: "1 - 2 Hari",
        price: 8.00
      },
      paymentMethod: {
        id: "qris",
        name: "QRIS Instant Pay",
        category: "Instant QR",
        fee: 0
      },
      pricing: {
        subtotal: 45.00,
        shipping: 8.00,
        discount: 6.75,
        insurance: 1.00,
        paymentFee: 0,
        total: 47.25
      },
      status: "WAITING_PAYMENT",
      trackingNumber: "H5EX8930192834ID"
    };
  });

  // Countdown timer: 23 hours, 59 mins, 59 secs
  const [timeLeft, setTimeLeft] = useState(24 * 3600 - 15);
  const [copiedField, setCopiedField] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeInstructionTab, setActiveInstructionTab] = useState("m-banking");
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const virtualAccountNumber = "88019" + (order.orderId ? order.orderId.replace(/\D/g, "").padStart(8, "0") : "83920194");

  // Simulate payment completion
  const handleSimulatePaymentSuccess = () => {
    setIsSimulating(true);

    setTimeout(() => {
      const updatedOrder = {
        ...order,
        status: "PAID",
        paidAt: new Date().toISOString()
      };

      // Save updated order
      localStorage.setItem("h5-current-order", JSON.stringify(updatedOrder));
      
      // Update order in history list
      try {
        const history = JSON.parse(localStorage.getItem("h5-order-history") || "[]");
        const newHist = history.map(item => item.orderId === updatedOrder.orderId ? updatedOrder : item);
        localStorage.setItem("h5-order-history", JSON.stringify(newHist));
      } catch (e) {
        console.error(e);
      }

      // Empty cart upon successful payment
      clearCart();

      // Navigate to order shipping tracking
      navigate(`/order-shipping/${updatedOrder.orderId}`, { state: { order: updatedOrder } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title={`Pembayaran Pesanan #${order.orderId}`} description="Instruksi dan verifikasi pembayaran pesanan merchandise resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Stepper Wizard Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-pink-900/30">
          <Link to="/checkout" className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-pink-400 transition-colors">
            <FaArrowLeft size={10} /> Kembali ke Checkout
          </Link>
          <div className="flex items-center gap-2 bg-[#120826] border border-pink-900/40 px-3 py-1.5 rounded-full text-xs">
            <span className="text-white/40 font-mono hidden sm:inline">1. Keranjang</span>
            <FaChevronRight size={10} className="text-white/20 hidden sm:inline" />
            <span className="text-white/40 font-mono">2. Checkout</span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[11px] shadow-sm">
              3. Pembayaran
            </span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="text-white/40 font-mono">4. Pengiriman</span>
          </div>
        </div>

        {/* Header Alert: Countdown Timer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#180d2c]/80 to-pink-950/40 border border-amber-500/30 backdrop-blur-xl mb-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
              <FaClock size={18} className="animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                MENUNGGU PEMBAYARAN
              </span>
              <p className="text-xs text-white/70">
                Selesaikan pembayaran sebelum batas waktu berakhir agar pesanan tidak dibatalkan otomatis.
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right shrink-0 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-[10px] font-mono text-white/40 uppercase block">Sisa Waktu</span>
            <span className="font-mono font-black text-xl text-amber-400 tracking-wider">
              {formatTimer(timeLeft)}
            </span>
          </div>
        </div>

        {/* ─── Main Payment Card ──────────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">

          {/* Order ID & Total Amount Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1">
                Nomor Pesanan
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-base text-white">{order.orderId}</span>
                <button
                  onClick={() => handleCopy(order.orderId, "orderId")}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-pink-500/20 text-white/60 hover:text-pink-400 border border-white/10 text-xs font-mono flex items-center gap-1 transition-all"
                >
                  {copiedField === "orderId" ? <FaCheck size={10} className="text-emerald-400" /> : <FaCopy size={10} />}
                  <span>{copiedField === "orderId" ? "Tersalin!" : "Salin"}</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-950/30 to-purple-950/30 border border-pink-500/20">
              <span className="text-[10px] font-mono text-pink-300 uppercase tracking-wider block mb-1">
                Total Pembayaran
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400">
                  ${order.pricing?.total?.toFixed(2) || "47.25"}
                </span>
                <button
                  onClick={() => handleCopy(order.pricing?.total?.toFixed(2) || "47.25", "total")}
                  className="px-2.5 py-1 rounded bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 text-xs font-mono flex items-center gap-1 transition-all"
                >
                  {copiedField === "total" ? <FaCheck size={10} className="text-emerald-400" /> : <FaCopy size={10} />}
                  <span>{copiedField === "total" ? "Tersalin!" : "Salin"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method Details */}
          {order.paymentMethod?.id === "qris" ? (
            /* QRIS UI */
            <div className="text-center py-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">
                <FaQrcode size={12} /> SCAN QRIS STANDAR PEMBAYARAN NASIONAL
              </div>

              {/* Dynamic QR Box */}
              <div className="relative mx-auto w-64 h-64 bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-4 border-pink-500/40 group">
                {/* Scanner Laser effect */}
                <div className="absolute inset-x-4 top-4 h-0.5 bg-pink-500 shadow-[0_0_8px_#ec4899] animate-pulse pointer-events-none" />

                {/* Mock SVG QR Code */}
                <svg className="w-full h-full text-gray-900" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer corner 1 */}
                  <rect x="5" y="5" width="25" height="25" fill="#111" rx="2" />
                  <rect x="9" y="9" width="17" height="17" fill="#fff" />
                  <rect x="13" y="13" width="9" height="9" fill="#111" />
                  {/* Outer corner 2 */}
                  <rect x="70" y="5" width="25" height="25" fill="#111" rx="2" />
                  <rect x="74" y="9" width="17" height="17" fill="#fff" />
                  <rect x="78" y="13" width="9" height="9" fill="#111" />
                  {/* Outer corner 3 */}
                  <rect x="5" y="70" width="25" height="25" fill="#111" rx="2" />
                  <rect x="9" y="74" width="17" height="17" fill="#fff" />
                  <rect x="13" y="78" width="9" height="9" fill="#111" />
                  {/* Data patterns */}
                  <rect x="35" y="8" width="8" height="8" fill="#ec4899" />
                  <rect x="47" y="12" width="6" height="10" fill="#111" />
                  <rect x="57" y="6" width="7" height="8" fill="#111" />
                  <rect x="8" y="36" width="10" height="7" fill="#111" />
                  <rect x="22" y="40" width="8" height="6" fill="#111" />
                  <rect x="36" y="32" width="14" height="14" fill="#111" rx="2" />
                  <rect x="55" y="35" width="12" height="6" fill="#ec4899" />
                  <rect x="72" y="36" width="8" height="8" fill="#111" />
                  <rect x="85" y="42" width="8" height="10" fill="#111" />
                  <rect x="35" y="55" width="10" height="12" fill="#111" />
                  <rect x="52" y="50" width="16" height="12" fill="#111" />
                  <rect x="72" y="55" width="10" height="8" fill="#111" />
                  <rect x="36" y="75" width="8" height="16" fill="#111" />
                  <rect x="50" y="72" width="12" height="8" fill="#111" />
                  <rect x="68" y="74" width="18" height="8" fill="#111" />
                  <rect x="52" y="86" width="14" height="8" fill="#ec4899" />
                  {/* Center badge */}
                  <circle cx="50" cy="50" r="10" fill="#180a36" />
                  <text x="50" y="53" textAnchor="middle" fill="#ec4899" fontSize="6" fontWeight="bold">H5</text>
                </svg>

                <div className="absolute -bottom-3 bg-pink-600 text-white font-mono text-[9px] px-3 py-0.5 rounded-full font-bold shadow-md">
                  NMID: ID102938472910
                </div>
              </div>

              <p className="text-xs text-white/60 max-w-sm mx-auto">
                Buka aplikasi BCA Mobile, GoPay, OVO, ShopeePay, atau Dana Anda. Pilih menu <strong>Scan QR</strong> dan arahkan kamera ke kode di atas.
              </p>
            </div>
          ) : (
            /* Virtual Account UI */
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FaUniversity className="text-pink-400" size={16} />
                  <span className="font-bold text-sm text-white">
                    {order.paymentMethod?.name || "BCA Virtual Account"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  VERIFIKASI OTOMATIS
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  Nomor Virtual Account
                </span>
                <div className="flex items-center justify-between bg-black/40 p-3.5 rounded-xl border border-white/10">
                  <span className="font-mono font-black text-lg sm:text-xl text-pink-400 tracking-wider">
                    {virtualAccountNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(virtualAccountNumber, "va")}
                    className="px-3 py-1.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                  >
                    {copiedField === "va" ? <FaCheck size={11} className="text-emerald-400" /> : <FaCopy size={11} />}
                    <span>{copiedField === "va" ? "Tersalin!" : "Salin VA"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 pt-1">
                <span>Nama Penerima:</span>
                <span className="font-bold text-white">H5-REVOLUTION OFFICIAL STORE</span>
              </div>
            </div>
          )}

          {/* Interactive Simulator Button (Testing / Real-time trigger) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-emerald-950/40 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Simulator Verifikasi Pembayaran
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400/80">Mode Demo Fans</span>
            </div>
            <p className="text-xs text-emerald-200/70">
              Klik tombol di bawah ini untuk mensimulasikan pelunasan tagihan secara instan dan melihat update status pengiriman paket pesanan Anda.
            </p>
            <button
              onClick={handleSimulatePaymentSuccess}
              disabled={isSimulating}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Memverifikasi Pembayaran...</span>
                </>
              ) : (
                <>
                  <FaCheckCircle size={14} />
                  <span>Simulasi Bayar Sekarang (Lanjut ke Pengiriman)</span>
                  <FaChevronRight size={11} />
                </>
              )}
            </button>
          </div>

          {/* Payment Instructions Accordion */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/80 font-mono">
                Petunjuk Pembayaran
              </h3>
            </div>

            <div className="flex gap-2 mb-3 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveInstructionTab("m-banking")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeInstructionTab === "m-banking" 
                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/40" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                Mobile Banking
              </button>
              <button
                onClick={() => setActiveInstructionTab("atm")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeInstructionTab === "atm" 
                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/40" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                ATM
              </button>
              <button
                onClick={() => setActiveInstructionTab("i-banking")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeInstructionTab === "i-banking" 
                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/40" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                Internet Banking
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/70 space-y-2 leading-relaxed">
              {activeInstructionTab === "m-banking" && (
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>Buka aplikasi m-Banking di ponsel Anda lalu login.</li>
                  <li>Pilih menu <strong>Transfer</strong> &gt; <strong>Virtual Account / Antar Bank</strong>.</li>
                  <li>Masukkan nomor VA: <span className="font-mono text-pink-400 font-bold">{virtualAccountNumber}</span>.</li>
                  <li>Pastikan nama tagihan adalah <strong>H5-REVOLUTION STORE</strong> dengan nominal <span className="font-mono text-pink-400 font-bold">${order.pricing?.total?.toFixed(2)}</span>.</li>
                  <li>Masukkan PIN transaksi Anda untuk menyelesaikan pembayaran.</li>
                </ol>
              )}
              {activeInstructionTab === "atm" && (
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>Masukkan kartu ATM dan 6 digit PIN Anda.</li>
                  <li>Pilih menu <strong>Transaksi Lainnya</strong> &gt; <strong>Transfer</strong> &gt; <strong>Ke Rekening Virtual Account</strong>.</li>
                  <li>Ketik nomor Virtual Account: <span className="font-mono text-pink-400 font-bold">{virtualAccountNumber}</span>.</li>
                  <li>Periksa kembali rincian pembayaran di layar ATM.</li>
                  <li>Tekan <strong>Ya</strong> dan simpan struk bukti transaksi.</li>
                </ol>
              )}
              {activeInstructionTab === "i-banking" && (
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>Akses portal Internet Banking bank Anda dan login.</li>
                  <li>Pilih menu <strong>Pembayaran Tagihan</strong> &gt; <strong>Virtual Account</strong>.</li>
                  <li>Pilih rekening debit dan masukkan nomor VA: <span className="font-mono text-pink-400 font-bold">{virtualAccountNumber}</span>.</li>
                  <li>Otorisasi transaksi menggunakan Token Key Anda.</li>
                </ol>
              )}
            </div>
          </div>

          {/* Collapsible Order Items Summary */}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
              className="w-full flex items-center justify-between text-xs text-white/60 hover:text-white py-1"
            >
              <span className="font-bold uppercase tracking-wider font-mono">
                Rincian Pesanan & Alamat ({order.items?.length || 1} Item)
              </span>
              {isSummaryExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {isSummaryExpanded && (
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-xs">
                <div className="space-y-2">
                  {order.items?.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-1 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
                        <div>
                          <p className="font-bold text-white text-[11px] truncate max-w-xs">{item.name}</p>
                          <span className="text-[10px] text-white/40">Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <span className="font-mono text-white font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-white/60">
                  <p><strong className="text-white">Alamat:</strong> {order.shippingAddress?.address}, {order.shippingAddress?.city} ({order.shippingAddress?.postalCode})</p>
                  <p><strong className="text-white">Penerima:</strong> {order.shippingAddress?.name} ({order.shippingAddress?.phone})</p>
                  <p><strong className="text-white">Kurir:</strong> {order.courier?.name} ({order.estimatedDelivery})</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderPayment;