import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHeart, 
  FaTrash, 
  FaShoppingCart, 
  FaArrowLeft, 
  FaStar, 
  FaCheck, 
  FaShoppingBag, 
  FaShareAlt,
  FaTag
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const INITIAL_WISHLIST = [
  {
    id: 1,
    name: "H5-Revolution Official Lightstick v2",
    category: "LIGHTSTICK",
    price: "$45.00",
    image: "https://placehold.co/400x400/180a36/ec4899?text=Lightstick",
    inStock: true,
    tag: "POPULAR",
    desc: "Stage synchronized Bluetooth RGB lightstick with member color presets."
  },
  {
    id: 3,
    name: "H5-Rev Cyber Tour Stage Tee",
    category: "APPAREL",
    price: "$30.00",
    image: "https://placehold.co/400x400/180a36/f97316?text=Tour+Tee",
    inStock: true,
    tag: "BEST SELLER",
    desc: "100% Heavyweight Cotton with glow screenprint."
  },
  {
    id: 4,
    name: "Yuki Tanaka Solo Photocard Set",
    category: "PHOTOCARD",
    price: "$12.00",
    image: "https://placehold.co/400x400/180a36/ec4899?text=Yuki+PC",
    inStock: true,
    tag: "LIMITED",
    desc: "Set of 5 exclusive holographic cards."
  },
  {
    id: 6,
    name: "Official Stage Slogan Towel",
    category: "ACCESSORIES",
    price: "$18.00",
    image: "https://placehold.co/400x400/180a36/a855f7?text=Slogan",
    inStock: false,
    tag: "RESTOCKING",
    desc: "Microfiber concert cheering towel."
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);
  const { addToCart } = useCart();
  const [addedToast, setAddedToast] = useState(null);

  const handleRemove = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedToast(`"${item.name}" berhasil dimasukkan ke keranjang!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleAddAllToCart = () => {
    wishlistItems.filter(item => item.inStock).forEach(item => {
      addToCart(item);
    });
    setAddedToast("Semua barang yang tersedia berhasil dimasukkan ke keranjang!");
    setTimeout(() => setAddedToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0518] text-white pt-24 pb-20 font-inter relative overflow-hidden">
      <SEO title="Wishlist Merchandise Favorit" description="Simpan dan pantau koleksi merchandise impian H5-Revolution Anda." />

      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
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
                <FaHeart size={10} /> SAVED FOR LATER
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Wishlist <span className="text-idol">Favorit</span>
              </h1>
            </div>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={handleAddAllToCart}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <FaShoppingCart size={12} />
              <span>Pindahkan Semua ke Keranjang</span>
            </button>
          )}
        </div>

        {/* Toast Feedback */}
        {addedToast && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 backdrop-blur-md shadow-lg animate-fade-in">
            <FaCheck size={12} />
            <span>{addedToast}</span>
          </div>
        )}

        {/* Wishlist Content */}
        {wishlistItems.length === 0 ? (
          <div className="p-16 rounded-3xl bg-[#120826]/70 border border-white/10 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-4xl mx-auto shadow-idol-pink">
              💖
            </div>
            <h3 className="font-bold text-lg text-white">Wishlist Anda Masih Kosong</h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto">
              Simpan merchandise, photocard, atau apparel favorit Anda dengan menekan ikon hati di katalog belanja agar mudah dibeli nanti.
            </p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-pink-500/20"
            >
              Kunjungi Merch Store
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div 
                key={item.id}
                className="group p-4 rounded-2xl bg-[#120826]/90 border border-white/10 hover:border-pink-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail & Badges */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/5 mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {item.tag && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-pink-400">
                        {item.tag}
                      </span>
                    )}

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 hover:bg-red-500 text-white/70 hover:text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all cursor-pointer"
                      title="Hapus dari wishlist"
                    >
                      <FaTrash size={10} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <span className="text-[9px] font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-white/50 line-clamp-2 mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-base text-white">
                      {item.price}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${
                      item.inStock ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {item.inStock ? "● In Stock" : "○ Pre-Order"}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <FaShoppingCart size={11} />
                    <span>{item.inStock ? "Tambah ke Keranjang" : "Stok Habis"}</span>
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

export default Wishlist;