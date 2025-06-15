import axios from "axios";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import nodata from "../../../src/assets/doNotFound.json";
import Loader from "../../components/Loader/Loader";
import AllEventSingleCard from "./AllEventSingleCard";

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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://athletic-core-server-side.vercel.app/event?sort=${sortOrder}`
      )
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [sortOrder]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === "/all-events") {
      document.title = "All Events | Athletic Core";
    }
  }, [location.pathname]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;

  //   const fetchEvents = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(
  //         `https://athletic-core-server-side.vercel.app/all-events?search=${searchTerm}`,
  //         { signal }
  //       );
  //       if (!res.ok) throw new Error("Network response was not ok");
  //       const data = await res.json();
  //       setEvents(data);
  //     } catch (err) {
  //       if (err.name !== "AbortError") {
  //         console.error("Error fetching events:", err);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // const delayDebounce = setTimeout(() => {
  //   //   if (searchTerm.trim() !== "") {
  //   //     fetchEvents();
  //   //   } else {
  //   //     setEvents([]); // or fetch all by default
  //   //   }
  //   // }, 350);

  //   // return () => {
  //   //   clearTimeout(delayDebounce);
  //   //   controller.abort(); // cancel previous fetch if new one is started
  //   // };
  // }, [searchTerm]);

  useEffect(() => {
    axios
      .get(
        `https://athletic-core-server-side.vercel.app/all-events?search=${searchTerm}`
      )
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <div className="mx-auto px-4 sm:px-6 py-8 max-w-7xl min-h-screen">
      <div className="mb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900"
        >
          Discover Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Find your next adventure from our curated collection
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="relative w-full md:w-2/3"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg
                className="h-5 w-5"
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
              className="block w-full pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-200 focus:border-indigo-300 text-gray-700 placeholder-gray-400 transition-all duration-200 text-base"
              placeholder="Search by event, location, or type..."
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-full md:w-1/3 flex justify-end"
        >
          <div className="relative w-full md:w-auto">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="block w-full pl-4 pr-10 py-3.5 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-200 focus:border-indigo-300 text-gray-700 appearance-none transition-all duration-200 text-base"
            >
              <option value="" disabled>
                Sort by date
              </option>
              <option value="all">All</option>
              <option value="older">Oldest first</option>
              <option value="newest">Newest first</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <Loader />
        </div>
      ) : events.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20 flex flex-col items-center justify-center"
        >
          <Lottie
            animationData={nodata}
            className="max-w-md w-full h-auto mb-6"
            loop={false}
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {searchTerm ? "No events match your search" : "No Events Available"}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            {searchTerm
              ? "Try adjusting your search or browse our upcoming events."
              : "Check back later for new events or create your own!"}
          </p>
        </motion.div>
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
