import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col bg-[#12082a]/90 backdrop-blur-md rounded-sm border border-white/10 group-hover:border-pink-500/50 overflow-hidden shadow-lg group-hover:shadow-idol-pink transition-all duration-300 w-full h-full">
            {/* Member Image dengan efek overlay */}
            <div className="relative h-56 bg-gradient-to-br from-[#240d46] to-[#0f0a1e] flex items-center justify-center overflow-hidden">
              {image ? (
                <>
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12082a] via-[#12082a]/30 to-transparent"></div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-pink-400/60">
                  <div className="w-16 h-16 mb-2 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-pink-400">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-pink-400/60">H5-R Member</span>
                </div>
              )}
              
              {/* Member Color Badge */}
              {memberColor && (
                <div 
                  className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  style={{backgroundColor: memberColor}}
                  title={`Member Color: ${memberColor}`}
                ></div>
              )}

              {/* Position Badge */}
              <div className="absolute bottom-3 left-3 bg-pink-500/20 border border-pink-500/40 backdrop-blur-md text-pink-300 px-2.5 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest">
                {position || 'MEMBER'}
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>

            {/* Member Basic Info */}
            <div className="p-4 flex-1 flex flex-col justify-between relative">
              <div className="text-center">
                <h3 className="text-xl font-black text-white mb-0.5 group-hover:text-pink-300 transition-colors duration-200 tracking-tight">
                  {name}
                </h3>
                <p className="text-pink-400/80 font-bold text-xs uppercase tracking-widest mb-3">{position}</p>
                
                {/* Quick stats */}
                {stats && (
                  <div className="flex justify-center gap-3 text-xs bg-white/[0.03] border border-white/5 rounded-sm p-2">
                    <div className="text-center">
                      <div className="font-mono font-bold text-pink-400">{stats.fans || '0'}</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/40">Fans</div>
                    </div>
                    <div className="w-[1px] bg-white/10"></div>
                    <div className="text-center">
                      <div className="font-mono font-bold text-orange-400">{stats.songs || '0'}</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/40">Songs</div>
                    </div>
                    <div className="w-[1px] bg-white/10"></div>
                    <div className="text-center">
                      <div className="font-mono font-bold text-cyan-400">{stats.events || '0'}</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/40">Events</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover instruction */}
              <div className="text-center text-[10px] font-mono uppercase tracking-widest text-pink-400/50">
                Flip for Profile
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="flex flex-col bg-[#140b2e] rounded-sm overflow-hidden shadow-xl w-full h-full border border-pink-500/40">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 text-white text-center shadow-md">
              <h4 className="font-black text-base uppercase tracking-wider">{name}</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/80">IDOL PROFILE</p>
            </div>

            {/* Detailed Info */}
            <div className="p-4 flex-1 overflow-y-auto no-scrollbar flex flex-col justify-between">
              <div>
                {/* Bio */}
                {bio && (
                  <div className="mb-3">
                    <h5 className="font-bold text-[10px] text-pink-400 uppercase tracking-widest mb-1">
                      Bio
                    </h5>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{bio}</p>
                  </div>
                )}

                {/* Birth Date & Hobby */}
                <div className="space-y-2 mb-3 bg-white/[0.02] border border-white/5 p-2 rounded-sm text-xs">
                  {birthDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Lahir:</span>
                      <span className="font-mono text-white/80">{birthDate}</span>
                    </div>
                  )}
                  {hobby && (
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Hobi:</span>
                      <span className="text-white/80">{hobby}</span>
                    </div>
                  )}
                </div>

                {/* Social Media */}
                {socialMedia && (
                  <div className="mb-3">
                    <h5 className="font-bold text-[10px] text-pink-400 uppercase tracking-widest mb-2">
                      Social Media
                    </h5>
                    <div className="grid grid-cols-3 gap-2">
                      {socialMedia.twitter && (
                        <a 
                          href={socialMedia.twitter} 
                          className="flex flex-col items-center p-1.5 bg-white/[0.04] border border-white/5 hover:border-pink-500/40 rounded-sm hover:bg-pink-500/10 text-white/60 hover:text-pink-300 transition-colors text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider">Twitter</span>
                        </a>
                      )}
                      {socialMedia.instagram && (
                        <a 
                          href={socialMedia.instagram} 
                          className="flex flex-col items-center p-1.5 bg-white/[0.04] border border-white/5 hover:border-pink-500/40 rounded-sm hover:bg-pink-500/10 text-white/60 hover:text-pink-300 transition-colors text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider">Instagram</span>
                        </a>
                      )}
                      {socialMedia.youtube && (
                        <a 
                          href={socialMedia.youtube} 
                          className="flex flex-col items-center p-1.5 bg-white/[0.04] border border-white/5 hover:border-pink-500/40 rounded-sm hover:bg-pink-500/10 text-white/60 hover:text-pink-300 transition-colors text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider">YouTube</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Link to Full Profile */}
              <div className="pt-2 text-center">
                <Link 
                  to={`/members/${name.toLowerCase().replace(' ', '-')}`}
                  className="shimmer-btn block w-full py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black uppercase tracking-[0.2em] text-[10px] hover:shadow-idol-pink transition-all"
                >
                  Lihat Profil Lengkap
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MemberCard;
