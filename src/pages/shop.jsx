import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaStar, FaCartPlus } from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "H5-Revolution Official Lightstick v2", category: "Lightstick", price: "$45.00", image: "https://placehold.co/400x400/180a36/ec4899?text=Lightstick", tag: "NEW", desc: "Stage synchronized Bluetooth RGB lightstick." },
    { id: 2, name: "'Shining Stars' 1st Full Album", category: "Album", price: "$25.00", image: "https://placehold.co/400x400/180a36/06b6d4?text=Album", tag: "HOT", desc: "Includes holographic poster & 2 random PCs." },
    { id: 3, name: "H5-Rev Cyber Tour Stage Tee", category: "Apparel", price: "$30.00", image: "https://placehold.co/400x400/180a36/f97316?text=Tour+Tee", desc: "100% Heavyweight Cotton with neon screenprint." },
    { id: 4, name: "Yuki Tanaka Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/400x400/180a36/ec4899?text=Yuki+PC", desc: "Set of 5 exclusive holographic cards." },
    { id: 5, name: "Sakura Yamamoto Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/400x400/180a36/06b6d4?text=Sakura+PC", desc: "Set of 5 exclusive holographic cards." },
    { id: 6, name: "Official Stage Slogan Towel", category: "Accessories", price: "$18.00", image: "https://placehold.co/400x400/180a36/a855f7?text=Slogan", tag: "BEST SELLER", desc: "Microfiber concert cheering towel." },
  ];

  const categories = ["All", "Album", "Lightstick", "Apparel", "Photocard", "Accessories"];
  const filteredProducts = products
    .filter(p => filter === "All" ? true : p.category === filter)
    .filter(p => searchQuery === "" ? true : p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0f0a1e] dark:bg-[#0f0a1e] w-full pb-24 font-inter text-white relative overflow-hidden">
      <SEO title="Official Merch Store" description="Support H5-Revolution with exclusive high-quality gear and official merchandise." />
      
      {/* Ambient glows */}
      <div className="absolute top-20 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Minimal Hero Banner ──────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#160a2e] to-[#0f0a1e] border-b border-pink-900/30">
        <div className="relative z-10">
          <div className="badge-idol mb-4 mx-auto inline-flex">
            <FaStar size={10} /> Official Goods
          </div>
          {/* Responsive heading: smaller on mobile */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 font-outfit">
            OFFICIAL <span className="text-idol">MERCH</span>
          </h1>
          <p className="text-white/50 font-bold tracking-widest uppercase text-xs max-w-xs sm:max-w-xl mx-auto">
            Gear up for the next live concert with official idol goods.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 relative z-10">
        {/* ─── Controls: Filter & Search ──────────────────────── */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8 md:mb-12">
          {/* Categories — horizontal scroll on mobile */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0 font-outfit -mx-1 px-1">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    filter === cat 
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-idol-pink' 
                      : 'bg-white/[0.04] text-white/50 border border-white/10 hover:text-pink-300 hover:border-pink-500/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar — full width on mobile */}
          <div className="w-full md:w-80 bg-[#12082a] rounded-sm flex items-center px-4 py-2.5 border border-white/10 focus-within:border-pink-500/60 transition-all shadow-md shrink-0">
            <FaSearch className="text-pink-400 shrink-0" size={13} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search merchandise..." 
              className="bg-transparent border-none outline-none text-xs text-white px-3 w-full placeholder-white/30 font-medium" 
            />
          </div>
        </div>

        {/* ─── Product Grid ───────────────────────────────────── */}
        {/* 2-col on mobile, 3 on lg, 4 on xl */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-[#12082a]/80 backdrop-blur-md rounded-sm overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:shadow-idol-pink flex flex-col h-full hover:-translate-y-1"
            >
              {/* Product Image Area — square aspect ratio for consistent height */}
              <div className="relative aspect-square bg-gradient-to-br from-[#1c0a38] to-[#0f0a1e] overflow-hidden flex items-center justify-center">
                <Link to={`/shop/${product.id}`} className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 ease-out" 
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1.5">
                  {product.tag && (
                    <span className="bg-pink-500/20 backdrop-blur-md text-pink-300 border border-pink-500/40 text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Quick Add Overlay — hidden on touch devices */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center backdrop-blur-[2px] z-10 pointer-events-none hidden sm:flex">
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                    className="shimmer-btn pointer-events-auto transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm px-4 py-2 text-[10px] font-black tracking-widest uppercase shadow-idol-pink flex items-center gap-1.5"
                  >
                    <FaCartPlus size={12} /> Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                <p className="text-orange-400 text-[8px] sm:text-[9px] font-black tracking-[0.15em] uppercase mb-1.5 bg-orange-500/10 border border-orange-500/20 w-fit px-1.5 py-0.5 rounded-sm">
                  {product.category}
                </p>
                <Link to={`/shop/${product.id}`}>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition-colors mb-1.5 line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-white/40 text-[10px] sm:text-xs mb-4 line-clamp-2 hidden sm:block">{product.desc}</p>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-sm sm:text-base font-black font-mono text-pink-400 tracking-tight">{product.price}</span>
                  {/* Always-visible cart button on mobile */}
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                    title="Add to Cart"
                  >
                    <FaShoppingBag size={12} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white/[0.02] rounded-sm border border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-tight">No products found</h3>
            <p className="text-white/40 text-xs">Try changing the category filter or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
