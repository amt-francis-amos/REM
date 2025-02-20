import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; 
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Team" },
    { to: "/gallery", label: "Gallery" },
    { to: "/trip", label: "Plan A Mission Trip" },
    { to: "/need", label: "Needs" }
  ];

  return (
    <div className="bg-white shadow-md w-full h-[88px] fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center py-4">
      
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src={assets.logoImg} alt="NGO Logo" className="h-10 w-auto" />
        </Link>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={index} className="relative group">
                <Link
                  to={item.to}
                  className={`text-gray-700 transition ${
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </Link>
               
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

     
        <Link
          to="/donate"
          className="hidden md:inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Donate
        </Link>

    
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((item, index) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`text-gray-700 transition ${
                      isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/donate"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
