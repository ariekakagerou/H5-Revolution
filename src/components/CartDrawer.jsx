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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[9999] transform transition-transform duration-500 ease-in-out font-inter flex flex-col border-l border-pink-100 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-orange-50">
          <h2 className="text-2xl font-black text-gray-800 tracking-tighter uppercase font-outfit">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 bg-white rounded-full text-pink-400 hover:text-pink-600 hover:bg-pink-100 transition-colors shadow-sm"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-5 scrollbar-hide space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
              <div className="w-24 h-24 mb-4 bg-pink-100 rounded-full flex items-center justify-center text-4xl">
                🛍️
              </div>
              <p className="text-gray-500 font-bold mb-2">Keranjang Anda kosong</p>
              <p className="text-sm text-gray-400">Pilih merchandise terbaik Anda sekarang!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm line-clamp-2 leading-tight mb-1">{item.name}</h4>
                    <span className="text-pink-500 font-black text-sm">{item.price}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-gray-500 hover:text-pink-500 shadow-sm transition-colors text-xs"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="px-3 text-sm font-bold text-gray-700 w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-gray-500 hover:text-green-500 shadow-sm transition-colors text-xs"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors hover:bg-red-50 rounded-full"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-pink-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-bold uppercase text-sm tracking-wider">Subtotal</span>
              <span className="text-2xl font-black text-gray-800">${cartTotal.toFixed(2)}</span>
            </div>
            
            <button className="shimmer-btn w-full py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-xl font-black tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-300/40 transition-all duration-300 transform hover:-translate-y-1">
              <FaCheckCircle />
              Checkout Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 font-medium flex items-center justify-center gap-1">
              🔒 100% Secure Checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
