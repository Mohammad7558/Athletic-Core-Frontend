import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaCalendarAlt,
  FaUsers,
  FaStopwatch,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 px-4 text-center bg-gradient-to-r from-primary to-secondary text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Arena</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/90">
          Your all-in-one solution for athletic event management — fast,
          efficient, and built for athletes and organizers.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRunning />,
              title: "Athlete-Focused",
              desc: "Built for runners, cyclists, swimmers, and multi-sport competitors.",
            },
            {
              icon: <FaCalendarAlt />,
              title: "Smart Scheduling",
              desc: "Seamlessly manage event dates, registration, and logistics.",
            },
            {
              icon: <FaUsers />,
              title: "Community Hub",
              desc: "Connect clubs, athletes, and teams — all in one place.",
            },
            {
              icon: <FaStopwatch />,
              title: "Live Timing",
              desc: "Real-time results & leaderboard updates during the event.",
            },
            {
              icon: <FaBullseye />,
              title: "Our Mission",
              desc: "To streamline and elevate the way sports events are experienced.",
            },
            {
              icon: <FaEye />,
              title: "Our Vision",
              desc: "A future where every athletic event is easy to run and fun to join.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-base-200 p-6 rounded-2xl shadow-lg text-center transition-shadow"
            >
              <div className="text-4xl text-primary mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline / Journey */}
      <div className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle bg-primary text-white p-2 rounded-full">
                🏁
              </div>
              <div className="timeline-start md:text-end mb-10">
                <h3 className="text-lg font-bold">2022 – The Beginning</h3>
                <p>Idea born to simplify local race registrations & timing.</p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle bg-primary text-white p-2 rounded-full">
                🚀
              </div>
              <div className="timeline-end mb-10">
                <h3 className="text-lg font-bold">2023 – Platform Launch</h3>
                <p>Launched MVP used by 20+ events across 3 cities.</p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle bg-primary text-white p-2 rounded-full">
                🌐
              </div>
              <div className="timeline-start md:text-end mb-10">
                <h3 className="text-lg font-bold">2024 – Global Expansion</h3>
                <p>Serving 100+ events with real-time features & support.</p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle bg-primary text-white p-2 rounded-full">
                🏆
              </div>
              <div className="timeline-end mb-10">
                <h3 className="text-lg font-bold">Today & Beyond</h3>
                <p>Constantly improving — with you on the track.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="text-center py-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Join the Movement
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Be part of the revolution in athletic event management. Host, join, or follow events like never before.
        </p>
        <button className="btn btn-primary btn-wide">Explore Events</button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
