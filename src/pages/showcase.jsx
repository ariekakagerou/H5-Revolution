import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaComment, FaShareAlt, FaSearch, FaChevronRight, FaStar, FaFacebookF, FaTwitter, FaPlay } from "react-icons/fa";
import SEO from "../components/SEO";

/**
 * Showcase Component
 * Redesigned Gallery view based on user-provided design.
 * Features a two-column layout: Masonry-style grid on the left, sticky details on the right.
 */
const Showcase = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ["All", "Stage", "Behind the Scenes", "Fan Events"];

  const photos = [
    {
      id: 1,
      category: "Stage",
      title: "Summer Live Concert in Tokyo Dome!",
      description: "Amazing live performance by H5-R at the Summer Live Concert in Tokyo Dome!",
      likes: 928,
      comments: 86,
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
      featured: true
    },
    {
      id: 2,
      category: "Behind the Scenes",
      title: "Recording Session",
      description: "Getting ready for our next big hit.",
      likes: 645,
      comments: 42,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80"
    },
    {
      id: 3,
      category: "Fan Events",
      title: "First Fan Meeting",
      description: "Seeing our fans for the first time was magical.",
      likes: 1205,
      comments: 156,
      image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?w=800&q=80"
    },
    {
      id: 4,
      category: "Stage",
      title: "Neon City Tour",
      description: "The energy in this city is incomparable.",
      likes: 832,
      comments: 74,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
    },
    {
      id: 5,
      category: "Behind the Scenes",
      title: "Morning Rehearsal",
      description: "Practice makes perfect.",
      likes: 521,
      comments: 31,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
    },
    {
      id: 6,
      category: "Stage",
      title: "Vocal Power",
      description: "One of our most powerful vocal performances yet.",
      likes: 954,
      comments: 88,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80"
    },
    {
      id: 7,
      category: "Fan Events",
      title: "Handshake Event",
      description: "Connecting with our fans one by one.",
      likes: 1542,
      comments: 210,
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
    },
    {
      id: 8,
      category: "Stage",
      title: "Revolution Finale",
      description: "The grand finale of our world tour.",
      likes: 3500,
      comments: 420,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    }
  ];

  // Set initial selected photo to the first one or a featured one
  useEffect(() => {
    setSelectedPhoto(photos[0]);
  }, []);

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = activeTab === "All" || photo.category === activeTab;
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          photo.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <SEO title="Gallery" description="Explore the visual journey of H5-Revolution." />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ── Header Section ──────────────────────────────── */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Gallery</h1>
          <div className="flex gap-1 text-orange-400">
             <FaStar size={14} className="animate-pulse" />
             <FaStar size={10} className="mt-2" />
          </div>
        </div>

        {/* ── Filters & Search ────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 p-1 flex-1 max-w-2xl overflow-hidden">
             <div className="flex-1 flex overflow-x-auto no-scrollbar">
                {categories.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                      activeTab === tab 
                      ? "bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-600" 
                      : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {activeTab === tab && <div className="absolute inset-0 bg-yellow-400 h-1 bottom-0"></div>}
                    {tab}
                  </button>
                ))}
             </div>
             <button className="p-3 text-gray-400 hover:text-pink-500">
                <FaChevronRight size={14} />
             </button>
          </div>

          <div className="relative group flex-shrink-0 w-full md:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* ── Main content grid ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              <AnimatePresence>
                {filteredPhotos.map((photo) => (
                  <motion.div
                    layout
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => setSelectedPhoto(photo)}
                    className={`break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 ${selectedPhoto?.id === photo.id ? 'ring-4 ring-pink-500 ring-offset-4' : ''}`}
                  >
                    <img 
                      src={photo.image} 
                      alt={photo.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                       <p className="text-white font-bold text-sm">{photo.title}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-4">
               <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black rounded-full flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg shadow-orange-100">
                  View More <FaChevronRight size={12} />
               </button>
            </div>
          </div>

          {/* Right Column: Sticky Detail */}
          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              {selectedPhoto && (
                <motion.div
                  key={selectedPhoto.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100"
                >
                  <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden group">
                     {/* Close button (styled as X) */}
                     <button className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs hover:bg-black/60 transition-colors">
                        ✕
                     </button>
                     <img 
                      src={selectedPhoto.image} 
                      alt={selectedPhoto.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-20">
                       <h3 className="text-white text-xl font-black mb-1 drop-shadow-md">{selectedPhoto.title}</h3>
                       <p className="text-white/80 text-xs font-medium">{selectedPhoto.description.split('!')[0]}!</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                      {selectedPhoto.description}
                    </p>

                    <div className="flex items-center gap-6 mb-8 py-4 border-y border-slate-50">
                      <div className="flex items-center gap-2">
                        <FaHeart className="text-yellow-400" />
                        <span className="text-sm font-bold text-slate-700">{selectedPhoto.likes} Likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaComment className="text-orange-300" />
                        <span className="text-sm font-bold text-slate-700">{selectedPhoto.comments} Comments</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                       <button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-orange-100 group">
                          Buy Ticket Now 
                          <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                       <div className="flex items-center gap-3">
                          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">
                            <FaFacebookF size={14} />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-cyan-50 hover:text-cyan-500 transition-colors">
                            <FaTwitter size={14} />
                          </button>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Visual sparkle bottom decorative */}
            <div className="mt-8 flex justify-center gap-12 text-orange-200 opacity-40">
               <FaStar size={16} />
               <FaStar size={24} className="mt-4" />
               <FaStar size={18} />
            </div>
          </div>

        </div>

        {/* ── Footer decorative sparkles ───────────────────── */}
        <div className="mt-20 flex items-center justify-center gap-2 text-pink-200">
           <div className="w-12 h-px bg-current"></div>
           <FaStar size={10} />
           <div className="w-12 h-px bg-current"></div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Showcase;