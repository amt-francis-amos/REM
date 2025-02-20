import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../assets/assets"; 

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slide Animation */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Animation with AnimatePresence */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentSlide].title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentSlide].text}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl"
          >
            {slides[currentSlide].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.3 }}
            animate={{ opacity: index === currentSlide ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
            className={`h-4 w-4 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-gray-400 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
