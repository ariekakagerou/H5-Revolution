import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

/* ─────────────────────────── DATA ─────────────────────────── */
const EVENTS = [
  {
    id: 1,
    title: "Summer Live Concert",
    date: "May 21, 2026",
    location: "Tokyo Dome, Tokyo, Japan",
    type: "Concert",
    attendees: 318,
    description:
      "Join H5-R for an electrifying summer concert at the iconic Tokyo Dome! Get ready for an unforgettable night filled with live performances, special stage effects, and more.",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
    doorTime: "5:00 PM (JST)",
    startTime: "6:00 PM (JST)",
    day: "Saturday, May 21, 2026",
    ticketCost: "¥8,000 – ¥12,000",
    category: "upcoming",
  },
  {
    id: 2,
    title: "Fan Meet & Greet",
    date: "June 5, 2026",
    dateShort: "5",
    location: "Akihabara Hall, Tokyo, Japan",
    type: "Fan Meeting",
    description: "Exclusive fan interaction session with all H5-R members.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80",
    doorTime: "6:00 PM (JST)",
    startTime: "7:00 PM (JST)",
    day: "Sunday, June 5, 2026",
    ticketCost: "¥5,000 – ¥8,000",
    category: "upcoming",
  },
];

const NEXT_EVENT = EVENTS[1];
const FEATURED_EVENT = EVENTS[0];

/* ─────────────────────────── ICON COMPONENTS ─────────────────────────── */
const CalIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const PinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);
const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const TicketIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 000-4V6z" />
  </svg>
);
const PeopleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM2 8a2 2 0 114 0 2 2 0 01-4 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 16a6 6 0 1112 0v1H6v-1z" />
  </svg>
);
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ChevronIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

