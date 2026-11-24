import React, { useState, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaShieldAlt, 
  FaTruck, 
  FaTicketAlt, 
  FaCheckCircle, 
  FaCreditCard, 
  FaQrcode, 
  FaUniversity, 
  FaWallet, 
  FaMapMarkerAlt, 
  FaUser, 
  FaPhone, 
  FaShoppingBag, 
  FaTrash, 
  FaInfoCircle, 
  FaChevronRight, 
  FaBoxOpen,
  FaCheck,
  FaGift
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const COURIER_OPTIONS = [
  {
    id: "idol-priority",
    name: "Idol Express Priority",
    service: "Next Day Delivery + Official Bubble Tube",
    etd: "1 - 2 Hari",
    price: 8.00,
    badge: "RECOMMENDED",
    icon: "⚡"
  },
  {
    id: "sicepat-best",
    name: "SiCepat BEST",
    service: "Layanan Kilat SiCepat",
    etd: "1 Hari Kerja",
    price: 10.00,
    badge: "FASTEST",
    icon: "🚀"
  },
  {
    id: "jnt-regular",
    name: "J&T Express Regular",
    service: "Standar Ekspedisi Nasional",
    etd: "2 - 3 Hari",
    price: 5.00,
    badge: null,
    icon: "📦"
  },
  {
    id: "jne-reg",
    name: "JNE Regular Safe",
    service: "Asuransi Kerusakan Merch",
    etd: "2 - 4 Hari",
    price: 4.50,
    badge: null,
    icon: "🛡️"
  }
];

const AVAILABLE_PROMOS = [
  { code: "H5REVOLUTION", discountPercent: 15, desc: "Diskon 15% Official Merchandise" },
  { code: "IDOLFAN", discountFixed: 5.00, desc: "Potongan Langsung $5.00" },
  { code: "FREESHIP", freeShipping: true, desc: "Gratis Ongkos Kirim" }
];

const PAYMENT_METHODS = [
  {
    id: "qris",
    name: "QRIS Instant Pay",
    desc: "BCA, GoPay, OVO, ShopeePay, Dana, LinkAja",
    category: "Instant QR",
    icon: FaQrcode,
    fee: 0,
    tag: "INSTANT"
  },
  {
    id: "bca_va",
    name: "BCA Virtual Account",
    desc: "Verifikasi Otomatis 24 Jam",
    category: "Virtual Account",
    icon: FaUniversity,
    fee: 0.50,
    tag: "AUTO CHECK"
  },
  {
    id: "mandiri_va",
    name: "Mandiri Virtual Account",
    desc: "Transfer via Livin by Mandiri / ATM",
    category: "Virtual Account",
    icon: FaUniversity,
    fee: 0.50,
    tag: null
  },
  {
    id: "credit_card",
    name: "Credit / Debit Card",
    desc: "Visa, Mastercard, JCB Secure",
    category: "Card Payment",
    icon: FaCreditCard,
    fee: 1.00,
    tag: "SECURE"
  },
  {
    id: "idol_wallet",
    name: "H5 Idol Fan Wallet",
    desc: "Saldo Member Resmi H5-Revolution",
    category: "Fan Club",
    icon: FaWallet,
    fee: 0,
    tag: "BONUS POINTS"
  }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, removeFromCart } = useCart();

  // Default backup sample items jika user membuka checkout langsung tanpa cart
  const [demoItems] = useState([
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
  ]);

  const activeItems = cartItems.length > 0 ? cartItems : demoItems;
  const isDemo = cartItems.length === 0;

  // Form states
  const [recipientName, setRecipientName] = useState("Reza Pratama");
  const [phone, setPhone] = useState("081298765432");
  const [email, setEmail] = useState("fan@h5revolution.id");
  const [address, setAddress] = useState("Jl. Sudirman No. 45, Apartemen Senayan City Tower A Lt. 12");
  const [city, setCity] = useState("Jakarta Pusat, DKI Jakarta");
  const [postalCode, setPostalCode] = useState("10270");
  const [courierNotes, setCourierNotes] = useState("Tolong packing double bubble wrap untuk photocard");

  // Selection states
  const [selectedCourier, setSelectedCourier] = useState(COURIER_OPTIONS[0]);
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0]);

  // Voucher states
  const [voucherCodeInput, setVoucherCodeInput] = useState("H5REVOLUTION");
  const [appliedPromo, setAppliedPromo] = useState(AVAILABLE_PROMOS[0]);
  const [voucherError, setVoucherError] = useState("");
  const [voucherSuccess, setVoucherSuccess] = useState("Voucher H5REVOLUTION berhasil digunakan!");

  // Packaging protection option
  const [includeInsurance, setIncludeInsurance] = useState(true);

  // Calculations
  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    const clean = priceStr.toString().replace(/[^0-9.-]+/g, "");
    return parseFloat(clean) || 0;
  };

  const rawSubtotal = isDemo 
    ? demoItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    : cartTotal;

  // Shipping cost
  const shippingCost = appliedPromo?.freeShipping ? 0 : selectedCourier.price;

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = (rawSubtotal * appliedPromo.discountPercent) / 100;
    } else if (appliedPromo.discountFixed) {
      discountAmount = appliedPromo.discountFixed;
    } else if (appliedPromo.freeShipping) {
      discountAmount = selectedCourier.price;
    }
  }

  // Fees
  const insuranceFee = includeInsurance ? 1.00 : 0;
  const paymentFee = selectedPayment.fee || 0;
  const finalTotal = Math.max(0, rawSubtotal + shippingCost - (appliedPromo?.freeShipping ? 0 : discountAmount) + insuranceFee + paymentFee);

  const handleApplyVoucher = (codeToApply) => {
    const targetCode = (codeToApply || voucherCodeInput).trim().toUpperCase();
    const found = AVAILABLE_PROPOS_FIND(targetCode);

    if (found) {
      setAppliedPromo(found);
      setVoucherSuccess(`Voucher ${found.code} berhasil digunakan! (${found.desc})`);
      setVoucherError("");
    } else {
      setVoucherError("Kode voucher tidak valid atau telah kedaluwarsa.");
      setVoucherSuccess("");
    }
  };

  const AVAILABLE_PROPOS_FIND = (code) => {
    return AVAILABLE_PROMOS.find(p => p.code === code);
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!recipientName || !phone || !address || !city) {
      alert("Harap lengkapi semua data pengiriman.");
      return;
    }

    const orderId = `H5-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      orderDate: new Date().toISOString(),
      items: activeItems,
      shippingAddress: {
        name: recipientName,
        phone,
        email,
        address,
        city,
        postalCode,
        notes: courierNotes
      },
      courier: selectedCourier,
      paymentMethod: selectedPayment,
      pricing: {
        subtotal: rawSubtotal,
        shipping: shippingCost,
        discount: discountAmount,
        insurance: insuranceFee,
        paymentFee,
        total: finalTotal
      },
      appliedPromo: appliedPromo ? appliedPromo.code : null,
      status: "WAITING_PAYMENT",
      estimatedDelivery: selectedCourier.etd,
      trackingNumber: `H5EX${Math.floor(1000000000 + Math.random() * 9000000000)}ID`
    };

    // Save to localStorage for persistence across pages
    localStorage.setItem("h5-current-order", JSON.stringify(newOrder));
    
    // Also save in orders list history
    try {
      const existingHistory = JSON.parse(localStorage.getItem("h5-order-history") || "[]");
      localStorage.setItem("h5-order-history", JSON.stringify([newOrder, ...existingHistory]));
    } catch (err) {
      console.error(err);
    }

    // Navigate to payment page
    navigate(`/order-payment/${orderId}`, { state: { order: newOrder } });
  };

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Checkout Official Merchandise" description="Selesaikan pesanan merchandise resmi H5-Revolution dengan aman dan cepat." />

      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/shop" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold">
                OFFICIAL H5 STORE CHECKOUT
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Selesaikan <span className="text-idol">Pesanan</span>
              </h1>
            </div>
          </div>

          {/* Stepper Wizard Indicator */}
          <div className="flex items-center gap-2 bg-[#120826] border border-pink-900/40 px-3 py-1.5 rounded-full text-xs self-start sm:self-auto">
            <span className="text-white/40 font-mono">1. Keranjang</span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black text-[11px] shadow-sm">
              2. Checkout
            </span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="text-white/40 font-mono">3. Pembayaran</span>
            <FaChevronRight size={10} className="text-white/20" />
            <span className="text-white/40 font-mono">4. Pengiriman</span>
          </div>
        </div>

        {/* Demo banner if cart was empty */}
        {isDemo && (
          <div className="mb-6 p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 flex items-start gap-3 backdrop-blur-md">
            <FaInfoCircle className="text-pink-400 shrink-0 mt-0.5" size={18} />
            <div className="text-xs">
              <p className="font-bold text-pink-200">Mode Simulasi Checkout Aktif</p>
              <p className="text-pink-200/70 mt-0.5">
                Keranjang belanja Anda saat ini kosong. Kami menampilkan contoh produk merchandise resmi agar Anda dapat menguji seluruh alur checkout hingga pengiriman paket.
              </p>
            </div>
          </div>
        )}

        {/* ─── Main Checkout Grid ──────────────────────────── */}
        <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Shipping Address, Courier, Payment Methods (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Section 1: Data Pengiriman */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <div>
                    <h2 className="text-base font-black font-outfit uppercase tracking-wider text-white">
                      Alamat Pengiriman
                    </h2>
                    <p className="text-[11px] text-white/40">Tujuan pengiriman merchandise resmi Anda</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  VERIFIED ADDRESS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Nama Penerima
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-3.5 text-white/30" size={12} />
                    <input 
                      type="text" 
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Nama Lengkap" 
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp / HP
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3.5 top-3.5 text-white/30" size={12} />
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0812xxxxxxx" 
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Email Konfirmasi & Invoice
                  </label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Alamat Lengkap (Jalan, No. Rumah, RT/RW, Patokan)
                  </label>
                  <textarea 
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Nama jalan, gedung, nomor rumah..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Kota / Kabupaten & Provinsi
                  </label>
                  <input 
                    type="text" 
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Contoh: Jakarta Pusat, DKI Jakarta" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Kode Pos
                  </label>
                  <input 
                    type="text" 
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="10270" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1.5">
                    Catatan untuk Kurir (Opsional)
                  </label>
                  <input 
                    type="text" 
                    value={courierNotes}
                    onChange={(e) => setCourierNotes(e.target.value)}
                    placeholder="Contoh: Tolong simpan di pos satpam jika tidak ada orang" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Pilihan Ekspedisi Pengiriman */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center">
                    <FaTruck size={14} />
                  </div>
                  <div>
                    <h2 className="text-base font-black font-outfit uppercase tracking-wider text-white">
                      Opsi Ekspedisi & Kurir
                    </h2>
                    <p className="text-[11px] text-white/40">Pilih kecepatan dan penanganan khusus merchandise</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-pink-400">
                  {COURIER_OPTIONS.length} Opsi Tersedia
                </span>
              </div>

              <div className="space-y-3">
                {COURIER_OPTIONS.map((courier) => {
                  const isSelected = selectedCourier.id === courier.id;
                  return (
                    <div 
                      key={courier.id}
                      onClick={() => setSelectedCourier(courier)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected 
                          ? "bg-gradient-to-r from-pink-950/40 to-purple-950/40 border-pink-500 shadow-md shadow-pink-500/10" 
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 border border-white/5">
                          {courier.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs sm:text-sm text-white">{courier.name}</span>
                            {courier.badge && (
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 font-extrabold border border-pink-500/30">
                                {courier.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/50">{courier.service}</p>
                          <span className="text-[10px] font-mono text-white/40 inline-flex items-center gap-1 mt-0.5">
                            ⏱️ Estimasi: <strong className="text-white/80">{courier.etd}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-black text-sm text-pink-400">
                          {appliedPromo?.freeShipping ? (
                            <span className="flex items-center gap-1.5 justify-end">
                              <s className="text-white/30 text-xs">${courier.price.toFixed(2)}</s>
                              <span className="text-emerald-400 text-xs">GRATIS</span>
                            </span>
                          ) : (
                            `$${courier.price.toFixed(2)}`
                          )}
                        </span>
                        <div className="mt-1 flex justify-end">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-pink-500 bg-pink-500 text-white" : "border-white/30"
                          }`}>
                            {isSelected && <FaCheck size={8} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Extra Merchandise Packaging Protection */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <input 
                    type="checkbox"
                    id="insurance"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                    className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
                  />
                  <label htmlFor="insurance" className="text-xs text-white/80 cursor-pointer">
                    <span className="font-bold text-white">Idol Safe Armor™</span> (Garansi ganti baru jika rusak saat pengiriman + Hard Box)
                  </label>
                </div>
                <span className="font-mono text-xs text-pink-400 font-bold">+$1.00</span>
              </div>
            </div>

            {/* Section 3: Metode Pembayaran */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center">
                    <FaCreditCard size={14} />
                  </div>
                  <div>
                    <h2 className="text-base font-black font-outfit uppercase tracking-wider text-white">
                      Metode Pembayaran
                    </h2>
                    <p className="text-[11px] text-white/40">Transaksi aman berlisensi resmi SSL 256-Bit</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <FaShieldAlt size={11} /> 100% SECURE
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedPayment.id === method.id;

                  return (
                    <div 
                      key={method.id}
                      onClick={() => setSelectedPayment(method)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? "bg-gradient-to-br from-pink-950/60 to-purple-950/60 border-pink-500 shadow-md shadow-pink-500/10" 
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
                          <Icon size={16} />
                        </div>
                        {method.tag && (
                          <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                            {method.tag}
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs text-white">{method.name}</h4>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-pink-500 bg-pink-500 text-white" : "border-white/30"
                          }`}>
                            {isSelected && <FaCheck size={7} />}
                          </div>
                        </div>
                        <p className="text-[10px] text-white/50 mt-1 line-clamp-1">{method.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary & Price Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Order Items Review Card */}
            <div className="p-6 rounded-2xl bg-[#120826]/90 border border-white/10 backdrop-blur-xl shadow-xl sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FaBoxOpen className="text-pink-400" size={16} />
                  <h3 className="text-sm font-black font-outfit uppercase tracking-wider text-white">
                    Ringkasan Item ({activeItems.length})
                  </h3>
                </div>
                <Link to="/shop" className="text-[10px] font-mono text-pink-400 hover:underline">
                  + Tambah Item
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar pr-1 mb-5">
                {activeItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-pink-500/20 transition-all">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-lg object-cover bg-white/5 shrink-0 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                      {item.variant && (
                        <p className="text-[10px] text-pink-400/80 truncate">Varian: {item.variant}</p>
                      )}
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[11px] font-mono text-white/50">Qty: {item.quantity}</span>
                        <span className="font-mono font-bold text-xs text-white">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Voucher Code Input */}
              <div className="mb-5 pb-5 border-b border-white/5">
                <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FaTicketAlt className="text-pink-400" size={11} /> Kode Promo / Voucher Fans
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    value={voucherCodeInput}
                    onChange={(e) => setVoucherCodeInput(e.target.value.toUpperCase())}
                    placeholder="Masukkan KODE VOUCHER"
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2 text-xs font-mono text-white placeholder-white/30 uppercase focus:border-pink-500 focus:outline-none"
                  />
                  <button 
                    type="button"
                    onClick={() => handleApplyVoucher()}
                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Terapkan
                  </button>
                </div>

                {/* Available Quick Promo Badges */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {AVAILABLE_PROMOS.map((promo) => (
                    <button
                      type="button"
                      key={promo.code}
                      onClick={() => {
                        setVoucherCodeInput(promo.code);
                        handleApplyVoucher(promo.code);
                      }}
                      className={`text-[9px] font-mono px-2 py-1 rounded border transition-all ${
                        appliedPromo?.code === promo.code 
                          ? "bg-pink-500/20 border-pink-500 text-pink-300 font-bold" 
                          : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                      }`}
                    >
                      🏷️ {promo.code}
                    </button>
                  ))}
                </div>

                {voucherSuccess && (
                  <p className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                    <FaCheckCircle size={10} /> {voucherSuccess}
                  </p>
                )}
                {voucherError && (
                  <p className="text-[11px] text-red-400 mt-2 font-medium">
                    ⚠️ {voucherError}
                  </p>
                )}
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-2.5 text-xs pb-5 border-b border-white/5">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal Produk</span>
                  <span className="font-mono text-white">${rawSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Biaya Ongkos Kirim ({selectedCourier.name})</span>
                  <span className="font-mono text-white">
                    {appliedPromo?.freeShipping ? (
                      <span className="text-emerald-400 font-bold">GRATIS</span>
                    ) : (
                      `$${selectedCourier.price.toFixed(2)}`
                    )}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Diskon Voucher ({appliedPromo?.code})</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {includeInsurance && (
                  <div className="flex justify-between text-white/60">
                    <span>Proteksi Idol Safe Armor™</span>
                    <span className="font-mono text-white">+$1.00</span>
                  </div>
                )}

                {paymentFee > 0 && (
                  <div className="flex justify-between text-white/60">
                    <span>Biaya Layanan Pembayaran</span>
                    <span className="font-mono text-white">+${paymentFee.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div className="py-4 flex justify-between items-center">
                <div>
                  <span className="text-xs text-white/40 font-bold uppercase tracking-wider block">Total Tagihan</span>
                  <span className="text-xs text-pink-400/70 font-mono">Termasuk Pajak & Packaging</span>
                </div>
                <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Lanjut ke Pembayaran</span>
                <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 pt-3 flex items-center justify-center gap-3 text-[10px] text-white/40 font-mono uppercase tracking-widest text-center">
                <span className="flex items-center gap-1">🔒 256-Bit SSL</span>
                <span>•</span>
                <span className="flex items-center gap-1">🛡️ Official Guarantee</span>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Checkout;