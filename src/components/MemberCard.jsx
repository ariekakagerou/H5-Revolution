import React, { useState } from "react";

const MemberCard = ({ name, position, bio, image, socialMedia, birthDate, hobby, favoriteColor, memberColor, stats }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group relative w-full max-w-sm mx-auto h-96 perspective-1000">
      {/* Card Container dengan flip effect */}
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden">
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full h-full">
            {/* Member Image dengan efek overlay */}
            <div className="relative h-56 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center overflow-hidden">
              {image ? (
                <>
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-yellow-600">
                  <div className="w-16 h-16 mb-2 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">H5-Revolution Member</span>
                </div>
              )}
              
              {/* Member Color Badge */}
              {memberColor && (
                <div 
                  className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white shadow-lg"
                  style={{backgroundColor: memberColor}}
                  title={`Member Color: ${memberColor}`}
                ></div>
              )}

              {/* Position Badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {position || 'Member'}
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Member Basic Info */}
            <div className="p-4 flex-1 relative">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors duration-200">
                  {name}
                </h3>
                <p className="text-yellow-500 font-semibold text-sm mb-2">{position}</p>
                
                {/* Quick stats */}
                {stats && (
                  <div className="flex justify-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="text-center">
                      <div className="font-bold text-yellow-500">{stats.fans || '0'}</div>
                      <div>Fans</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-500">{stats.songs || '0'}</div>
                      <div>Songs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-500">{stats.events || '0'}</div>
                      <div>Events</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover instruction */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Hover untuk info lebih
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="flex flex-col bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl overflow-hidden shadow-lg w-full h-full border-2 border-yellow-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-white text-center">
              <h4 className="font-bold text-lg">{name}</h4>
              <p className="text-sm opacity-90">Profile Details</p>
            </div>

            {/* Detailed Info */}
            <div className="p-4 flex-1 overflow-y-auto">
              {/* Bio */}
              {bio && (
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Bio
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                </div>
              )}

              {/* Birth Date */}
              {birthDate && (
                <div className="mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19V4h-2v2H7V4H5v2H4.5C3.12 6 2 7.12 2 8.5v11C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-11C22 7.12 20.88 6 19.5 6z"/>
                  </svg>
                  <div>
                    <span className="text-xs text-gray-500">Tanggal Lahir:</span>
                    <p className="text-sm font-medium text-gray-700">{birthDate}</p>
                  </div>
                </div>
              )}

              {/* Hobby */}
              {hobby && (
                <div className="mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div>
                    <span className="text-xs text-gray-500">Hobi:</span>
                    <p className="text-sm font-medium text-gray-700">{hobby}</p>
                  </div>
                </div>
              )}

              {/* Favorite Color */}
              {favoriteColor && (
                <div className="mb-4 flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{backgroundColor: favoriteColor}}
                  ></div>
                  <div>
                    <span className="text-xs text-gray-500">Warna Favorit:</span>
                    <p className="text-sm font-medium text-gray-700">{favoriteColor}</p>
                  </div>
                </div>
              )}

              {/* Social Media */}
              {socialMedia && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H8C4.13 1 1 4.13 1 8v8c0 3.87 3.13 7 7 7h8c3.87 0 7-3.13 7-7V8c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    Social Media
                  </h5>
                  <div className="grid grid-cols-3 gap-3">
                    {socialMedia.twitter && (
                      <a 
                        href={socialMedia.twitter} 
                        className="flex flex-col items-center p-2 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-500 transition-colors text-center group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6 mb-1 text-gray-400 group-hover/social:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span className="text-xs">Twitter</span>
                      </a>
                    )}
                    {socialMedia.instagram && (
                      <a 
                        href={socialMedia.instagram} 
                        className="flex flex-col items-center p-2 bg-white rounded-lg hover:bg-pink-50 hover:text-pink-500 transition-colors text-center group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6 mb-1 text-gray-400 group-hover/social:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.986 11.988 11.986s11.987-5.366 11.987-11.986C24.014 5.367 18.648.001 12.017.001z"/>
                        </svg>
                        <span className="text-xs">Instagram</span>
                      </a>
                    )}
                    {socialMedia.youtube && (
                      <a 
                        href={socialMedia.youtube} 
                        className="flex flex-col items-center p-2 bg-white rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors text-center group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6 mb-1 text-gray-400 group-hover/social:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="text-xs">YouTube</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for 3D flip */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default MemberCard;