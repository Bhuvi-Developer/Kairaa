import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TradePage from "./components/TradingWidgetView";
import Home from "./components/LandingPage";
import Login from "./components/Img/LoginPage";
import Register from "./components/SignupPage";
import TradeChartpage from './components/TradeChartPage/TradeChartPage';
import ContactPage from "./pages/ContactPage"; // New Component
import AboutPage from "./pages/AboutUsPage"; // New Component
import CareersPage from "./pages/AboutUsPage"; // New Component
import './App.css';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tradechart" element={<TradeChartpage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Contact Page */}
        <Route path="/aboutus" element={<AboutPage />} /> {/* About Us Page */}
        <Route path="/careers" element={<CareersPage />} /> {/* Careers Page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
