import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearchPlus, 
  FaCheck, 
  FaStar, 
  FaMinus, 
  FaPlus, 
  FaShoppingCart, 
  FaHeart, 
  FaRegHeart, 
  FaShippingFast, 
  FaShieldAlt, 
  FaAward, 
  FaFileAlt, 
  FaCogs, 
  FaTruck, 
  FaArrowRight, 
  FaPalette,
  FaCheckCircle
} from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import SEO from "../components/SEO";

// Database simulasi produk
const productsData = [
  { 
    id: 1, 
    name: "H5-REVOLUTION OFFICIAL LIGHTSTICK V2", 
    category: "LIGHTSTICK", 
    price: "$45.00", 
    rating: "4.9 / 5",
    reviewsCount: "6,532 Official Verified",
    tag: "NEW +", 
    desc: "The official H5-Revolution lightstick V2. Features Bluetooth syncing for concert interaction and member theme colors, letting you light up the stage in your favorite member's color.",
    fullDesc: "The H5-Revolution Official Lightstick V2 is the latest generation lightstick designed for a more immersive concert experience. Equipped with Bluetooth syncing, it can change colors and lighting effects in real-time during official H5-Revolution concerts and events.\n\nChoose your favorite member's theme color and show your support at every stage!",
    features: [
      "Bluetooth Sync (Official Concert Mode)",
      "Member Theme Colors",
      "Multiple Lighting Effects",
      "Long-Lasting LED",
      "Ergonomic & Premium Design",
      "Official H5-Revolution Merchandise"
    ]
  },
  { 
    id: 2, 
    name: "H5-Revolution Official Photobook", 
    category: "ALBUM & BOOKS", 
    price: "$32.00", 
    rating: "4.9 / 5",
    reviewsCount: "3,120 Official Verified",
    tag: "NEW +", 
    desc: "Official concert behind-the-scenes photobook featuring exclusive photos, member interviews, and holographic stickers.",
    fullDesc: "Experience the journey of H5-Revolution with the official commemorative photobook. Featuring 160 pages of glossy high-definition stage captures, backstage rehearsals, and intimate handwritten member messages.",
    features: [
      "160 High-Gloss Full Color Pages",
      "Hardcover with Holographic Embossing",
      "2 Random Rare Photocards Included",
      "Exclusive Handwritten Messages",
      "Official Concert Tour Special Edition",
      "Authentic Hologram Verification Sticker"
    ]
  },
  { 
    id: 3, 
    name: "H5-Revolution Official T-Shirt V2", 
    category: "APPAREL", 
    price: "$28.00", 
    rating: "4.8 / 5",
    reviewsCount: "4,821 Official Verified",
    tag: "NEW +", 
    desc: "100% Heavyweight combed cotton stage tour tee with metallic cyber neon screenprint.",
    fullDesc: "Crafted for comfort during intense concerts and casual streetwear style. Features durable double-stitched seams and official H5-Revolution tour emblems.",
    features: [
      "100% Premium Heavyweight Cotton (240 GSM)",
      "Breathable & Pre-shrunk Fabric",
      "Fade-Resistant Cyber Glow Screenprint",
      "Relaxed Modern Idol Stage Fit",
      "Official Woven Hem Label",
      "Machine Washable & Durable"
    ]
  },
  { 
    id: 4, 
    name: "H5-Revolution Acrylic Keychain", 
    category: "ACCESSORIES", 
    price: "$12.00", 
    rating: "4.9 / 5",
    reviewsCount: "2,490 Official Verified",
    tag: "NEW +", 
    desc: "Official gold-rimmed acrylic emblem keychain with protective scratch-resistant coating.",
    fullDesc: "Bring H5-Revolution everywhere you go. Featuring a gold swivel lobster clasp and high-clarity acrylic with double-sided idol typography.",
    features: [
      "High-Clarity Scratch-Resistant Acrylic",
      "Gold-Plated Metal Alloy Hardware",
      "Double-Sided Cyber Emblem Artwork",
      "Compact & Lightweight Bag Charm",
      "Official Idol Goods Backing Card",
      "Collectible Limited Edition"
    ]
  }
];

