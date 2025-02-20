import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { assets, teamMembers } from "../assets/assets";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3 } 
  },
};

const Team = () => {
  return (
    <motion.section 
      className="bg-gray-100 min-h-screen py-12"
      initial="hidden"
      animate="visible"
    >
      
      <motion.div 
        className="relative"
        variants={fadeIn}
      >
        <img
          src={assets.teamImg} 
          alt="Meet Our Team"
          className="w-full h-80 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-lg"
            variants={fadeIn}
          >
            Meet Our Team
          </motion.h1>
          <motion.p className="mt-3 text-gray-200 text-sm" variants={fadeIn}>
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition">HOME</Link> | TEAM
          </motion.p>
        </div>
      </motion.div>

      
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 text-center"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-gray-600 text-lg">
          These faithful men are Bible Teachers in their respective congregations across the States who have supported me and my mission work in the last decade. I have reposed a huge trust and confidence in them, and they are available to answer any questions and inquiries you may have.
        </p>
      </motion.div>

    
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-orange-500 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.email}</p>
              {member.phone && <p className="text-gray-600">{member.phone}</p>}
              <p className="text-gray-600 font-semibold">{member.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Team;
