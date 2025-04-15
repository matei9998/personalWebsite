import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-lg">
      Matei Barbalata
      <div className="flex space-x-9 mr-16">
        {["About", "Projects", "Sandbox"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="hover:text-blue-400 transition-all"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
