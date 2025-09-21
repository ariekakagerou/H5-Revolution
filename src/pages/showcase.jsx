import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, Play, ShoppingCart, Award, TrendingUp, Calendar, Eye, ThumbsUp, Star, Camera, Gift } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("music");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const musicVideos = [
    {
      id: 1,
      title: "Revolution Anthem",
      description: "Our debut single that started the revolution!",
      duration: "3:45",
      views: "2.5M",
      likes: 45000,
      comments: 1200,
      trending: true,
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Neon Dreams",
      description: "A vibrant journey through city lights and aspirations.",
      duration: "4:12",
      views: "1.8M",
      likes: 38000,
      comments: 890,
      trending: false,
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Sunrise Together",
      description: "An uplifting ballad about unity and hope.",
      duration: "4:33",
      views: "3.2M",
      likes: 52000,
      comments: 1500,
      trending: true,
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Electric Hearts",
      description: "High-energy dance track perfect for the stage.",
      duration: "3:28",
      views: "1.9M",
      likes: 41000,
      comments: 980,
      trending: false,
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  const photos = [
    {
      id: 1,
      title: "Summer Festival 2024",
      description: "Behind the scenes from our biggest performance yet.",
      thumbnail: "/api/placeholder/400/500",
      likes: 28000,
      comments: 450,
      trending: true
    },
    {
      id: 2,
      title: "Studio Sessions",
      description: "Recording our latest album.",
      thumbnail: "/api/placeholder/400/500",
      likes: 22000,
      comments: 320
    },
    {
      id: 3,
      title: "Fan Meet & Greet",
      description: "Special moments with our amazing fans.",
      thumbnail: "/api/placeholder/400/500",
      likes: 35000,
      comments: 680,
      trending: true
    },
    {
      id: 4,
      title: "Concept Photoshoot",
      description: "Artistic shots for our new era.",
      thumbnail: "/api/placeholder/400/500",
      likes: 31000,
      comments: 520
    },
    {
      id: 5,
      title: "Live Performance",
      description: "Energy and passion on stage.",
      thumbnail: "/api/placeholder/400/500",
      likes: 42000,
      comments: 890,
      trending: true
    },
    {
      id: 6,
      title: "Rehearsal Time",
      description: "Perfecting our choreography.",
      thumbnail: "/api/placeholder/400/500",
      likes: 26000,
      comments: 380
    }
  ];

  const merchandise = [
    {
      id: 1,
      name: "Revolution Anthem T-Shirt",
      price: "$29.99",
      image: "/api/placeholder/300/300",
      category: "Apparel",
      limited: true,
      stock: 15
    },
    {
      id: 2,
      name: "Neon Dreams Hoodie",
      price: "$49.99",
      image: "/api/placeholder/300/300",
      category: "Apparel",
      limited: false,
      stock: 50
    },
    {
      id: 3,
      name: "Official Photo Card Set",
      price: "$19.99",
      image: "/api/placeholder/300/300",
      category: "Collectibles",
      limited: true,
      stock: 8
    },
    {
      id: 4,
      name: "Brand Collaboration - Watch",
      price: "$299.99",
      image: "/api/placeholder/300/300",
      category: "Collaboration",
      limited: true,
      stock: 3
    },
    {
      id: 5,
      name: "Concert Light Stick",
      price: "$39.99",
      image: "/api/placeholder/300/300",
      category: "Accessories",
      limited: false,
      stock: 25
    },
    {
      id: 6,
      name: "Limited Edition Vinyl",
      price: "$89.99",
      image: "/api/placeholder/300/300",
      category: "Music",
      limited: true,
      stock: 12
    }
  ];

  const achievements = [
    { year: "2024", award: "Best New Artist", event: "Japan Music Awards", month: "December" },
    { year: "2024", award: "Rookie of the Year", event: "Tokyo Pop Festival", month: "November" },
    { year: "2024", award: "Most Promising Group", event: "Asian Music Scene", month: "October" },
    { year: "2024", award: "Breakthrough Performance", event: "Summer Music Fest", month: "August" }
  ];

  const milestones = [
    { milestone: "5M+", description: "Total YouTube Views" },
    { milestone: "50K+", description: "Social Media Followers" },
    { milestone: "25+", description: "Live Performances" },
    { milestone: "4", description: "Original Songs Released" }
  ];

  const performanceData = [
    { name: "Revolution Anthem", views: 2500000, likes: 45000, comments: 1200 },
    { name: "Sunrise Together", views: 3200000, likes: 52000, comments: 1500 },
    { name: "Electric Hearts", views: 1900000, likes: 41000, comments: 980 },
    { name: "Neon Dreams", views: 1800000, likes: 38000, comments: 890 }
  ];

  const chartData = [
    { month: "Jan", position: 50, streams: 100000 },
    { month: "Feb", position: 45, streams: 150000 },
    { month: "Mar", position: 38, streams: 200000 },
    { month: "Apr", position: 30, streams: 280000 },
    { month: "May", position: 25, streams: 350000 },
    { month: "Jun", position: 18, streams: 420000 },
    { month: "Jul", position: 12, streams: 500000 },
    { month: "Aug", position: 8, streams: 650000 },
    { month: "Sep", position: 5, streams: 800000 },
    { month: "Oct", position: 3, streams: 950000 },
    { month: "Nov", position: 2, streams: 1200000 },
    { month: "Dec", position: 1, streams: 1500000 }
  ];

  useEffect(() => {
    let interval;
    if (isSlideshow) {
      interval = setInterval(() => {
        const currentMedia = selectedCategory === "music" ? musicVideos : photos;
        setSlideshowIndex((prev) => (prev + 1) % currentMedia.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isSlideshow, selectedCategory, musicVideos.length, photos.length]);

  const handleLike = (id, type) => {
    const key = `${type}-${id}`;
    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(key)) {
        newLiked.delete(key);
      } else {
        newLiked.add(key);
      }
      return newLiked;
    });
  };

  const handleComment = (id, type) => {
    if (newComment.trim()) {
      const key = `${type}-${id}`;
      setComments(prev => ({
        ...prev,
        [key]: [...(prev[key] || []), {
          text: newComment,
          timestamp: new Date().toLocaleTimeString()
        }]
      }));
      setNewComment("");
    }
  };

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title || item.name,
        text: item.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const openModal = (item, type) => {
    setSelectedMedia({ ...item, type });
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const getTrendingContent = () => {
    const allContent = [...musicVideos, ...photos].filter(item => item.trending);
    return allContent.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  };

  const MediaCard = ({ item, type, isVideo = false }) => {
    const isLiked = likedItems.has(`${type}-${item.id}`);
    const itemComments = comments[`${type}-${item.id}`] || [];

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="relative group cursor-pointer" onClick={() => openModal(item, type)}>
          <div className={`${isVideo ? 'h-48' : 'h-64'} bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center overflow-hidden`}>
            {isVideo ? (
              <div className="bg-yellow-400 bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition group-hover:scale-110">
                <Play className="w-10 h-10 text-black" />
              </div>
            ) : (
              <div className="text-gray-500 text-sm bg-white bg-opacity-75 rounded p-2">Photo</div>
            )}
          </div>
          {item.trending && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </div>
          )}
          {isVideo && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm font-medium">
              {item.duration}
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          
          {isVideo && (
            <div className="text-yellow-500 text-sm font-semibold mb-3 flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {item.views} views
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(item.id, type);
                }}
                className={`flex items-center space-x-1 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm">{(item.likes || 0) + (isLiked ? 1 : 0)}</span>
              </button>
              
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{(item.comments || 0) + itemComments.length}</span>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(item);
                }}
                className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MerchCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
          <div className="text-gray-500 text-sm bg-white bg-opacity-75 rounded p-2">Product Image</div>
        </div>
        {item.limited && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            LIMITED
          </div>
        )}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
          {item.stock} left
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{item.category}</div>
        <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-yellow-600">{item.price}</span>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Navigation */}
      <section className="bg-white py-8 px-4 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {[
              { key: "trending", label: "Trending", icon: TrendingUp },
              { key: "photos", label: "Photo Gallery", icon: Camera },
              { key: "music", label: "Music Videos", icon: Play },
              { key: "merchandise", label: "Merchandise", icon: Gift },
              { key: "achievements", label: "Achievements", icon: Award },
              { key: "ar", label: "AR Experience", icon: Star }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center space-x-2 px-4 py-3 font-semibold rounded-lg transition duration-300 whitespace-nowrap ${
                  selectedCategory === key
                    ? "bg-yellow-300 text-black"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {selectedCategory === "trending" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-yellow-500" />
                  Trending Now
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getTrendingContent().map((item, index) => (
                  <MediaCard
                    key={`trending-${item.id}`}
                    item={item}
                    type={item.duration ? "music" : "photo"}
                    isVideo={!!item.duration}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "music" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Music Videos & Performances</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsSlideshow(!isSlideshow)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      isSlideshow ? "bg-yellow-300 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {isSlideshow ? "Stop Slideshow" : "Start Slideshow"}
                  </button>
                </div>
              </div>
              
              {/* Performance Statistics */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Performance Statistics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#FCD34D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {musicVideos.map((video, index) => (
                  <MediaCard
                    key={video.id}
                    item={video}
                    type="music"
                    isVideo={true}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "photos" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Photo Gallery</h2>
                <button
                  onClick={() => setIsSlideshow(!isSlideshow)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    isSlideshow ? "bg-yellow-300 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {isSlideshow ? "Stop Slideshow" : "Start Slideshow"}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <MediaCard
                    key={photo.id}
                    item={photo}
                    type="photo"
                    isVideo={false}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "merchandise" && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
                <Gift className="w-8 h-8 mr-3 text-yellow-500" />
                Merchandise & Collaborations
              </h2>
              
              {/* Categories Filter */}
              <div className="flex justify-center space-x-4 mb-8">
                {["All", "Apparel", "Collectibles", "Collaboration", "Music", "Accessories"].map(category => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-lg font-semibold transition bg-gray-200 text-gray-700 hover:bg-yellow-300 hover:text-black"
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {merchandise.map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {selectedCategory === "achievements" && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
                <Award className="w-8 h-8 mr-3 text-yellow-500" />
                Achievements & Milestones
              </h2>
              
              {/* Chart Progress */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Chart Performance & Streaming Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Area yAxisId="right" type="monotone" dataKey="streams" stackId="1" stroke="#FCD34D" fill="#FCD34D" fillOpacity={0.3} />
                    <Line yAxisId="left" type="monotone" dataKey="position" stroke="#EF4444" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Milestones Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {milestones.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">
                      {item.milestone}
                    </div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Timeline */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Awards Timeline
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-300"></div>
                  <div className="space-y-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="relative flex items-start space-x-6 group">
                        <div className="bg-yellow-400 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg flex-1 hover:bg-yellow-100 transition-colors duration-300 hover:shadow-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800 text-lg">{achievement.award}</h4>
                            <span className="text-sm text-gray-500">{achievement.month} {achievement.year}</span>
                          </div>
                          <p className="text-gray-600">{achievement.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === "ar" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-yellow-500" />
                AR/VR Experience
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Virtual Photobooth</h3>
                  <p className="text-gray-600 mb-6">Take photos with your favorite idol using AR technology!</p>
                  <button className="bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
                    Start AR Camera
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">3D Hologram Experience</h3>
                  <p className="text-gray-600 mb-6">Experience a 3D holographic performance in your space!</p>
                  <button className="bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
                    Launch Hologram
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Media Details */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedMedia.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <div className="h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center">
                  {selectedMedia.type === "music" ? (
                    <div className="bg-yellow-400 rounded-full p-8">
                      <Play className="w-16 h-16 text-black" />
                    </div>
                  ) : (
                    <div className="text-gray-600 text-lg">Full Size Image</div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
              
              {/* Interactive Elements */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-6 mb-4">
                  <button
                    onClick={() => handleLike(selectedMedia.id, selectedMedia.type)}
                    className={`flex items-center space-x-2 transition-colors ${
                      likedItems.has(`${selectedMedia.type}-${selectedMedia.id}`) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${likedItems.has(`${selectedMedia.type}-${selectedMedia.id}`) ? 'fill-current' : ''}`} />
                    <span>{selectedMedia.likes + (likedItems.has(`${selectedMedia.type}-${selectedMedia.id}`) ? 1 : 0)}</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare(selectedMedia)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
                  >
                    <Share2 className="w-6 h-6" />
                    <span>Share</span>
                  </button>
                </div>
                
                {/* Comments Section */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Comments</h3>
                  
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleComment(selectedMedia.id, selectedMedia.type);
                        }
                      }}
                    />
                    <button
                      onClick={() => handleComment(selectedMedia.id, selectedMedia.type)}
                      className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                    >
                      Post
                    </button>
                  </div>
                  
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {(comments[`${selectedMedia.type}-${selectedMedia.id}`] || []).map((comment, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-800">{comment.text}</p>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl mb-8">
            Follow us on our social media channels for exclusive behind-the-scenes content!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-300 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition duration-300">
              Follow Us Now
            </button>
            <button className="border-2 border-yellow-300 text-yellow-300 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
              Join Fan Club
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;