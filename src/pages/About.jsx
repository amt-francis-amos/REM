import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion"; 
import { assets } from "../assets/assets"; 

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

const About = () => {
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
          src={assets.aboutHero}
          alt="About Us"
          className="w-full h-80 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-lg"
            variants={fadeIn}
          >
            About Us
          </motion.h1>
          <motion.p className="mt-3 text-gray-200 text-sm" variants={fadeIn}>
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition">HOME</Link> | ABOUT
          </motion.p>
        </div>
      </motion.div>

      
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 text-center"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          A Few Words About Us
        </h2>
        <p className="text-gray-600 text-lg">
          This all means that giving is a much more important element of
          happiness than receiving. Being able to give makes us feel like
          we're making a big impact on someone's life.
        </p>
      </motion.div>

   
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
       
        <motion.div 
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <img src={assets.visionImg} alt="Our Vision" className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To assist and encourage rural congregations in making successful
              youth ministry possible in their various churches.
            </p>
          </div>
        </motion.div>

      
        <motion.div 
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <img src={assets.missionImg} alt="Our Mission" className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              I am currently working with 12 congregations built by my father
              (of blessed memory) and I. These congregations are situated in
              the hinterlands facing hunger and destitution.
            </p>
          </div>
        </motion.div>

        
        <motion.div 
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <img src={assets.evangelismImg} alt="Evangelism" className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Evangelism</h3>
            <p className="text-gray-600">
              To work with other old and young ministers to build a solid
              youth ministry program and teach the importance of Evangelism.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
