import React from 'react';
import { motion } from 'framer-motion';


const sports = [
  {
    id: 1,
    name: 'Running',
    icon: '🏃‍♂️',
    participants: '120M+',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    name: 'Cycling',
    icon: '🚴‍♀️',
    participants: '80M+',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 3,
    name: 'Swimming',
    icon: '🏊‍♂️',
    participants: '60M+',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    id: 4,
    name: 'Yoga',
    icon: '🧘‍♀️',
    participants: '300M+',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    id: 5,
    name: 'Weight Training',
    icon: '🏋️‍♂️',
    participants: '90M+',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    id: 6,
    name: 'Hiking',
    icon: '🥾',
    participants: '50M+',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      filter: { duration: 1 },
    },
  },
};

const PopularSports = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title with Blur Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Popular Sports & Activities
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Explore the most popular activities in our community and join millions worldwide.
          </p>
        </motion.div>

        {/* Sports Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {sports.map((sport) => (
            <motion.div
              key={sport.id}
              variants={itemVariants}
              whileHover={{
                y: -4,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
              }}
              className={`${sport.bgColor} rounded-xl p-6 text-center cursor-pointer transition-all duration-300 border border-transparent hover:border-gray-200 shadow-sm`}
            >
              <div className="text-4xl mb-4">{sport.icon}</div>
              <h3 className="font-medium text-lg text-gray-900 mb-1">{sport.name}</h3>
              <p className={`text-sm ${sport.textColor} font-medium`}>{sport.participants}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
           <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 shadow-sm cursor-pointer mt-5"
            >
              Explore All Activities
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSports;