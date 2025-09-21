import React from "react";
import MemberCard from "../components/MemberCard";
import EventCard from "../components/EventCard";

const Home = () => {
  // Sample data
  const sampleMembers = [
    {
      name: "Yuki Tanaka",
      position: "Leader & Main Vocalist",
      bio: "Passionate performer with 5 years of experience in J-Pop industry.",
      socialMedia: {
        twitter: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      name: "Sakura Yamamoto",
      position: "Main Dancer",
      bio: "Professional dancer specializing in contemporary and hip-hop styles.",
      socialMedia: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Mika Sato",
      position: "Vocalist",
      bio: "Rising star with a unique voice and charming personality.",
      socialMedia: {
        instagram: "#",
        youtube: "#"
      }
    }
  ];

  const sampleEvents = [
    {
      title: "H5-Revolution Summer Festival 2024",
      date: "2024-07-15",
      location: "Tokyo Dome, Japan",
    },
    {
      title: "Fan Meeting & Showcase",
      date: "2024-08-20",
      location: "Shibuya Hall, Tokyo",
    },
    {
      title: "Special Live Performance",
      date: "2024-09-10",
      location: "Osaka Castle Hall",
    }
  ];

  const latestNews = [
    {
      date: "09/12",
      title: "Amane Kisumi Health Condition Report",
      isNew: true
    },
    {
      date: "09/10",
      title: "#2J2 LAST TOUR 'Pages of You' Official Goods | Sales Start 9/14 (Sun) 20:00~",
      isNew: true
    },
    {
      date: "08/16",
      title: "[Unreleased Items] Birthday Memorial Goods | Sales Start 8/17 (Sun) 20:00~",
      isNew: false
    }
  ];

  const livePhotos = [
    {
      date: "2025.08.16",
      title: "#2J2 Live Series 'version up.31' Amane Kisumi Birthday Festival @Kawaguchi Insensity Hall"
    },
    {
      date: "2025.08.09",
      title: "#2J2 Live Series 'version up.30' @Zouk Tokyo"
    },
    {
      date: "2025.05.16",
      title: "#2J2 Live Series 'version up.28' Everyone's Happy Festival 2025 MAKE SOME NOISE! @Daikanyama UNIT"
    },
    {
      date: "2025.04.25",
      title: "#2J2 Live Series 'version up.27' @Zouk Tokyo"
    },
    {
      date: "2025.02.12",
      title: "#2J2 presents #2J2 Day ~Respect! Spotify O-EAST"
    }
  ];

  const scheduleEvents = [
    { date: "31", title: "Admired Band x Imahaki Band", color: "purple", month: "August" },
    { date: "1", title: "Admired Band Festival", color: "blue" },
    { date: "7", title: "Afternoon Tea x Imahaki Band", color: "blue" },
    { date: "8", title: "Afternoon Tea x Imahaki Band", color: "blue" },
    { date: "9", title: "Afternoon Tea x Imahaki Band", color: "blue" },
    { date: "14", title: "Admired Band Live #2J2 Day", color: "red" },
    { date: "15", title: "Afternoon Tea x Imahaki Band SPAM", color: "blue" },
    { date: "16", title: "Admired Band x Imahaki Band", color: "red" }
  ];

  const discography = [
    {
      title: "Revolution Beat",
      type: "Single",
      releaseDate: "2024-06-01",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Shining Stars",
      type: "Album",
      releaseDate: "2024-03-15",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Dreams Come True",
      type: "Single",
      releaseDate: "2024-01-20",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/h5-revolution-banner.jpg')"}}>
      </section>

      {/* Latest News - Style like Image 1 */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-black mb-8 tracking-wider">
              INFORMATION
            </h2>
            <div className="space-y-4">
              {latestNews.map((news, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    {news.isNew && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    <span className="text-black font-medium">{news.date}</span>
                    <span className="text-black">{news.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition duration-300">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Photos - Style like Image 2 */}
      <section className="py-16 px-4 bg-gradient-to-b from-yellow-200 to-yellow-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <img src="/api/placeholder/100/50" alt="live photo" className="mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {livePhotos.map((photo, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      LIVE
                    </span>
                    <span className="text-xs font-bold ml-1">{photo.date}</span>
                  </div>
                  <div className="p-3 bg-gray-800 text-white">
                    <p className="text-xs leading-tight">{photo.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition duration-300">
              MORE
            </button>
          </div>
        </div>
      </section>

      {/* Schedule - Style like Image 3 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <button className="text-gray-400 hover:text-gray-600">&lt;</button>
              <h2 className="text-xl font-bold text-gray-800">September 2025</h2>
              <button className="text-gray-400 hover:text-gray-600">&gt;</button>
            </div>
            
            {/* Schedule List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {scheduleEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm
                      ${event.color === 'purple' ? 'bg-purple-500' : 
                        event.color === 'blue' ? 'bg-blue-400' : 
                        event.color === 'red' ? 'bg-red-500' : 'bg-gray-400'}
                    `}>
                      {event.date}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{event.title}</p>
                      {event.month && (
                        <p className="text-sm text-gray-500">{event.month}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="text-center text-sm text-gray-500 p-2">Sun</div>
              <div className="text-center text-sm text-gray-500 p-2">Mon</div>
              <div className="text-center text-sm text-gray-500 p-2">Tue</div>
              <div className="text-center text-sm text-gray-500 p-2">Wed</div>
              <div className="text-center text-sm text-gray-500 p-2">Thu</div>
              <div className="text-center text-sm text-gray-500 p-2">Fri</div>
              <div className="text-center text-sm text-gray-500 p-2">Sat</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {/* Calendar days with events */}
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm text-gray-400">31</span>
                <div className="bg-purple-500 text-white text-xs p-1 rounded mt-1">
                  Admired Band x Imahaki Band
                </div>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">1</span>
                <div className="bg-blue-400 text-white text-xs p-1 rounded mt-1">
                  Admired Band Festival
                </div>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">2</span>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">3</span>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">4</span>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">5</span>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">6</span>
                <div className="bg-red-500 text-white text-xs p-1 rounded mt-1">
                  Admired Band Live #2J2
                </div>
              </div>
              {/* Continue with more calendar days */}
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">7</span>
                <div className="bg-blue-400 text-white text-xs p-1 rounded mt-1">
                  Afternoon Tea x Imahaki Band
                </div>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">8</span>
              </div>
              <div className="h-20 p-1 border border-gray-200">
                <span className="text-sm">9</span>
                <div className="bg-blue-400 text-white text-xs p-1 rounded mt-1">
                  Afternoon Tea x Imahaki Band
                </div>
              </div>
              {/* Add remaining days */}
              {Array.from({length: 20}, (_, i) => (
                <div key={i + 10} className="h-20 p-1 border border-gray-200">
                  <span className="text-sm">{i + 10}</span>
                </div>
              ))}
            </div>

            <div className="text-xs text-gray-500 mt-4">
              * Time is Japan Standard Time (GMT+09:00). Times may vary according to timezone.
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-yellow-600 text-sm font-semibold mb-2">2024-09-15</p>
              <h3 className="text-xl font-bold mb-3">New Single 'Golden Dreams' Release</h3>
              <p className="text-gray-600">Our highly anticipated new single will be available on all streaming platforms starting October 1st!</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-yellow-600 text-sm font-semibold mb-2">2024-09-10</p>
              <h3 className="text-xl font-bold mb-3">Osaka Concert Sold Out!</h3>
              <p className="text-gray-600">Thank you fans! Our Osaka Castle Hall performance is completely sold out.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-yellow-600 text-sm font-semibold mb-2">2024-09-05</p>
              <h3 className="text-xl font-bold mb-3">TV Appearance on Music Station</h3>
              <p className="text-gray-600">Catch us live on Music Station this Friday performing 'Revolution Beat'.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Featured Members
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Meet the talented individuals who make up H5-Revolution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-yellow-300 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
              View All Members
            </button>
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Discography
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our musical journey through singles and albums
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discography.map((release, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-yellow-300 text-2xl">♪</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{release.type}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.releaseDate}</p>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    Listen Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-12">
            Latest Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-yellow-300 text-3xl">▶</span>
                  </div>
                  <p className="text-black font-bold">Music Video</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Revolution Beat - Official MV</h3>
                <p className="text-gray-400">Our latest music video featuring dynamic choreography and stunning visuals.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-yellow-300 text-3xl">▶</span>
                  </div>
                  <p className="text-black font-bold">Behind the Scenes</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Making of Summer Festival</h3>
                <p className="text-gray-400">Exclusive behind-the-scenes footage from our summer festival preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Club */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-300 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Join the Revolution!</h2>
          <p className="text-gray-800 text-lg mb-8">
            Be part of our journey and experience the revolution in idol entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-black text-yellow-300 font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition duration-300">
              Official Fan Club
            </button>
            <button className="border-2 border-black text-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-yellow-300 transition duration-300">
              Merchandise Store
            </button>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Newsletter Subscription</h3>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-black text-yellow-300 font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;