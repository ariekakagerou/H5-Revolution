import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';

// Context
import { CartProvider } from './contexts/CartContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

// Pages
import Home from "./pages/home";
import Events from "./pages/events";
import Fans from "./pages/fans";
import Members from "./pages/members.jsx";
import MemberDetail from "./pages/member-detail";
import Showcase from "./pages/showcase";
import Shop from "./pages/shop";
import ProductDetail from "./pages/product-detail";
import Tickets from "./pages/tickets";
import TicketDetail from "./pages/ticket-detail";
import Auth from "./pages/auth";
import SplashScreen from "./pages/SplashScreen.jsx";
import About from "./pages/about";
import Theater from "./pages/theater";
import Shows from "./pages/shows";
import NotFound from "./pages/not-found";
import Legal from "./pages/legal";
import Checkout from "./pages/checkout";
import OrderPayment from "./pages/order-payment";
import OrderShipping from "./pages/order-shipping";
import Orders from "./pages/orders";
import MyTickets from "./pages/my-tickets";
import Wishlist from "./pages/wishlist";
import Invoice from "./pages/invoice";
import Profile from "./pages/profile";
import LightstickController from "./pages/lightstick-controller";
import PhotocardBinder from "./pages/photocard-binder";
import FanChant from "./pages/fanchant";
import MeetGreet from "./pages/meet-greet";
import Notifications from "./pages/notifications";
import HelpCenter from "./pages/help-center";


// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    className="w-full flex-1"
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/fans" element={<PageWrapper><Fans /></PageWrapper>} />
        <Route path="/members" element={<PageWrapper><Members /></PageWrapper>} />
        <Route path="/members/:id" element={<PageWrapper><MemberDetail /></PageWrapper>} />
        <Route path="/showcase" element={<PageWrapper><Showcase /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/shop/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="/order-payment" element={<PageWrapper><OrderPayment /></PageWrapper>} />
        <Route path="/order-payment/:orderId" element={<PageWrapper><OrderPayment /></PageWrapper>} />
        <Route path="/order-shipping" element={<PageWrapper><OrderShipping /></PageWrapper>} />
        <Route path="/order-shipping/:orderId" element={<PageWrapper><OrderShipping /></PageWrapper>} />
        <Route path="/orders" element={<PageWrapper><Orders /></PageWrapper>} />
        <Route path="/my-tickets" element={<PageWrapper><MyTickets /></PageWrapper>} />
        <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
        <Route path="/invoice" element={<PageWrapper><Invoice /></PageWrapper>} />
        <Route path="/invoice/:orderId" element={<PageWrapper><Invoice /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
        <Route path="/lightstick" element={<PageWrapper><LightstickController /></PageWrapper>} />
        <Route path="/binder" element={<PageWrapper><PhotocardBinder /></PageWrapper>} />
        <Route path="/fanchant" element={<PageWrapper><FanChant /></PageWrapper>} />
        <Route path="/meet-greet" element={<PageWrapper><MeetGreet /></PageWrapper>} />
        <Route path="/notifications" element={<PageWrapper><Notifications /></PageWrapper>} />
        <Route path="/help" element={<PageWrapper><HelpCenter /></PageWrapper>} />
        <Route path="/tickets" element={<PageWrapper><Tickets /></PageWrapper>} />
        <Route path="/tickets/:id" element={<PageWrapper><TicketDetail /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Auth /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/theater" element={<PageWrapper><Theater /></PageWrapper>} />
        <Route path="/shows" element={<PageWrapper><Shows /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper><Legal /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500">
      {/* Header dengan navigasi (Disembunyikan di halaman Auth) */}
      {!isAuthPage && <Header />}

      {/* Main Content */}
      <main className="flex-1 w-full">
        <AnimatedRoutes />
      </main>

      {/* Footer (Disembunyikan di halaman Auth) */}
      {!isAuthPage && <Footer />}

      {/* Global Shopping Cart Drawer */}
      <CartDrawer />
    </div>
  );
}


function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <ThemeProvider>
      <Router>
        <CartProvider>
          <AnimatePresence mode="wait">
            {loading ? (
              <SplashScreen key="splash" onComplete={() => setLoading(false)} />
            ) : (
              <AppLayout key="main" />
            )}
          </AnimatePresence>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
