import React, { useState } from "react";

const MemberCard = ({ member, isActive, onClick }) => {
  const getMemberColorGradient = (color) => {
    const gradientMap = {
      'Golden Yellow': 'from-yellow-400 via-yellow-500 to-amber-600',
      'Cherry Blossom Pink': 'from-pink-400 via-pink-500 to-rose-600', 
      'Sky Blue': 'from-blue-400 via-blue-500 to-indigo-600',
      'Electric Purple': 'from-purple-400 via-purple-500 to-violet-600',
      'Mint Green': 'from-green-400 via-emerald-500 to-teal-600'
    };
    return gradientMap[color] || 'from-gray-400 via-gray-500 to-gray-600';
  };

  const getGradientBg = (color) => {
    const gradientMap = {
      'Golden Yellow': 'from-yellow-400 via-yellow-500 to-amber-600',
      'Cherry Blossom Pink': 'from-pink-400 via-pink-500 to-rose-600', 
      'Sky Blue': 'from-blue-400 via-blue-500 to-indigo-600',
      'Electric Purple': 'from-purple-400 via-purple-500 to-violet-600',
      'Mint Green': 'from-green-400 via-emerald-500 to-teal-600'
    };
    return gradientMap[color] || 'from-gray-400 via-gray-500 to-gray-600';
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-700 ease-out w-64 h-96 transform-gpu perspective-1000 ${
        isActive 
          ? 'scale-110 rotate-y-12 -translate-y-4 z-20' 
          : 'hover:scale-105 hover:rotate-y-6 hover:-translate-y-2 hover:z-10'
      }`}
      onClick={() => onClick(member)}
      style={{
        transformStyle: 'preserve-3d',
        transform: isActive 
          ? 'scale(1.1) rotateY(8deg) rotateX(-5deg) translateY(-16px) translateZ(40px)' 
          : 'rotateY(0deg) rotateX(0deg)',
        filter: isActive ? 'drop-shadow(0 25px 35px rgba(0,0,0,0.3))' : 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
      }}
    >
      {/* Playing Card Design */}
      <div 
        className={`w-full h-full bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-500 ${
          isActive ? 'shadow-2xl border-gray-300' : 'shadow-lg hover:shadow-xl'
        }`}
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
          boxShadow: isActive 
            ? '0 0 0 3px rgba(255,255,255,0.8), 0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.9)' 
            : '0 0 0 1px rgba(255,255,255,0.6), 0 8px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)'
        }}
      >
        {/* Card Corner Decorations */}
        <div className="absolute top-3 left-3 flex flex-col items-center">
          <span 
            className="text-lg font-bold"
            style={{
              color: 
                member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                member.memberColor === 'Sky Blue' ? '#3B82F6' :
                member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
            }}
          >
            {member.name.charAt(0)}
          </span>
          <div 
            className="w-4 h-4 rounded-sm mt-1"
            style={{
              backgroundColor: 
                member.memberColor === 'Golden Yellow' ? '#FCD34D' :
                member.memberColor === 'Cherry Blossom Pink' ? '#F472B6' :
                member.memberColor === 'Sky Blue' ? '#60A5FA' :
                member.memberColor === 'Electric Purple' ? '#A78BFA' :
                member.memberColor === 'Mint Green' ? '#6EE7B7' : '#9CA3AF'
            }}
          />
        </div>

        {/* Opposite Corner */}
        <div className="absolute bottom-3 right-3 flex flex-col items-center rotate-180">
          <span 
            className="text-lg font-bold"
            style={{
              color: 
                member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                member.memberColor === 'Sky Blue' ? '#3B82F6' :
                member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
            }}
          >
            {member.name.charAt(0)}
          </span>
          <div 
            className="w-4 h-4 rounded-sm mt-1"
            style={{
              backgroundColor: 
                member.memberColor === 'Golden Yellow' ? '#FCD34D' :
                member.memberColor === 'Cherry Blossom Pink' ? '#F472B6' :
                member.memberColor === 'Sky Blue' ? '#60A5FA' :
                member.memberColor === 'Electric Purple' ? '#A78BFA' :
                member.memberColor === 'Mint Green' ? '#6EE7B7' : '#9CA3AF'
            }}
          />
        </div>

        {/* Center Member Area */}
        <div className="flex flex-col items-center justify-center h-full px-6 py-8">
          {/* Member Avatar */}
          <div className="relative mb-4">
            <div 
              className={`w-32 h-32 rounded-full bg-gradient-to-br ${getMemberColorGradient(member.memberColor)} p-1 shadow-lg`}
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16 text-gray-400">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )}
              </div>
            </div>
            {/* Rank indicator */}
            <div 
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white"
              style={{
                background: `linear-gradient(135deg, ${
                  member.memberColor === 'Golden Yellow' ? '#F59E0B, #FCD34D' :
                  member.memberColor === 'Cherry Blossom Pink' ? '#EC4899, #F472B6' :
                  member.memberColor === 'Sky Blue' ? '#3B82F6, #60A5FA' :
                  member.memberColor === 'Electric Purple' ? '#8B5CF6, #A78BFA' :
                  member.memberColor === 'Mint Green' ? '#10B981, #6EE7B7' : '#6B7280, #9CA3AF'
                })`
              }}
            >
              ★
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
              {member.name}
            </h3>
            <p 
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{
                color: 
                  member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                  member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                  member.memberColor === 'Sky Blue' ? '#3B82F6' :
                  member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                  member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
              }}
            >
              {member.position.split(' & ').map((part, index) => (
                <span key={index} className="block text-xs">
                  {part}
                </span>
              ))}
            </p>

            {/* Card suit decoration */}
            <div className="flex justify-center space-x-2 mt-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full opacity-60"
                  style={{
                    backgroundColor: 
                      member.memberColor === 'Golden Yellow' ? '#FCD34D' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#F472B6' :
                      member.memberColor === 'Sky Blue' ? '#60A5FA' :
                      member.memberColor === 'Electric Purple' ? '#A78BFA' :
                      member.memberColor === 'Mint Green' ? '#6EE7B7' : '#9CA3AF'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card border shine effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
               background: `linear-gradient(45deg, transparent 30%, ${
                 member.memberColor === 'Golden Yellow' ? '#FCD34D20' :
                 member.memberColor === 'Cherry Blossom Pink' ? '#F472B620' :
                 member.memberColor === 'Sky Blue' ? '#60A5FA20' :
                 member.memberColor === 'Electric Purple' ? '#A78BFA20' :
                 member.memberColor === 'Mint Green' ? '#6EE7B720' : '#9CA3AF20'
               } 50%, transparent 70%)`
             }}
        />
      </div>
    </div>
  );
}

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="h-96 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${
                member.memberColor === 'Golden Yellow' ? '#FEF3C7, #FCD34D, #F59E0B' :
                member.memberColor === 'Cherry Blossom Pink' ? '#FCE7F3, #F472B6, #EC4899' :
                member.memberColor === 'Sky Blue' ? '#DBEAFE, #60A5FA, #3B82F6' :
                member.memberColor === 'Electric Purple' ? '#EDE9FE, #A78BFA, #8B5CF6' :
                member.memberColor === 'Mint Green' ? '#D1FAE5, #6EE7B7, #10B981' : '#F3F4F6, #9CA3AF, #6B7280'
              })`
            }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-pulse" />
              <div className="absolute top-20 right-20 w-6 h-6 bg-white bg-opacity-15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-16 left-16 w-3 h-3 bg-white bg-opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <span className="text-8xl font-bold text-white drop-shadow-lg">{member.name.charAt(0)}</span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">{member.name}</h2>
            <p 
              className="font-semibold text-xl mb-2 tracking-wide"
              style={{
                color: 
                  member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                  member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                  member.memberColor === 'Sky Blue' ? '#3B82F6' :
                  member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                  member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
              }}
            >
              {member.position}
            </p>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, ${
                  member.memberColor === 'Golden Yellow' ? '#F59E0B, #FCD34D' :
                  member.memberColor === 'Cherry Blossom Pink' ? '#EC4899, #F472B6' :
                  member.memberColor === 'Sky Blue' ? '#3B82F6, #60A5FA' :
                  member.memberColor === 'Electric Purple' ? '#8B5CF6, #A78BFA' :
                  member.memberColor === 'Mint Green' ? '#10B981, #6EE7B7' : '#6B7280, #9CA3AF'
                })`
              }}
            />
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{
                    backgroundColor: 
                      member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                      member.memberColor === 'Sky Blue' ? '#3B82F6' :
                      member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                      member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
                  }}
                />
                Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-700">Birthday:</span> 
                  <span className="ml-2 text-gray-600">{member.birthday}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-700">Origin:</span> 
                  <span className="ml-2 text-gray-600">{member.origin}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-700">Blood Type:</span> 
                  <span className="ml-2 text-gray-600">{member.bloodType}</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-700">Member Color:</span> 
                  <span className="ml-2 text-gray-600">{member.memberColor}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{
                    backgroundColor: 
                      member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                      member.memberColor === 'Sky Blue' ? '#3B82F6' :
                      member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                      member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
                  }}
                />
                About
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed text-base">{member.detailedBio}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{
                    backgroundColor: 
                      member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                      member.memberColor === 'Sky Blue' ? '#3B82F6' :
                      member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                      member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
                  }}
                />
                Skills
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${
                          member.memberColor === 'Golden Yellow' ? '#F59E0B, #FCD34D' :
                          member.memberColor === 'Cherry Blossom Pink' ? '#EC4899, #F472B6' :
                          member.memberColor === 'Sky Blue' ? '#3B82F6, #60A5FA' :
                          member.memberColor === 'Electric Purple' ? '#8B5CF6, #A78BFA' :
                          member.memberColor === 'Mint Green' ? '#10B981, #6EE7B7' : '#6B7280, #9CA3AF'
                        })`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{
                    backgroundColor: 
                      member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                      member.memberColor === 'Sky Blue' ? '#3B82F6' :
                      member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                      member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280'
                  }}
                />
                Favorites
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-3 text-base">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-20">Food:</span> 
                    <span className="text-gray-600">{member.favorites.food}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-20">Color:</span> 
                    <span className="text-gray-600">{member.favorites.color}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-20">Hobby:</span> 
                    <span className="text-gray-600">{member.favorites.hobby}</span>
                  </div>
                </div>
              </div>
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-8 pt-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-4 tracking-wider">
              MEMBERS
            </h1>
            <p className="text-xl text-gray-600 font-medium tracking-wide">Meet the talented members of H5-Revolution</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full shadow-lg" />
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400 rounded-full shadow-lg" />
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full" />
          </div>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12 max-w-7xl">
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

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-8">
          {members.map((member, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 shadow-lg ${
                activeMember === index 
                  ? 'scale-150 shadow-xl' 
                  : 'hover:scale-125'
              }`}
              style={{
                backgroundColor: activeMember === index 
                  ? (member.memberColor === 'Golden Yellow' ? '#F59E0B' :
                     member.memberColor === 'Cherry Blossom Pink' ? '#EC4899' :
                     member.memberColor === 'Sky Blue' ? '#3B82F6' :
                     member.memberColor === 'Electric Purple' ? '#8B5CF6' :
                     member.memberColor === 'Mint Green' ? '#10B981' : '#6B7280')
                  : '#D1D5DB',
                boxShadow: activeMember === index 
                  ? `0 8px 25px ${
                      member.memberColor === 'Golden Yellow' ? '#F59E0B40' :
                      member.memberColor === 'Cherry Blossom Pink' ? '#EC489940' :
                      member.memberColor === 'Sky Blue' ? '#3B82F640' :
                      member.memberColor === 'Electric Purple' ? '#8B5CF640' :
                      member.memberColor === 'Mint Green' ? '#10B98140' : '#6B728040'
                    }`
                  : '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setActiveMember(index)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 w-full max-w-4xl shadow-lg mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">H5-Revolution Stats</h2>
            <p className="text-gray-600">Discover more about our amazing group</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="font-semibold text-gray-800">Members</h3>
              <p className="text-sm text-gray-600">Talented Artists</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">∞</span>
              </div>
              <h3 className="font-semibold text-gray-800">Dreams</h3>
              <p className="text-sm text-gray-600">Unlimited Potential</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">♪</span>
              </div>
              <h3 className="font-semibold text-gray-800">Music</h3>
              <p className="text-sm text-gray-600">Our Passion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">♥</span>
              </div>
              <h3 className="font-semibold text-gray-800">Fans</h3>
              <p className="text-sm text-gray-600">Our Inspiration</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Want to know more about our members?</p>
          <p className="text-sm text-gray-500">Click on any member card to discover their detailed profile!</p>
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