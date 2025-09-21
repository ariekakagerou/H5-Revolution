import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar } from "recharts";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdownTime, setCountdownTime] = useState({});
  const [selectedSong, setSelectedSong] = useState('');
  const [votes, setVotes] = useState({});
  const [liveViewers, setLiveViewers] = useState(12547);
  const [liveComments, setLiveComments] = useState(3421);
  const [liveLikes, setLiveLikes] = useState(8932);

  // Data untuk statistik
  const ticketSalesData = [
    { day: 'Sen', sold: 120 },
    { day: 'Sel', sold: 150 },
    { day: 'Rab', sold: 200 },
    { day: 'Kam', sold: 180 },
    { day: 'Jum', sold: 300 },
    { day: 'Sab', sold: 450 },
    { day: 'Min', sold: 380 }
  ];

  const ticketTypeData = [
    { name: 'VIP', value: 25, color: '#FBBF24' },
    { name: 'Premium', value: 35, color: '#F59E0B' },
    { name: 'Regular', value: 40, color: '#FCD34D' }
  ];

  const venueCapacityData = [
    { venue: 'Tokyo Dome', attendance: 8500, capacity: 10000 },
    { venue: 'Shibuya Hall', attendance: 1800, capacity: 2000 },
    { venue: 'Osaka Castle Hall', attendance: 6200, capacity: 8000 },
    { venue: 'Yokohama Arena', attendance: 12000, capacity: 15000 }
  ];

  // Data voting lagu
  const songOptions = [
    'Revolution Heart', 'Neon Dreams', 'Tokyo Nights', 'Future Calling', 
    'Golden Hour', 'Electric Soul', 'Midnight Dance', 'Crystal Tears'
  ];

  // Leaderboard data
  const leaderboard = [
    { rank: 1, name: 'Sakura_Fan123', points: 2450, avatar: '🌸' },
    { rank: 2, name: 'TokyoVibes', points: 2200, avatar: '🗼' },
    { rank: 3, name: 'H5Revolution_Love', points: 1980, avatar: '💫' },
    { rank: 4, name: 'MusicLover_JP', points: 1750, avatar: '🎵' },
    { rank: 5, name: 'ConcertKing', points: 1520, avatar: '👑' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "H5-Revolution Summer Festival 2024",
      date: "2024-12-25",
      time: "19:00",
      location: "Tokyo Dome, Japan",
      type: "Concert",
      ticketPrice: "¥8,000 - ¥12,000",
      description: "Festival musik terbesar kami dengan pertunjukan spektakuler dan efek panggung yang menakjubkan!",
      hasLiveStream: true,
      capacity: 10000,
      soldTickets: 8500
    },
    {
      id: 2,
      title: "Fan Meeting & Special Showcase",
      date: "2024-12-15",
      time: "15:00",
      location: "Shibuya Hall, Tokyo",
      type: "Fan Meeting",
      ticketPrice: "¥5,000 - ¥8,000",
      description: "Kesempatan langka untuk berinteraksi langsung dengan semua member H5-Revolution!",
      hasLiveStream: false,
      capacity: 2000,
      soldTickets: 1800
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const nextEvent = new Date("2024-12-15T15:00:00").getTime();
      const distance = nextEvent - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setCountdownTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Live streaming stats updater
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 50) - 25);
      setLiveComments(prev => prev + Math.floor(Math.random() * 10));
      setLiveLikes(prev => prev + Math.floor(Math.random() * 20));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (song) => {
    setVotes(prev => ({
      ...prev,
      [song]: (prev[song] || 0) + 1
    }));
    setSelectedSong(song);
  };

  const getVotePercentage = (song) => {
    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
    return totalVotes > 0 ? ((votes[song] || 0) / totalVotes * 100).toFixed(1) : 0;
  };

  const EventCard = ({ event, isPast = false }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-40 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center relative">
        <div className="text-6xl opacity-20">🎤</div>
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {event.type}
        </div>
        {event.hasLiveStream && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
            LIVE
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{event.title}</h3>
        <div className="space-y-2 text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm">{event.date} {event.time}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm">{event.location}</span>
          </div>
          {event.ticketPrice && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">{event.ticketPrice}</span>
            </div>
          )}
        </div>
        {event.capacity && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Tiket Terjual</span>
              <span>{event.soldTickets}/{event.capacity}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                style={{width: `${(event.soldTickets / event.capacity) * 100}%`}}
              ></div>
            </div>
          </div>
        )}
        {event.description && (
          <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        )}
        <div className="space-y-2">
          <button 
            onClick={() => setSelectedEvent(event)}
            className="w-full bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Detail Event
          </button>
          {event.hasLiveStream && (
            <button className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Tonton Live Stream
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-4">⏰ Event Berikutnya</h2>
          <p className="text-lg text-black mb-8">Fan Meeting & Special Showcase</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div key={unit} className="bg-black text-yellow-300 rounded-lg p-4">
                <div className="text-3xl font-bold">{countdownTime[unit] || 0}</div>
                <div className="text-sm uppercase">{unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Streaming Stats */}
      <section className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">📡 Live Stream Statistics</h3>
            <p className="text-yellow-300">Real-time data dari streaming event</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-300">{liveViewers.toLocaleString()}</div>
              <div className="text-sm">👀 Live Viewers</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-300">{liveComments.toLocaleString()}</div>
              <div className="text-sm">💬 Comments</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-300">{liveLikes.toLocaleString()}</div>
              <div className="text-sm">❤️ Likes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Charts Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">📊 Statistik Event</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Ticket Sales Chart */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎫 Penjualan Tiket Mingguan</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={ticketSalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sold" stroke="#F59E0B" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Ticket Type Distribution */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Distribusi Jenis Tiket</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={ticketTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {ticketTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Venue Capacity Chart */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🏟️ Attendance vs Kapasitas Venue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={venueCapacityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="venue" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="capacity" fill="#FCD34D" name="Kapasitas" />
                <Bar dataKey="attendance" fill="#F59E0B" name="Attendance" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Voting Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🗳️ Vote Setlist Konser</h2>
            <p className="text-gray-600 text-lg">Pilih lagu favorit kalian untuk konser mendatang!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {songOptions.map((song) => (
                <button
                  key={song}
                  onClick={() => handleVote(song)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedSong === song 
                      ? 'border-yellow-400 bg-yellow-100 text-yellow-800' 
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                  }`}
                >
                  <div className="font-semibold">{song}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {votes[song] || 0} votes ({getVotePercentage(song)}%)
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${getVotePercentage(song)}%`}}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🏆 Leaderboard Fans</h2>
            <p className="text-gray-600 text-lg">Fans paling aktif di komunitas H5-Revolution</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg overflow-hidden">
            {leaderboard.map((fan, index) => (
              <div key={fan.rank} className={`flex items-center justify-between p-6 border-b border-yellow-200 ${
                index === 0 ? 'bg-gradient-to-r from-yellow-200 to-yellow-300' :
                index === 1 ? 'bg-gradient-to-r from-yellow-100 to-yellow-200' :
                index === 2 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100' : ''
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    index === 0 ? 'bg-yellow-400' :
                    index === 1 ? 'bg-gray-300' :
                    index === 2 ? 'bg-orange-300' : 'bg-gray-200'
                  }`}>
                    {index < 3 ? (index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉') : fan.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{fan.name}</div>
                    <div className="text-sm text-gray-600">Rank #{fan.rank}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-yellow-600">{fan.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎭 Event Mendatang</h2>
            <p className="text-gray-600 text-lg">
              Jangan sampai terlewat! Dapatkan tiket untuk pengalaman yang tak terlupakan bersama H5-Revolution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">📋 Informasi Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ticket Information */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="text-center mb-6">
                <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎫</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Informasi Tiket</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>💎 VIP Package:</span>
                  <span className="font-semibold text-yellow-600">¥8,000 - ¥12,000</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>⭐ Premium Seats:</span>
                  <span className="font-semibold text-yellow-600">¥5,000 - ¥8,000</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>🎪 General Admission:</span>
                  <span className="font-semibold text-yellow-600">¥3,000 - ¥5,000</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>📚 Student Discount:</span>
                  <span className="font-semibold text-green-600">20% off</span>
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="text-center mb-6">
                <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Yang Bisa Diharapkan</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">🎵</span>
                  <span>Pertunjukan live lagu-lagu terbaru</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">🤝</span>
                  <span>Segmen interaktif dengan fans</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">🛍️</span>
                  <span>Merchandise eksklusif</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">📸</span>
                  <span>Meet & greet (khusus VIP)</span>
                </li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="text-center mb-6">
                <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Fitur Spesial</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">🎨</span>
                  <span>Efek visual spektakuler</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">💫</span>
                  <span>Choreography terbaru</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">🎁</span>
                  <span>Surprise performances</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg">
                  <span className="mr-3">📱</span>
                  <span>Social media moments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">📞</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Inquiry Event</h2>
          <p className="text-xl mb-8">
            Untuk booking event, kemitraan venue, atau penampilan khusus
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">📧 Email</h4>
              <p className="text-yellow-300">events@h5revolution.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">📱 Phone</h4>
              <p className="text-yellow-300">+81-3-1234-5678</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">🏢 Office</h4>
              <p className="text-yellow-300">Tokyo, Japan</p>
            </div>
          </div>
          <button className="bg-yellow-300 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
            Hubungi Management
          </button>
        </div>
      </section>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-600">{selectedEvent.description}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center">
                      <strong className="mr-2">📅 Tanggal:</strong> 
                      <span>{selectedEvent.date} {selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <strong className="mr-2">📍 Lokasi:</strong> 
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center">
                      <strong className="mr-2">🎭 Tipe:</strong> 
                      <span>{selectedEvent.type}</span>
                    </div>
                    <div className="flex items-center">
                      <strong className="mr-2">💰 Harga Tiket:</strong> 
                      <span>{selectedEvent.ticketPrice}</span>
                    </div>
                    {selectedEvent.capacity && (
                      <div className="flex items-center">
                        <strong className="mr-2">👥 Kapasitas:</strong> 
                        <span>{selectedEvent.soldTickets}/{selectedEvent.capacity} ({Math.round((selectedEvent.soldTickets/selectedEvent.capacity)*100)}% sold)</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {selectedEvent.capacity && (
                    <div>
                      <h4 className="font-bold mb-2">📊 Status Penjualan</h4>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Tiket Terjual</span>
                          <span>{selectedEvent.soldTickets.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Sisa Tiket</span>
                          <span>{(selectedEvent.capacity - selectedEvent.soldTickets).toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300" 
                            style={{width: `${(selectedEvent.soldTickets / selectedEvent.capacity) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedEvent.hasLiveStream && (
                    <div>
                      <h4 className="font-bold mb-2">📺 Live Stream Available</h4>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-red-700 font-semibold">Event ini akan disiarkan secara live</span>
                        </div>
                        <p className="text-sm text-red-600">Fans yang tidak bisa hadir bisa menonton melalui platform streaming resmi</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-bold mb-2">🎁 Bonus VIP Package</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Meet & Greet session</li>
                      <li>• Exclusive merchandise</li>
                      <li>• Premium seating</li>
                      <li>• Backstage photo opportunity</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 flex-1 sm:flex-none">
                  🎫 Beli Tiket Sekarang
                </button>
                {selectedEvent.hasLiveStream && (
                  <button className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 flex-1 sm:flex-none flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    📺 Tonton Live
                  </button>
                )}
                <button className="bg-gray-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 flex-1 sm:flex-none">
                  🔔 Set Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;