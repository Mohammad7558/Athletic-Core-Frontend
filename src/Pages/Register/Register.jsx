import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../provider/AuthContext";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserWithEmailPass, createUserWithGoogle, setUser, updateUser } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (location.pathname === "/register") {
      window.document.title = "Register - Athletic-Core";
    }
  }, [location.pathname]);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoLink = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const haveUpperCase = /[A-Z]/;
    const haveLowerCase = /[a-z]/;

    if (!userName) return toast.error("Enter Your Name");
    if (!photoLink) return toast.error("Enter Your Photo Url");
    if (!email) return toast.error("Enter Email");
    if (!password) return toast.error("Write A Password");
    if (password.length < 6)
      return toast.error("Password Must Be 6 Character Long");
    if (!haveLowerCase.test(password))
      return toast.error("Password Must Have A Lowercase");
    if (!haveUpperCase.test(password))
      return toast.error("Password Must Have An Uppercase");

    const toastId = toast.loading("Creating User");

    createUserWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: userName, photoURL: photoLink })
          .then(() =>
            setUser({ ...user, displayName: userName, photoURL: photoLink })
          )
          .catch((error) => toast.error(error.message));

        toast.success("User Created Successfully", { id: toastId });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => toast.error(error.message, { id: toastId }));
  };

  const handleRegisterWithGoogle = () => {
    const toastId = toast.loading("Creating User");
    createUserWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("User Created Successfully", { id: toastId });
      })
      .catch((error) => toast.error(error.message, { id: toastId }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 my-10">
      <div className="w-[90%] bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:px-20 px-8 py-10 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-2 text-black">
            Create an account
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Join <span className="font-semibold">Athletic-Core</span> and boost
            your productivity.
          </p>

          <form onSubmit={handleRegister}>
            <label className="text-gray-700 font-medium mb-2 flex items-center gap-2">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Your Name <span className="text-red-400">*</span>
            </label>
            <motion.input
              type="text"
              name="userName"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <label className="text-gray-700 font-medium mb-2 flex items-center gap-2">
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
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              Photo URL <span className="text-red-400">*</span>
            </label>
            <motion.input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="w-full px-5 py-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <label className="text-gray-700 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16.5 3.75h-9A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0016.5 3.75zM18 6.75l-6 4.5-6-4.5"
                />
              </svg>
              Email <span className="text-red-400">*</span>
            </label>
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <label className="text-gray-700 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-5a7 7 0 00-14 0v5a2 2 0 002 2z"
                />
              </svg>
              Password <span className="text-red-400">*</span>
            </label>
            <div className="relative mb-6">
              <motion.input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 border border-gray-300 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white rounded-full py-2 hover:bg-gray-800 transition cursor-pointer"
            >
              Register
            </motion.button>
          </form>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={handleRegisterWithGoogle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold"
            >
              <FaGoogle className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image Reveal */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-green-50 hidden lg:flex items-center justify-center p-10"
        >
          <div className="text-center">
            <img
              src="https://i.ibb.co/k7gnwHp/Sign-up-bro.png"
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

export default Register;
