import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import noBookedEvent from "../../../src/assets/no-booked-event- 1749655550119.json";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../provider/AuthContext";
import SingleCardMyBooking from "./SingleCardMyBooking";
import TableViewMyBooking from "./TableViewMyBooking";

const MyBookings = () => {
  const location = useLocation();
  const [myBookedEvents, setMyBookedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const token = user.accessToken;
  const [viewMode, setViewMode] = useState("card");

  useEffect(() => {
    if (location.pathname === "/my-bookings") {
      window.document.title = "My-Bookings - Athletic-Core";
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://athletic-core-server-side.vercel.app/my-bookings?email=${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setMyBookedEvents(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [user?.email, token]);

  const handleDelete = (id, name) => {
    axios
      .delete(`https://athletic-core-server-side.vercel.app/delete-event/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const remaining = myBookedEvents.filter(
            (booked) => booked._id !== id
          );
          setMyBookedEvents(remaining);
          toast.success(`booking cancel ${name}`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          {myBookedEvents.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                My Booked Events
              </h1>

              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <motion.button
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    viewMode === "card"
                      ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setViewMode("card")}
                  variants={toggleVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span>Cards</span>
                </motion.button>

                <motion.button
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    viewMode === "table"
                      ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setViewMode("table")}
                  variants={toggleVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Table</span>
                </motion.button>
              </div>
            </div>
          )}

          <AnimatePresence>
            {myBookedEvents.length === 0 ? (
              <motion.div
                className="text-center py-12 h-screen flex justify-center items-center flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Lottie
                  className="max-w-md w-full h-auto mx-auto"
                  animationData={noBookedEvent}
                />
                <p className="text-2xl font-bold mb-5 text-gray-700 dark:text-gray-200">
                  You haven't booked any events yet.
                </p>
              </motion.div>
            ) : viewMode === "card" ? (
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
                layout
              >
                {myBookedEvents.map((singleMyBookedEvent) => (
                  <motion.div
                    key={singleMyBookedEvent._id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      x: -100,
                      transition: { duration: 0.3 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <SingleCardMyBooking
                      singleMyBookedEvent={singleMyBookedEvent}
                      handleDelete={handleDelete}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <TableViewMyBooking
                bookings={myBookedEvents}
                handleDelete={handleDelete}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default MyBookings;
