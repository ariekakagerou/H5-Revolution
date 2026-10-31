import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaCheck, FaExclamationCircle } from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const ticketsDataDetailed = {
  1: { id: 1, title: "H5-Revolution First Tour 2026: START LINE", date: "August 15, 2026 - 18:30 JST", location: "Tokyo Dome, Japan", price: "$120.00", desc: "The legendary debut tour kicks off at Tokyo Dome. Be part of history.", tiers: ["VIP Standing", "General Admission", "Balcony"] },
  2: { id: 2, title: "Special Fan Meeting: Summer Vibes", date: "September 02, 2026 - 15:00 JST", location: "Osaka Arena, Japan", price: "$80.00", desc: "A cozy fan meeting with interactive games, special acoustic performances, and high-touch event.", tiers: ["Premium Tier", "Standard Tier"] }
};

const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedTier, setSelectedTier] = useState("");
  const [quantity, setQuantity] = useState(1);

  const ticket = ticketsDataDetailed[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!ticket) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0a1e] text-white">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Event not found or unavailable</h2>
        <button onClick={() => navigate("/tickets")} className="shimmer-btn px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black text-xs uppercase tracking-widest shadow-idol-pink">
          Back to Tickets
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedTier) {
      alert("Please select a ticket tier first!");
      return;
    }
    const ticketProduct = {
      id: `ticket-${ticket.id}-${selectedTier}`,
      name: `${ticket.title} (${selectedTier})`,
      category: "Ticket",
      price: ticket.price,
      image: "https://placehold.co/400x400/180a36/ec4899?text=Ticket"
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(ticketProduct);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white pb-24 relative overflow-hidden">
      <SEO title={`${ticket.title} | Tickets`} description={`Buy tickets for ${ticket.title}`} />
      
      {/* Ambient Glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <Link to="/tickets" className="inline-flex items-center gap-2 text-white/50 hover:text-pink-400 font-bold transition-all uppercase tracking-widest text-xs group">
          <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 group-hover:-translate-x-1 transition-all">
            <FaArrowLeft size={11} />
          </div>
          Kembali ke Daftar Tiket
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#12082a]/80 backdrop-blur-md p-8 md:p-10 rounded-sm border border-white/10 shadow-2xl">
            <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[10px] font-black uppercase tracking-widest rounded-sm mb-4">
              Official Live Pass
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 font-outfit">
              {ticket.title}
            </h1>
            
            <div className="flex flex-col gap-3 text-white/70 mb-8 font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500/10 border border-pink-500/20 flex items-center justify-center rounded-sm text-pink-400">
                  <FaCalendarAlt size={12} />
                </div> 
                {ticket.date}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center rounded-sm text-cyan-400">
                  <FaMapMarkerAlt size={12} />
                </div> 
                {ticket.location}
              </div>
            </div>

            <h3 className="font-bold text-white mb-2 uppercase tracking-wider text-xs border-b border-white/10 pb-2 font-mono">
              Event Description
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">{ticket.desc}</p>
          </div>

          <div className="bg-[#12082a]/80 backdrop-blur-md p-6 rounded-sm border border-white/10">
             <h3 className="font-bold text-amber-400 mb-3 uppercase tracking-wider text-xs flex items-center gap-2 font-mono">
               <FaExclamationCircle size={14} /> Important Live Notice
             </h3>
             <ul className="space-y-2 text-xs text-white/60">
               <li>• Tickets are strictly non-refundable and tied to member identification.</li>
               <li>• Maximum 4 tickets per transaction.</li>
               <li>• Digital E-Pass QR codes will activate in the app 7 days prior to stage show.</li>
             </ul>
          </div>
        </div>

        {/* Purchase Panel */}
        <div className="bg-[#140b2e] p-6 md:p-8 rounded-sm shadow-2xl border border-pink-500/40 h-fit sticky top-[100px]">
          <div className="badge-idol mb-3">Admission</div>
          <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">Select Tier</h2>
          
          <div className="space-y-3 mb-6">
            {ticket.tiers.map(tier => (
              <label 
                key={tier} 
                className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer transition-all ${
                  selectedTier === tier 
                    ? 'border-pink-500 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]' 
                    : 'border-white/10 bg-white/[0.02] hover:border-pink-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="tier" 
                    value={tier} 
                    checked={selectedTier === tier} 
                    onChange={(e) => setSelectedTier(e.target.value)} 
                    className="w-3.5 h-3.5 text-pink-500 accent-pink-500" 
                  />
                  <span className="font-bold text-xs uppercase tracking-wider text-white">{tier}</span>
                </div>
                <span className="font-mono font-black text-pink-400 text-sm">{ticket.price}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6 p-3 bg-white/[0.03] border border-white/10 rounded-sm">
            <span className="font-bold text-white/40 uppercase text-xs tracking-wider font-mono">Qty</span>
            <div className="flex items-center gap-3">
               <button 
                 onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                 className="w-7 h-7 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white hover:bg-pink-500/20 hover:text-pink-400 transition-colors"
               >
                 -
               </button>
               <span className="font-mono font-black text-base text-white">{quantity}</span>
               <button 
                 onClick={() => setQuantity(Math.min(4, quantity + 1))} 
                 className="w-7 h-7 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
               >
                 +
               </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart} 
            className="shimmer-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3.5 rounded-sm font-black uppercase tracking-[0.2em] text-xs flex justify-center items-center gap-2 shadow-idol-pink hover:scale-[1.02] transition-all"
          >
            <FaTicketAlt size={13} /> Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default TicketDetail;
