import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md w-full"
      >
        {/* Main content */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-8xl font-bold text-gray-800 mb-4"
          >
            404
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-gray-700 mb-2"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 mb-6"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="/"
              className="inline-block px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Return to Home
            </a>
          </motion.div>
        </motion.div>

        {/* Optional decorative element (simple line) */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8 mx-auto max-w-xs"
        />
      </motion.div>
    </div>
  );
};

export default ErrorPage;