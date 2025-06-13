import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AllEventSingleCard from "./AllEventSingleCard";
import nodata from "../../../src/assets/doNotFound.json";
import Lottie from "lottie-react";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === "/all-events") {
      document.title = "All-Events - Athletic-Core";
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/all-events?search=${searchTerm}`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchEvents();
    }, 300); // debounce search input

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">All Events</h1>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition duration-200"
            placeholder="Search events by name, description or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-20 flex flex-col items-center justify-center">
          <Lottie animationData={nodata} className="max-w-md w-full h-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {searchTerm ? "No matching events found" : "No Events Found"}
          </h2>
          <p className="text-gray-500">
            {searchTerm
              ? "Try a different search term."
              : "Looks like there are no events available at the moment."}
          </p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((singleEvent) => (
            <motion.div key={singleEvent._id} variants={itemVariants}>
              <AllEventSingleCard singleEvent={singleEvent} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AllEvents;
