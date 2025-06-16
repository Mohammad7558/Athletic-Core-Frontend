import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllEventSingleCard = ({ singleEvent }) => {
  const [expanded, setExpanded] = useState(false);
  const {
    eventName,
    eventType,
    eventDate,
    location,
    description,
    imageUrl,
    _id,
  } = singleEvent;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const showToggle = description.length > 100;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Image with gradient overlay */}
      <div className="relative h-60 overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        
        {/* Event type badge */}
        <div className="absolute top-4 right-4 bg-white/90 text-indigo-600 text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider backdrop-blur-sm">
          {eventType}
        </div>
        
        {/* Date ribbon */}
        <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 text-sm px-3 py-1.5 rounded-md font-medium backdrop-blur-sm">
          {formattedDate}
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {eventName}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <svg
            className="w-4 h-4 text-indigo-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Description with toggle */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-600 text-sm">
            {expanded ? description : `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`}
          </p>
          {showToggle && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-indigo-600 mt-1 text-xs font-medium hover:underline"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <Link
            to={`/event/${_id}`}
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-all duration-300"
          >
            View details
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllEventSingleCard;