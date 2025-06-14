

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AthletiCore</h2>
          <p className="text-sm">
            Premium event management for sports & athletics. Organize, manage, and shine.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/" target='_blank' className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="https://x.com/iam_MOHAMMOD" target='_blank' className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/" target='_blank' className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Events</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gray-900 transition">Event Scheduling</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Registration</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Live Tracking</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Results Management</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Team Coordination</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Stay updated on upcoming events and features.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AthletiCore. All rights reserved.
      </div>
    </footer>
  );
}
