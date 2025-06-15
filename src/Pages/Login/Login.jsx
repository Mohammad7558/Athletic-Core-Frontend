import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../provider/AuthContext";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInEmailPassword, createUserWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    if (location.pathname === "/login") {
      window.document.title = "Login - Athletic-Core";
    }
  }, [location.pathname]);

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) return toast.error("Enter Email");
    if (!password) return toast.error("Enter Password");

    const toastId = toast.loading("User Login...");

    signInEmailPassword(email, password)
      .then(() => {
        toast.success("User Login Successfully", { id: toastId });
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  const signInUser = () => {
    const toastId = toast.loading("User Login...");
    createUserWithGoogle(provider)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("User Log in Successfully", { id: toastId });
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-5">
      <div className="w-[85%] bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-10 px-14 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-2 text-black">Welcome back!</h2>
          <p className="text-sm text-gray-500 mb-8">
            Simplify your workflow and boost your productivity with{" "}
            <span className="font-semibold">Athletic-Core App</span>
          </p>

          <form onSubmit={handleSignInUser}>
            <label className="flex items-center space-x-1 text-gray-700 font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="text-gray-600 font-normal">Enter Your Email</span>
            </label>
            <motion.input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <label className="flex items-center space-x-1 text-gray-700 font-medium mt-6 mb-2">
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
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <span className="text-gray-600 font-normal">
                Enter Your Password
              </span>
            </label>

            <div className="relative">
              <motion.input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223a10.477 10.477 0 0 0-.97 1.232 1.006 1.006 0 0 0 0 1.09C5.277 13.632 8.388 16.5 12 16.5c1.315 0 2.568-.356 3.675-.98M3 3l18 18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9.75a3.75 3.75 0 1 0-6 3"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25s8.268 2.693 9.542 6.75c-1.274 4.057-5.065 6.75-9.542 6.75S3.732 16.057 2.458 12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="mt-3 mb-8 text-right text-sm text-gray-500 hover:text-black cursor-pointer select-none">
              Forgot Password?
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white rounded-full py-2 hover:bg-gray-800 transition cursor-pointer"
            >
              Login
            </motion.button>
          </form>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={signInUser}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer"
            >
              <FaGoogle className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="text-center mt-6 text-sm">
            Not a member?{" "}
            <Link
              to="/register"
              className="text-green-600 font-medium hover:underline"
            >
              Register Now
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-green-50 hidden lg:flex items-center justify-center p-10"
        >
          <div className="text-center">
            <img
              src="https://i.ibb.co/HLbTPwXR/Login-bro.png"
              alt="Illustration"
              className="w-full"
            />
            <p className="mt-8 text-lg font-medium text-gray-700">
              Make your work easier and organized
              <br />
              with <span className="font-bold">Athletic-Core</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
