import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaVideo, 
  FaVideoSlash, 
  FaMicrophone, 
  FaMicrophoneSlash, 
  FaPhoneSlash, 
  FaHeart, 
  FaClock, 
  FaUserCheck, 
  FaArrowLeft,
  FaStar,
  FaSmile,
  FaShieldAlt,
  FaChevronRight
} from "react-icons/fa";
import SEO from "../components/SEO";

const MEET_SESSIONS = [
  {
    id: "session-1",
    member: "Yuki Tanaka",
    role: "Center / Main Vocal",
    color: "#ec4899",
    avatar: "https://placehold.co/400x500/180a36/ec4899?text=Yuki+Live",
    scheduledTime: "Hari ini, 20:00 WIB",
    slotSeconds: 60,
    ticketPass: "PASS-MNG-YUK-8821",
    status: "READY"
  },
  {
    id: "session-2",
    member: "Sakura Yamamoto",
    role: "Lead Vocal",
    color: "#06b6d4",
    avatar: "https://placehold.co/400x500/180a36/06b6d4?text=Sakura+Live",
    scheduledTime: "Besok, 19:30 WIB",
    slotSeconds: 60,
    ticketPass: "PASS-MNG-SAK-4410",
    status: "UPCOMING"
  }
];

const MeetGreet = () => {
  const [selectedSession, setSelectedSession] = useState(MEET_SESSIONS[0]);
  const [isCalling, setIsCalling] = useState(false);
  const [callTimeRemaining, setCallTimeRemaining] = useState(60);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [heartsCount, setHeartsCount] = useState(0);
  const [callEnded, setCallEnded] = useState(false);

  // Call timer simulation
  useEffect(() => {
    let timer;
    if (isCalling && callTimeRemaining > 0) {
      timer = setInterval(() => {
        setCallTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isCalling && callTimeRemaining === 0) {
      setIsCalling(false);
      setCallEnded(true);
    }
    return () => clearInterval(timer);
  }, [isCalling, callTimeRemaining]);

  const handleStartCall = () => {
    setIsCalling(true);
    setCallEnded(false);
    setCallTimeRemaining(60);
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setCallEnded(true);
  };

  const handleSendHeart = () => {
    setHeartsCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#070312] text-white pt-24 pb-20 font-inter relative overflow-hidden select-none">
      <SEO title="1-on-1 Online Meet & Greet" description="Sesi video call dan online handshake pribadi dengan member idola resmi H5-Revolution." />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-pink-900/30">
          <div className="flex items-center gap-3">
            <Link 
              to="/my-tickets" 
              className="w-9 h-9 rounded-md bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all"
            >
              <FaArrowLeft size={13} />
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold flex items-center gap-1.5">
                <FaVideo size={10} /> 1-ON-1 ONLINE MEET & GREET
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-outfit uppercase tracking-tight text-white">
                Live Video <span className="text-idol">Room</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl text-xs font-mono text-emerald-400">
            <FaUserCheck size={12} />
            <span>ID PASS VERIFIED</span>
          </div>
        </div>

        {/* ─── Video Call Interface ───────────────────────────── */}
        <div className="rounded-3xl bg-[#120826] border border-pink-500/30 shadow-2xl overflow-hidden relative">
          
          {isCalling ? (
            /* ACTIVE VIDEO CALL STREAM VIEW */
            <div className="relative aspect-video sm:aspect-[16/9] w-full bg-black flex flex-col justify-between p-6">
              
              {/* Member Main Camera Feed */}
              <img 
                src={selectedSession.avatar} 
                alt={selectedSession.member} 
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Call Top Bar Overlay */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="font-bold text-xs text-white">{selectedSession.member}</span>
                  <span className="text-[10px] font-mono text-pink-400">LIVE</span>
                </div>

                {/* Remaining Seconds Countdown */}
                <div className="flex items-center gap-2 bg-pink-600/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white font-mono font-black text-xs shadow-lg animate-pulse">
                  <FaClock size={11} />
                  <span>00:{callTimeRemaining.toString().padStart(2, "0")}</span>
                </div>
              </div>

              {/* Fan Self Camera Preview (PIP) */}
              <div className="absolute bottom-24 right-6 w-32 h-24 sm:w-40 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/30 bg-gray-900 shadow-2xl z-10">
                {isCameraOff ? (
                  <div className="w-full h-full flex items-center justify-center text-xs text-white/50">
                    Kamera Mati
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#180a36] flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-xl mb-1">😊</span>
                    <span className="text-[10px] text-white/70 font-mono">Reza Pratama</span>
                  </div>
                )}
              </div>

              {/* In-Call Controls Bottom Bar */}
              <div className="relative z-10 flex items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsMicMuted(!isMicMuted)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                    isMicMuted ? "bg-red-500/80 border-red-500 text-white" : "bg-black/60 border-white/20 text-white hover:bg-white/20"
                  }`}
                  title={isMicMuted ? "Nyalakan Mic" : "Matikan Mic"}
                >
                  {isMicMuted ? <FaMicrophoneSlash size={16} /> : <FaMicrophone size={16} />}
                </button>

                <button
                  onClick={handleSendHeart}
                  className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  title="Kirim Reaksi Love"
                >
                  <FaHeart size={20} className="animate-bounce" />
                </button>

                <button
                  onClick={() => setIsCameraOff(!isCameraOff)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                    isCameraOff ? "bg-red-500/80 border-red-500 text-white" : "bg-black/60 border-white/20 text-white hover:bg-white/20"
                  }`}
                  title={isCameraOff ? "Nyalakan Kamera" : "Matikan Kamera"}
                >
                  {isCameraOff ? <FaVideoSlash size={16} /> : <FaVideo size={16} />}
                </button>

                <button
                  onClick={handleEndCall}
                  className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-all"
                  title="Akhiri Panggilan"
                >
                  <FaPhoneSlash size={16} />
                </button>
              </div>

            </div>
          ) : callEnded ? (
            /* CALL ENDED FAREWELL VIEW */
            <div className="p-12 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-4xl mx-auto shadow-idol-pink">
                💖
              </div>
              <h3 className="text-xl font-black font-outfit text-white">
                Sesi Video Call Selesai!
              </h3>
              <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                "Terima kasih sudah meluangkan waktu ngobrol dengan Yuki hari ini! Semangat terus ya, sampai ketemu di konser berikutnya!" ~ <strong>{selectedSession.member}</strong>
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleStartCall}
                  className="px-5 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Uji Simulasi Panggilan Lagi
                </button>
                <Link
                  to="/orders"
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white text-xs font-mono"
                >
                  Lihat Tiket Lain
                </Link>
              </div>
            </div>
          ) : (
            /* WAITING ROOM / QUEUE SCREEN */
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-pink-500/40 shrink-0">
                    <img src={selectedSession.avatar} alt={selectedSession.member} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-pink-400 font-bold block">
                      SESI TERJADWAL
                    </span>
                    <h3 className="text-lg font-black font-outfit text-white">{selectedSession.member}</h3>
                    <p className="text-xs text-white/50">{selectedSession.role} • Durasi: 60 Detik</p>
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono">
                  <span className="text-[10px] text-white/40 uppercase block">Status Antrean</span>
                  <span className="font-bold text-sm text-emerald-400">Giliran Anda Berikutnya</span>
                </div>
              </div>

              {/* Guidelines Box */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-white/70">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <FaShieldAlt className="text-pink-400" /> Tata Tertib Video Call Fans:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-white/60">
                  <li>Pastikan koneksi internet stabil dan pencahayaan ruangan cukup terang.</li>
                  <li>Dilarang merekam layar (screen recording) tanpa izin resmi manajemen.</li>
                  <li>Sapa member dengan ramah dan nikmati waktu 60 detik berharga Anda!</li>
                </ul>
              </div>

              {/* Enter Room CTA */}
              <button
                onClick={handleStartCall}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-pink-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaVideo size={14} />
                <span>Mulai Simulasi Video Call Sekarang</span>
                <FaChevronRight size={11} />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default MeetGreet;