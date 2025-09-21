import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home from "./pages/home";
import Events from "./pages/events";
import Fans from "./pages/fans";
import Members from "./pages/members.jsx";
import Showcase from "./pages/showcase";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header dengan navigasi */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/fans" element={<Fans />} />
            <Route path="/members" element={<Members />} />
            <Route path="/showcase" element={<Showcase />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;