import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaCheck, FaExclamationCircle } from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

const ticketsDataDetailed = {
  1: { id: 1, title: "H5-Revolution First Tour 2025: START LINE", date: "August 15, 2025 - 18:30 JST", location: "Tokyo Dome, Japan", price: "$120.00", desc: "The legendary debut tour kicks off at Tokyo Dome. Be part of history.", tiers: ["VIP Standing", "General Admission", "Balcony"] },
  2: { id: 2, title: "Special Fan Meeting: Summer Vibes", date: "September 02, 2025 - 15:00 JST", location: "Osaka Arena, Japan", price: "$80.00", desc: "A cozy fan meeting with interactive games, special acoustic performances, and high-touch event.", tiers: ["Premium Tier", "Standard Tier"] }
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-gray-800">Event not found or unavailable</h2>
        <button onClick={() => navigate("/tickets")} className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-full font-bold">Back to Tickets</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedTier) {
      alert("Please select a ticket tier first!");
      return;
    }
    // Simulate a product object for the cart
    const ticketProduct = {
      id: `ticket-${ticket.id}-${selectedTier}`, // Unique ID for cart grouping
      name: `${ticket.title} (${selectedTier})`,
      category: "Ticket",
      price: ticket.price, // Usually different per tier, kept simple here
      image: "https://placehold.co/400x400/ecfeff/06b6d4?text=Ticket"
    };

    for(let i = 0; i < quantity; i++){
      addToCart(ticketProduct);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter pb-24">
      <SEO title={`${ticket.title} | Tickets`} description={`Buy tickets for ${ticket.title}`} />
      
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-8">
        <Link to="/tickets" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-500 font-bold transition-colors uppercase tracking-wider text-sm">
          <FaArrowLeft /> Kembali ke Daftar Tiket
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-black uppercase tracking-wide rounded-full mb-4">Official Ticket</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter mb-6 font-outfit">{ticket.title}</h1>
            
            <div className="flex flex-col gap-4 text-gray-600 mb-8 font-medium">
              <div className="flex items-center gap-3"><div className="w-10 h-10 bg-cyan-50 flex items-center justify-center rounded-full text-cyan-500"><FaCalendarAlt /></div> {ticket.date}</div>
              <div className="flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-full text-blue-500"><FaMapMarkerAlt /></div> {ticket.location}</div>
            </div>

            <h3 className="font-bold text-gray-800 mb-2 uppercase tracking-wide text-sm border-b border-gray-100 pb-2">Event Description</h3>
            <p className="text-gray-600 leading-relaxed">{ticket.desc}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wide text-sm flex items-center gap-2"><FaExclamationCircle className="text-yellow-500"/> Important Notice</h3>
             <ul className="space-y-2 text-sm text-gray-600">
               <li>• Tickets are non-refundable after purchase.</li>
               <li>• Maximum 4 tickets per transaction.</li>
               <li>• E-Tickets will be sent 7 days prior to the event date.</li>
             </ul>
          </div>
        </div>

        {/* Purchase Panel */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-cyan-100/50 border border-cyan-100 h-fit sticky top-[100px]">
          <h2 className="text-2xl font-black text-gray-800 mb-6 font-outfit">Select Tickets</h2>
          
          <div className="space-y-4 mb-8">
            {ticket.tiers.map(tier => (
              <label key={tier} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedTier === tier ? 'border-cyan-500 bg-cyan-50' : 'border-gray-100 hover:border-cyan-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="tier" value={tier} checked={selectedTier === tier} onChange={(e) => setSelectedTier(e.target.value)} className="w-4 h-4 text-cyan-500 accent-cyan-500" />
                  <span className="font-bold text-gray-800">{tier}</span>
                </div>
                <span className="font-black text-cyan-600">{ticket.price}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-2xl">
            <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">Quantity</span>
            <div className="flex items-center gap-4">
               <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center font-bold text-gray-500 hover:text-cyan-500">-</button>
               <span className="font-black text-lg">{quantity}</span>
               <button onClick={() => setQuantity(Math.min(4, quantity + 1))} className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center font-bold text-gray-500 hover:text-cyan-500">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="shimmer-btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full font-black uppercase tracking-widest text-sm flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-cyan-200 transition-all transform hover:-translate-y-1">
            <FaTicketAlt /> Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default TicketDetail;
