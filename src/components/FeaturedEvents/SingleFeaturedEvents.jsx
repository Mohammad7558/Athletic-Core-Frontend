import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SingleFeaturedEvents = ({ singleEvent }) => {
  const {
    eventName,
    eventType,
    eventDate,
    location,
    description,
    imageUrl,
    _id,
  } = singleEvent;

  const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Image with subtle zoom effect */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
        {/* Minimalist date badge */}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium text-gray-800 shadow-sm">
          {formattedDate}
        </div>
      </div>

      {/* Content area */}
      <div className="p-5">
        {/* Event type subtle indicator */}
        <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
          {eventType}
        </span>
        
        {/* Event title */}
        <h3 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {eventName}
        </h3>
        
        {/* Location with minimalist icon */}
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
        
        {/* Description with subtle fade */}
        <p className="mt-3 text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
        
        {/* Minimalist action buttons */}
        <div className="mt-6 flex justify-between space-x-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={`/event/${_id}`}
              className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              View Details
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/all-events"
              className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Explore All
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeaturedEvents;