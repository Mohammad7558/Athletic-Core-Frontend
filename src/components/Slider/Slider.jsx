import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Athletic Event Coordination",
    description:
      "We manage large-scale sporting events with precision and energy.",
    image: "https://i.ibb.co/F4W1pRyP/img-1.jpg",
  },
  {
    id: 2,
    title: "Venue & Logistics Setup",
    description:
      "From track layouts to audience seating — we handle every detail.",
    image: "https://i.ibb.co/4RNYQ6GN/img-8-min.jpg",
  },
  {
    id: 3,
    title: "Team & Athlete Support",
    description:
      "We ensure athletes and teams have everything they need to perform.",
    image: "https://i.ibb.co/1G6vrytm/img-5-min.jpg",
  },
];

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
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
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-full h-[90vh] flex items-center justify-center px-5">
        <div className="flex flex-col-reverse md:flex-row w-full h-full bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-[45%] flex flex-col justify-center px-10 py-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <h2 className="text-4xl font-bold text-gray-800">
                    {currentSlide.title}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-lg">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

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

          <div className="flex-1 relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentSlide.image}
                src={currentSlide.image}
                alt={currentSlide.title}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
