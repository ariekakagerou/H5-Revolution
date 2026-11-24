import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { 
  FaPrint, 
  FaDownload, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaTruck, 
  FaBarcode, 
  FaQrcode,
  FaAward
} from "react-icons/fa";
import SEO from "../components/SEO";

const Invoice = () => {
  const { orderId: paramOrderId } = useParams();
  const location = useLocation();

  const order = location.state?.order || (() => {
    try {
      const saved = localStorage.getItem("h5-current-order");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      orderId: paramOrderId || "H5-948201",
      orderDate: new Date().toISOString(),
      status: "PAID",
      trackingNumber: "H5EX9928192038ID",
      courier: { name: "Idol Express Priority", etd: "1 - 2 Hari" },
      paymentMethod: { name: "QRIS Instant Pay", category: "Instant QR" },
      items: [
        {
          id: 1,
          name: "H5-Revolution Official Lightstick v2",
          price: "$45.00",
          quantity: 1,
          variant: "Bluetooth Sync Stage Edition"
        },
        {
          id: 2,
          name: "'Shining Stars' 1st Full Album",
          price: "$25.00",
          quantity: 1,
          variant: "Special Photobook Edition"
        }
      ],
      shippingAddress: {
        name: "Reza Pratama",
        phone: "081298765432",
        email: "fan@h5revolution.id",
        address: "Jl. Sudirman No. 45, Apartemen Senayan City Tower A Lt. 12",
        city: "Jakarta Pusat, DKI Jakarta",
        postalCode: "10270"
      },
      pricing: {
        subtotal: 70.00,
        shipping: 8.00,
        discount: 10.50,
        insurance: 1.00,
        paymentFee: 0,
        total: 68.50
      }
    };
  })();

  const invoiceNumber = `INV-${order.orderId || "H5-948201"}`;
  const formattedDate = new Date(order.orderDate || Date.now()).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative print:bg-white print:text-black print:pt-0 print:pb-0">
      <SEO title={`Invoice Resmi #${invoiceNumber}`} description="Invoice dan bukti pembelian sah merchandise resmi H5-Revolution." />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Action Controls (Hidden on Print) */}
        <div className="flex items-center justify-between gap-4 mb-6 print:hidden">
          <Link 
            to="/orders" 
            className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-pink-400 transition-colors"
          >
            <FaArrowLeft size={10} /> Kembali ke Riwayat Pesanan
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-pink-500/25"
            >
              <FaPrint size={11} />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>

        {/* ─── Printable Invoice Card ─────────────────────────── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#120826] border border-white/10 print:border-none print:bg-transparent print:p-0 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Official Paid Stamp */}
          <div className="absolute right-8 top-28 sm:top-24 border-4 border-emerald-500/40 text-emerald-400 font-mono font-black text-xs sm:text-sm px-4 py-1.5 rounded-xl uppercase tracking-widest rotate-[-12deg] pointer-events-none select-none flex items-center gap-1.5">
            <FaCheckCircle size={14} /> OFFICIAL PAID
          </div>

          {/* Invoice Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-white/10 print:border-black/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-outfit font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 print:text-black">
                  H5-REVOLUTION
                </span>
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-mono text-[9px] font-bold border border-pink-500/30 print:border-black print:text-black">
                  OFFICIAL STORE
                </span>
              </div>
              <p className="text-[11px] text-white/50 print:text-black/60">
                PT H5 Global Entertainment & Licensing Ltd.
              </p>
              <p className="text-[10px] text-white/40 print:text-black/50 font-mono">
                NPWP: 01.892.481.9-021.000 • Tokyo & Jakarta Fulfillment
              </p>
            </div>

            <div className="text-left sm:text-right font-mono">
              <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold block">
                FAKTUR PEMBELIAN RESMI
              </span>
              <h2 className="text-lg font-bold text-white print:text-black">{invoiceNumber}</h2>
              <span className="text-xs text-white/50 print:text-black/60">{formattedDate}</span>
            </div>
          </div>

          {/* Billed To & Shipment Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <span className="text-[10px] font-mono text-white/40 print:text-black/50 uppercase tracking-wider block mb-1">
                Ditagihkan Kepada (Penerima)
              </span>
              <p className="font-bold text-white print:text-black text-sm">{order.shippingAddress?.name}</p>
              <p className="text-white/70 print:text-black/80">{order.shippingAddress?.phone}</p>
              <p className="text-white/60 print:text-black/70 mt-1 leading-relaxed">
                {order.shippingAddress?.address}, {order.shippingAddress?.city} ({order.shippingAddress?.postalCode})
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] font-mono text-white/40 print:text-black/50 uppercase tracking-wider block mb-1">
                Metode Pembayaran & Kurir
              </span>
              <p className="font-bold text-white print:text-black">{order.paymentMethod?.name || "QRIS Instant Pay"}</p>
              <p className="text-white/70 print:text-black/80 font-mono">
                Status: <strong className="text-emerald-400 print:text-emerald-700">LUNAS (VERIFIED)</strong>
              </p>
              <div className="mt-2 pt-2 border-t border-white/5 print:border-black/10">
                <span className="text-[10px] text-white/40 print:text-black/50 block">Ekspedisi & No. Resi:</span>
                <span className="font-mono text-pink-400 print:text-black font-bold">
                  {order.courier?.name} ({order.trackingNumber})
                </span>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 print:border-black/20 font-mono text-[10px] uppercase text-white/50 print:text-black/60">
                  <th className="pb-3">Item Merchandise</th>
                  <th className="pb-3 text-center">Qty</th>
                  <th className="pb-3 text-right">Harga Satuan</th>
                  <th className="pb-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 print:divide-black/10">
                {order.items?.map((item, idx) => (
                  <tr key={idx} className="py-3">
                    <td className="py-3">
                      <p className="font-bold text-white print:text-black">{item.name}</p>
                      {item.variant && (
                        <span className="text-[10px] text-pink-400 print:text-gray-600 block">{item.variant}</span>
                      )}
                    </td>
                    <td className="py-3 text-center font-mono">{item.quantity}</td>
                    <td className="py-3 text-right font-mono">{item.price}</td>
                    <td className="py-3 text-right font-mono font-bold text-white print:text-black">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost Summary Breakdown */}
          <div className="pt-4 border-t border-white/10 print:border-black/20 flex flex-col sm:flex-row justify-between gap-6 text-xs">
            <div className="sm:max-w-xs space-y-1 text-white/40 print:text-black/50 text-[10px] font-mono">
              <p>• Seluruh barang dijamin 100% lisensi resmi H5-Revolution.</p>
              <p>• Kerusakan pabrik dilindungi garansi tukar unit 7 hari kerja.</p>
              <p>• Transaksi ini sah dan tercatat dalam ledger blockchain H5.</p>
            </div>

            <div className="sm:w-72 space-y-2">
              <div className="flex justify-between text-white/60 print:text-black/70">
                <span>Subtotal Produk:</span>
                <span className="font-mono text-white print:text-black">${order.pricing?.subtotal?.toFixed(2) || "70.00"}</span>
              </div>
              <div className="flex justify-between text-white/60 print:text-black/70">
                <span>Ongkos Kirim ({order.courier?.name}):</span>
                <span className="font-mono text-white print:text-black">${order.pricing?.shipping?.toFixed(2) || "8.00"}</span>
              </div>
              {order.pricing?.discount > 0 && (
                <div className="flex justify-between text-emerald-400 print:text-emerald-700">
                  <span>Diskon Voucher:</span>
                  <span className="font-mono">-${order.pricing.discount.toFixed(2)}</span>
                </div>
              )}
              {order.pricing?.insurance > 0 && (
                <div className="flex justify-between text-white/60 print:text-black/70">
                  <span>Proteksi Idol Safe Armor™:</span>
                  <span className="font-mono text-white print:text-black">+$1.00</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/10 print:border-black/20 flex justify-between items-center text-sm">
                <span className="font-black uppercase tracking-wider text-white print:text-black">Total Bayar:</span>
                <span className="font-mono font-black text-xl text-pink-400 print:text-black">
                  ${order.pricing?.total?.toFixed(2) || "68.50"}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Barcode & Legal Guarantee */}
          <div className="pt-6 border-t border-white/10 print:border-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white p-1 rounded-lg flex items-center justify-center">
                <FaQrcode size={38} className="text-black" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 print:text-black/50 uppercase block">Verifikasi Digital</span>
                <span className="font-mono text-xs text-white print:text-black font-bold">H5-AUTHENTICITY-PASS</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-white/40 print:text-black/50 block">Digital Officer Signature</span>
              <span className="font-outfit font-black text-xs text-pink-400 print:text-black">H5 OFFICIAL LICENSED SEAL</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Invoice;