import { motion } from "framer-motion";

const SingleEventView = ({ singleEvent, handleDeleteEvent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Event Image with Overlay */}
        <div className="md:w-2/5 relative h-56 md:h-auto">
          <img
            src={singleEvent?.imageUrl}
            alt={singleEvent?.eventName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
              {singleEvent?.eventType}
            </span>
          </div>
        </div>

        {/* Event Info Section */}
        <div className="p-5 md:w-3/5 space-y-4">
          {/* Header Section */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-gray-800">
                {singleEvent?.eventName}
              </h2>
              <div className="flex items-center bg-blue-50 px-2.5 py-1 rounded-full text-blue-600 text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {singleEvent?.eventDate}
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Hosted by <span className="font-medium">{singleEvent.creatorName}</span>
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Location</p>
              <div className="flex items-center text-sm text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {singleEvent?.location}
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Contact</p>
              <div className="flex items-center text-sm text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {singleEvent?.creatorEmail}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">About Event</p>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {singleEvent?.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </motion.button>

            <motion.button
              onClick={() => handleDeleteEvent(singleEvent?._id, singleEvent?.eventName)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleEventView;