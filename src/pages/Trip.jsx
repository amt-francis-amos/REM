import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; 

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Trip = () => {
  return (
    <motion.section 
      className="bg-gray-100 min-h-screen py-12"
      initial="hidden"
      animate="visible"
    >

      {/* Hero Section */}
      <motion.div className="relative" variants={fadeIn}>
        <img
          src={assets.tripImg}
          alt="Plan A Mission Trip"
          className="w-full h-80 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md"
            variants={fadeIn}
          >
            Plan A Mission Trip
          </motion.h1>
          <motion.p className="mt-3 text-gray-200 text-sm sm:text-base" variants={fadeIn}>
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition">HOME</Link> | PLAN A MISSION TRIP
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-12 space-y-12"
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          Plan A Mission Trip
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          As a Missionary, I strongly believe in the <b>Great Commission</b> as authorized by Jesus Christ in <b>Matthew 28:18-20</b>. I have spent more than <b>half of my life traveling</b> to towns and hinterlands to preach. We are <b>mandated to "go" to all Nations</b> to make disciples and baptize those who will hearken to the voice of the Lord and the gospel.
        </p>

        {/* Mission Work Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Mission Work in Ghana</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The <b>Church of Christ</b> was established in <b>the 1960s in Ghana</b> by American Missionaries and has since been passed down to faithful men. Today, there are <b>several congregations</b> across the country. However, <b>thousands of villages</b> have <b>never heard the gospel</b>.  
              <br /><br />
              Due to <b>limited resources</b>, I extend this <b>invitation to you</b> to leave your "comfort zone" and <b>come to Ghana's Central Region</b> to preach the gospel. Ghana is one of the <b>most peaceful</b> countries in Africa, and you can serve <b>without fear</b> of danger.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={assets.mapImg}
              alt="Mission Locations"
              className="w-full md:w-[80%] h-auto md:h-[80vh] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Join Our Mission Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={assets.gallery5}
              alt="Preaching Mission"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Join Our Mission Team</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I will personally <b>spend my time with you</b> throughout each mission trip. Whether you are a <b>missionary, deacon, or minister</b>, I will ensure your <b>safety and successful mission</b>.  
              <br /><br />
              If you have any <b>questions or inquiries</b>, please <b>contact my American Team</b>. They will provide more details on how you can participate.  
              <br /><br />
              <i>I look forward to working with you all. Because of Calvary.</i>
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <motion.div 
          className="bg-blue-500 text-white text-center p-6 sm:p-8 rounded-lg shadow-lg mt-12"
          variants={fadeIn}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Interested in Joining a Mission Trip?</h3>
          <p className="text-base sm:text-lg">
            Reach out to our American Team for more details and guidance.
          </p>
          <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition w-full sm:w-auto">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Trip;
