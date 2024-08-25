import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="min-h-screen bg-[#181048] text-white flex flex-col">
      <Header />
      <MainSection />
      <div className="flex-grow"></div> {/* Fills the space between MainSection and Footer */}
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
