import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaStar } from "react-icons/fa";
import SEO from "../components/SEO";

const membersData = {
  "yuki-tanaka": { name: "Yuki Tanaka", role: "Leader & Main Vocalist", age: 21, color: "Pink", colorCode: "bg-pink-500", hexColor: "#ec4899", quote: "I will sing until my voice reaches the stars!", image: "https://placehold.co/600x800/fdf2f8/db2777?text=Yuki" },
  "sakura-yamamoto": { name: "Sakura Yamamoto", role: "Main Dancer", age: 20, color: "Cyan", colorCode: "bg-cyan-500", hexColor: "#06b6d4", quote: "Dancing is my way of speaking to the world.", image: "https://placehold.co/600x800/ecfeff/06b6d4?text=Sakura" },
  "mika-sato": { name: "Mika Sato", role: "Vocalist & Visual", age: 19, color: "Orange", colorCode: "bg-orange-500", hexColor: "#f97316", quote: "I want to be the reason someone smiles today.", image: "https://placehold.co/600x800/fff7ed/f97316?text=Mika" },
  "rio-watanabe": { name: "Rio Watanabe", role: "Lead Rapper", age: 22, color: "Purple", colorCode: "bg-purple-500", hexColor: "#a855f7", quote: "Let my rhythm guide your heartbeat.", image: "https://placehold.co/600x800/faf5ff/a855f7?text=Rio" },
  "hana-ito": { name: "Hana Ito", role: "Lead Dancer & Sub Vocalist", age: 18, color: "Yellow", colorCode: "bg-yellow-400", hexColor: "#eab308", quote: "Sunshine follows wherever we go!", image: "https://placehold.co/600x800/fefce8/eab308?text=Hana" }
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-gray-800">Member not found</h2>
        <button onClick={() => navigate("/members")} className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full font-bold">Back to Members</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter pb-24">
      <SEO title={`${member.name} - Profile`} description={`Profile detailed of ${member.name}`} />
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <Link to="/members" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 font-bold transition-all uppercase tracking-wider text-xs group">
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-pink-500 group-hover:translate-x-[-4px] transition-all">
            <FaArrowLeft size={12} />
          </div>
          Kembali ke Daftar Member
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ─── REMI CARD PHOTO AREA ─────────────────────────── */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 -z-10 blur-[100px] opacity-40 rounded-full" />
          
          <div className="w-full max-w-[450px] aspect-[10/14] bg-white rounded-[2.5rem] border-4 border-slate-50 shadow-2xl relative overflow-hidden group">
            {/* Corner Rank Top Left */}
            <div className="absolute top-8 left-8 flex flex-col items-center gap-1 z-20">
               <span className="text-3xl font-black text-slate-800" style={{ color: member.hexColor }}>{member.name.charAt(0)}</span>
               <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: member.hexColor }} />
            </div>

            {/* Corner Rank Bottom Right (Rotated) */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center gap-1 z-20 rotate-180">
               <span className="text-3xl font-black text-slate-800" style={{ color: member.hexColor }}>{member.name.charAt(0)}</span>
               <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: member.hexColor }} />
            </div>

            {/* Main Content Area */}
            <div className="h-full w-full flex flex-col items-center justify-center p-12">
               {/* stylized circle border */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border-4 rounded-full opacity-10" style={{ borderColor: member.hexColor }} />
               
               {/* Large Name Display (Center Art) */}
               <div className="text-center z-10">
                  <h2 className="text-8xl font-black mb-0 leading-none tracking-tighter" style={{ color: member.hexColor }}>
                     {member.name.split(' ')[0]}
                  </h2>
               </div>

               {/* Profile Image (Optional hover peak) */}
               <img 
                 src={member.image} 
                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" 
                 alt={member.name}
               />

               {/* Bottom Social Floating Icons */}
               <div className="absolute bottom-10 left-10 right-10 flex justify-center gap-4 z-20">
                  <a href="#" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:scale-110 transition-all border border-slate-100">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all border border-slate-100">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all border border-slate-100">
                    <FaYoutube />
                  </a>
               </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50 to-transparent opacity-50" />
          </div>
        </div>

        {/* ─── BIO AREA ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-100 text-gray-500 font-black text-[10px] tracking-widest uppercase rounded-full shadow-sm">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: member.hexColor }} />
               Active Member
            </span>
            <span className="flex items-center gap-1 text-yellow-400 font-black text-xs uppercase tracking-widest">
              <FaStar /> Top Rank
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-800 uppercase tracking-tighter mb-2 leading-[0.8] drop-shadow-sm font-outfit">
             {member.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-black mb-12 uppercase tracking-[0.2em] text-gray-400">
            {member.role}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all">
                <FaHeart className="absolute -top-4 -right-4 text-7xl text-pink-500/5 group-hover:text-pink-500/10 transition-colors" />
                <h3 className="font-black text-slate-800 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.hexColor }} />
                   Personal Data
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-400">AGE</span>
                    <span className="text-gray-800">{member.age} YEARS</span>
                  </li>
                  <li className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-400">HOBBIES</span>
                    <span className="text-gray-800">DANCING, SINGING</span>
                  </li>
                  <li className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-400">ZODIAC</span>
                    <span className="text-gray-800">PIESCES</span>
                  </li>
                </ul>
             </div>

             <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all">
                <h3 className="font-black text-slate-800 uppercase tracking-widest text-xs flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.hexColor }} />
                   Member Color
                </h3>
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-2xl shadow-lg border-2 border-white" style={{ backgroundColor: member.hexColor }} />
                   <div>
                      <p className="text-lg font-black text-slate-800 leading-none mb-1">{member.color}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Official Hue</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
             <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-gray-500">Message to Fans</h3>
             <p className="text-2xl md:text-3xl font-bold italic leading-tight">
                "{member.quote}"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
