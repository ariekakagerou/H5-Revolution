import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock, FaFileContract } from "react-icons/fa";
import SEO from "../components/SEO";

const Legal = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-800 pb-24 pt-32">
      <SEO title="Legal - H5-Revolution" description="Terms of Service and Privacy Policy for H5-Revolution fans." />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
           <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 font-outfit">Legal <span className="text-pink-500">Center</span></h1>
           <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Protecting the revolution and its fans</p>
        </motion.div>

        <div className="space-y-8">
           {/* Section 1 */}
           <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center">
                    <FaFileContract size={20} />
                 </div>
                 <h2 className="text-2xl font-black uppercase tracking-tight">Terms of Service</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-4">
                 <p>Welcome to H5-Revolution. By accessing our site, you agree to comply with our community standards. We aim to provide a safe and positive environment for all fans.</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Tickets are for personal use only and cannot be resold without permission.</li>
                    <li>Photography is prohibited during theater performances unless stated otherwise.</li>
                    <li>Respectful conduct is expected towards all members and staff.</li>
                 </ul>
              </div>
           </div>

           {/* Section 2 */}
           <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
                    <FaUserLock size={20} />
                 </div>
                 <h2 className="text-2xl font-black uppercase tracking-tight">Privacy Policy</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-4">
                 <p>Your privacy is our priority. We only collect data necessary to provide you with the best experience, such as ticketing info and fanclub preferences.</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>We do not sell your personal information to third parties.</li>
                    <li>Payment information is encrypted and handled by world-class providers.</li>
                    <li>You can request to delete your fan profile at any time.</li>
                 </ul>
              </div>
           </div>

           {/* Section 3 */}
           <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center">
                    <FaShieldAlt size={20} />
                 </div>
                 <h2 className="text-2xl font-black uppercase tracking-tight">Cookie Policy</h2>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                 We use essential cookies to keep you logged in and functional cookies to remember your language and theme preferences. By continuing to use our site, you agree to our use of these simple cookies.
              </p>
           </div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Last Updated: April 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
