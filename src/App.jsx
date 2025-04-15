import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { gsap } from "gsap/all"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <h1 className="text-4xl font-bold text-zinc-500"> Home Page</h1>
      </div>
    </Router>
  );
}

export default App;
