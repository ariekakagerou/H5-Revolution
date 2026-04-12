import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCartPlus, FaCheck, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import SEO from "../components/SEO";

// Database simulasi
const productsData = [
  { id: 1, name: "H5-Revolution Official Lightstick v2", category: "Lightstick", price: "$45.00", image: "https://placehold.co/800x800/ffe4e6/f43f5e?text=Lightstick", tag: "NEW", desc: "The official version 2 lightstick with bluetooth syncing for concerts. It changes colors according to the member's theme!" },
  { id: 2, name: "'Shining Stars' 1st Full Album", category: "Album", price: "$25.00", image: "https://placehold.co/800x800/e0f2fe/0ea5e9?text=Album", tag: "HOT", desc: "Includes CD, 100-page photobook, folded poster, and 2 random photocards." },
  { id: 3, name: "H5-Rev Summer Tour T-Shirt", category: "Apparel", price: "$30.00", image: "https://placehold.co/800x800/fef3c7/d97706?text=T-Shirt", desc: "100% Cotton, Premium build. Commemorative tour shirt." },
  { id: 4, name: "Yuki Tanaka Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/800x800/fce7f3/db2777?text=Yuki+PC", desc: "Set of 5 exclusive never-before-seen selfies from Yuki Tanaka." },
  { id: 5, name: "Sakura Yamamoto Solo Photocard Set", category: "Photocard", price: "$12.00", image: "https://placehold.co/800x800/fce7f3/db2777?text=Sakura+PC", desc: "Set of 5 exclusive never-before-seen selfies from Sakura." },
  { id: 6, name: "Official Slogan Towel", category: "Accessories", price: "$18.00", image: "https://placehold.co/800x800/e0e7ff/4f46e5?text=Slogan", tag: "BEST SELLER", desc: "Microfiber concert towel to show your support." }
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-gray-800">Product not found</h2>
        <button onClick={() => navigate("/shop")} className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full font-bold">Back to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add multiple quantities
    for(let i = 0; i < quantity; i++){
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter pb-24">
      <SEO title={`${product.name} | Shop`} description={`Buy ${product.name} on H5-Revolution official shop.`} />
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 font-bold transition-colors uppercase tracking-wider text-sm">
          <FaArrowLeft /> Kembali ke Toko
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 opacity-50"></div>
          {product.tag && (
            <span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm text-pink-600 border border-pink-100 shadow-sm text-xs font-black px-4 py-2 rounded-full tracking-wider uppercase">
              {product.tag}
            </span>
          )}
          <img src={product.image} alt={product.name} className="relative z-10 w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 max-h-[500px]" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-orange-500 text-xs font-black tracking-[0.2em] uppercase bg-orange-50 px-3 py-1 rounded-full">{product.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter mb-4 font-outfit">{product.name}</h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <span className="text-gray-500 text-sm font-medium">(4.9/5 Reviews)</span>
          </div>
          
          <h2 className="text-3xl font-black font-mono text-gray-900 mb-6 py-4 border-y border-gray-200">{product.price}</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">{product.desc}</p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-sm w-full sm:w-32 justify-between">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"><FaMinus size={12}/></button>
              <span className="font-black text-lg text-gray-800">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-colors"><FaPlus size={12}/></button>
            </div>
            
            <button onClick={handleAddToCart} className="shimmer-btn flex-1 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full py-4 px-8 font-black tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 transform hover:-translate-y-1">
              <FaCartPlus size={20} /> Add to Cart
            </button>
          </div>

          <ul className="mt-8 space-y-2 text-sm font-medium text-gray-500">
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> 100% Official Merchandise</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Ships Worldwide</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Secure Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
