import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
};

const SingleEvent = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { email, displayName, accessToken } = user || {};
  const location = useLocation();
  const [bookedUserCount, setBookedUserCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/event/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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

  useEffect(() => {
    axios.get(`http://localhost:5000/booked-Users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setBookedUserCount(res.data.count || 0);
      })
      .catch(error => {
        console.error("Error fetching attendee count:", error.message);
      });
  }, [id, accessToken]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookingEvent = (e) => {
    e.preventDefault();
    setLoading(true);

    const eventToBook = {
      ...currentEvent,
      user_email: email,
      eventId: currentEvent._id,
    };

    axios
      .post("http://localhost:5000/booked-event", eventToBook)
      .then((res) => {
        if (res.data.insertedId) {
          setDisabled(true);
          setShowConfirmModal(false);
          setBookedUserCount(prev => prev + 1);
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

  useEffect(() => {
    if (location.pathname === `/event/${id}` && currentEvent?.eventName) {
      document.title = `${currentEvent.eventName} - Athletic-Core`;
    }
    return () => {
      document.title = "Athletic-Core";
    };
  }, [location.pathname, id, currentEvent]);

  if (loading || !currentEvent) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
          <div className="h-64 md:h-96 bg-gradient-to-r from-gray-200 to-gray-300 w-full"></div>
          <div className="p-8 space-y-6">
            <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-1/3"></div>
            </div>
            <div className="h-24 bg-gray-200 rounded-lg"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  const { _id, eventName, eventType, eventDate, location: eventLocation, description, imageUrl, creatorName, creatorEmail } = currentEvent;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Hero Section */}
          <motion.div variants={itemFade} className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={imageUrl}
              alt={eventName}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-4 py-1.5 bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full shadow-sm">
                  {eventType}
                </span>
                <span className="inline-flex items-center px-4 py-1.5 bg-indigo-600/95 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-sm">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {bookedUserCount} {bookedUserCount === 1 ? 'attendee' : 'attendees'}
                </span>
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">{eventName}</h1>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="p-6 md:p-8 lg:p-10">
            <motion.div variants={itemFade} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Event Details */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div variants={itemFade} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">About This Event</h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{description}</p>
                </motion.div>

                <motion.div variants={itemFade} className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">Event Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
                        <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Date & Time</p>
                        <p className="text-gray-800 font-semibold text-base">{formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
                        <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p className="text-gray-800 font-semibold text-base">{eventLocation}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
                        <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Organizer</p>
                        <p className="text-gray-800 font-semibold text-base">{creatorName}</p>
                        <p className="text-sm text-gray-500">{creatorEmail}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
                        <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Attendees</p>
                        <p className="text-gray-800 font-semibold text-base">
                          {bookedUserCount} {bookedUserCount === 1 ? 'person' : 'people'} registered
                        </p>
                        {bookedUserCount > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            Be part of this exciting event!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Booking Form */}
              <div className="space-y-6">
                <motion.div
                  variants={itemFade}
                  className="bg-gradient-to-br from-indigo-50 to-gray-50 p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 tracking-tight">Join the Event</h3>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={displayName || ""}
                        disabled
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 text-sm cursor-not-allowed focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200"
                        aria-disabled="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email || ""}
                        disabled
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 text-sm cursor-not-allowed focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200"
                        aria-disabled="true"
                      />
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); setShowConfirmModal(true); }}
                      disabled={disabled || loading}
                      className={`mt-6 w-full flex items-center  justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white ${
                        disabled
                          ? "bg-gray-400 cursor-not-allowed shadow-inner"
                          : loading
                          ? "bg-indigo-400 cursor-wait shadow-inner"
                          : "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-md cursor-pointer hover:shadow-lg"
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : disabled ? (
                        <>
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Already Booked
                        </>
                      ) : (
                        <>
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Book Now
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={itemFade} className="text-center">
                  <Link
                    to="/all-events"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group"
                  >
                    <svg className="mr-2 h-5 w-5 text-indigo-500 group-hover:text-indigo-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Events
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Confirm Your Registration</h3>
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                    aria-label="Close"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-3">You're about to register for:</p>
                  <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                    <h4 className="font-semibold text-gray-900 text-base">{eventName}</h4>
                    <p className="text-sm text-gray-600 mt-1">{formattedDate}</p>
                    <p className="text-sm text-gray-600">{eventLocation}</p>
                    <p className="text-sm text-indigo-600 mt-2 font-medium">
                      Currently {bookedUserCount} {bookedUserCount === 1 ? 'person' : 'people'} attending
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="px-4 py-2 border cursor-pointer border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBookingEvent}
                    disabled={loading}
                    className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                      loading ? "opacity-80 cursor-wait" : "shadow-md hover:shadow-lg"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SingleEvent;