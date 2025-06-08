import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import img from "../../../src/assets/Make-event.json";
import { AuthContext } from "../../provider/AuthContext";
import { useLocation } from "react-router";
import axios from 'axios';

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addEvents = Object.fromEntries(formData.entries());
    console.log(addEvents);

    axios.post('http://localhost:5000/add-event', {addEvents})
    .then(res => {
      console.log(res.data);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/add-event") {
      window.document.title = "Add-Event - Athletic-Core";
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <Lottie animationData={img}></Lottie>
        </motion.div>
        {/* Right Column: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-white rounded-xl shadow-2xl w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Create New Event
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
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Event Type
              </label>
              <select
                name="eventType"
                defaultValue=""
                className="w-full px-4 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
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
                  required
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
                  required
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
                required
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
                required
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
              className="w-full mt-4 py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold shadow-md"
            >
              Submit Event
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AddEvent;