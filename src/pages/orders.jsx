import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaShoppingBag, 
  FaTruck, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaChevronRight, 
  FaBoxOpen, 
  FaSearch, 
  FaFileInvoice, 
  FaArrowLeft,
  FaRedoAlt
} from "react-icons/fa";
import SEO from "../components/SEO";

const Orders = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const [orders, setOrders] = useState(() => {
    // Attempt load from localStorage
    try {
      const history = JSON.parse(localStorage.getItem("h5-order-history") || "[]");
      const current = JSON.parse(localStorage.getItem("h5-current-order") || "null");
      
      const combined = [...history];
      if (current && !combined.find(o => o.orderId === current.orderId)) {
        combined.unshift(current);
      }
      
      if (combined.length > 0) return combined;
    } catch (e) {
      console.error(e);
    }

    // Default mock sample orders
    return [
      {
        orderId: "H5-948201",
        orderDate: "2026-11-24T10:15:00Z",
        status: "IN_TRANSIT",
        trackingNumber: "H5EX9928192038ID",
        courier: { name: "Idol Express Priority", etd: "1 - 2 Hari" },
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
        pricing: { subtotal: 70.00, shipping: 8.00, discount: 10.50, insurance: 1.00, total: 68.50 },
        shippingAddress: {
          name: "Reza Pratama",
          phone: "081298765432",
          city: "Jakarta Pusat, DKI Jakarta"
        }
      },
      {
        orderId: "H5-728190",
        orderDate: "2026-11-20T14:30:00Z",
        status: "DELIVERED",
        trackingNumber: "H5EX8819203819ID",
        courier: { name: "SiCepat BEST", etd: "1 Hari" },
        items: [
          {
            id: 3,
            name: "H5-Rev Cyber Tour Stage Tee",
            price: "$30.00",
            quantity: 2,
            image: "https://placehold.co/400x400/180a36/f97316?text=Tour+Tee",
            variant: "Size XL / Cyber Glow"
          }
        ],
        pricing: { subtotal: 60.00, shipping: 10.00, discount: 5.00, insurance: 1.00, total: 66.00 },
        shippingAddress: {
          name: "Reza Pratama",
          phone: "081298765432",
          city: "Jakarta Pusat, DKI Jakarta"
        }
      },
      {
        orderId: "H5-619283",
        orderDate: "2026-11-24T12:00:00Z",
        status: "WAITING_PAYMENT",
        trackingNumber: "H5EX7736192038ID",
        courier: { name: "J&T Express Regular", etd: "2 - 3 Hari" },
        items: [
          {
            id: 4,
            name: "Yuki Tanaka Solo Photocard Set",
            price: "$12.00",
            quantity: 1,
            image: "https://placehold.co/400x400/180a36/ec4899?text=Yuki+PC",
            variant: "Holographic 5-Cards Set"
          }
        ],
        pricing: { subtotal: 12.00, shipping: 5.00, discount: 0, insurance: 1.00, total: 18.00 },
        shippingAddress: {
          name: "Reza Pratama",
          phone: "081298765432",
          city: "Jakarta Pusat, DKI Jakarta"
        }
      }
    ];
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "WAITING_PAYMENT":
        return {
          label: "Menunggu Pembayaran",
          color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
          icon: FaClock
        };
      case "IN_TRANSIT":
      case "SHIPPED":
        return {
          label: "Sedang Dikirim",
          color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
          icon: FaTruck
        };
      case "DELIVERED":
        return {
          label: "Pesanan Selesai",
          color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
          icon: FaCheckCircle
        };
      default:
        return {
          label: status,
          color: "bg-white/10 text-white/70 border-white/20",
          icon: FaBoxOpen
        };
    }
  };

  const filteredOrders = orders.filter((o) => {
    if (filterStatus === "WAITING_PAYMENT" && o.status !== "WAITING_PAYMENT") return false;
    if (filterStatus === "SHIPPED" && o.status !== "IN_TRANSIT" && o.status !== "SHIPPED") return false;
    if (filterStatus === "DELIVERED" && o.status !== "DELIVERED") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchId = o.orderId.toLowerCase().includes(q);
      const matchItem = o.items?.some(it => it.name.toLowerCase().includes(q));
      if (!matchId && !matchItem) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Riwayat Pesanan Saya" description="Pantau dan kelola seluruh pesanan merchandise resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

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
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold">
                MY OFFICIAL PURCHASES
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Riwayat <span className="text-idol">Pesanan</span>
              </h1>
            </div>
          </div>

          <Link
            to="/shop"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 transition-all flex items-center gap-2 self-start sm:self-auto"
          >
            <FaShoppingBag size={12} />
            <span>Belanja Merch Baru</span>
          </Link>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: "ALL", label: "Semua Pesanan" },
              { id: "WAITING_PAYMENT", label: "Menunggu Bayar" },
              { id: "SHIPPED", label: "Sedang Dikirim" },
              { id: "DELIVERED", label: "Selesai" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterStatus(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  filterStatus === tab.id
                    ? "bg-pink-500 text-white shadow-md shadow-pink-500/30 font-outfit"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative sm:w-64">
            <FaSearch className="absolute left-3 top-3 text-white/30" size={11} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ID / nama produk..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder-white/30 focus:border-pink-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#120826]/70 border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-3xl mx-auto">
              📦
            </div>
            <h3 className="font-bold text-base text-white">Tidak Ada Pesanan Ditemukan</h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto">
              Tidak ada data pesanan yang cocok dengan filter saat ini. Kunjungi official merch store untuk membeli koleksi idol terbaru.
            </p>
            <Link
              to="/shop"
              className="inline-block px-5 py-2.5 rounded-xl bg-pink-500 text-white font-bold text-xs uppercase tracking-wider"
            >
              Lihat Katalog Merchandise
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const badge = getStatusBadge(order.status);
              const BadgeIcon = badge.icon;
              const formattedDate = new Date(order.orderDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric"
              });

              return (
                <div
                  key={order.orderId}
                  className="p-5 sm:p-6 rounded-2xl bg-[#120826]/90 border border-white/10 hover:border-pink-500/30 backdrop-blur-xl shadow-xl transition-all"
                >
                  {/* Order Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-xs sm:text-sm text-pink-400">
                        #{order.orderId}
                      </span>
                      <span className="text-[11px] text-white/40 font-mono">
                        {formattedDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border flex items-center gap-1.5 ${badge.color}`}>
                        <BadgeIcon size={10} />
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="space-y-3 mb-4">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 rounded-lg object-cover bg-white/5 shrink-0 border border-white/10" 
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                            {item.variant && (
                              <p className="text-[10px] text-pink-400/80 truncate">{item.variant}</p>
                            )}
                            <span className="text-[10px] font-mono text-white/50">Qty: {item.quantity}</span>
                          </div>
                        </div>

                        <span className="font-mono font-bold text-xs text-white shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer Actions & Total */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-wider block">Total Tagihan</span>
                      <span className="font-mono font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                        ${order.pricing?.total?.toFixed(2) || "45.00"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {order.status === "WAITING_PAYMENT" ? (
                        <button
                          onClick={() => navigate(`/order-payment/${order.orderId}`, { state: { order } })}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:scale-105 transition-all"
                        >
                          Bayar Sekarang
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(`/order-shipping/${order.orderId}`, { state: { order } })}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
                        >
                          <FaTruck size={11} />
                          <span>Lacak Pengiriman</span>
                        </button>
                      )}

                      <Link
                        to={`/invoice/${order.orderId}`}
                        state={{ order }}
                        className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                      >
                        <FaFileInvoice size={11} />
                        <span className="hidden sm:inline">Invoice</span>
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;