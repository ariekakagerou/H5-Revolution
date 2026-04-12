import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

/* ─────────────────────────── DATA ─────────────────────────── */
const EVENTS = [
  {
    id: 1,
    title: "Summer Live Concert",
    date: "May 21, 2022",
    location: "Tokyo Dome, Tokyo, Japan",
    type: "Concert",
    attendees: 318,
    description:
      "Join H5-R for an electrifying summer concert at the iconic Tokyo Dome! Get ready for an unforgettable night filled with live performances, special stage effects, and more.",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
    doorTime: "5:00 PM (JST)",
    startTime: "6:00 PM (JST)",
    day: "Saturday, May 21, 2022",
    ticketCost: "¥8,000 – ¥12,000",
    category: "upcoming",
  },
  {
    id: 2,
    title: "Fan Meet & Greet",
    date: "June 5, 2022",
    dateShort: "5",
    location: "Akiihbara Hall, Tokyo, Japan",
    type: "Fan Meeting",
    description: "Exclusive fan interaction session with all H5-R members.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80",
    doorTime: "6:00 PM (JST)",
    startTime: "7:00 PM (JST)",
    day: "Sunday, June 5, 2022",
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
    <div
      className="events-page"
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        backgroundImage:
          "radial-gradient(circle at 20% 10%, rgba(251,191,36,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251,191,36,0.04) 0%, transparent 50%)",
      }}
    >
      <SEO title="Events – H5-Revolution" description="Join H5-Revolution live concerts, fan meetings, and special showcases." />

      {/* ── PAGE HEADER ───────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 20px 0" }}>
        {/* Title + Tabs row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>Events</h1>
            <span
              style={{
                background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                borderRadius: 8,
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CalIcon className="w-5 h-5" />
            </span>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              background: "#fff",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {["upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 18px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 13,
                  transition: "all 0.2s",
                  background: activeTab === tab ? "linear-gradient(135deg,#FBBF24,#F59E0B)" : "transparent",
                  color: activeTab === tab ? "#1a1a2e" : "#6b7280",
                  borderRadius: activeTab === tab ? 8 : 0,
                }}
              >
                {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
              </button>
            ))}
            <button
              style={{
                padding: "8px 12px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#9ca3af",
              }}
            >
              <ChevronIcon />
            </button>
          </div>
        </div>

        {/* Breadcrumb + Search */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>
            <span style={{ color: "#6b7280" }}>Home</span>
            <span style={{ margin: "0 6px" }}>•</span>
            <span style={{ color: "#FBBF24", fontWeight: 600 }}>Events</span>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "6px 12px",
              gap: 6,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <SearchIcon className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search events..."
              style={{
                border: "none",
                outline: "none",
                fontSize: 13,
                color: "#4b5563",
                background: "transparent",
                width: 160,
              }}
            />
            <SearchIcon className="w-4 h-4" />
          </div>
        </div>

        {/* ── FEATURED EVENT CARD ─────────────────────────── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            marginBottom: 16,
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
          }}
        >
          {/* Left: image */}
          <div style={{ position: "relative", minHeight: 220 }}>
            <img
              src={FEATURED_EVENT.image}
              alt={FEATURED_EVENT.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 220 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(120deg, rgba(251,191,36,0.18) 0%, rgba(0,0,0,0.18) 100%)",
              }}
            />
          </div>

          {/* Right: info */}
          <div style={{ padding: "28px 28px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {/* Title + attendees */}
            <div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.3 }}>{FEATURED_EVENT.title}</h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                    color: "#1a1a2e",
                    borderRadius: 20,
                    padding: "4px 10px",
                    fontWeight: 700,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <PeopleIcon className="w-4 h-4" />
                  {FEATURED_EVENT.attendees}
                  <span style={{ fontSize: 16, color: "#F59E0B", background: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 2 }}>+</span>
                </div>
              </div>

              {/* Date */}
              <p style={{ margin: "0 0 6px", fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{FEATURED_EVENT.date}</p>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span style={{ color: "#FBBF24" }}>
                  <PinIcon className="w-3 h-3" />
                </span>
                <span style={{ fontSize: 13, color: "#6b7280" }}>{FEATURED_EVENT.location}</span>
              </div>

              {/* Description */}
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: "0 0 18px" }}>{FEATURED_EVENT.description}</p>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "transparent",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "8px 14px",
                  fontSize: 13,
                  color: "#4b5563",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                <CalIcon className="w-4 h-4" />
                Event Tickets
                <span style={{ fontSize: 11, color: "#9ca3af" }}>▼</span>
              </button>
              <button
                onClick={() => { setSelectedEvent(FEATURED_EVENT); setShowModal(true); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                  border: "none",
                  borderRadius: 8,
                  padding: "9px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(251,191,36,0.35)",
                  transition: "transform 0.15s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
              >
                Get Tickets
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── SECONDARY EVENT CARD ─────────────────────────── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "16px 20px",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            flexWrap: "wrap",
          }}
        >
          {/* Date badge + info */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Calendar badge */}
            <div
              style={{
                background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                borderRadius: 10,
                width: 50,
                height: 54,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(251,191,36,0.3)",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, color: "#7c4f00", letterSpacing: 1 }}>JUN</span>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>{NEXT_EVENT.dateShort}</span>
            </div>

            <div>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{NEXT_EVENT.title}</h3>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "#9ca3af" }}>{NEXT_EVENT.location}</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { setSelectedEvent(NEXT_EVENT); setShowModal(true); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 700,
              color: "#1a1a2e",
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(251,191,36,0.3)",
            }}
          >
            More Info
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* ── LEFT: EVENT DETAILS ─────────────────────────── */}
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>
              Event Details: {selectedEvent.title}
            </h2>

            {/* Detail Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              {/* Item banner & title */}
              <div
                style={{
                  background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)",
                  padding: "28px 24px 20px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative stars */}
                {["8% 20%", "92% 15%", "5% 80%", "95% 75%", "50% 5%"].map((pos, i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      top: pos.split(" ")[1],
                      left: pos.split(" ")[0],
                      color: "#F59E0B",
                      fontSize: [10, 14, 10, 12, 10][i],
                      opacity: 0.6,
                    }}
                  >
                    ✦
                  </span>
                ))}
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: "#1a1a2e",
                    fontStyle: "italic",
                    margin: "0 0 8px",
                  }}
                >
                  {selectedEvent.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ color: "#F59E0B" }}>✦</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#6b7280" }}>{selectedEvent.date}</span>
                  <span style={{ color: "#F59E0B" }}>✦</span>
                </div>
              </div>

              {/* Concert image */}
              <div style={{ padding: "0 20px" }}>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginTop: -10,
                    display: "block",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  }}
                />
              </div>

              {/* Details */}
              <div style={{ padding: "18px 24px 20px" }}>
                {/* Location title */}
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 14px" }}>
                  {selectedEvent.location}
                </h4>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    flexWrap: "wrap",
                    marginBottom: 12,
                    paddingBottom: 12,
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                    <span style={{ color: "#FBBF24" }}>
                      <CalIcon className="w-4 h-4" />
                    </span>
                    Doors · {selectedEvent.date}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                    <span style={{ color: "#FBBF24" }}>
                      <ClockIcon className="w-4 h-4" />
                    </span>
                    Start Timer: {selectedEvent.doorTime}
                  </div>
                </div>

                {/* Start location */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280", marginBottom: 12 }}>
                  <span style={{ color: "#FBBF24" }}>
                    <PinIcon className="w-4 h-4" />
                  </span>
                  Start at: {selectedEvent.location.split(",")[0]}, {selectedEvent.startTime}
                </div>

                {/* Ticket cost row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#FBBF24" }}>
                      <TicketIcon className="w-4 h-4" />
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>Ticket Cost</span>
                    <span style={{ fontSize: 13, color: "#9ca3af" }}>{selectedEvent.ticketCost}</span>
                  </div>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                      border: "none",
                      borderRadius: 8,
                      padding: "9px 20px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a1a2e",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(251,191,36,0.30)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Event Information */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 14px" }}>Event Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#4b5563" }}>
                  <span style={{ color: "#FBBF24" }}><CalIcon className="w-4 h-4" /></span>
                  {selectedEvent.date}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#4b5563" }}>
                  <span style={{ color: "#FBBF24" }}><PinIcon className="w-4 h-4" /></span>
                  {selectedEvent.location}
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#4b5563" }}>
                  <span style={{ color: "#FBBF24", marginTop: 1 }}><ClockIcon className="w-4 h-4" /></span>
                  <span>
                    {selectedEvent.day}
                    <br />
                    Doors Open: {selectedEvent.doorTime}
                  </span>
                </div>
              </div>
              <button
                style={{
                  marginTop: 16,
                  width: "100%",
                  background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                  border: "none",
                  borderRadius: 10,
                  padding: "11px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 3px 10px rgba(251,191,36,0.35)",
                }}
              >
                Buy Tickets
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Next Event */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 14px" }}>Next Event</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=80&q=80"
                  alt={NEXT_EVENT.title}
                  style={{ width: 48, height: 48, borderRadius: 8, objectFit: "cover" }}
                />
                <div>
                  <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>Give-H5-R</p>
                  <p style={{ margin: "2px 0", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{NEXT_EVENT.title}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{NEXT_EVENT.location}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 12px",
                  background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                <CalIcon className="w-4 h-4" />
                {NEXT_EVENT.date} at {NEXT_EVENT.doorTime}
              </div>
            </div>

            {/* Newsletter */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 6px" }}>Don't Miss Out!</h3>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 12px", lineHeight: 1.5 }}>
                Sign up for our newsletter to get the latest event updates and exclusive offers!
              </p>
              {subscribed ? (
                <div
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                    borderRadius: 8,
                    padding: "10px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  ✓ Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 6 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    style={{
                      flex: 1,
                      border: "1px solid #e5e7eb",
                      borderRadius: 8,
                      padding: "8px 10px",
                      fontSize: 12,
                      outline: "none",
                      color: "#374151",
                      minWidth: 0,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                      border: "none",
                      borderRadius: 8,
                      padding: "8px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#1a1a2e",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                height: 160,
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                position: "relative",
              }}
            >
              <iframe
                title="event-map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=139.65,35.65,139.80,35.75&layer=mapnik&marker=35.705,139.752`}
                style={{ width: "100%", height: "100%", border: "none" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── FOOTER STRIP ─────────────────────────── */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            paddingBottom: 28,
            borderTop: "1px solid #f3f4f6",
            paddingTop: 18,
          }}
        >
          {/* Newsletter promo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                borderRadius: 8,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MailIcon className="w-5 h-5" />
            </span>
            <div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1a1a2e", fontStyle: "italic" }}>Done, Praise Cat –</p>
              <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>Sign up for our newsletter to the latest event updates and exclusive offers!</p>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>© 2022 HS-R. All rights reserved.</p>
        </div>
      </div>

      {/* ── EVENT DETAIL MODAL ─────────────────────────── */}
      {showModal && selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              maxWidth: 580,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            }}
          >
            {/* Modal header image */}
            <div style={{ position: "relative" }}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{ width: "100%", height: 200, objectFit: "cover", display: "block", borderRadius: "18px 18px 0 0" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6))",
                  borderRadius: "18px 18px 0 0",
                }}
              />
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  background: "rgba(255,255,255,0.25)",
                  border: "none",
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  fontSize: 20,
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                }}
              >
                ×
              </button>
              <div style={{ position: "absolute", bottom: 14, left: 20 }}>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#fff" }}>{selectedEvent.title}</h3>
                <p style={{ margin: "3px 0 0", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{selectedEvent.date} · {selectedEvent.location}</p>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: "20px 24px 24px" }}>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 18 }}>{selectedEvent.description}</p>

              {/* Info grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                {[
                  { icon: <CalIcon className="w-4 h-4" />, label: "Date", value: selectedEvent.date },
                  { icon: <PinIcon className="w-4 h-4" />, label: "Location", value: selectedEvent.location },
                  { icon: <ClockIcon className="w-4 h-4" />, label: "Doors Open", value: selectedEvent.doorTime },
                  { icon: <TicketIcon className="w-4 h-4" />, label: "Ticket", value: selectedEvent.ticketCost },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ background: "#fafafa", borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#FBBF24", marginBottom: 4 }}>
                      {icon}
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                    border: "none",
                    borderRadius: 10,
                    padding: "12px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    cursor: "pointer",
                    boxShadow: "0 3px 10px rgba(251,191,36,0.3)",
                  }}
                >
                  🎫 Buy Tickets
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    padding: "12px 20px",
                    background: "#f3f4f6",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#6b7280",
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