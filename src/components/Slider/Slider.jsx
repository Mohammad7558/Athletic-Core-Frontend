import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Creative Solutions",
    description: "We craft digital experiences that elevate your brand.",
    image:
      "https://i.ibb.co/F4W1pRyP/img-1.jpg",
  },
  {
    id: 2,
    title: "Modern Aesthetics",
    description: "Designs that speak and inspire action.",
    image:
      "https://i.ibb.co/4RNYQ6GN/img-8-min.jpg",
  },
  {
    id: 3,
    title: "Performance Focused",
    description: "Optimized for speed, experience, and accessibility.",
    image:
      "https://i.ibb.co/1G6vrytm/img-5-min.jpg",
  },
];

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1); // Go to the next slide
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount or update
  }, [page]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let newPage = prevPage + newDirection;
      if (newPage < 0) newPage = slides.length - 1;
      else if (newPage >= slides.length) newPage = 0;
      return [newPage, newDirection];
    });
  };

  const currentSlide = slides[page];

  return (
    <div className="w-full h-[80vh] mx-auto mt-10 flex items-center justify-center px-5 ">
      <div className="flex flex-col-reverse md:flex-row w-full h-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
        {/* Left content */}
        <div className="w-[45%] flex flex-col justify-center px-10 py-12">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {currentSlide.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === page
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.img
              key={currentSlide.image}
              src={currentSlide.image}
              alt={currentSlide.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slider;
