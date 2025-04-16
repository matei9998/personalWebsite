import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Sandbox", path: "/sandbox" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[90]">
      <div
        className={`flex items-center space-x-8 px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
          scrolled ? "bg-black/50" : "bg-transparent"
        }`}
      >
        {navLinks.map(({ name, path }) => (
          <div
            key={name}
            className={`rounded-full transition-all duration-300 ${
              location.pathname === path
                ? "bg-white/10 backdrop-blur-md"
                : "bg-transparent"
            }`}
          >
            <Link
              to={path}
              className={`px-6 py-2 block rounded-full text-sm transition-colors duration-300 ${
                location.pathname === path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