/* ─────────────────────────── MAIN COMPONENT ─────────────────────────── */
const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState(FEATURED_EVENT);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const filteredEvents = EVENTS.filter((e) => e.category === activeTab || activeTab === "upcoming");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="events-page pt-24 md:pt-28 pb-16 md:pb-20 relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "#0f0a1e",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#f8fafc",
      }}
    >
      <SEO title="Events – H5-Revolution" description="Join H5-Revolution live concerts, fan meetings, and special showcases." />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── PAGE HEADER ───────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-5 pt-2 relative z-10">

        {/* Title + Tabs row — stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black m-0 uppercase tracking-tight leading-none">
              Live <span className="text-idol">Events</span>
            </h1>
            <span style={{
              background: "linear-gradient(135deg, #ec4899, #f97316)",
              borderRadius: 4,
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              color: "#fff",
              boxShadow: "0 0 15px rgba(236,72,153,0.5)",
            }}>
              <CalIcon className="w-4 h-4" />
            </span>
          </div>

          {/* Filter tabs — horizontal scroll on very small screens */}
          <div className="overflow-x-auto pb-0.5">
            <div style={{
              display: "flex",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              width: "fit-content",
            }}>
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "8px 14px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 800,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    background: activeTab === tab ? "linear-gradient(135deg,#ec4899,#f97316)" : "transparent",
                    color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Breadcrumb + Search */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-5 md:mb-6">
          <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <span>Home</span>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#ec4899", fontWeight: 700 }}>Events</span>
          </p>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            padding: "6px 12px",
            gap: 8,
            width: "100%",
            maxWidth: 240,
          }}>
            <SearchIcon className="w-4 h-4 text-pink-400 shrink-0" />
            <input
              type="text"
              placeholder="Search events..."
              style={{
                border: "none",
                outline: "none",
                fontSize: 12,
                color: "#fff",
                background: "transparent",
                width: "100%",
                minWidth: 0,
              }}
            />
          </div>
        </div>

        {/* ── FEATURED EVENT CARD ─────────────────────────── */}
        <div
          className="group hover:border-pink-500/50 transition-all duration-300"
          style={{
            background: "rgba(18, 8, 42, 0.8)",
            backdropFilter: "blur(16px)",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            marginBottom: 16,
          }}
        >
          {/* Responsive: stack on mobile, side-by-side on md+ */}
          <div className="flex flex-col md:grid md:grid-cols-2">
            {/* Left: image */}
            <div style={{ position: "relative", minHeight: 200, overflow: "hidden" }}>
              <img
                src={FEATURED_EVENT.image}
                alt={FEATURED_EVENT.title}
                className="group-hover:scale-105 transition-transform duration-700"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 200 }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(120deg, rgba(236,72,153,0.3) 0%, rgba(15,10,30,0.8) 100%)",
              }} />
              <div style={{
                position: "absolute",
                top: 14,
                left: 14,
                background: "linear-gradient(135deg, #ec4899, #f97316)",
                padding: "4px 10px",
                borderRadius: 2,
                fontSize: 10,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#fff",
                boxShadow: "0 0 15px rgba(236,72,153,0.6)",
              }}>
                FEATURED CONCERT
              </div>
            </div>

            {/* Right: info */}
            <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 12 }}>
              {/* Title + attendees */}
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                    {FEATURED_EVENT.title}
                  </h2>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(236,72,153,0.15)",
                    border: "1px solid rgba(236,72,153,0.4)",
                    color: "#f472b6",
                    borderRadius: 2,
                    padding: "4px 10px",
                    fontWeight: 800,
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    fontFamily: "monospace",
                  }}>
                    <PeopleIcon className="w-3.5 h-3.5" />
                    {FEATURED_EVENT.attendees} GOING
                  </div>
                </div>

                {/* Date */}
                <p style={{ margin: "0 0 6px", fontSize: 13, color: "#ec4899", fontWeight: 700, fontFamily: "monospace" }}>
                  {FEATURED_EVENT.date}
                </p>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <span style={{ color: "#06b6d4" }}>
                    <PinIcon className="w-3.5 h-3.5" />
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{FEATURED_EVENT.location}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
                  {FEATURED_EVENT.description}
                </p>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                <button
                  onClick={() => { setSelectedEvent(FEATURED_EVENT); setShowModal(true); }}
                  className="shimmer-btn w-full sm:w-auto"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "linear-gradient(135deg,#ec4899,#f97316)",
                    border: "none",
                    borderRadius: 2,
                    padding: "10px 20px",
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(236,72,153,0.4)",
                    transition: "all 0.2s",
                  }}
                >
                  Get Tickets
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECONDARY EVENT CARD ─────────────────────────── */}
        <div style={{
          background: "rgba(18, 8, 42, 0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 16px",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}>
          {/* Date badge + info */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
            {/* Calendar badge */}
            <div style={{
              background: "linear-gradient(135deg,#ec4899,#f97316)",
              borderRadius: 4,
              width: 48,
              height: 50,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(236,72,153,0.4)",
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", letterSpacing: 1 }}>JUN</span>
              <span style={{ fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1, fontFamily: "monospace" }}>{NEXT_EVENT.dateShort}</span>
            </div>

            <div style={{ minWidth: 0 }}>
              <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#fff", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{NEXT_EVENT.title}</h3>
              <p style={{ margin: "2px 0 0", fontSize: 11, color: "rgba(255,255,255,0.5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{NEXT_EVENT.location}</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { setSelectedEvent(NEXT_EVENT); setShowModal(true); }}
            className="w-full sm:w-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(236,72,153,0.4)",
              borderRadius: 2,
              padding: "9px 16px",
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#f472b6",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            More Info
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px] gap-6 md:gap-8 items-start">
          {/* ── LEFT: EVENT DETAILS ─────────────────────────── */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
              Event Details: <span className="text-idol">{selectedEvent.title}</span>
            </h2>

            {/* Detail Card */}
            <div style={{
              background: "rgba(18, 8, 42, 0.8)",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}>
              {/* Item banner & title */}
              <div style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(249,115,22,0.1) 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "20px 20px 14px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#fff",
                  fontStyle: "italic",
                  margin: "0 0 6px",
                  textTransform: "uppercase",
                }}>
                  {selectedEvent.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ color: "#ec4899" }}>✦</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", fontFamily: "monospace" }}>{selectedEvent.date}</span>
                  <span style={{ color: "#f97316" }}>✦</span>
                </div>
              </div>

              {/* Concert image — responsive 16:9 */}
              <div style={{ padding: "0 16px" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", marginTop: 14, borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    style={{
                      position: "absolute",
                      top: 0, left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: "16px 20px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
                  {selectedEvent.location}
                </h4>

                {/* Meta row */}
                <div style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 12,
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                    <span style={{ color: "#ec4899" }}>
                      <CalIcon className="w-4 h-4" />
                    </span>
                    Doors · {selectedEvent.date}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                    <span style={{ color: "#f97316" }}>
                      <ClockIcon className="w-4 h-4" />
                    </span>
                    Start: {selectedEvent.doorTime}
                  </div>
                </div>

                {/* Start location */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>
                  <span style={{ color: "#06b6d4" }}>
                    <PinIcon className="w-4 h-4" />
                  </span>
                  Start at: {selectedEvent.location.split(",")[0]}, {selectedEvent.startTime}
                </div>

                {/* Ticket cost row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 10,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "10px 14px",
                  borderRadius: 2,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#ec4899" }}>
                      <TicketIcon className="w-4 h-4" />
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Ticket Cost:</span>
                    <span style={{ fontSize: 14, fontWeight: 900, color: "#ec4899", fontFamily: "monospace" }}>{selectedEvent.ticketCost}</span>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="shimmer-btn w-full sm:w-auto"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "linear-gradient(135deg,#ec4899,#f97316)",
                      border: "none",
                      borderRadius: 2,
                      padding: "9px 18px",
                      fontSize: 12,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#fff",
                      cursor: "pointer",
                      boxShadow: "0 0 15px rgba(236,72,153,0.4)",
                    }}
                  >
                    Buy Tickets
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: SIDEBAR ─────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Event Information */}
            <div style={{
              background: "rgba(18, 8, 42, 0.8)",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "18px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff", margin: "0 0 12px" }}>
                Event Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#ec4899" }}><CalIcon className="w-4 h-4" /></span>
                  {selectedEvent.date}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#06b6d4" }}><PinIcon className="w-4 h-4" /></span>
                  {selectedEvent.location}
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#f97316", marginTop: 1 }}><ClockIcon className="w-4 h-4" /></span>
                  <span>
                    {selectedEvent.day}
                    <br />
                    Doors Open: {selectedEvent.doorTime}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="shimmer-btn"
                style={{
                  marginTop: 14,
                  width: "100%",
                  background: "linear-gradient(135deg,#ec4899,#f97316)",
                  border: "none",
                  borderRadius: 2,
                  padding: "11px",
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 0 15px rgba(236,72,153,0.4)",
                }}
              >
                Buy Tickets
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Next Event */}
            <div style={{
              background: "rgba(18, 8, 42, 0.8)",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "18px",
            }}>
              <h3 style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff", margin: "0 0 12px" }}>
                Next Event
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=80&q=80"
                  alt={NEXT_EVENT.title}
                  style={{ width: 44, height: 44, borderRadius: 2, objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}
                />
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 10, color: "#ec4899", textTransform: "uppercase", fontWeight: 700 }}>H5-R Live</p>
                  <p style={{ margin: "2px 0", fontSize: 13, fontWeight: 800, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{NEXT_EVENT.title}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{NEXT_EVENT.location}</p>
                </div>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 10px",
                background: "rgba(236,72,153,0.1)",
                border: "1px solid rgba(236,72,153,0.3)",
                borderRadius: 2,
                fontSize: 11,
                fontWeight: 700,
                color: "#f472b6",
                fontFamily: "monospace",
              }}>
                <CalIcon className="w-4 h-4" />
                {NEXT_EVENT.date} at {NEXT_EVENT.doorTime}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{
              background: "rgba(18, 8, 42, 0.8)",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "18px",
            }}>
              <h3 style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff", margin: "0 0 5px" }}>
                Don't Miss Out!
              </h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 10px", lineHeight: 1.5 }}>
                Sign up for event updates and member pre-sales!
              </p>
              {subscribed ? (
                <div style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34d399",
                  borderRadius: 2,
                  padding: "10px 14px",
                  fontSize: 12,
                  fontWeight: 800,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}>
                  ✓ Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 2,
                      padding: "9px 10px",
                      fontSize: 12,
                      outline: "none",
                      color: "#fff",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "linear-gradient(135deg,#ec4899,#f97316)",
                      border: "none",
                      borderRadius: 2,
                      padding: "9px",
                      fontSize: 11,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#fff",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* ── EVENT DETAIL MODAL ─────────────────────────── */}
      {showModal && selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            backdropFilter: "blur(8px)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div
            style={{
              background: "#140b2e",
              borderRadius: 4,
              border: "1px solid rgba(236,72,153,0.3)",
              maxWidth: 540,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 0 50px rgba(0,0,0,0.8), 0 0 30px rgba(236,72,153,0.2)",
            }}
          >
            {/* Modal header image */}
            <div style={{ position: "relative" }}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, #140b2e)",
              }} />
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  fontSize: 18,
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
              <div style={{ position: "absolute", bottom: 14, left: 16, right: 50 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#fff", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{selectedEvent.title}</h3>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "#ec4899", fontFamily: "monospace" }}>{selectedEvent.date} · {selectedEvent.location}</p>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: "18px 20px 22px" }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 16 }}>{selectedEvent.description}</p>

              {/* Info grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
                {[
                  { icon: <CalIcon className="w-4 h-4" />, label: "Date", value: selectedEvent.date },
                  { icon: <PinIcon className="w-4 h-4" />, label: "Location", value: selectedEvent.location },
                  { icon: <ClockIcon className="w-4 h-4" />, label: "Doors Open", value: selectedEvent.doorTime },
                  { icon: <TicketIcon className="w-4 h-4" />, label: "Ticket", value: selectedEvent.ticketCost },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: "9px 10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#ec4899", marginBottom: 3 }}>
                      {icon}
                      <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: label === "Ticket" ? "monospace" : "inherit", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  className="shimmer-btn"
                  style={{
                    flex: 1,
                    minWidth: 120,
                    background: "linear-gradient(135deg,#ec4899,#f97316)",
                    border: "none",
                    borderRadius: 2,
                    padding: "12px",
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 0 15px rgba(236,72,153,0.4)",
                  }}
                >
                  🎫 Buy Tickets
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    padding: "12px 18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
