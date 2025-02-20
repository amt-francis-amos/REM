import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; 

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Needs = () => {
  return (
    <motion.section 
      className="bg-gray-100 min-h-screen py-12"
      initial="hidden"
      animate="visible"
    >

   
      <motion.div className="relative" variants={fadeIn}>
        <img
          src={assets.needImg}
          alt="Our Needs"
          className="w-full h-80 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-lg"
            variants={fadeIn}
          >
            Our Needs
          </motion.h1>
          <motion.p className="mt-3 text-gray-200 text-sm" variants={fadeIn}>
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition">HOME</Link> | NEEDS
          </motion.p>
        </div>
      </motion.div>

    
      <motion.div 
        className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 mt-12 space-y-12"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Essential Needs for Our Mission Work
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          To effectively reach villages with the gospel and provide assistance to the destitute, aged, crippled, and widows, we require the following essential resources.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">🚗 Mission Vehicle - $8,000</h3>
              <p className="text-gray-600">A reliable vehicle is necessary for reaching remote villages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">💻 Laptop & Digital Camera</h3>
              <p className="text-gray-600">For storing mission data, communication, and capturing mission activities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">📖 Good Reference Bibles & Gospel Tracts</h3>
              <p className="text-gray-600">For spreading the gospel and supporting local congregations.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">💵 Monthly Support for 12 Congregations</h3>
              <p className="text-gray-600">To sustain mission activities in multiple communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">🍷 Communion Trays</h3>
              <p className="text-gray-600">For worship services in various congregations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">🎥 Film Projector (Used/New)</h3>
              <p className="text-gray-600">For showing gospel films and educational content.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-blue-500 text-white text-center p-8 rounded-lg shadow-lg mt-12"
          variants={fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-3">Want to Support Our Mission?</h3>
          <p className="text-lg">
            Every contribution helps us reach more lives. Get involved today!
          </p>
          <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Donate Now
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Needs;
