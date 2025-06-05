import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../src/assets/Logo.png";
import { AuthContext } from "../../provider/AuthContext";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const linkClasses = (isActive) =>
    `relative px-3 py-2 transition-colors duration-200 ${
      isActive ? "text-blue-500 font-semibold" : "text-base-content"
    } group`;

  const underline = (
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  );

  const menuItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => linkClasses(isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home
          {underline}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) => linkClasses(isActive)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          All Events
          {underline}
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sticky top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg shadow-md"
          >
            <header
              className={`w-full bg-base-100 shadow-sm transition-all duration-300 ease-in-out relative ${"fixed top-0 left-0 right-0 z-50 shadow-lg bg-white/90 backdrop-blur-sm"}`}
            >
              <div className="navbar mx-auto px-4 lg:px-6 lg:flex-row flex-row-reverse justify-between">
                {/* Mobile menu button */}
                <div className="flex-none lg:hidden">
                  <button className="btn btn-ghost" onClick={toggleSidebar}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <img src={logo} alt="Logo" className="w-8 h-8" />
                  <span className="text-xl font-bold text-primary">
                    The Athletic
                  </span>
                </Link>

                {/* Center menu (desktop) */}
                <nav className="hidden lg:flex flex-1 justify-center">
                  <ul className="menu menu-horizontal gap-2">{menuItems}</ul>
                </nav>

                {/* Right section */}
                <div className="lg:flex items-center gap-2 hidden">
                  <div className="hidden lg:block">
                    <button
                      className="btn btn-circle"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </button>
                  </div>
                  {user ? (
                    <>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                          data-tip={user.displayName || "User"}
                        >
                          <div className="w-10 rounded-full">
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold uppercase">
                                {user.displayName?.charAt(0) || "U"}
                              </div>
                            )}
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <NavLink to="/book-event">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                />
                              </svg>
                              Book Event
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/my-bookings">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                              </svg>
                              My Bookings
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/manage-events">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                              Manage Events
                            </NavLink>
                          </li>
                          <li>
                            <button
                              className="btn mt-4 bg-purple-700 text-white"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="btn bg-blue-800 hover:bg-blue-700 text-white"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="btn bg-green-700 hover:bg-green-800 text-white"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="my_modal_3" className="modal p-0">
                <div className="modal-box w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden p-0 flex flex-col md:flex-row animate-scale-in">
                  {/* Image section - left */}
                  <div className="md:w-1/2 w-full h-48 md:h-auto bg-gray-100">
                    <img
                      src="https://i.ibb.co/cc19LTmG/search-removebg-preview.png"
                      alt="Modal Banner"
                      className="w-full h-full object-contain p-6"
                    />
                  </div>

                  {/* Content section - right */}
                  <div className="md:w-1/2 w-full px-6 py-6 relative">
                    {/* Close button */}
                    <form
                      method="dialog"
                      className="absolute right-4 top-4 z-10"
                    >
                      <button className="btn btn-sm btn-circle btn-ghost hover:bg-red-500 hover:text-white transition-all duration-300">
                        ✕
                      </button>
                    </form>

                    {/* Title and Input */}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Search Athletic Event
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Find the best Event for your need
                    </p>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="input input-bordered w-full bg-white border-gray-300 focus:outline-none"
                    />

                    {/* Popular Tags */}
                    <div className="mt-5">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">
                        Popular Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Web Design",
                          "React Developer",
                          "Logo Design",
                          "SEO",
                          "Content Writing",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="badge badge-outline text-gray-600 cursor-pointer hover:bg-blue-100 hover:border-blue-300 transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches */}
                    <div className="mt-5">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">
                        Recent Searches
                      </h4>
                      <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                        <li>Figma Expert</li>
                        <li>Shopify Store Setup</li>
                        <li>Video Editor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </dialog>
            </header>
          </motion.header>
        )}
      </AnimatePresence>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
            <motion.aside
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 left-0 w-80 h-full bg-base-200 z-50 shadow-xl p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="btn btn-sm btn-circle"
                >
                  ✕
                </button>
              </div>

              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full mb-4"
              />

              <ul className="menu menu-vertical gap-2 mb-6">{menuItems}</ul>

              {/* User info below menu */}
              {user ? (
                <>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div>
                        <img
                          src={
                            user.photoURL ||
                            "https://i.ibb.co/MBtjqXQ/default-avatar.png"
                          }
                          alt="User"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-sm text-gray-500 break-words">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <ul className="mb-5 space-y-1">
                      <li>
                        <NavLink
                          to="/my-bookings"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors duration-200 relative group ${
                              isActive ? "text-primary font-semibold" : "hover:"
                            }`
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>

                          <span className="relative">
                            My Booking
                            <span className="absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-primary group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/book-event"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors duration-200 relative group ${
                              isActive
                                ? "text-primary font-semibold "
                                : "hover:"
                            }`
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                            />
                          </svg>

                          <span className="relative">
                            Book Event
                            <span className="absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-primary group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/manage-events"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors duration-200 relative group ${
                              isActive ? "text-primary font-semibold" : "hover:"
                            }`
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>

                          <span className="relative">
                            Manage Event
                            <span className="absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-primary group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                    <button
                      onClick={handleLogout}
                      className="btn bg-red-400 text-white transition hover:-translate-y-1 hover:bg-red-500"
                    >
                      Logout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-5">
                    <Link
                      to="/login"
                      className="btn btn-wide mb-4 bg-blue-800 text-white hover:bg-blue-500"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-wide bg-green-700 text-white"
                    >
                      Register
                    </Link>
                  </div>
                </>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
