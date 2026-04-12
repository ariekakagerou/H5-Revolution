import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGhost, FaHome, FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-100 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="relative inline-block mb-8">
           <h1 className="text-[12rem] md:text-[18rem] font-black text-slate-50 leading-none select-none">404</h1>
           <div className="absolute inset-0 flex items-center justify-center">
              <FaGhost className="text-pink-500 text-6xl md:text-8xl animate-bounce" />
           </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter mb-4">
           Lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Revolution?</span>
        </h2>
        <p className="text-gray-400 font-bold max-w-sm mx-auto mb-10 leading-relaxed uppercase tracking-widest text-[10px]">
           The page you are looking for has been moved or doesn't exist. Let's get you back to the stage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link 
             to="/" 
             className="px-8 py-4 bg-slate-900 text-white font-black rounded-full flex items-center gap-2 hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-xl"
           >
              <FaHome /> Back to Home
           </Link>
           <button 
             onClick={() => window.history.back()}
             className="px-8 py-4 bg-white border border-slate-100 text-slate-500 font-black rounded-full flex items-center gap-2 hover:bg-slate-50 transition-all text-xs uppercase tracking-widest shadow-sm"
           >
              <FaArrowLeft /> Go Back
           </button>
        </div>
      </motion.div>

      {/* Footer Meta */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
         <p className="text-[10px] font-black text-slate-200 uppercase tracking-[0.5em]">H5-Revolution Official Site</p>
      </div>
    </div>
  );
};

export default NotFound;
