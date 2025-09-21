import React, { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";

const Fans = () => {
  const [selectedTab, setSelectedTab] = useState("community");

  const fanClubBenefits = [
    "Exclusive access to member updates",
    "Priority ticket booking for events", 
    "Special fan club merchandise",
    "Monthly digital magazine",
    "Early access to new music releases",
    "Invitation to fan club exclusive events"
  ];

  const communityStats = [
    { label: "Total Fans", value: "45,670", color: "text-yellow-500" },
    { label: "Countries", value: "23", color: "text-blue-500" },
    { label: "Fan Art Shared", value: "1,250", color: "text-pink-500" },
    { label: "Events Attended", value: "156", color: "text-green-500" }
  ];

  const recentUpdates = [
    {
      date: "2024-09-15",
      title: "Special Message from Yuki",
      content: "Thank you everyone for your amazing support! We're working hard on our new album."
    },
    {
      date: "2024-09-10", 
      title: "Behind the Scenes Photos",
      content: "Check out exclusive photos from our recent music video shoot!"
    },
    {
      date: "2024-09-05",
      title: "Fan Art Feature",
      content: "This week's featured fan art comes from @sakura_fan_art - absolutely stunning!"
    }
  ];

  // Data untuk diagram
  const fanGrowthData = [
    { month: "Jan", fans: 35000 },
    { month: "Feb", fans: 37500 },
    { month: "Mar", fans: 39800 },
    { month: "Apr", fans: 41200 },
    { month: "May", fans: 42800 },
    { month: "Jun", fans: 44100 },
    { month: "Jul", fans: 45670 }
  ];

  const countryDistribution = [
    { name: "Japan", value: 18500, color: "#FCD34D" },
    { name: "South Korea", value: 8900, color: "#FBBF24" },
    { name: "Thailand", value: 6200, color: "#F59E0B" },
    { name: "Indonesia", value: 4800, color: "#D97706" },
    { name: "Others", value: 7270, color: "#B45309" }
  ];

  const activityData = [
    { activity: "Fan Art", count: 1250 },
    { activity: "Forum Posts", count: 3420 },
    { activity: "Event Attend", count: 156 },
    { activity: "Merchandise", count: 890 },
    { activity: "Social Media", count: 2100 }
  ];

  const membershipTrend = [
    { month: "Jan", basic: 1200, premium: 800, vip: 300 },
    { month: "Feb", basic: 1350, premium: 920, vip: 340 },
    { month: "Mar", basic: 1480, premium: 1050, vip: 380 },
    { month: "Apr", basic: 1620, premium: 1180, vip: 420 },
    { month: "May", basic: 1750, premium: 1300, vip: 460 },
    { month: "Jun", basic: 1890, premium: 1420, vip: 500 },
    { month: "Jul", basic: 2020, premium: 1550, vip: 540 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tab Navigation */}
      <section className="bg-white py-8 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setSelectedTab("community")}
              className={`px-6 py-3 font-semibold rounded-lg transition duration-300 ${
                selectedTab === "community" 
                  ? "bg-yellow-300 text-black" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setSelectedTab("fanclub")}
              className={`px-6 py-3 font-semibold rounded-lg transition duration-300 ${
                selectedTab === "fanclub"
                  ? "bg-yellow-300 text-black"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Fan Club
            </button>
            <button
              onClick={() => setSelectedTab("updates")}
              className={`px-6 py-3 font-semibold rounded-lg transition duration-300 ${
                selectedTab === "updates"
                  ? "bg-yellow-300 text-black"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Updates
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {selectedTab === "community" && (
            <div>
              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {communityStats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Fan Growth Chart - Tempat yang cocok untuk diagram */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fan Growth Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={fanGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value.toLocaleString(), "Fans"]} />
                    <Area 
                      type="monotone" 
                      dataKey="fans" 
                      stroke="#F59E0B" 
                      fill="#FEF3C7" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Community Activity & Country Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Community Activity Chart */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Community Activities</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="activity" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#FCD34D" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Country Distribution Pie Chart */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Fans by Country</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={countryDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {countryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [value.toLocaleString(), "Fans"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Community Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Fan Forums</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with fellow fans, share your thoughts, and discuss the latest updates.
                  </p>
                  <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
                    Join Discussion
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Fan Art Gallery</h3>
                  <p className="text-gray-600 mb-4">
                    Showcase your creative works and admire amazing art from the community.
                  </p>
                  <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
                    View Gallery
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Fan Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Participate in collaborative projects to support H5-Revolution.
                  </p>
                  <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
                    Get Involved
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "fanclub" && (
            <div>
              {/* Membership Trend Chart - Tempat yang cocok untuk diagram di tab fanclub */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Membership Growth Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={membershipTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="basic" stroke="#FCD34D" strokeWidth={2} name="Basic" />
                    <Line type="monotone" dataKey="premium" stroke="#F59E0B" strokeWidth={2} name="Premium" />
                    <Line type="monotone" dataKey="vip" stroke="#D97706" strokeWidth={2} name="VIP" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Fan Club Information */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Official Fan Club Membership
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Join the Revolution Family and get exclusive access to special content and events!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Membership Benefits</h3>
                    <ul className="space-y-3">
                      {fanClubBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-3">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Membership Plans</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <div className="font-semibold text-gray-800">Basic Plan</div>
                        <div className="text-gray-600">¥500/month</div>
                        <div className="text-sm text-gray-500">Current members: 2,020</div>
                      </div>
                      <div className="border-b pb-3">
                        <div className="font-semibold text-gray-800">Premium Plan</div>
                        <div className="text-gray-600">¥1,200/month</div>
                        <div className="text-sm text-gray-500">Current members: 1,550</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">VIP Plan</div>
                        <div className="text-gray-600">¥2,500/month</div>
                        <div className="text-sm text-gray-500">Current members: 540</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <button className="bg-yellow-300 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition duration-300">
                    Join Fan Club Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "updates" && (
            <div>
              {/* Recent Updates */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Latest Updates
                </h2>
                
                {recentUpdates.map((update, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{update.title}</h3>
                      <span className="text-yellow-500 font-semibold">{update.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{update.content}</p>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg p-8 mt-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Stay Updated!
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Subscribe to our newsletter for the latest news and exclusive content.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
          <p className="text-xl mb-8">
            Stay connected and never miss an update from H5-Revolution!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-yellow-300 text-black p-4 rounded-full hover:bg-yellow-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="bg-yellow-300 text-black p-4 rounded-full hover:bg-yellow-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.986 11.988 11.986s11.987-5.366 11.987-11.986C24.014 5.367 18.648.001 12.017.001zm5.109 18.107c-2.317 0-2.604-1.122-2.604-2.5v-4.142h5.244v-1.744h-5.244V8.151c0-1.378.287-2.5 2.604-2.5h2.604V4.026c-.45-.061-1.99-.206-3.781-.206-3.751 0-6.356 2.292-6.356 6.499v1.402H7.029v1.744h2.604v6.642H7.029z"/>
              </svg>
            </a>
            <a href="#" className="bg-yellow-300 text-black p-4 rounded-full hover:bg-yellow-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fans;