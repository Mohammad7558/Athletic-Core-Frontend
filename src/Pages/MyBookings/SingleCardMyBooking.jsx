import React from 'react';
import { motion } from 'framer-motion';

// Card entrance and hover animation
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.02, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)' },
};

// Staggered container for details section
const detailsContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each icon line animation
const iconVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// Delete icon animation
const deleteBtnVariants = {
  hover: { scale: 1.2, rotate: -10 },
};

// Heroicons (meaningful inline SVGs)
const Icons = {
  calendar: (
    <motion.svg
      className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      variants={iconVariants}
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
    </motion.svg>
  ),
  location: (
    <motion.svg
      className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      variants={iconVariants}
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-6.5 8-12a8 8 0 10-16 0c0 5.5 8 12 8 12z" />
    </motion.svg>
  ),
  info: (
    <motion.svg
      className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      variants={iconVariants}
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </motion.svg>
  ),
  user: (
    <motion.svg
      className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      variants={iconVariants}
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.29.534 6.121 1.474M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </motion.svg>
  ),
  trash: (
    <motion.svg
      className="w-5 h-5 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      variants={deleteBtnVariants}
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V4h6v3m2 0v14H7V7h10z" />
    </motion.svg>
  ),
};

const SingleCardMyBooking = ({ singleMyBookedEvent, handleDelete }) => {
  const {
    _id,
    eventName,
    eventType,
    eventDate,
    location,
    description,
    imageUrl,
    creatorName,
    creatorEmail,
  } = singleMyBookedEvent;

  const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const getEventEmoji = () => {
    const emojiMap = {
      concert: '🎤',
      conference: '🧑‍🏫',
      workshop: '🛠️',
    };
    return emojiMap[eventType.toLowerCase()] || '📅';
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-md overflow-hidden mb-6"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="md:flex">
        {/* Event Image */}
        <div className="md:w-1/3 relative">
          <img
            src={imageUrl || 'https://via.placeholder.com/300x200?text=Event+Image'}
            alt={eventName}
            className="w-full h-48 md:h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {formattedDate.split(',')[0]}
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {eventName}
              </h3>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {getEventEmoji()} {eventType}
              </div>
            </div>
            <motion.button
              onClick={() => handleDelete(_id)}
              className="hover:cursor-pointer"
              whileHover="hover"
              variants={deleteBtnVariants}
              aria-label="Cancel booking"
            >
              {Icons.trash}
            </motion.button>
          </div>

          <motion.div
            className="mt-4 space-y-3 text-gray-700 dark:text-gray-300 text-sm"
            variants={detailsContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center" variants={iconVariants}>
              {Icons.calendar}
              <span>{formattedDate}</span>
            </motion.div>
            <motion.div className="flex items-center" variants={iconVariants}>
              {Icons.location}
              <span>{location}</span>
            </motion.div>
            <motion.div className="flex items-start" variants={iconVariants}>
              {Icons.info}
              <p>{description}</p>
            </motion.div>
            <motion.div className="flex items-center" variants={iconVariants}>
              {Icons.user}
              <span>
                Organizer: {creatorName} ({creatorEmail})
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleCardMyBooking;
