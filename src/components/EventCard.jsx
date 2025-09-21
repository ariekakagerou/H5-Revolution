import React from "react";

const EventCard = ({ title, date, location, image, type, ticketPrice, status }) => {
  // Menentukan warna badge berdasarkan tipe event
  const getEventTypeBadge = (type) => {
    switch(type) {
      case 'concert': return 'bg-red-500 text-white';
      case 'meet': return 'bg-blue-500 text-white';
      case 'showcase': return 'bg-purple-500 text-white';
      case 'fanmeet': return 'bg-pink-500 text-white';
      default: return 'bg-yellow-500 text-white';
    }
  };

  // Menentukan status event
  const getStatusBadge = (status) => {
    switch(status) {
      case 'sold-out': return 'bg-red-100 text-red-600 border border-red-200';
      case 'limited': return 'bg-orange-100 text-orange-600 border border-orange-200';
      case 'available': return 'bg-green-100 text-green-600 border border-green-200';
      default: return 'bg-gray-100 text-gray-600 border border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'sold-out': return 'SOLD OUT';
      case 'limited': return 'TIKET TERBATAS';
      case 'available': return 'TERSEDIA';
      default: return 'INFO SEGERA';
    }
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto transform hover:scale-105 hover:-translate-y-2">
      {/* Overlay gradient untuk efek hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Event Image dengan overlay dan badges */}
      <div className="relative h-48 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-yellow-600">
            <div className="w-12 h-12 mb-2">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">H5-Revolution Event</span>
          </div>
        )}
        
        {/* Badge Tipe Event */}
        {type && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getEventTypeBadge(type)} shadow-lg`}>
            {type}
          </div>
        )}
        
        {/* Status Badge */}
        {status && (
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(status)} backdrop-blur-sm`}>
            {getStatusText(status)}
          </div>
        )}

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>

      {/* Event Info */}
      <div className="p-5 flex-1 relative z-20">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-yellow-600 transition-colors duration-200">
            {title}
          </h3>
          
          {/* Date dengan icon */}
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <p className="text-yellow-500 font-semibold text-sm">{date}</p>
          </div>
          
          {/* Location dengan icon */}
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>

        {/* Ticket Price */}
        {ticketPrice && (
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Harga Tiket:</span>
            <span className="font-bold text-lg text-gray-800">{ticketPrice}</span>
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19V4h-2v2H7V4H5v2H4.5C3.12 6 2 7.12 2 8.5v11C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-11C22 7.12 20.88 6 19.5 6z"/>
            </svg>
            <span>Detail Event</span>
          </div>
        </button>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-tl-full"></div>
    </div>
  );
};

export default EventCard;