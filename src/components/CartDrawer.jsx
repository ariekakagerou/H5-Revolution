import React from "react";
import { FaTimes, FaTrash, FaCheckCircle, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Backdrop overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0f0a1e]/95 backdrop-blur-2xl shadow-2xl z-[9999] transform transition-transform duration-500 ease-in-out flex flex-col border-l border-pink-900/30 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-pink-900/30 bg-[#160a2c]/80">
          <div>
            <h2 className="text-xl font-black text-white tracking-wider uppercase font-outfit">
              Idol <span className="text-idol">Cart</span>
            </h2>
            <p className="text-[10px] font-mono text-pink-400/60 uppercase tracking-widest">
              OFFICIAL MERCHANDISE
            </p>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center transition-all"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-5 no-scrollbar space-y-3">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 mb-4 bg-pink-500/10 border border-pink-500/20 rounded-full flex items-center justify-center text-3xl shadow-idol-pink">
                🛍️
              </div>
              <p className="text-white font-bold mb-1 uppercase tracking-wider text-sm">Keranjang Kosong</p>
              <p className="text-xs text-white/40">Dapatkan merchandise resmi H5-Revolution sekarang!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-white/[0.03] border border-white/5 hover:border-pink-500/30 rounded-sm transition-all group">
                <div className="w-18 h-18 bg-white/5 rounded-sm overflow-hidden shrink-0 border border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-xs line-clamp-2 leading-tight mb-1">{item.name}</h4>
                    <span className="text-pink-400 font-mono font-black text-xs">{item.price}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-white/5 rounded-sm p-0.5 border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm text-white/60 hover:text-pink-400 hover:bg-pink-500/20 transition-colors text-xs"
                      >
                        <FaMinus size={8} />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-white w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm text-white/60 hover:text-emerald-400 hover:bg-emerald-500/20 transition-colors text-xs"
                      >
                        <FaPlus size={8} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-colors"
                      title="Hapus"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-[#140b2e]/90 border-t border-pink-900/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/40 font-bold uppercase text-xs tracking-wider">Subtotal</span>
              <span className="text-xl font-mono font-black text-pink-400">${cartTotal.toFixed(2)}</span>
            </div>
            
            <button className="shimmer-btn w-full py-3.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:shadow-idol-pink transition-all duration-300">
              <FaCheckCircle size={14} />
              Checkout Now
            </button>
            <p className="text-center text-[10px] text-white/30 mt-3 font-mono uppercase tracking-widest flex items-center justify-center gap-1">
              🔒 100% Secure Checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
