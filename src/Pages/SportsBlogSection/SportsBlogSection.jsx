import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Warm-Up Routines Before a Match',
    date: 'June 10, 2025',
    image: 'https://i.ibb.co/4RNYQ6GN/img-8-min.jpg',
    category: 'Training',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'How to Stay Hydrated During a Marathon',
    date: 'June 8, 2025',
    image: 'https://i.ibb.co/G4Z8cQWb/img-3-min.jpg',
    category: 'Nutrition',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Latest News on Inter-School Sports Meet',
    date: 'June 5, 2025',
    image: 'https://i.ibb.co/JRpCf6mV/img-4-min.jpg',
    category: 'News',
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'Preventing Injuries While Playing',
    date: 'June 3, 2025',
    image: 'https://i.ibb.co/PGMcjKZt/img-6-min.jpg',
    category: 'Health',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Mental Health & Athletic Performance',
    date: 'June 1, 2025',
    image: 'https://i.ibb.co/MDZh5MqB/img-10-min.jpg',
    category: 'Psychology',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Training Schedules for Runners',
    date: 'May 29, 2025',
    image: 'https://i.ibb.co/F4W1pRyP/img-1.jpg',
    category: 'Running',
    readTime: '8 min read',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // Clean, smooth easing
    },
  }),
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

const SportsBlogSection = () => {
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
            Sports Blog & News
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Stay informed with the latest insights and updates from the world of sports.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -4,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-gray-900/70 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <div className="mt-auto">
                    <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      Read article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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
              View All Articles
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsBlogSection;