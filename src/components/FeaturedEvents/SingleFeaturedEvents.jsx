import React from 'react';
import { motion } from 'framer-motion';

const SingleFeaturedEvents = ({ singleEvent }) => {
    const { eventName, eventType, eventDate, location, description, imageUrl } = singleEvent;

    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={imageUrl}
                    alt={eventName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Event Type Badge */}
                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                    {eventType}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">{eventName}</h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm pt-1">
                    <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span>{location}</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-sm font-medium px-4 py-2 rounded-md"
                    >
                        View Details
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-all duration-300 text-sm font-medium px-4 py-2 rounded-md"
                    >
                        See All
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default SingleFeaturedEvents;
