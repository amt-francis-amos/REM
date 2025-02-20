import React from "react";
import { motion } from "framer-motion";
import { assets,donationImages } from "../assets/assets"; 



const DonationGalleryComponent = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Donation of Funds to Village Congregations
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          A glimpse into our financial aid contributions to village congregations.
        </p>

       
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {donationImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Donation Image ${index + 1}`}
                className="w-full h-40 md:h-52 object-cover hover:opacity-90 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationGalleryComponent;
