import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter, FaSearch, FaShoppingBag, FaStar, FaCartPlus } from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "H5-Revolution Official Lightstick v2", category: "Lightstick", price: "$45.00", image: "https://placehold.co/400x400/ffe4e6/f43f5e?text=Lightstick", tag: "NEW", desc: "Bluetooth synced." },
    { id: 2, name: "'Shining Stars' 1st Full Album", category: "Album", price: "$25.00", image: "https://placehold.co/400x400/e0f2fe/0ea5e9?text=Album", tag: "HOT", desc: "Includes poster & PC." },
    { id: 3, name: "H5-Rev Summer Tour T-Shirt", category: "Apparel", price: "$30.00", image: "https://placehold.co/400x400/fef3c7/d97706?text=T-Shirt", desc: "100% Cotton, Premium build." },
    { id: 4, name: "Yuki Tanaka Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/400x400/fce7f3/db2777?text=Yuki+PC", desc: "Set of 5 exclusive cards." },
    { id: 5, name: "Sakura Yamamoto Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/400x400/fce7f3/db2777?text=Sakura+PC", desc: "Set of 5 exclusive cards." },
    { id: 6, name: "Official Slogan Towel", category: "Accessories", price: "$18.00", image: "https://placehold.co/400x400/e0e7ff/4f46e5?text=Slogan", tag: "BEST SELLER", desc: "Microfiber concert towel." },
  ];

  const categories = ["All", "Album", "Lightstick", "Apparel", "Photocard", "Accessories"];
  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 w-full pb-24 font-inter text-gray-800">
      <SEO title="Official Merch Store" description="Support H5-Revolution with exclusive high-quality gear and official merchandise." />
      
      {/* ─── Minimal Hero Banner ──────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-cyan-50 border-b border-pink-100 shadow-sm">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-200/50 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 -left-20 w-64 h-64 bg-pink-300/30 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
             <FaStar className="text-yellow-400 text-2xl animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-800 uppercase tracking-tighter mb-4 font-outfit drop-shadow-sm">
            OFFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">MERCH</span>
          </h1>
          <p className="text-gray-500 font-bold tracking-widest uppercase text-xs md:text-sm max-w-xl">
            Support H5-Revolution with exclusive high-quality gear.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* ─── Controls: Filter & Search ──────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories Scrollable Row */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0 font-outfit">
             <div className="flex gap-2 min-w-max">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider capitalize transition-all duration-300 shadow-sm ${
                     filter === cat 
                       ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-pink-200' 
                       : 'bg-white text-gray-500 border border-gray-200 hover:text-pink-500 hover:border-pink-300'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>

          <div className="w-full md:w-72 bg-white rounded-full flex items-center px-5 py-3 border border-pink-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-100 transition-all shadow-sm">
            <FaSearch className="text-pink-400" />
            <input type="text" placeholder="Search merch..." className="bg-transparent border-none outline-none text-sm text-gray-700 px-3 w-full placeholder-gray-400 font-medium" />
          </div>
        </div>

        {/* ─── Product Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100 flex flex-col h-full hover:-translate-y-1">
              
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-50 to-orange-50 overflow-hidden flex items-center justify-center p-4">
                <Link to={`/shop/${product.id}`} className="absolute inset-0 flex items-center justify-center p-4 z-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-out filter drop-shadow-sm" 
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tag && (
                    <span className="bg-white/90 backdrop-blur-sm text-pink-600 border border-pink-100 shadow-sm text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-10 pointer-events-none">
                   <button 
                     onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                     className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-pink-500 hover:bg-orange-500 text-white rounded-full px-6 py-3 text-xs font-bold tracking-widest uppercase shadow-xl shadow-pink-200 flex items-center gap-2"
                   >
                     <FaCartPlus/> Add to Cart
                   </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-orange-500 text-[10px] font-black tracking-[0.2em] uppercase mb-2 bg-orange-50 w-fit px-2 py-0.5 rounded-md">{product.category}</p>
                <Link to={`/shop/${product.id}`}>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors mb-2 line-clamp-2 md:h-14 font-outfit">{product.name}</h3>
                </Link>
                <p className="text-gray-500 text-xs mb-6 line-clamp-2 font-medium">{product.desc}</p>
                
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xl font-black font-mono text-gray-800 tracking-tight">{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <FaShoppingBag className="text-sm" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-pink-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-outfit">No products found</h3>
            <p className="text-gray-500 text-sm">Try changing the category filter or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
