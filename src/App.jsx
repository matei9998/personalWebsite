import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { gsap } from "gsap/all"

function App() {
  return (
    <Router>
  <Navbar />

<div className="relative w-full min-h-screen overflow-hidden">

    {/* 🔹 Solid fallback background */}
    <div className="fixed inset-0 bg-gray-950 z-0"></div>

    {/* 🔹 Animated gradient */}
    <div className="absolute top-0 left-0 w-full h-[80vh] z-[5] 
    bg-[length:300%_300%] 
    bg-[linear-gradient(115deg,_#14532d,_#166534,_#0f172a,_#1e293b,_#4c1d95,_#6d28d9,_#4c1d95,_#1e293b,_#0f172a,_#166534,_#14532d)] 
    animate-gradient-x-soft 
    blur-[110px] 
    opacity-90
    will-change-[background-position] ">
    </div>

    <div className="absolute top-[90vh] left-0 w-full h-[30vh] z-[6] bg-gradient-to-b from-transparent to-gray-950 ">
    </div>

    {/* 🔹 Main content */}
    <div className="relative z-[20] text-white min-h-screen">
      <section className="flex flex-col items-center justify-start h-screen pt-80">
        <h1 className="text-8xl font-bold text-zinc-300 mb-6">Matei Barbalata</h1>
        <p className="text-zinc-400 max-w-xl text-center">
          Computer Science student passionate about art, design.
        </p>
      </section>

      <section className="h-screen flex flex-col items-center bg-gray-950 justify-center ">
        <h2 className="text-3xl font-semibold text-zinc-300 mb-4">Continuare</h2>
        <p className="text-zinc-500 max-w-md text-center">
          loc unde o sa pun niste widgeturi cu proiectele mele si alte informatii.
        </p>
      </section>

      <section className="h-screen flex items-center bg-gray-950 justify-center ">
        <h2 className="text-2xl text-zinc-300">Sfarsitul primei pagini</h2>
      </section>
    </div>

  </div>
</Router>


  );
}

export default App;
