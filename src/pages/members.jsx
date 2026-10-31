import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const MemberCard = ({ member, isActive, onClick }) => {
  const getMemberColorGradient = (color) => {
    const gradientMap = {
      'Golden Yellow': 'from-amber-400 via-amber-500 to-orange-500',
      'Cherry Blossom Pink': 'from-pink-400 via-pink-500 to-rose-500', 
      'Sky Blue': 'from-cyan-400 via-blue-500 to-indigo-500',
      'Electric Purple': 'from-purple-400 via-purple-500 to-violet-500',
      'Mint Green': 'from-emerald-400 via-teal-500 to-emerald-600'
    };
    return gradientMap[color] || 'from-pink-400 via-pink-500 to-orange-500';
  };

  const getAccentHex = (color) => {
    const map = {
      'Golden Yellow': '#fbbf24',
      'Cherry Blossom Pink': '#ec4899',
      'Sky Blue': '#06b6d4',
      'Electric Purple': '#a855f7',
      'Mint Green': '#10b981'
    };
    return map[color] || '#ec4899';
  };

  const accentColor = getAccentHex(member.memberColor);

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-700 ease-out w-full max-w-[280px] aspect-[2/3] transform-gpu perspective-1000 ${
        isActive 
          ? 'scale-105 md:scale-110 -translate-y-3 z-20' 
          : 'hover:scale-105 hover:-translate-y-2 hover:z-10'
      }`}
      onClick={() => onClick(member)}
      style={{
        transformStyle: 'preserve-3d',
        filter: isActive ? `drop-shadow(0 20px 30px ${accentColor}40)` : 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
      }}
    >
      {/* Playing Card Design */}
      <div 
        className={`w-full h-full bg-[#12082a] rounded-sm border overflow-hidden transition-all duration-500 flex flex-col justify-between ${
          isActive ? 'border-pink-500/80 shadow-idol-pink' : 'border-white/10 hover:border-pink-500/40'
        }`}
        style={{
          background: 'linear-gradient(160deg, #180a36 0%, #0f0a1e 100%)',
        }}
      >
        {/* Card Corner Decorations */}
        <div className="absolute top-3 left-3 flex flex-col items-center">
          <span 
            className="text-base font-black font-mono"
            style={{ color: accentColor }}
          >
            {member.name.charAt(0)}
          </span>
          <div 
            className="w-2.5 h-2.5 rounded-sm mt-1 shadow-sm"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
          />
        </div>

        {/* Opposite Corner */}
        <div className="absolute bottom-3 right-3 flex flex-col items-center rotate-180">
          <span 
            className="text-base font-black font-mono"
            style={{ color: accentColor }}
          >
            {member.name.charAt(0)}
          </span>
          <div 
            className="w-2.5 h-2.5 rounded-sm mt-1 shadow-sm"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
          />
        </div>

        {/* Center Member Area */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-6">
          {/* Member Avatar */}
          <div className="relative mb-3">
            <div 
              className={`w-28 h-28 rounded-full bg-gradient-to-br ${getMemberColorGradient(member.memberColor)} p-1 shadow-lg`}
              style={{ boxShadow: `0 0 20px ${accentColor}50` }}
            >
              <div className="w-full h-full bg-[#0f0a1e] rounded-full flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14" style={{ color: accentColor }}>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )}
              </div>
            </div>
            {/* Rank indicator */}
            <div 
              className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg border border-white/40"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, #f97316)`,
                boxShadow: `0 0 10px ${accentColor}80`
              }}
            >
              ★
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center">
            <h3 className="text-lg font-black text-white mb-1 leading-tight tracking-tight">
              {member.name}
            </h3>
            <p 
              className="text-[10px] font-mono font-bold mb-2 uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {member.position.split(' & ').map((part, index) => (
                <span key={index} className="block">
                  {part}
                </span>
              ))}
            </p>

            {/* Card suit decoration */}
            <div className="flex justify-center space-x-1.5 mt-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accentColor, opacity: 0.6 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card border shine effect */}
        <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
               background: `linear-gradient(45deg, transparent 30%, ${accentColor}20 50%, transparent 70%)`
             }}
        />
      </div>
    </div>
  );
};

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;
  
  const accentColor = 
    member.memberColor === 'Golden Yellow' ? '#fbbf24' :
    member.memberColor === 'Cherry Blossom Pink' ? '#ec4899' :
    member.memberColor === 'Sky Blue' ? '#06b6d4' :
    member.memberColor === 'Electric Purple' ? '#a855f7' :
    member.memberColor === 'Mint Green' ? '#10b981' : '#ec4899';

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-[#140b2e] border border-pink-500/40 rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl no-scrollbar">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 bg-white/10 border border-white/20 rounded-sm p-2 text-white hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="h-80 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${accentColor}30, #140b2e 80%)`
            }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: accentColor, opacity: 0.4 }} />
              <div className="absolute top-20 right-20 w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: accentColor, opacity: 0.3, animationDelay: '1s' }} />
              <div className="absolute bottom-16 left-16 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: accentColor, opacity: 0.5, animationDelay: '2s' }} />
            </div>
            
            <div 
              className="w-44 h-44 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl border"
              style={{ borderColor: `${accentColor}50`, backgroundColor: `${accentColor}15` }}
            >
              <span className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">{member.name}</h2>
            <p 
              className="font-mono font-bold text-sm mb-3 tracking-widest uppercase"
              style={{ color: accentColor }}
            >
              {member.position}
            </p>
            <div 
              className="w-20 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, ${accentColor}, #f97316)`
              }}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-6">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                />
                Profile Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm flex justify-between">
                  <span className="font-bold text-white/40 uppercase text-xs tracking-wider">Birthday:</span> 
                  <span className="font-mono text-white/90">{member.birthday}</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm flex justify-between">
                  <span className="font-bold text-white/40 uppercase text-xs tracking-wider">Origin:</span> 
                  <span className="text-white/90">{member.origin}</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm flex justify-between">
                  <span className="font-bold text-white/40 uppercase text-xs tracking-wider">Blood Type:</span> 
                  <span className="font-mono text-white/90">{member.bloodType}</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm flex justify-between">
                  <span className="font-bold text-white/40 uppercase text-xs tracking-wider">Member Color:</span> 
                  <span className="font-bold" style={{ color: accentColor }}>{member.memberColor}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-6">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                />
                About
              </h3>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-sm">
                <p className="text-white/70 leading-relaxed text-sm">{member.detailedBio}</p>
              </div>
            </div>
            
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-6">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs font-mono font-bold text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Full Profile Link Button */}
            <div className="mt-8 text-center pt-6 border-t border-white/5 flex justify-center">
              <Link 
                to={`/members/${member.name.toLowerCase().replace(' ', '-')}`}
                className="shimmer-btn inline-flex items-center px-8 py-3.5 rounded-sm text-white font-black tracking-[0.2em] text-xs uppercase shadow-lg hover:shadow-idol-pink transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #f97316)`
                }}
              >
                Lihat Profil Lengkap Peluang Baru →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeMember, setActiveMember] = useState(0);
  
  const members = [
    {
      name: "Yuki Tanaka",
      position: "Leader & Main Vocalist",
      bio: "Born in Tokyo, Yuki has been passionate about music since childhood. With her powerful vocals and natural leadership, she guides H5-Revolution to new heights.",
      detailedBio: "Yuki began her musical journey at age 5 when she started piano lessons. Her powerful vocals and charismatic stage presence make her the perfect leader for H5-Revolution. She writes many of the group's songs and is fluent in Japanese, English, and Korean. Known for her caring personality, she always looks after her fellow members.",
      birthday: "March 15, 2001",
      origin: "Tokyo, Japan",
      bloodType: "A",
      memberColor: "Golden Yellow",
      skills: ["Songwriting", "Piano", "Leadership", "Multilingual"],
      favorites: {
        food: "Ramen",
        color: "Sunset Orange",
        hobby: "Reading mystery novels"
      },
      socialMedia: {
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      name: "Sakura Yamamoto", 
      position: "Main Dancer & Sub Vocalist",
      bio: "A versatile performer with exceptional dancing skills. Sakura brings energy and precision to every performance with her contemporary and hip-hop background.",
      detailedBio: "Sakura trained in dance for over 10 years before joining H5-Revolution. Her specialties include contemporary dance, hip-hop, and choreography creation. She's known for her perfectionist nature and incredible work ethic. Despite her serious approach to dance, she's the mood maker of the group with her bright smile and positive energy.",
      birthday: "August 22, 2002",
      origin: "Osaka, Japan",
      bloodType: "B",
      memberColor: "Cherry Blossom Pink",
      skills: ["Choreography", "Hip-hop Dance", "Contemporary Dance", "Acrobatics"],
      favorites: {
        food: "Takoyaki",
        color: "Pastel Pink",
        hobby: "Collecting sneakers"
      },
      socialMedia: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Mika Sato",
      position: "Vocalist & Visual",
      bio: "The youngest member with a bright personality and sweet voice. Mika's charm and talent continue to captivate fans around the world.",
      detailedBio: "Despite being the youngest, Mika has an old soul and incredible maturity. Her sweet vocals complement the group's sound perfectly, and her natural beauty has earned her numerous modeling opportunities. She's passionate about fashion and often helps with the group's styling decisions. Her dream is to act in dramas someday.",
      birthday: "December 3, 2004",
      origin: "Kyoto, Japan",
      bloodType: "O",
      memberColor: "Sky Blue",
      skills: ["Modeling", "Fashion Styling", "Acting", "Photography"],
      favorites: {
        food: "Matcha ice cream",
        color: "Lavender",
        hobby: "Taking aesthetic photos"
      },
      socialMedia: {
        instagram: "#",
        youtube: "#"
      }
    },
    {
      name: "Rin Hayashi",
      position: "Main Rapper & Dancer",
      bio: "Known for her fierce rap skills and powerful stage presence. Rin adds a unique edge to H5-Revolution's sound and performances.",
      detailedBio: "Rin discovered her love for rap during middle school and has been perfecting her craft ever since. Her sharp lyrics and powerful delivery make her performances unforgettable. She writes her own rap verses and is heavily involved in the group's music production. Off-stage, she's surprisingly gentle and loves taking care of plants.",
      birthday: "June 10, 2001",
      origin: "Nagoya, Japan",
      bloodType: "AB",
      memberColor: "Electric Purple",
      skills: ["Rap Writing", "Music Production", "Beatboxing", "Urban Dance"],
      favorites: {
        food: "Spicy curry",
        color: "Deep Purple",
        hobby: "Gardening"
      },
      socialMedia: {
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      name: "Hana Kimura",
      position: "Vocalist & Maknae",
      bio: "The group's maknae with incredible potential. Hana's fresh energy and dedication inspire both fans and fellow members.",
      detailedBio: "As the maknae (youngest), Hana brings youthful energy and innocence to the group. Her vocals have a unique tone that stands out in harmonies. She's incredibly hardworking and always eager to learn from her seniors. Her cheerful personality and natural cuteness make her a fan favorite. She dreams of composing music for the group in the future.",
      birthday: "January 28, 2005",
      origin: "Fukuoka, Japan",
      bloodType: "A",
      memberColor: "Mint Green",
      skills: ["Vocal Harmony", "Aegyo", "Gaming", "Cooking"],
      favorites: {
        food: "Strawberry shortcake",
        color: "Soft Green",
        hobby: "Playing video games"
      },
      socialMedia: {
        instagram: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0a1e] relative overflow-hidden font-inter text-white pt-28 pb-20">
      <SEO title="Members Profile" description="Meet the talented members of H5-Revolution." />
      
      {/* Background ambient stage glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-pink-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-idol mb-4 mx-auto inline-flex">
            Official Lineup
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 font-outfit">
            STAGE <span className="text-idol">MEMBERS</span>
          </h1>
          <p className="text-base text-white/50 font-medium max-w-xl mx-auto">
            Meet the talented idols behind H5-Revolution's revolutionary sound and live stages.
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-12 max-w-7xl px-2 md:px-0">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              isActive={activeMember === index}
              onClick={(member) => {
                setActiveMember(index);
                setSelectedMember(member);
              }}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {members.map((member, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeMember === index 
                  ? 'scale-125 shadow-idol-pink bg-pink-500' 
                  : 'bg-white/20 hover:bg-white/50'
              }`}
              onClick={() => setActiveMember(index)}
              aria-label={`Select member ${member.name}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#12082a]/80 backdrop-blur-md border border-white/10 rounded-sm p-8 w-full max-w-4xl shadow-2xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">H5-Revolution Stats</h2>
            <p className="text-xs font-mono text-pink-400/70 uppercase tracking-widest">DISCOVER GROUP ACHIEVEMENTS</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-sm mx-auto mb-3 flex items-center justify-center shadow-idol-pink">
                <span className="text-xl font-black font-mono text-white">5</span>
              </div>
              <h3 className="font-black text-sm uppercase text-white mb-1">Members</h3>
              <p className="text-xs text-white/40">Talented Artists</p>
            </div>
            
            <div className="text-center p-4 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-sm mx-auto mb-3 flex items-center justify-center shadow-idol-orange">
                <span className="text-xl font-black font-mono text-white">∞</span>
              </div>
              <h3 className="font-black text-sm uppercase text-white mb-1">Dreams</h3>
              <p className="text-xs text-white/40">Unlimited Potential</p>
            </div>
            
            <div className="text-center p-4 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-sm mx-auto mb-3 flex items-center justify-center shadow-idol-cyan">
                <span className="text-xl font-black font-mono text-white">♪</span>
              </div>
              <h3 className="font-black text-sm uppercase text-white mb-1">Live Stages</h3>
              <p className="text-xs text-white/40">Pure Passion</p>
            </div>
            
            <div className="text-center p-4 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-sm mx-auto mb-3 flex items-center justify-center shadow-idol-pink">
                <span className="text-xl font-black font-mono text-white">♥</span>
              </div>
              <h3 className="font-black text-sm uppercase text-white mb-1">Global Fans</h3>
              <p className="text-xs text-white/40">Our Inspiration</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pink-400 mb-1">Want to know more?</p>
          <p className="text-xs text-white/40">Click any card to open the idol's comprehensive profile dossier.</p>
        </div>
      </div>

      {/* Member Modal */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
};

export default Members;
