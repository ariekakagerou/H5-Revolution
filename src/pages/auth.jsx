import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUser, FaLock, FaEnvelope, FaGoogle, FaArrowRight } from "react-icons/fa";
import SEO from "../components/SEO";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center p-4 relative overflow-hidden font-inter">
      <SEO title={isLogin ? "Login" : "Register"} description="Login to your H5-Revolution Fan Club account." />
      
      {/* ─── Animated Abstract Background ──────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/30 rounded-full blur-[100px] animate-orb"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/30 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* ─── Auth Card ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-md animate-fade-up">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-pink-200/50 border border-pink-100 overflow-hidden">
          
          <div className="p-8 pb-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-pink-200 mb-6 group hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-2xl tracking-tight">H5</span>
            </div>
            <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2 font-outfit">
              {isLogin ? "Welcome Back" : "Join Fan Club"}
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              {isLogin 
                ? "Sign in to access exclusive member content." 
                : "Create an account to join the H5-Revolution."}
            </p>
          </div>

          <div className="px-8 pb-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field (Only for Register) */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isLogin ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <FaUser className="text-pink-300 group-focus-within:text-pink-500 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Username" 
                    className="w-full bg-pink-50/50 border border-pink-100 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 block pl-11 p-3.5 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-pink-300 group-focus-within:text-pink-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  autoComplete="email"
                  className="w-full bg-pink-50/50 border border-pink-100 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 block pl-11 p-3.5 transition-all outline-none"
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <FaLock className="text-pink-300 group-focus-within:text-pink-500 transition-colors" />
                </div>
                <input 
                  type="password" 
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full bg-pink-50/50 border border-pink-100 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 block pl-11 p-3.5 transition-all outline-none"
                />
              </div>
              
              {/* Extra tools (Forgot Pass / Terms) */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 rounded focus:ring-pink-500" />
                  <label htmlFor="remember" className="ml-2 text-xs font-medium text-gray-500">Remember me</label>
                </div>
                {isLogin && (
                  <a href="#" className="text-xs font-bold text-pink-500 hover:text-orange-500 transition-colors">Forgot Password?</a>
                )}
              </div>

              <button className="shimmer-btn w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black tracking-widest uppercase text-sm rounded-xl px-4 py-4 hover:shadow-lg hover:shadow-pink-300/40 transition-all duration-300 flex justify-center items-center gap-2 group">
                {isLogin ? "Log In" : "Sign Up"}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="w-full h-px bg-gray-200"></span>
              <span className="text-xs text-gray-400 font-bold uppercase shrink-0">Or continue with</span>
              <span className="w-full h-px bg-gray-200"></span>
            </div>

            <div className="mt-6">
               <button className="w-full bg-white border border-gray-200 text-gray-600 font-bold text-sm rounded-xl px-4 py-3.5 hover:bg-gray-50 hover:border-pink-200 transition-all duration-300 flex justify-center items-center gap-3">
                 <FaGoogle className="text-red-500 text-lg" />
                 Google
               </button>
            </div>

          </div>
          
          {/* Toggle Footer */}
          <div className="bg-pink-50 p-6 text-center border-t border-pink-100">
             <p className="text-sm text-gray-500 font-medium">
               {isLogin ? "Don't have an account?" : "Already a fan?"}
               <button 
                 onClick={toggleAuthMode}
                 className="ml-2 text-pink-500 font-black hover:text-orange-500 transition-colors uppercase tracking-wide text-xs focus:outline-none"
               >
                 {isLogin ? "Join Now" : "Log In Here"}
               </button>
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
