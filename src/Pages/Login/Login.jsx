import React, {  useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { LuEyeClosed } from "react-icons/lu";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signInEmailPassword, createUserWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const provider = new GoogleAuthProvider();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === '') {
      return toast.error('Enter Email');
    } else if (password === '') {
      return toast.error('Enter Password');
    }
    const toastId = toast.loading('User Login...')

    signInEmailPassword(email, password)
      .then(() => {
        toast.success("User Login Successfully", {id: toastId});
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message, {id: toastId});
      });
  };

  const signInUser = () => {
    const toastId = toast.loading('User Login...')
    createUserWithGoogle(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('User Log in Successfully', {id: toastId});
      })
      .catch(error => {
        toast.error(error.message, {id: toastId});
      });
  };

  return (
    <div className="relative bg-gray-100 py-20 px-10 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute -top-32 -left-32 w-[800px] h-[800px] bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 opacity-30 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-[800px] h-[800px] bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 opacity-30 blur-3xl rounded-full z-0"></div>
      <div className="relative z-10 w-full lg:w-1/3 bg-white p-10 shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-5">Login</h2>
        <form onSubmit={handleSignInUser} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input w-full rounded-md mb-2"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full rounded-md input"
                placeholder="Enter your password"
                name="password"
              />
              {showPassword ? (
                <LuEyeClosed
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer"
                />
              )}
              <div className="text-right mt-1">
                <Link className="link text-blue-400 text-sm" state={{ email }} to="/forgetPassword">
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full btn btn-primary">
            Login
          </button>
        </form>

        <div className="divider pt-4">Or Login With</div>

        <div className="text-center mt-10 mb-5">
          <button onClick={signInUser} className="btn btn-circle">
            <FaGoogle />
          </button>
          <h1>Google</h1>
        </div>

        <div className="mt-4">
          <p className="text-center">
            New Here?{" "}
            <Link state={location.state} className="link text-blue-500" to="/register">
              Create An Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
