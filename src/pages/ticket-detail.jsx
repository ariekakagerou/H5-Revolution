import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaExclamationCircle,
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaClock,
  FaBuilding,
  FaUsers,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaCrown,
  FaGift,
  FaLock,
  FaStar,
  FaTag,
  FaCheckCircle,
  FaLocationArrow,
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useCart } from "../contexts/CartContext";

/* ─── Ticket Data ───────────────────────────────────────── */
const ticketsDataDetailed = {
  1: {
    id: 1,
    title: "H5-Revolution First Tour 2026: START LINE",
    date: "August 15, 2026",
    time: "18:30 JST (Doors Open 16:30)",
    location: "Tokyo Dome, Tokyo, Japan",
    capacity: "55,000",
    venue: "Tokyo Dome",
    venueCity: "Tokyo, Japan",
    venueImg: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80",
    price: "$120.00",
    desc: "The legendary debut tour kicks off at Tokyo Dome. Be part of history as H5-Revolution takes the stage for the very first time in front of 55,000 fans. An electrifying night of music, dance, and idol energy you will never forget.",
    tiers: [
      {
        name: "VIP Standing",
        price: "$120.00",
        badge: "Best Experience",
        desc: "Closest to the stage with exclusive perks.",
        icon: "👑",
        perks: ["VIP Pass & Lanyard", "Early Entry", "Exclusive Merchandise", "Priority Goods Lane", "Special Digital Content"],
      },
      {
        name: "General Admission",
        price: "$120.00",
        badge: null,
        desc: "Standard concert area with great view.",
        icon: "🎫",
        perks: ["E-Pass QR Code", "Standard Entry", "Access to All Stages"],
      },
      {
        name: "Balcony",
        price: "$120.00",
        badge: null,
        desc: "Upper level seating with full stage view.",
        icon: "🏟️",
        perks: ["E-Pass QR Code", "Reserved Seating", "Full Stage View"],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=900&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=900&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80",
    ],
  },
  2: {
    id: 2,
    title: "Special Fan Meeting: Summer Vibes",
    date: "September 02, 2026",
    time: "15:00 JST (Doors Open 13:30)",
    location: "Osaka Arena, Japan",
    capacity: "22,000",
    venue: "Osaka Arena",
    venueCity: "Osaka, Japan",
    venueImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    price: "$80.00",
    desc: "A cozy fan meeting with interactive games, special acoustic performances, and a high-touch handshake event with all H5-Revolution members. Limited seats available.",
    tiers: [
      {
        name: "Premium Tier",
        price: "$80.00",
        badge: "Most Popular",
        desc: "Includes handshake and priority seating.",
        icon: "💎",
        perks: ["Handshake Event", "Priority Seating", "Exclusive Gift Set", "Signed Photocard"],
      },
      {
        name: "Standard Tier",
        price: "$80.00",
        badge: null,
        desc: "General admission to the fan meeting.",
        icon: "🎫",
        perks: ["Fan Meeting Access", "Standard Seating", "Official Program Booklet"],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
      "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=900&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=900&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
    ],
  },
  3: {
    id: 3,
    title: "Cyber Horizon World Tour 2026",
    date: "October 10, 2026",
    time: "19:00 JST (Doors Open 17:00)",
    location: "Akihabara Hall, Tokyo, Japan",
    capacity: "18,500",
    venue: "Akihabara Hall",
    venueCity: "Tokyo, Japan",
    venueImg: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    price: "$150.00",
    desc: "Experience the next level of idol entertainment. Cyber Horizon combines cutting-edge holographic stage production with live idol performances across multiple cities worldwide.",
    tiers: [
      {
        name: "Front Row Stage",
        price: "$150.00",
        badge: "Best Experience",
        desc: "Exclusive front-row access with ultimate view.",
        icon: "🌟",
        perks: ["Front Row Wristband", "Meet & Greet Pass", "Limited Edition Merch", "VIP Lounge Access", "Digital Content Pack"],
      },
      {
        name: "VIP Pit",
        price: "$150.00",
        badge: null,
        desc: "Standing pit area close to the stage.",
        icon: "👑",
        perks: ["VIP Pit Wristband", "Early Entry", "Exclusive Lanyard"],
      },
      {
        name: "Standard Arena",
        price: "$150.00",
        badge: null,
        desc: "General arena floor and lower level seating.",
        icon: "🎫",
        perks: ["E-Pass QR Code", "Standard Entry", "Arena Access"],
      },
      {
        name: "Balcony B",
        price: "$150.00",
        badge: null,
        desc: "Upper level seating with panoramic full view.",
        icon: "🏟️",
        perks: ["Reserved Balcony Seat", "Full Panoramic View"],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
      "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=900&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=900&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
    ],
  },
};

/* ─── Ticket Detail Page ────────────────────────────────── */
const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedTier, setSelectedTier] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const ticket = ticketsDataDetailed[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedTier(null);
    setActiveImg(0);
    setQuantity(1);
  }, [id]);

  if (!ticket) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffdf0] dark:bg-[#0f0a1e] text-gray-900 dark:text-white px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight">Event not found or unavailable</h2>
        <button onClick={() => navigate("/tickets")} className="shimmer-btn w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black text-xs uppercase tracking-widest">
          Back to Tickets
        </button>
      </div>
    );
  }

  const handlePrevImg = () => setActiveImg((p) => (p === 0 ? ticket.images.length - 1 : p - 1));
  const handleNextImg = () => setActiveImg((p) => (p === ticket.images.length - 1 ? 0 : p + 1));

  const activeTierData = selectedTier !== null ? ticket.tiers[selectedTier] : null;

  const handleAddToCart = () => {
    if (selectedTier === null) {
      alert("Please select a ticket tier first!");
      return;
    }
    const tier = ticket.tiers[selectedTier];
    const ticketProduct = {
      id: `ticket-${ticket.id}-${tier.name}`,
      name: `${ticket.title} (${tier.name})`,
      category: "Ticket",
      price: tier.price,
      image: ticket.images[0],
    };
    for (let i = 0; i < quantity; i++) addToCart(ticketProduct);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffdf0] dark:bg-[#0f0a1e] text-gray-900 dark:text-white font-inter transition-colors duration-300 pt-24 sm:pt-28 pb-28">
      <SEO title={`${ticket.title} | Tickets`} description={ticket.desc} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Breadcrumb ─────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <Link
            to="/tickets"
            className="w-8 h-8 rounded-lg bg-amber-100/80 hover:bg-amber-200/90 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white flex items-center justify-center transition-all shadow-sm"
          >
            <FaArrowLeft size={11} />
          </Link>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-gray-500 dark:text-white/50">
            <Link to="/tickets" className="hover:text-pink-500 transition-colors uppercase">TICKETS</Link>
            <span>&gt;</span>
            <span className="text-gray-900 dark:text-white uppercase font-bold truncate max-w-[200px] sm:max-w-none">
              {ticket.title}
            </span>
          </div>
        </div>

        {/* ─── Main Layout: Gallery Left | Purchase Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── LEFT COLUMN (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Image Gallery Card */}
            <div className="bg-white dark:bg-[#130b24] rounded-3xl overflow-hidden border border-amber-100/60 dark:border-pink-900/30 shadow-xl shadow-pink-500/5">

              {/* Main Image Stage */}
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={ticket.images[activeImg]}
                  alt={ticket.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Expand icon */}
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all cursor-pointer">
                  <FaExpand size={13} />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {activeImg + 1} / {ticket.images.length}
                </div>

                {/* Prev / Next arrows */}
                <button
                  onClick={handlePrevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-black/70 border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white shadow-md hover:bg-pink-500 hover:text-white transition-all cursor-pointer"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={handleNextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-black/70 border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white shadow-md hover:bg-pink-500 hover:text-white transition-all cursor-pointer"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>

              {/* Thumbnails Strip */}
              <div className="flex gap-2.5 p-3 sm:p-4 bg-gray-50/80 dark:bg-black/30 overflow-x-auto no-scrollbar">
                {ticket.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`flex-shrink-0 w-16 sm:w-20 h-12 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImg === idx
                        ? "border-pink-500 ring-2 ring-pink-500/30 scale-[1.03]"
                        : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Event Info Card */}
            <div className="bg-white dark:bg-[#130b24] rounded-3xl border border-amber-100/60 dark:border-pink-900/30 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8">
                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-500 border border-pink-400/50 bg-pink-50/80 dark:bg-pink-950/30 mb-3">
                  OFFICIAL LIVE PASS
                </span>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4 font-outfit leading-tight">
                  {ticket.title}
                </h1>

                {/* Date, Location & Action Buttons row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-gray-100 dark:border-white/10">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-white/80">
                      <FaCalendarAlt className="text-pink-500 shrink-0" size={13} />
                      <span>{ticket.date} — {ticket.time.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-white/80">
                      <FaMapMarkerAlt className="text-cyan-500 shrink-0" size={13} />
                      <span>{ticket.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:border-pink-400 hover:text-pink-500 transition-all cursor-pointer">
                      <FaShareAlt size={13} />
                    </button>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                        isWishlisted
                          ? "bg-pink-500 border-pink-500 text-white"
                          : "border-gray-200 dark:border-white/10 text-gray-400 dark:text-white/50 hover:border-pink-400 hover:text-pink-500"
                      }`}
                    >
                      {isWishlisted ? <FaHeart size={13} /> : <FaRegHeart size={13} />}
                    </button>
                  </div>
                </div>

                {/* Event Description */}
                <div className="mb-0">
                  <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2 mb-3">
                    <span className="w-1 h-4 bg-pink-500 rounded-full inline-block" />
                    Event Description
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">{ticket.desc}</p>
                </div>
              </div>

              {/* Event Details + Important Notice two-col grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-gray-100 dark:border-white/10">
                {/* Event Details */}
                <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-white/10">
                  <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <FaCalendarAlt className="text-pink-500" size={11} />
                    EVENT DETAILS
                  </h4>
                  <dl className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-3">
                      <FaCalendarAlt className="text-pink-400 shrink-0 mt-0.5" size={11} />
                      <div>
                        <dt className="text-gray-400 dark:text-white/40 font-bold mb-0.5">Date</dt>
                        <dd className="font-bold text-gray-900 dark:text-white">{ticket.date}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaClock className="text-orange-400 shrink-0 mt-0.5" size={11} />
                      <div>
                        <dt className="text-gray-400 dark:text-white/40 font-bold mb-0.5">Time</dt>
                        <dd className="font-bold text-gray-900 dark:text-white">{ticket.time}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-cyan-400 shrink-0 mt-0.5" size={11} />
                      <div>
                        <dt className="text-gray-400 dark:text-white/40 font-bold mb-0.5">Venue</dt>
                        <dd className="font-bold text-gray-900 dark:text-white">{ticket.location}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaUsers className="text-purple-400 shrink-0 mt-0.5" size={11} />
                      <div>
                        <dt className="text-gray-400 dark:text-white/40 font-bold mb-0.5">Capacity</dt>
                        <dd className="font-bold text-gray-900 dark:text-white">{ticket.capacity}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* Important Notice */}
                <div className="p-5 sm:p-6">
                  <h4 className="text-xs font-black text-amber-500 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <FaExclamationCircle size={11} />
                    IMPORTANT NOTICE
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 dark:text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                      Tickets are strictly non-refundable and tied to member identification.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                      Maximum 4 tickets per transaction.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                      Digital E-Pass QR codes will activate in the app 7 days prior to stage show.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (5 cols, sticky) ── */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-[100px]">

            {/* Purchase Panel Card */}
            <div className="bg-white dark:bg-[#130b24] rounded-3xl border border-amber-100/60 dark:border-pink-900/30 shadow-xl overflow-hidden">
              <div className="p-5 sm:p-6">

                {/* Panel Title */}
                <h2 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2 mb-4">
                  <FaTicketAlt className="text-pink-500" size={14} /> SELECT TICKET TIER
                </h2>

                {/* Tier Selection */}
                <div className="space-y-3 mb-5">
                  {ticket.tiers.map((tier, idx) => {
                    const isSelected = selectedTier === idx;
                    return (
                      <label
                        key={tier.name}
                        className={`flex items-start justify-between gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "border-pink-500 bg-pink-50/80 dark:bg-pink-950/30 shadow-md shadow-pink-500/10"
                            : "border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] hover:border-pink-300 dark:hover:border-pink-500/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Radio */}
                          <input
                            type="radio"
                            name="tier"
                            value={idx}
                            checked={isSelected}
                            onChange={() => setSelectedTier(idx)}
                            className="mt-0.5 accent-pink-500 w-4 h-4 cursor-pointer shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-0.5">
                              <span className="text-[11px] font-black uppercase tracking-widest text-gray-900 dark:text-white">
                                {tier.icon} {tier.name}
                              </span>
                              {tier.badge && (
                                <span className="bg-pink-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  {tier.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 dark:text-white/50 font-medium leading-snug">{tier.desc}</p>
                          </div>
                        </div>
                        <span className="font-black text-amber-500 text-base font-outfit shrink-0 whitespace-nowrap">{tier.price}</span>
                      </label>
                    );
                  })}
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <span className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">QUANTITY</span>
                  <div className="flex items-center gap-0 bg-gray-100 dark:bg-white/10 rounded-xl overflow-hidden border border-gray-200/80 dark:border-white/10">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="w-10 text-center font-black text-sm text-gray-900 dark:text-white font-outfit">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(4, quantity + 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <FaShoppingCart size={14} /> ADD TO CART
                </button>
              </div>

              {/* Ticket Perks (show only when tier selected) */}
              {activeTierData && (
                <div className="border-t border-gray-100 dark:border-white/10 p-5 sm:p-6 bg-gray-50/80 dark:bg-black/20">
                  <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <FaGift className="text-pink-500" size={12} />
                    TICKET PERKS{" "}
                    <span className="text-pink-500 normal-case font-black">({activeTierData.name})</span>
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-around">
                    {activeTierData.perks.map((perk, i) => {
                      const perkIcons = [
                        <FaTicketAlt key="t" />,
                        <FaClock key="c" />,
                        <FaTag key="tg" />,
                        <FaStar key="s" />,
                        <FaLock key="l" />,
                      ];
                      return (
                        <div key={i} className="flex flex-col items-center gap-1.5 text-center w-14">
                          <div className="w-10 h-10 rounded-xl bg-pink-100/80 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-500 text-sm">
                            {perkIcons[i % perkIcons.length]}
                          </div>
                          <span className="text-[9px] font-bold text-gray-700 dark:text-white/70 leading-tight">{perk}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Venue Location Card */}
            <div className="bg-white dark:bg-[#130b24] rounded-3xl border border-amber-100/60 dark:border-pink-900/30 shadow-sm overflow-hidden">
              <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2 px-5 pt-5 mb-3">
                <FaMapMarkerAlt className="text-pink-500" size={12} /> VENUE LOCATION
              </h3>
              <div className="relative">
                <img
                  src={ticket.venueImg}
                  alt={ticket.venue}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-black text-gray-900 dark:text-white">{ticket.venue}</h4>
                  <p className="text-xs text-gray-500 dark:text-white/50">{ticket.venueCity}</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">Capacity: {ticket.capacity}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(ticket.location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-pink-400/60 dark:border-pink-500/40 text-pink-500 hover:bg-pink-500 hover:text-white text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer"
                >
                  <FaLocationArrow size={10} /> View on Map
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black/90 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-500 flex items-center gap-3 animate-bounce">
          <FaCheckCircle className="text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider">Ticket Added to Cart!</span>
        </div>
      )}
    </div>
  );
};

export default TicketDetail;