// Member Theme Colors
const memberColors = [
  { id: "default", name: "Default (H5)", color: "from-pink-500 to-orange-400", hex: "#ec4899", ring: "ring-pink-500", glow: "rgba(236,72,153,0.8)" },
  { id: "yuki", name: "Yuki (Pink)", color: "from-pink-500 to-pink-600", hex: "#ec4899", ring: "ring-pink-500", glow: "rgba(236,72,153,0.8)" },
  { id: "airi", name: "Airi (Blue)", color: "from-sky-400 to-blue-500", hex: "#38bdf8", ring: "ring-sky-400", glow: "rgba(56,189,248,0.8)" },
  { id: "sora", name: "Sora (Purple)", color: "from-purple-500 to-indigo-600", hex: "#a855f7", ring: "ring-purple-500", glow: "rgba(168,85,247,0.8)" },
  { id: "mika", name: "Mika (Yellow)", color: "from-amber-300 to-yellow-500", hex: "#facc15", ring: "ring-yellow-400", glow: "rgba(250,204,21,0.8)" },
  { id: "rin", name: "Rin (Green)", color: "from-emerald-400 to-teal-500", hex: "#34d399", ring: "ring-emerald-400", glow: "rgba(52,211,153,0.8)" }
];

// Related items for bottom right
const relatedProducts = [
  {
    id: 3,
    name: "H5-Revolution Official T-Shirt V2",
    price: "$28.00",
    tag: "NEW +",
    image: "https://placehold.co/400x400/180a36/f97316?text=Tour+Tee+V2",
    type: "tshirt"
  },
  {
    id: 2,
    name: "H5-Revolution Official Photobook",
    price: "$32.00",
    tag: "NEW +",
    image: "https://placehold.co/400x400/180a36/06b6d4?text=Photobook",
    type: "photobook"
  },
  {
    id: 4,
    name: "H5-Revolution Acrylic Keychain",
    price: "$12.00",
    tag: "NEW +",
    image: "https://placehold.co/400x400/180a36/ec4899?text=Keychain",
    type: "keychain"
  }
];

