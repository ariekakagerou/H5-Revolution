import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCartPlus, FaCheck, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import SEO from "../components/SEO";

// Database simulasi
const productsData = [
  { id: 1, name: "H5-Revolution Official Lightstick v2", category: "Lightstick", price: "$45.00", image: "https://placehold.co/800x800/180a36/ec4899?text=Lightstick", tag: "NEW", desc: "The official version 2 lightstick with bluetooth syncing for concerts. It changes colors according to the member's theme!" },
  { id: 2, name: "'Shining Stars' 1st Full Album", category: "Album", price: "$25.00", image: "https://placehold.co/800x800/180a36/06b6d4?text=Album", tag: "HOT", desc: "Includes CD, 100-page photobook, folded poster, and 2 random photocards." },
  { id: 3, name: "H5-Rev Cyber Tour Stage Tee", category: "Apparel", price: "$30.00", image: "https://placehold.co/800x800/180a36/f97316?text=Tour+Tee", desc: "100% Heavyweight Cotton, Premium build. Commemorative tour shirt." },
  { id: 4, name: "Yuki Tanaka Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/800x800/180a36/ec4899?text=Yuki+PC", desc: "Set of 5 exclusive never-before-seen selfies from Yuki Tanaka." },
  { id: 5, name: "Sakura Yamamoto Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/800x800/180a36/06b6d4?text=Sakura+PC", desc: "Set of 5 exclusive never-before-seen selfies from Sakura." },
  { id: 6, name: "Official Stage Slogan Towel", category: "Accessories", price: "$18.00", image: "https://placehold.co/800x800/180a36/a855f7?text=Slogan", tag: "BEST SELLER", desc: "Microfiber concert towel to show your support." }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0a1e] text-white">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Product not found</h2>
        <button onClick={() => navigate("/shop")} className="shimmer-btn px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black text-xs uppercase tracking-widest shadow-idol-pink">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white pb-24 relative overflow-hidden">
      <SEO title={`${product.name} | Shop`} description={`Buy ${product.name} on H5-Revolution official shop.`} />
      
      {/* Ambient Glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-white/50 hover:text-pink-400 font-bold transition-all uppercase tracking-widest text-xs group">
          <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 group-hover:-translate-x-1 transition-all">
            <FaArrowLeft size={11} />
          </div>
          Kembali ke Toko
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Product Image */}
        <div className="bg-[#12082a]/80 backdrop-blur-md rounded-sm p-8 shadow-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent pointer-events-none"></div>
          {product.tag && (
            <span className="absolute top-4 left-4 z-10 bg-pink-500/20 backdrop-blur-md text-pink-300 border border-pink-500/40 text-[10px] font-black px-3 py-1 rounded-sm tracking-widest uppercase">
              {product.tag}
            </span>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="relative z-10 w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 max-h-[460px]" 
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-orange-400 text-[10px] font-black tracking-[0.2em] uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-sm">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 font-outfit">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-amber-400 text-xs gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="text-white/40 text-xs font-mono font-medium">(4.9/5 Official Verified)</span>
          </div>
          
          <h2 className="text-3xl font-black font-mono text-pink-400 mb-6 py-4 border-y border-white/10">
            {product.price}
          </h2>
          
          <p className="text-white/60 leading-relaxed mb-8 text-sm">
            {product.desc}
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-sm p-1.5 w-full sm:w-36 justify-between">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-white/70 hover:bg-pink-500/20 hover:text-pink-400 transition-colors"
              >
                <FaMinus size={10}/>
              </button>
              <span className="font-mono font-black text-base text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)} 
                className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-white/70 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
              >
                <FaPlus size={10}/>
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart} 
              className="shimmer-btn flex-1 w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm py-4 px-8 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-idol-pink hover:scale-[1.02] transition-all duration-300"
            >
              <FaCartPlus size={16} /> Add to Cart
            </button>
          </div>

          <ul className="mt-8 space-y-2 text-xs font-medium text-white/50">
            <li className="flex items-center gap-2"><FaCheck className="text-emerald-400"/> 100% Official Licensed Merchandise</li>
            <li className="flex items-center gap-2"><FaCheck className="text-emerald-400"/> Worldwide Express Shipping Available</li>
            <li className="flex items-center gap-2"><FaCheck className="text-emerald-400"/> Secure Encrypted Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
