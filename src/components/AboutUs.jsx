import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative bg-gray-100 py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={assets.hayford}
            alt="Founder"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </motion.div>

     
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-center lg:text-left"
        >
         
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block pb-2">
            Who We Are
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 bottom-0 h-1 bg-blue-600 rounded-md"
            ></motion.span>
          </h2>

       
          <p className="mt-4 text-lg text-gray-700">
            We are an Organization / Ministering that seeks to propagate the
            gospel of Jesus Christ. Our main objectives are to preach the gospel
            yet provide food and water for non-Christians, especially the poor
            members in various congregations...
          </p>

          {!isExpanded && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md font-medium transition duration-300 hover:bg-blue-700"
              onClick={handleToggle}
            >
              Read More
            </motion.button>
          )}

          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mt-4 text-gray-700"
              >
                <p>
                  Some of the pictures in the gallery present a vivid picture of
                  what Rural Evangelism Missions did when we provided food,
                  drinks, and water for several congregations and non-Christians
                  in the villages and towns during the Covid-19 pandemic. This was
                  made possible through the generosity of Hard Mike Hewlett of
                  blessed memory, Harding Street Church of Christ, and Roswell
                  Church of Christ. Your donation will go a long way in preaching
                  the gospel and providing food and water for the brethren in the
                  hinterlands and non-believers.
                </p>

                <p className="mt-3">
                  I was born on the 25th of September 1976. My father took me to
                  church (Church of Christ) in 1981 at age 5, the same day he was
                  baptized. He attended Ghana Bible College from 1986 to 1988, and
                  his ministry began in 1990 when he established the first
                  congregation, Central Church of Christ. As a firstborn, I
                  readily became an integral part of my father’s ministry.
                </p>

                <p className="mt-3">
                  We received 12 American Missionaries from Alaska and Washington
                  States. That was the first time I became an interpreter for
                  these missionaries during Open and House-to-House evangelism.
                  ‘Brilliant little boy Ebenezer’ became a friend to these
                  missionaries, and I was promised to be taken to the States for
                  further education, but it didn’t materialize due to unforeseen
                  circumstances. I was appointed an associate minister to my dad
                  after my baptism in 1991. Since then, I have been working with
                  him, establishing congregations across the region until he had a
                  stroke and passed away in January 2022.
                </p>

               
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-6 bg-gray-300 text-gray-800 py-3 px-8 rounded-lg shadow-md font-medium transition duration-300 hover:bg-gray-400"
                  onClick={handleToggle}
                >
                  Show Less
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
