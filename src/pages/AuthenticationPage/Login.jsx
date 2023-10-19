import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handlePasswordShow = (e) => {
    setShow(e.target.checked);
  };
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

  }
  return (
    <div className="min-h-[93vh] px-2 md:px-0 py-6 md:py-10 flex items-center justify-center">
      <div className="md:w-3/12 mx-auto">
        <h4 className="text-4xl font-bold text-center">
          <span className="text-primary">Tech Titan</span> Login
        </h4>
        <form onSubmit={handleLogin} className="my-5">
          <div>
            <label className="text-lg font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4"
            />
          </div>
          <div className="relative">
            <label className="text-lg font-medium" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Type Your Password"
              type={`${show ? "text" : "password"}`}
              name="password"
              id="password"
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4"
            />
            <label className=" swap swap-rotate absolute bottom-7 right-3 text-black">
              <input type="checkbox" onChange={handlePasswordShow} />
              <AiFillEye className="swap-off fill-current text-2xl"></AiFillEye>
              <AiOutlineEyeInvisible className="swap-on fill-current text-2xl"></AiOutlineEyeInvisible>
            </label>
          </div>
          <div className="text-right my-1 hover:underline cursor-pointer">
            <span>Forgot your password?</span>
          </div>
          <input
            className="py-3 px-4 rounded-md bg-primary w-full outline-none my-4 text-white text-lg font-medium cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center">
          New to Tech Titan?{" "}
          <Link to="/register" className="text-accent underline">
            Register here.
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
