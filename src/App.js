import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer"; // Import the Footer component
import SwapPage from "./components/SwapPage"; // Import the SwapPage component
import HomePage from "./components/HomePage"; // Import the HomePage component
import ProfilePage from "./components/ProfilePage"; // Import the ProfilePage component
import CampaignPage from "./components/CampaignPage"; // Import the CampaignPage component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#181048] text-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Profile Route */}
          <Route path="/campaign" element={<CampaignPage />} /> {/* Campaign Route */}
          <Route path="/swap" element={<SwapPage />} /> {/* Swap Route */}
        </Routes>
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
