import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
      
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a nonprofit organization dedicated to spreading the gospel, providing food, water, and financial support to those in need.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="/team" className="hover:text-blue-500 transition">Team</a></li>
            <li><a href="/donate" className="hover:text-blue-500 transition">Donate</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact Us</a></li>
          </ul>
        </div>

 
        <div>
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-3">
            Subscribe to receive updates on our latest activities.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">© 2025 Rural Evangelism Mission. All Rights Reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[
            { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
            { icon: <FaTwitter />, link: "#", color: "hover:bg-blue-400" },
            { icon: <FaInstagram />, link: "#", color: "hover:bg-pink-500" },
            { icon: <FaYoutube />, link: "#", color: "hover:bg-red-600" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 transition ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
