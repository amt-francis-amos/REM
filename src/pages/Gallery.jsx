import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets,galleryImages } from "../assets/assets"; 



const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section 
      className="bg-gray-100 min-h-screen py-12"
      initial="hidden"
      animate="visible"
    >
     
      <motion.div className="relative" variants={fadeIn}>
        <img
          src={assets.galleryHero} 
          alt="Our Gallery"
          className="w-full h-80 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-lg"
            variants={fadeIn}
          >
            Our Gallery
          </motion.h1>
          <motion.p className="mt-3 text-gray-200 text-sm" variants={fadeIn}>
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition">HOME</Link> | GALLERY
          </motion.p>
        </div>
      </motion.div>

   
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((image, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-lg font-semibold">View</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

     
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button 
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage} alt="Gallery Preview" className="max-w-screen-lg max-h-screen object-contain"/>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Gallery;
