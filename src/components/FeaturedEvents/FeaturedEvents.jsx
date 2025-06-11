import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleFeaturedEvents from "./SingleFeaturedEvents";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import noData from "../../../src/assets/doNotFound.json";
import loader from "../../../src/assets/Loader.json";
import { Link } from "react-router";

const FeaturedEvents = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/featuredEvents")
      .then((res) => {
        const data = res.data;
        setFeaturedEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-20">
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <Lottie className="w-20" animationData={loader}></Lottie>
        </div>
      ) : featuredEvents.length === 0 ? (
        <div className="flex flex-col justify-center items-center lg:p-0 p-8 text-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-indigo-500 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 className="font-bold text-2xl lg:text-4xl mb-4 text-gray-800">
            No Featured Events Yet 😕
          </h1>
          <Lottie className="mb-10" animationData={noData}></Lottie>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98, boxShadow: "0 2px 3px rgba(0,0,0,0.05)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              to="/add-event"
              className="group inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors"
            >
              Add Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-2 group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      ) : (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Featured Events
              </motion.h2>
              <motion.p
                className="max-w-2xl mx-auto text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover our most exciting upcoming events
              </motion.p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {featuredEvents.map((singleEvent) => (
                <SingleFeaturedEvents
                  key={singleEvent._id}
                  singleEvent={singleEvent}
                />
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FeaturedEvents;
