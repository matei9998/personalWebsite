import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold text-blue-400"> Home Page</h1>
        <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
          Click Me!
        </button>
      </div>
    </Router>
  );
}

export default App;
