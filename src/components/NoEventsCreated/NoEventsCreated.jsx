import { motion } from "framer-motion";
import { Link } from "react-router";

const NoEventsCreated = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-8 rounded-xl shadow-sm mx-auto text-center h-[80vh]"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        No Events Created Yet
      </h3>
      <p className="text-gray-600 mb-6">
        You haven't created any events. Get started by creating your first event!
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        <Link to='/add-event'>Create Your First Event</Link>
        
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-sm text-gray-500"
      >
        <p>Your events will appear here once created</p>
      </motion.div>
    </motion.div>
  );
};

export default NoEventsCreated;