/* ─── Interactive Lightstick SVG Graphic ───────────────── */
const LightstickGraphic = ({ activeColor, viewIndex = 0 }) => {
  const currentHex = activeColor.hex;

  // Render view depending on thumbnail selected
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
      {/* Background silk / glow aura */}
      <div 
        className="absolute w-[70%] h-[70%] rounded-full blur-[70px] opacity-40 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: currentHex }}
      />

      {viewIndex === 0 && (
        /* View 0: Full Set (Lightstick + Official Box) */
        <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
          {/* Packaging Box in background */}
          <div className="absolute right-6 sm:right-10 top-6 sm:top-8 w-32 sm:w-44 h-48 sm:h-64 bg-gradient-to-br from-[#1c1829] via-[#120d20] to-[#0a0614] rounded-xl shadow-2xl border border-white/10 p-3 sm:p-4 flex flex-col justify-between transform rotate-2">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest text-amber-400 font-outfit">H5</span>
              <span className="text-[8px] tracking-widest text-white/40 uppercase font-mono">EDITION V2</span>
            </div>
            <div className="text-center my-auto">
              <div className="text-sm sm:text-lg font-black text-white/90 font-outfit uppercase tracking-tighter">
                H5<span className="text-amber-400">.</span>
              </div>
              <p className="text-[7px] sm:text-[8px] text-amber-400/80 uppercase tracking-[0.2em] font-bold">
                OFFICIAL LIGHTSTICK
              </p>
              <p className="text-[6px] sm:text-[7px] text-white/30 uppercase tracking-widest mt-0.5">
                VER. 2.0
              </p>
            </div>
            {/* Box diagonal gold ribbon */}
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          </div>

          {/* Lightstick Standing Foreground */}
          <div className="relative z-10 flex flex-col items-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Glowing Crystal Orb Dome */}
            <div 
              className="relative w-28 sm:w-36 h-28 sm:h-36 rounded-full border-2 border-white/60 shadow-2xl flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-500"
              style={{
                background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, ${currentHex}55 45%, ${currentHex}bb 80%, rgba(15,10,30,0.9) 100%)`,
                boxShadow: `0 0 45px ${currentHex}aa, inset 0 0 25px rgba(255,255,255,0.6)`
              }}
            >
              {/* Inner glowing 3D H5 emblem */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-black italic tracking-tighter text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] font-outfit">
                  H5
                </span>
                <span className="text-[6px] sm:text-[7px] font-black uppercase tracking-[0.3em] text-white/90 mt-[-2px]">
                  REVOLUTION
                </span>
              </div>
              {/* Crystal light reflection streaks */}
              <div className="absolute top-2 left-4 w-8 sm:w-10 h-4 bg-white/40 rounded-full blur-[1px] transform -rotate-45" />
            </div>

            {/* Lightstick Crown Gold Collar */}
            <div className="w-10 sm:w-12 h-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 rounded-sm shadow-md mt-[-4px] z-10 flex items-center justify-center border-t border-white/40">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>

            {/* Handle Body */}
            <div className="w-8 sm:w-10 h-28 sm:h-36 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-b-xl shadow-2xl flex flex-col items-center justify-between p-2 border border-white/10 relative">
              {/* LED power indicator light */}
              <div 
                className="w-1.5 h-10 rounded-full transition-colors duration-500 my-auto shadow-sm"
                style={{ backgroundColor: currentHex, boxShadow: `0 0 10px ${currentHex}` }}
              />
              <span className="text-[7px] font-black tracking-widest text-amber-400 font-outfit">H5-R</span>
              {/* Bottom end cap */}
              <div className="w-full h-1 bg-amber-400/60 rounded-full" />
            </div>

            {/* Lanyard hanging strap */}
            <div className="w-2 h-10 border-l-2 border-dashed border-amber-400/80 -rotate-12 translate-x-3 -translate-y-2 opacity-80" />
          </div>
        </div>
      )}

      {viewIndex === 1 && (
        /* View 1: Close-up Orb */
        <div className="relative w-56 sm:w-72 h-56 sm:h-72 rounded-full border-4 border-white/80 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-500 animate-pulse"
          style={{
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, ${currentHex}66 40%, ${currentHex}dd 85%, rgba(10,5,20,0.95) 100%)`,
            boxShadow: `0 0 60px ${currentHex}, inset 0 0 35px rgba(255,255,255,0.8)`
          }}
        >
          <div className="text-center select-none">
            <h1 className="text-5xl sm:text-7xl font-black italic tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] font-outfit">
              H5
            </h1>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-white/90 drop-shadow-md">
              REVOLUTION
            </p>
          </div>
        </div>
      )}

      {viewIndex === 2 && (
        /* View 2: Grip & Controls */
        <div className="w-44 sm:w-56 h-64 sm:h-80 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col items-center justify-between">
          <div className="w-16 h-3 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 rounded-full shadow-md" />
          <div className="flex flex-col items-center gap-4 my-auto">
            {/* Power Button */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gray-700 to-gray-950 border-2 border-white/20 flex items-center justify-center shadow-inner cursor-pointer hover:scale-105 transition-transform">
              <div 
                className="w-3.5 h-3.5 rounded-full transition-colors duration-500 shadow-md"
                style={{ backgroundColor: currentHex }}
              />
            </div>
            <span className="text-[9px] font-bold text-white/40 tracking-widest uppercase">CONCERT SYNC</span>
            {/* LED Status Bar */}
            <div 
              className="w-2.5 h-16 rounded-full transition-colors duration-500 shadow-lg"
              style={{ backgroundColor: currentHex, boxShadow: `0 0 15px ${currentHex}` }}
            />
          </div>
          <div className="text-[9px] font-black text-amber-400 tracking-widest font-outfit uppercase">
            BLUETOOTH 5.2 LE
          </div>
        </div>
      )}

      {viewIndex === 3 && (
        /* View 3: Lanyard Strap */
        <div className="w-full max-w-sm h-48 sm:h-64 bg-gradient-to-r from-[#181126] to-[#0f0a1e] rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-full py-4 bg-black border-y-2 border-amber-400/80 shadow-2xl flex items-center justify-center transform -rotate-6">
            <span className="text-xl sm:text-2xl font-black italic tracking-widest text-amber-400 font-outfit uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
              ★ HS-REVOLUTION ★
            </span>
          </div>
          <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-6">
            Reinforced Woven Nylon Official Concert Lanyard
          </p>
        </div>
      )}

      {viewIndex === 4 && (
        /* View 4: Package Contents */
        <div className="w-full max-w-md h-56 sm:h-64 bg-gradient-to-br from-[#1a122e] to-[#0d0718] rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-xs font-black text-amber-400 tracking-widest uppercase">Package Contents</span>
            <span className="text-[9px] text-white/40 uppercase">Genuine Sealed</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-white/80 py-2">
            <div className="flex items-center gap-2"><FaCheck className="text-pink-400" size={10} /> 1x Lightstick V2</div>
            <div className="flex items-center gap-2"><FaCheck className="text-pink-400" size={10} /> 1x Official Lanyard</div>
            <div className="flex items-center gap-2"><FaCheck className="text-pink-400" size={10} /> 1x User Manual</div>
            <div className="flex items-center gap-2"><FaCheck className="text-pink-400" size={10} /> 1x Warranty Card</div>
          </div>
          <div className="text-[9px] text-white/40 text-center tracking-widest uppercase border-t border-white/5 pt-2">
            Batteries (3x AAA) sold separately
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Main Product Detail Page ─────────────────────────── */
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(memberColors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description"); // "description" | "specifications" | "shipping"
  const [addedToast, setAddedToast] = useState(false);

  const product = productsData.find(p => p.id === parseInt(id)) || productsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveThumb(0);
  }, [id]);

  const thumbnails = [
    { title: "Main Set" },
    { title: "Glowing Dome" },
    { title: "Grip & Buttons" },
    { title: "Official Strap" },
    { title: "Box Package" }
  ];

  const handlePrevThumb = () => {
    setActiveThumb((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
  };

  const handleNextThumb = () => {
    setActiveThumb((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        selectedColor: selectedColor.name,
        price: product.price
      });
    }
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffdf0] dark:bg-[#0f0a1e] text-gray-900 dark:text-white font-inter transition-colors duration-300 pb-28 pt-24 sm:pt-28">
      <SEO 
        title={`${product.name} | Official Goods`} 
        description={product.desc} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Breadcrumb & Back ───────────────────────────── */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <Link 
            to="/shop" 
            className="w-8 h-8 rounded-lg bg-amber-100/80 hover:bg-amber-200/90 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white flex items-center justify-center transition-all shadow-sm"
          >
            <FaArrowLeft size={11} />
          </Link>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-gray-500 dark:text-white/50">
            <Link to="/shop" className="hover:text-pink-500 transition-colors uppercase">
              GOODS
            </Link>
            <span>&gt;</span>
            <span className="text-gray-900 dark:text-white uppercase font-bold">
              {product.category}
            </span>
          </div>
        </div>

        {/* ─── Main Top Layout: Gallery + Product Info ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Product Gallery Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Stage View Card */}
            <div className="relative bg-white dark:bg-[#130b24] rounded-3xl p-6 sm:p-10 border border-amber-100/60 dark:border-pink-900/30 shadow-xl shadow-pink-500/5 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center overflow-hidden group">
              
              {/* Top Badges */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {product.tag}
                </span>
              </div>

              <button 
                onClick={handleNextThumb}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-pink-500 hover:scale-105 transition-all shadow-sm"
                title="Next Preview"
              >
                <FaSearchPlus size={13} />
              </button>

              {/* Prev / Next Carousel Arrow Buttons */}
              <button 
                onClick={handlePrevThumb}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-black/60 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white shadow-md hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all cursor-pointer"
              >
                <FaChevronLeft size={12} />
              </button>

              <button 
                onClick={handleNextThumb}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-black/60 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white shadow-md hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all cursor-pointer"
              >
                <FaChevronRight size={12} />
              </button>

              {/* Interactive Graphic / Image Display */}
              <div className="w-full h-full flex items-center justify-center">
                <LightstickGraphic activeColor={selectedColor} viewIndex={activeThumb} />
              </div>
            </div>

            {/* Thumbnail Carousel Bar (5 thumbnails) */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  className={`aspect-[4/3] rounded-xl p-2 bg-white dark:bg-[#130b24] border transition-all duration-200 flex flex-col items-center justify-center relative overflow-hidden shadow-sm ${
                    activeThumb === idx 
                      ? "border-pink-500 ring-2 ring-pink-500/30 scale-[1.02]" 
                      : "border-gray-200/80 dark:border-white/10 hover:border-pink-300"
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full mb-1 transition-all"
                    style={{ backgroundColor: activeThumb === idx ? selectedColor.hex : "#9ca3af" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-bold text-gray-600 dark:text-white/60 text-center leading-tight line-clamp-1">
                    {thumb.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Official Goods Badge */}
            <div className="mb-3">
              <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-500 border border-pink-400/50 bg-pink-50/80 dark:bg-pink-950/30">
                OFFICIAL GOODS
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2 font-outfit leading-tight">
              {product.name}
            </h1>

            {/* Rating & Verified badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400 text-xs gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-700 dark:text-white/80 font-mono">
                {product.rating} ({product.reviewsCount})
              </span>
              <FaCheckCircle className="text-pink-500 text-xs ml-0.5" />
            </div>

            {/* Price */}
            <div className="text-3xl sm:text-4xl font-black text-amber-500 font-outfit mb-4">
              {product.price}
            </div>

            {/* Short Excerpt */}
            <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              {product.desc}
            </p>

            {/* ─── Member Theme Color Selector ─────────────── */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FaPalette className="text-pink-500 text-xs" />
                <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider">
                  Member Theme Color
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {memberColors.map((member) => {
                  const isSelected = selectedColor.id === member.id;
                  return (
                    <button
                      key={member.id}
                      onClick={() => setSelectedColor(member)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-pink-50 dark:bg-pink-950/40 border-pink-500 shadow-sm"
                          : "bg-white dark:bg-[#130b24] border-gray-200 dark:border-white/10 hover:border-pink-300"
                      }`}
                    >
                      <div 
                        className={`w-5 h-5 rounded-full mb-1.5 flex items-center justify-center shadow-inner ${member.ring}`}
                        style={{ backgroundColor: member.hex }}
                      >
                        {isSelected && <FaCheck className="text-white text-[8px]" />}
                      </div>
                      <span className="text-[9px] font-bold text-gray-800 dark:text-white leading-tight">
                        {member.name.split(" ")[0]}
                      </span>
                      <span className="text-[8px] text-gray-500 dark:text-white/50 leading-none">
                        {member.name.split(" ")[1] || ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── Quantity & Add to Cart Controls ─────────── */}
            <div className="mb-5">
              <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider block mb-2">
                Quantity
              </span>

              <div className="flex items-center gap-3">
                {/* Stepper */}
                <div className="flex items-center bg-white dark:bg-[#130b24] border border-gray-200 dark:border-white/10 rounded-xl px-2 py-1 shadow-sm shrink-0">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <FaMinus size={10} />
                  </button>
                  <span className="w-10 text-center font-mono font-black text-sm text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <FaPlus size={10} />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <FaShoppingCart size={14} /> ADD TO CART
                </button>

                {/* Wishlist Button */}
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    isWishlisted 
                      ? "bg-pink-500 border-pink-500 text-white shadow-md shadow-pink-500/30" 
                      : "bg-white dark:bg-[#130b24] border-pink-300 dark:border-pink-500/30 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20"
                  }`}
                  title="Save to Wishlist"
                >
                  {isWishlisted ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
                </button>
              </div>
            </div>

            {/* In Stock status */}
            <div className="flex items-center gap-2 mb-6 text-xs font-bold text-gray-700 dark:text-white/80">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm animate-pulse" />
              <span>In Stock</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 dark:text-white/50">Ready to Ship</span>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80 dark:border-white/10">
              <div className="bg-white dark:bg-[#130b24] border border-gray-200/80 dark:border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                <FaShippingFast className="text-pink-500 text-lg shrink-0" />
                <div>
                  <h4 className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Fast &amp; Safe Shipping</h4>
                  <p className="text-[9px] text-gray-500 dark:text-white/50">Worldwide</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#130b24] border border-gray-200/80 dark:border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                <FaShieldAlt className="text-pink-500 text-lg shrink-0" />
                <div>
                  <h4 className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Secure Payment</h4>
                  <p className="text-[9px] text-gray-500 dark:text-white/50">(Card, PayPal, etc.)</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#130b24] border border-gray-200/80 dark:border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                <FaAward className="text-pink-500 text-lg shrink-0" />
                <div>
                  <h4 className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Official Merchandise</h4>
                  <p className="text-[9px] text-gray-500 dark:text-white/50">100% Genuine</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ─── Bottom Layout: Tabs & Related Merchandise ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bottom Left: Tabs Panel (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Tabs Buttons */}
            <div className="flex gap-2 p-1.5 bg-white dark:bg-[#130b24] border border-gray-200/80 dark:border-white/10 rounded-2xl w-fit shadow-sm">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "description"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20"
                    : "text-gray-600 dark:text-white/60 hover:text-pink-500"
                }`}
              >
                <FaFileAlt size={12} /> Description
              </button>

              <button
                onClick={() => setActiveTab("specifications")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "specifications"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20"
                    : "text-gray-600 dark:text-white/60 hover:text-pink-500"
                }`}
              >
                <FaCogs size={12} /> Specifications
              </button>

              <button
                onClick={() => setActiveTab("shipping")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "shipping"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20"
                    : "text-gray-600 dark:text-white/60 hover:text-pink-500"
                }`}
              >
                <FaTruck size={12} /> Shipping &amp; Returns
              </button>
            </div>

            {/* Tab Body Card */}
            <div className="bg-white dark:bg-[#130b24] border border-amber-100/60 dark:border-pink-900/30 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              {activeTab === "description" && (
                <div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2 mb-3">
                    <span className="w-1 h-4 bg-pink-500 rounded-full inline-block" />
                    Product Description
                  </h3>

                  <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal whitespace-pre-line">
                    {product.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-gray-100 dark:border-white/5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-white/90">
                        <FaCheck className="text-pink-500 shrink-0" size={11} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2 mb-4">
                    <span className="w-1 h-4 bg-pink-500 rounded-full inline-block" />
                    Technical Specifications
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-white/5">
                      <span className="text-gray-500 dark:text-white/50">Model Number</span>
                      <span className="font-bold text-gray-900 dark:text-white">H5R-LS-V2026</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-white/5">
                      <span className="text-gray-500 dark:text-white/50">Dimensions</span>
                      <span className="font-bold text-gray-900 dark:text-white">98 x 98 x 245 mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-white/5">
                      <span className="text-gray-500 dark:text-white/50">Weight</span>
                      <span className="font-bold text-gray-900 dark:text-white">Approx. 185g (excl. batteries)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-white/5">
                      <span className="text-gray-500 dark:text-white/50">Battery Requirement</span>
                      <span className="font-bold text-gray-900 dark:text-white">3x AAA Alkaline Batteries</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-white/5">
                      <span className="text-gray-500 dark:text-white/50">Wireless Sync</span>
                      <span className="font-bold text-gray-900 dark:text-white">Bluetooth 5.2 Low Energy</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 dark:text-white/50">Operating Duration</span>
                      <span className="font-bold text-gray-900 dark:text-white">6 - 8 Hours of Continuous Stage Sync</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2 mb-4">
                    <span className="w-1 h-4 bg-pink-500 rounded-full inline-block" />
                    Shipping &amp; Return Policy
                  </h3>

                  <div className="space-y-4 text-xs text-gray-600 dark:text-white/70">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Standard &amp; Express Delivery</h4>
                      <p>Orders are dispatched within 24-48 business hours with tracking number provided via email.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Authentic Shockproof Packaging</h4>
                      <p>Lightsticks and fragile goods are packed in heavy-duty molded protection boxes to guarantee pristine condition upon arrival.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">14-Day Defect Guarantee</h4>
                      <p>Official exchange or full refund available for any factory electronic or hardware defects.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Bottom Right: Related Merchandise (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-1 h-4 bg-pink-500 rounded-full inline-block" />
                Related Merchandise
              </h3>
              <Link 
                to="/shop" 
                className="text-xs font-bold text-pink-500 hover:text-pink-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                View All <FaArrowRight size={10} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-[#130b24] border border-amber-100/60 dark:border-pink-900/30 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Item Image with Tag */}
                  <div className="relative aspect-square rounded-xl bg-gray-50 dark:bg-black/40 overflow-hidden mb-3 flex items-center justify-center">
                    <span className="absolute top-2 left-2 z-10 bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                      {item.tag}
                    </span>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>

                  {/* Item Info */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight line-clamp-2 mb-2 group-hover:text-pink-500 transition-colors">
                      {item.name}
                    </h4>
                    
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-black text-amber-500 font-outfit">
                        {item.price}
                      </span>
                      <button 
                        onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                        className="w-7 h-7 rounded-lg border border-pink-300 dark:border-pink-500/40 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                        title="Add to Cart"
                      >
                        <FaShoppingCart size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Quick Toast feedback when adding to cart */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black/90 text-white px-5 py-3 rounded-xl shadow-2xl border border-pink-500 flex items-center gap-3 animate-bounce">
          <FaCheck className="text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Added to Cart!
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;