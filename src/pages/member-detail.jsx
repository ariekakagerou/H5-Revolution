import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaStar } from "react-icons/fa";
import SEO from "../components/SEO";

const membersData = {
  "yuki-tanaka": { name: "Yuki Tanaka", role: "Leader & Main Vocalist", age: 21, color: "Pink", colorCode: "bg-pink-500", hexColor: "#ec4899", quote: "I will sing until my voice reaches the stars!", image: "https://placehold.co/600x800/180a36/ec4899?text=Yuki" },
  "sakura-yamamoto": { name: "Sakura Yamamoto", role: "Main Dancer", age: 20, color: "Cyan", colorCode: "bg-cyan-500", hexColor: "#06b6d4", quote: "Dancing is my way of speaking to the world.", image: "https://placehold.co/600x800/180a36/06b6d4?text=Sakura" },
  "mika-sato": { name: "Mika Sato", role: "Vocalist & Visual", age: 19, color: "Orange", colorCode: "bg-orange-500", hexColor: "#f97316", quote: "I want to be the reason someone smiles today.", image: "https://placehold.co/600x800/180a36/f97316?text=Mika" },
  "rin-hayashi": { name: "Rin Hayashi", role: "Main Rapper & Dancer", age: 22, color: "Purple", colorCode: "bg-purple-500", hexColor: "#a855f7", quote: "Let my rhythm guide your heartbeat across the stage.", image: "https://placehold.co/600x800/180a36/a855f7?text=Rin" },
  "rio-watanabe": { name: "Rio Watanabe", role: "Lead Rapper", age: 22, color: "Purple", colorCode: "bg-purple-500", hexColor: "#a855f7", quote: "Let my rhythm guide your heartbeat.", image: "https://placehold.co/600x800/180a36/a855f7?text=Rio" },
  "hana-kimura": { name: "Hana Kimura", role: "Vocalist & Maknae", age: 18, color: "Mint Green", colorCode: "bg-emerald-500", hexColor: "#10b981", quote: "Sunshine follows wherever our stage lights shine!", image: "https://placehold.co/600x800/180a36/10b981?text=Hana" },
  "hana-ito": { name: "Hana Ito", role: "Lead Dancer & Sub Vocalist", age: 18, color: "Yellow", colorCode: "bg-yellow-400", hexColor: "#eab308", quote: "Sunshine follows wherever we go!", image: "https://placehold.co/600x800/180a36/eab308?text=Hana" }
};

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = membersData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0a1e] text-white">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Member not found</h2>
        <button onClick={() => navigate("/members")} className="shimmer-btn px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-sm font-black text-xs uppercase tracking-widest shadow-idol-pink">
          Back to Members
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-inter text-white pb-24 relative overflow-hidden">
      <SEO title={`${member.name} - Profile`} description={`Detailed profile of ${member.name}`} />
      
      {/* Background ambient glow matching member color */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ backgroundColor: member.hexColor }}
      />
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <Link to="/members" className="inline-flex items-center gap-2 text-white/50 hover:text-pink-400 font-bold transition-all uppercase tracking-widest text-xs group">
          <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 group-hover:-translate-x-1 transition-all">
            <FaArrowLeft size={11} />
          </div>
          Kembali ke Daftar Member
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* ─── PHOTO CARD AREA ─────────────────────────── */}
        <div className="relative flex justify-center lg:justify-start">
          <div 
            className="w-full max-w-[340px] sm:max-w-[420px] aspect-[10/14] bg-[#12082a] rounded-sm border relative overflow-hidden group shadow-2xl transition-all duration-500"
            style={{ 
              borderColor: `${member.hexColor}40`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${member.hexColor}25`
            }}
          >
            {/* Corner Rank Top Left */}
            <div className="absolute top-6 left-6 flex flex-col items-center gap-1 z-20">
               <span className="text-2xl font-black font-mono leading-none" style={{ color: member.hexColor }}>{member.name.charAt(0)}</span>
               <div className="w-3 h-3 rounded-sm shadow-sm" style={{ backgroundColor: member.hexColor, boxShadow: `0 0 8px ${member.hexColor}` }} />
            </div>

            {/* Corner Rank Bottom Right (Rotated) */}
            <div className="absolute bottom-6 right-6 flex flex-col items-center gap-1 z-20 rotate-180">
               <span className="text-2xl font-black font-mono leading-none" style={{ color: member.hexColor }}>{member.name.charAt(0)}</span>
               <div className="w-3 h-3 rounded-sm shadow-sm" style={{ backgroundColor: member.hexColor, boxShadow: `0 0 8px ${member.hexColor}` }} />
            </div>

            {/* Main Content Area */}
            <div className="h-full w-full flex flex-col items-center justify-center p-8 relative">
               <div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border-2 rounded-full opacity-20 animate-pulse" 
                 style={{ borderColor: member.hexColor }} 
               />
               
               <div className="text-center z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] block mb-2" style={{ color: `${member.hexColor}aa` }}>
                    H5-REVOLUTION IDOL
                  </span>
                  <h2 className="text-5xl sm:text-7xl font-black mb-0 leading-none tracking-tighter uppercase font-outfit" style={{ color: member.hexColor, textShadow: `0 0 30px ${member.hexColor}80` }}>
                     {member.name.split(' ')[0]}
                  </h2>
               </div>

               <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-3 z-20">
                  <a href="#" className="w-9 h-9 bg-white/5 hover:bg-pink-500/20 rounded-sm flex items-center justify-center text-white/50 hover:text-pink-400 hover:scale-110 transition-all border border-white/10 hover:border-pink-500/50">
                    <FaInstagram size={14} />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/5 hover:bg-cyan-500/20 rounded-sm flex items-center justify-center text-white/50 hover:text-cyan-400 hover:scale-110 transition-all border border-white/10 hover:border-cyan-500/50">
                    <FaTwitter size={14} />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/5 hover:bg-red-500/20 rounded-sm flex items-center justify-center text-white/50 hover:text-red-400 hover:scale-110 transition-all border border-white/10 hover:border-red-500/50">
                    <FaYoutube size={14} />
                  </a>
               </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          </div>
        </div>

        {/* ─── BIO AREA ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 font-bold text-[10px] tracking-widest uppercase rounded-sm">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: member.hexColor, boxShadow: `0 0 6px ${member.hexColor}` }} />
               Active Stage Idol
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-mono font-bold text-xs uppercase tracking-widest">
              <FaStar size={11} /> Top Rank
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2 leading-none font-outfit">
             {member.name}
          </h1>
          <h2 className="text-sm md:text-base font-mono font-bold mb-6 md:mb-8 uppercase tracking-widest" style={{ color: member.hexColor }}>
            {member.role}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
             <div className="bg-[#12082a]/80 backdrop-blur-md p-4 md:p-6 rounded-sm border border-white/10 relative group hover:border-pink-500/40 transition-all">
                <FaHeart className="absolute -top-3 -right-3 text-5xl text-pink-500/5 pointer-events-none" />
                <h3 className="font-black text-white uppercase tracking-widest text-[11px] mb-3 md:mb-4 flex items-center gap-2 font-mono">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.hexColor }} />
                   Dossier Data
                </h3>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-white/40 font-bold uppercase tracking-wider">Age</span>
                    <span className="font-mono font-bold text-white">{member.age} YEARS</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-white/40 font-bold uppercase tracking-wider">Hobbies</span>
                    <span className="font-bold text-white text-right">DANCING, SINGING</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/40 font-bold uppercase tracking-wider">Zodiac</span>
                    <span className="font-bold text-white">PISCES</span>
                  </li>
                </ul>
             </div>

             <div className="bg-[#12082a]/80 backdrop-blur-md p-4 md:p-6 rounded-sm border border-white/10 flex flex-col justify-center gap-3 hover:border-pink-500/40 transition-all">
                <h3 className="font-black text-white uppercase tracking-widest text-[11px] flex items-center gap-2 font-mono">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.hexColor }} />
                   Member Color
                </h3>
                <div className="flex items-center gap-4">
                   <div 
                     className="w-12 h-12 md:w-14 md:h-14 rounded-sm border border-white/40 shadow-lg flex-shrink-0" 
                     style={{ backgroundColor: member.hexColor, boxShadow: `0 0 20px ${member.hexColor}60` }} 
                   />
                   <div>
                      <p className="text-base md:text-lg font-black text-white leading-none mb-1 uppercase tracking-tight">{member.color}</p>
                      <p className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Stage Signature Hue</p>
                   </div>
                </div>
             </div>
          </div>

          <div 
            className="p-5 md:p-8 rounded-sm text-white shadow-2xl relative overflow-hidden border"
            style={{ 
              background: 'linear-gradient(135deg, #180a36 0%, #0f0a1e 100%)',
              borderColor: `${member.hexColor}40`,
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${member.hexColor}20`
            }}
          >
             <h3 className="font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-3 text-pink-400">
               Message to Fans
             </h3>
             <p className="text-lg md:text-xl lg:text-2xl font-black italic leading-snug tracking-tight">
                "{member.quote}"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
