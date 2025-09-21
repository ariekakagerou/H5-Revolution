import React, { useState, useEffect } from "react";
import { FaXTwitter, FaYoutube, FaTiktok, FaHeart, FaMusic, FaStar, FaPlay, FaUsers, FaCalendar } from "react-icons/fa6";

const Footer = () => {
  const [heartCount, setHeartCount] = useState(12847);
  const [isHovered, setIsHovered] = useState(false);

  const triggerHearts = () => {
    setHeartCount(prev => prev + Math.floor(Math.random() * 5) + 1);
  };

  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <footer className="bg-black text-white relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full p-8">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="bg-yellow-400 rounded"
                  style={{
                    animation: `pulse-glow ${2 + (i % 3)}s infinite ${i * 0.1}s`,
                    height: `${Math.random() * 20 + 10}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          {/* Top Section - Hero Area */}
          <div className="container mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Brand Section */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <div 
                  className="inline-block cursor-pointer group"
                  onClick={triggerHearts}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-4 border-yellow-400 flex items-center justify-center group-hover:border-yellow-300 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-300/5 group-hover:from-yellow-400/20 group-hover:to-yellow-300/10 transition-all duration-300" />
                      <div className="text-center z-10">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">H5</div>
                        <div className="text-xs text-gray-300 tracking-widest">REVOLUTION</div>
                      </div>
                      {isHovered && (
                        <div className="absolute inset-0 animate-pulse bg-yellow-400/5" />
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <FaStar className="text-black text-sm animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <FaUsers className="text-yellow-400" />
                      <span className="font-mono text-lg">{heartCount.toLocaleString()}</span>
                      <span className="text-gray-400">Global Fans</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                      <FaHeart className="text-pink-400 animate-pulse" />
                      <span>Growing every day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-8 text-center">Our Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                        <FaMusic className="text-yellow-400 group-hover:animate-bounce" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">247</div>
                        <div className="text-sm text-gray-400">Songs Released</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                        <FaPlay className="text-yellow-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">15</div>
                        <div className="text-sm text-gray-400">Albums</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                        <FaCalendar className="text-yellow-400 group-hover:animate-bounce" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">2023</div>
                        <div className="text-sm text-gray-400">Established</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Contact */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-8 text-center">Connect With Us</h3>
                
                {/* Social Media */}
                <div className="flex justify-center gap-4 mb-8">
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/60 flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300 group relative overflow-hidden">
                    <FaXTwitter className="text-yellow-400 text-xl group-hover:text-yellow-300 z-10 relative" />
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/60 flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300 group relative overflow-hidden">
                    <FaYoutube className="text-yellow-400 text-xl group-hover:text-yellow-300 z-10 relative" />
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/60 flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300 group relative overflow-hidden">
                    <FaTiktok className="text-yellow-400 text-xl group-hover:text-yellow-300 z-10 relative" />
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
                  </a>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl hover:shadow-yellow-400/30 relative overflow-hidden group">
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <FaStar className="animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="text-sm md:text-base">Collaboration Requests</span>
                    <FaStar className="animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
          </div>

          {/* License Section */}
          <div className="border-t border-gray-800 py-8">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <div className="inline-block p-6 bg-gray-900/50 rounded-2xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center gap-3 mb-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <FaMusic className="text-yellow-400" />
                    <span className="text-sm">JASRAC License Number</span>
                    <FaMusic className="text-yellow-400" />
                  </div>
                  <div className="font-mono text-2xl text-yellow-400 tracking-wider group-hover:text-yellow-300 transition-colors duration-300">
                    9026760006738029
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-pulse" />
            <div className="container mx-auto px-6 py-6 relative z-10">
              <div className="flex items-center justify-center gap-4 text-black font-bold">
                <div className="w-2 h-2 bg-black/30 rounded-full animate-bounce" />
                <span className="text-sm md:text-base">© 2025 H5-REVOLUTION ALL RIGHTS RESERVED</span>
                <div className="w-2 h-2 bg-black/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="text-center mt-2 text-xs text-black/70">
                Protected by Law
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;