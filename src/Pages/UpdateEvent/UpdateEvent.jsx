import React from "react";
import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import img from "../../../src/assets/update- 1749616288981.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateEvent = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const token = user?.accessToken;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentEvent = useLoaderData();
  const {
    description,
    eventDate,
    eventName,
    eventType,
    imageUrl,
    location,
    _id,
  } = currentEvent;

  const locations = useLocation();
  useEffect(() => {
    if (locations.pathname === `/update-event/${_id}`) {
      window.document.title = "Update Event - Athletic-Core";
    }
  }, [locations.pathname, _id]);

  const navigate = useNavigate();

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateEvent = Object.fromEntries(formData.entries());

    axios
      .put(`http://localhost:5000/update-event/${_id}`, updateEvent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.result?.modifiedCount) {
          toast.success(`${eventName} updated successfully`);
          navigate("/manage-events");
        } else {
          toast.info("No changes made.");
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Update failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <Lottie animationData={img}></Lottie>
        </motion.div>
        <motion.form
          onSubmit={handleUpdateEvent}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-white rounded-xl shadow-2xl w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Update Event
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue={eventName}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Event Type
              </label>
              <select
                name="eventType"
                defaultValue={eventType}
                className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="Swimming">Swimming</option>
                <option value="Sprinting">Sprinting</option>
                <option value="Long Jump">Long Jump</option>
                <option value="High Jump">High Jump</option>
                <option value="Hurdle race">Hurdle race</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue={eventDate}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue={location}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue={description}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue={imageUrl}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Creator Name
                </label>
                <input
                  type="text"
                  name="creatorName"
                  readOnly
                  defaultValue={displayName}
                  className="w-full px-4 py-2 rounded bg-gray-100 text-gray-700 border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Creator Email
                </label>
                <input
                  type="email"
                  name="creatorEmail"
                  defaultValue={email}
                  readOnly
                  className="w-full px-4 py-2 rounded bg-gray-100 text-gray-700 border border-gray-300"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              type="submit"
              className="w-full mt-4 py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold shadow-md cursor-pointer"
            >
              Update Event
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default UpdateEvent;
