import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const blogPosts = [
  {
    title: "5 Tips to Improve Your Marathon Time",
    author: "Mohammad Babu",
    date: "July 1, 2025",
    summary:
      "Boost your performance with these practical training strategies every athlete should know.",
  },
  {
    title: "How to Organize a Successful 5K Run",
    author: "Ayesha Khan",
    date: "June 25, 2025",
    summary:
      "Learn the essential steps to plan, promote, and execute a seamless 5K running event.",
  },
  {
    title: "The Future of Sports Tech in Events",
    author: "Tanvir Ahmed",
    date: "June 15, 2025",
    summary:
      "Explore the latest trends in wearable tech, timing systems, and athlete analytics.",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-base-100 text-gray-800 py-16 px-4">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-primary">Latest News & Blogs</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Stay updated with tips, stories, and insights from the world of athletic events and sports tech.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-primary">
              {post.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <FaUser className="mr-1" />
              {post.author}
              <span className="mx-2">•</span>
              <FaCalendarAlt className="mr-1" />
              {post.date}
            </div>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <button className="btn btn-sm btn-primary">Read More</button>
          </motion.div>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-20 bg-primary text-white py-10 px-4 rounded-xl max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-2">Get the Latest Updates</h3>
        <p className="mb-4">
          Subscribe to our newsletter to receive new articles and event tips directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs text-gray-800"
          />
          <button className="btn btn-secondary text-white">Subscribe</button>
        </form>
      </motion.div>
    </div>
  );
};

export default BlogPage;
