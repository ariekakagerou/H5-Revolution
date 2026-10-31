import React from "react";

const EventCard = ({ title, date, location, image, type, ticketPrice, status }) => {
  // Menentukan warna badge berdasarkan tipe event
  const getEventTypeBadge = (type) => {
    switch(type?.toLowerCase()) {
      case 'concert': return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
      case 'meet': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'showcase': return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'fanmeet': return 'bg-orange-500/20 text-orange-300 border-orange-500/40';
      default: return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
    }
  };

  // Menentukan status event
  const getStatusBadge = (status) => {
    switch(status?.toLowerCase()) {
      case 'sold-out': return 'bg-red-500/20 text-red-300 border-red-500/40';
      case 'limited': return 'bg-orange-500/20 text-orange-300 border-orange-500/40';
      case 'available': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  const getStatusText = (status) => {
    switch(status?.toLowerCase()) {
      case 'sold-out': return 'SOLD OUT';
      case 'limited': return 'TIKET TERBATAS';
      case 'available': return 'TERSEDIA';
      default: return 'INFO SEGERA';
    }
  };

  return (
    <div className="group relative flex flex-col bg-[#12082a]/80 backdrop-blur-md rounded-sm border border-white/10 hover:border-pink-500/50 overflow-hidden shadow-lg hover:shadow-idol-pink transition-all duration-300 w-full max-w-sm mx-auto transform hover:-translate-y-1.5">
      {/* Top stage accent glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
      
      {/* Event Image dengan overlay dan badges */}
      <div className="relative h-48 bg-gradient-to-br from-[#1c0b38] to-[#0f0a1e] flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-pink-400/60">
            <div className="w-12 h-12 mb-2">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400/60">H5-Revolution Stage</span>
          </div>
        )}

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12082a] via-[#12082a]/40 to-transparent" />
        
        {/* Badge Tipe Event */}
        {type && (
          <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${getEventTypeBadge(type)} shadow-lg`}>
            {type}
          </div>
        )}
        
        {/* Status Badge */}
        {status && (
          <div className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-sm text-[10px] font-black tracking-widest border backdrop-blur-md ${getStatusBadge(status)}`}>
            {getStatusText(status)}
          </div>
        )}

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </div>

      {/* Event Info */}
      <div className="p-5 flex-1 flex flex-col justify-between relative z-20">
        <div className="mb-4">
          <h3 className="text-base font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-pink-300 transition-colors duration-200">
            {title}
          </h3>
          
          {/* Date dengan icon */}
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3.5 h-3.5 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <p className="text-pink-400 font-mono text-xs">{date}</p>
          </div>
          
          {/* Location dengan icon */}
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p className="text-white/60 text-xs line-clamp-1">{location}</p>
          </div>
        </div>

        <div>
          {/* Ticket Price */}
          {ticketPrice && (
            <div className="flex items-center justify-between mb-4 p-2.5 bg-white/[0.03] border border-white/5 rounded-sm">
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Harga Tiket:</span>
              <span className="font-mono font-black text-sm text-pink-400">{ticketPrice}</span>
            </div>
          )}

          {/* Action Button */}
          <button className="shimmer-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] py-3 px-4 rounded-sm transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-idol-pink">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19V4h-2v2H7V4H5v2H4.5C3.12 6 2 7.12 2 8.5v11C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-11C22 7.12 20.88 6 19.5 6z"/>
              </svg>
              <span>Detail Event</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
