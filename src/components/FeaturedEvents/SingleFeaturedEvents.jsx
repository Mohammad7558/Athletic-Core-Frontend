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

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider shadow">
          {eventType}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{eventName}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg
            className="w-5 h-5 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{new Date(eventDate).toLocaleDateString()}</span>
        </div>

        
        <div className="flex items-center gap-2 text-sm text-gray-500">

          <svg
            className="w-5 h-5 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 11c0 7.5-7.5 11.25-7.5 11.25S4.5 18.5 4.5 11a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span>{location}</span>
        </div>

     
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>


        <div className="flex justify-between pt-4 gap-2">

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to={`/event/${_id}`}
              state={{ from: '/' }}
              className="flex items-center justify-center gap-2 flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Details
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/all-events"
              className="flex items-center justify-center gap-2 flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              See All
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeaturedEvents;
