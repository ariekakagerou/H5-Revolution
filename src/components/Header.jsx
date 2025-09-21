import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "HOME", path: "/" },
    { name: "MEMBERS", path: "/members" },
    { name: "EVENTS", path: "/events" },
    { name: "FANS", path: "/fans" },
    { name: "SHOWCASE", path: "/showcase" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-yellow-300 px-4 md:px-8 py-4 font-bold relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 rounded-full -translate-x-10 -translate-y-10 animate-pulse"></div>
        <div className="absolute top-5 right-10 w-12 h-12 bg-yellow-200 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-yellow-400 rounded-full translate-y-8 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Top section with logo and right-side buttons */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        {/* Logo with subtle glow effect */}
        <Link to="/" className="text-lg tracking-widest group">
          <div className="text-xl font-bold text-black group-hover:drop-shadow-lg transition-all duration-300">
            H5-REVOLUTION
          </div>
          <div className="text-xs font-normal text-black group-hover:text-gray-800 transition-colors duration-300">
            OFFICIAL SITE
          </div>
        </Link>

        {/* Right side buttons - Desktop with enhanced hover */}
        <div className="hidden lg:flex gap-6 text-sm text-black">
          <div className="text-center cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-md">
            <div className="font-semibold">Contact Us</div>
            <div className="font-normal">Get in Touch</div>
          </div>
          <div className="text-center cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-md">
            <div className="font-semibold">Live Events</div>
            <div className="font-normal">Join Our Shows</div>
          </div>
          <div className="text-center cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-md">
            <div className="font-semibold">Auditions</div>
          </div>
          <div 
            className="text-center cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-md"
            onClick={() => window.open(process.env.REACT_APP_STORE_URL || 'http://localhost:3000', '_blank')}
          >
            <div className="font-semibold">Online Shop</div>
            <div className="font-normal">Buy Merchandise</div>
          </div>
        </div>

        {/* Hamburger menu for mobile with rotation effect */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-black cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:scale-110"
            style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Navigation - Desktop with subtle underline animations */}
      <nav className="hidden lg:block relative z-10">
        <ul className="flex gap-8 text-sm font-bold text-black">
          {navigationItems.map((item) => (
            <li key={item.name} className="relative">
              <Link 
                to={item.path}
                className={`hover:text-gray-700 cursor-pointer transition-all duration-300 py-1 relative group ${
                  isActive(item.path) ? 'text-gray-700' : ''
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 rounded"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu with slide-in animation */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-yellow-300 z-50 transition-all duration-300 transform ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {/* Mobile menu header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-yellow-400">
          <div className="text-lg font-bold text-black">
            H5-REVOLUTION
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-black cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="py-4 overflow-y-auto h-full">
          <ul className="space-y-2 text-lg font-bold text-black px-4">
            {navigationItems.map((item, index) => (
              <li key={item.name} 
                  className="transform transition-all duration-300"
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}>
                <Link 
                  to={item.path}
                  className={`hover:text-gray-700 cursor-pointer transition-all duration-300 py-4 px-4 block relative group rounded-lg hover:bg-yellow-200 ${
                    isActive(item.path) ? 'text-gray-700 bg-yellow-200' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {/* Mobile underline effect */}
                  <span className={`absolute bottom-2 left-4 h-0.5 bg-black transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 text-sm text-black px-4">
            {[
              { title: "Contact Us", subtitle: "Get in Touch" },
              { title: "Live Events", subtitle: "Join Our Shows" },
              { title: "Auditions", subtitle: "" },
              { title: "Online Shop", subtitle: "Buy Merchandise" }
            ].map((item, index) => (
              <div key={item.title} 
                   className="text-center py-4 px-4 border border-yellow-400 rounded-lg cursor-pointer hover:text-gray-700 hover:bg-yellow-200 transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-sm"
                   style={{ 
                     transitionDelay: isMenuOpen ? `${(index + 5) * 50}ms` : '0ms',
                     transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                   }}
                   onClick={() => {
                     if (item.title === "Online Shop") {
                       window.open(process.env.REACT_APP_STORE_URL || 'http://localhost:3000', '_blank');
                     }
                     setIsMenuOpen(false);
                   }}>
                <div className="font-bold text-base">{item.title}</div>
                {item.subtitle && <div className="font-normal text-sm mt-1">{item.subtitle}</div>}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;