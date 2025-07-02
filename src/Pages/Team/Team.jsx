import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohammad Babu",
    role: "Founder & Lead Organizer",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Ayesha Khan",
    role: "Event Coordinator",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Tanvir Ahmed",
    role: "Tech Lead",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Sarah Islam",
    role: "Marketing Head",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
];

const values = [
  {
    title: "Passion",
    desc: "We live and breathe sports. Passion fuels everything we do.",
  },
  {
    title: "Precision",
    desc: "Details matter — in every event we organize or support.",
  },
  {
    title: "People First",
    desc: "We believe in teamwork, community, and meaningful experiences.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Team = () => {
  return (
    <div className="bg-base-100 text-gray-800">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <h2 className="text-4xl font-bold text-primary">Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Behind every great event is a great team. Here's the group of dreamers
          and doers shaping the future of athletic event management.
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 pb-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-base-200 rounded-xl p-6 text-center shadow hover:shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
              {getInitials(member.name)}
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <div className="flex justify-center gap-4 text-primary">
              <a href={member.social.linkedin} target="_blank">
                <FaLinkedin className="hover:text-secondary" />
              </a>
              <a href={member.social.twitter} target="_blank">
                <FaTwitter className="hover:text-secondary" />
              </a>
              <a href={member.social.facebook} target="_blank">
                <FaFacebookF className="hover:text-secondary" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Block */}
      <div className="bg-base-200 py-16 px-4 text-center">
        <blockquote className="max-w-2xl mx-auto italic text-gray-600 text-lg">
          "We don’t just manage events — we create experiences that inspire,
          connect, and push people to their limits. Every race is a story, and
          we’re here to help tell it."
        </blockquote>
        <p className="mt-4 font-semibold text-primary">— Mohammad Babu, Founder</p>
      </div>

      {/* Team Values */}
      <div className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-primary mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-base-200 p-6 rounded-xl shadow text-left hover:shadow-md"
            >
              <h4 className="text-xl font-bold mb-2">{val.title}</h4>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div className="text-center py-16 bg-primary text-white px-4">
        <h3 className="text-3xl font-bold mb-4">Want to Join Our Team?</h3>
        <p className="max-w-md mx-auto mb-6">
          We're always on the lookout for passionate people. Reach out to us if
          you love sports, tech, or events!
        </p>
        <button className="btn btn-secondary text-white">Contact Us</button>
      </div>
    </div>
  );
};

export default Team;
