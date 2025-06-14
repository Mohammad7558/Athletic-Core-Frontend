import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SingleEvent = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [currentEvent, setCurrentEvent] = useState(null); // Initialize as null
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { email, displayName, accessToken } = user || {};
  const locations = useLocation();

  // Keep your original fetch logic but add loading state
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/event/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        setCurrentEvent(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, accessToken]);

  // Keep your original booking check logic
  useEffect(() => {
    if (!email || !id) return;
    
    axios
      .get(`http://localhost:5000/checked-book?email=${email}&eventId=${id}`)
      .then((res) => {
        if (res.data.booked) {
          setDisabled(true);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [email, id]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keep your original booking handler
  const handleBookingEvent = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Add user data to event before booking
    const eventToBook = {
      ...currentEvent,
      user_email: email,
      eventId: currentEvent._id
    };
    
    axios
      .post("http://localhost:5000/booked-event", eventToBook)
      .then((res) => {
        if (res.data.insertedId) {
          setDisabled(true);
          toast.success(`You booked ${currentEvent.eventName} Successfully`);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Document title effect
  useEffect(() => {
    if (locations.pathname === `/event/${id}` && currentEvent?.eventName) {
      document.title = `${currentEvent.eventName} - Athletic-Core`;
    }
    return () => {
      document.title = "Athletic-Core"; // Reset on unmount
    };
  }, [locations.pathname, id, currentEvent]);

  // Show loading spinner while data is being fetched
  if (loading || !currentEvent) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading event details...</p>
        </motion.div>
      </div>
    );
  }

  // Destructure after ensuring currentEvent exists
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
  } = currentEvent;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen">
      <AnimatePresence>
        <motion.div
          key="event"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeUp}
          className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden"
        >
          <motion.div
            variants={fadeUp}
            className="h-64 overflow-hidden"
            custom={0}
          >
            <img
              src={imageUrl}
              alt={eventName}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="p-6 space-y-4">
            <motion.div
              className="flex justify-between items-center"
              variants={fadeUp}
              custom={1}
            >
              <h1 className="text-2xl font-bold text-gray-800">
                {eventName}
              </h1>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">
                {eventType}
              </span>
            </motion.div>
            <motion.div
              className="space-y-2 text-sm text-gray-600"
              variants={fadeUp}
              custom={2}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{new Date(eventDate).toDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 11c0 7.5-7.5 11.25-7.5 11.25S4.5 18.5 4.5 11a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A4.5 4.5 0 0112 15h0a4.5 4.5 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {creatorName} ({creatorEmail})
                </span>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={fadeUp}
              custom={3}
            >
              {description}
            </motion.p>
            <motion.form
              className="space-y-4 border-t border-gray-200 pt-6"
              variants={fadeUp}
              custom={4}
              onSubmit={handleBookingEvent}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={displayName || ''}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email || ''}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={disabled || loading}
                  type="submit"
                  className={`w-full md:w-auto flex items-center justify-center gap-2 font-semibold px-6 py-2 rounded-md transition-all duration-300 ${
                    disabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  }`}
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  )}
                  {disabled ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Already Booked
                    </>
                  ) : loading ? (
                    "Booking..."
                  ) : (
                    "Book Now"
                  )}
                </button>
              </div>
            </motion.form>
            <motion.div className="pt-4" variants={fadeUp} custom={5}>
              <Link
                to="/all-events"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Events
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SingleEvent;