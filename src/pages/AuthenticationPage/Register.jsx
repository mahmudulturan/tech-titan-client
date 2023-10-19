import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";


const Register = () => {
  const [show, setShow] = useState(false);
  const handlePasswordShow = (e) => {
    setShow(e.target.checked);
  };

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

  }
  return (
    <div className="min-h-[93vh] px-2 md:px-0 py-6 md:py-10 flex items-center justify-center">
      <div className="md:w-3/12 mx-auto">
        <h4 className="text-4xl font-bold text-center">
        Get Started with <br />
          <span className="text-primary"> Tech Titan</span>
        </h4>
        <form onSubmit={handleRegister} className="my-5">
          <div>
            <label className="text-lg font-medium" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id="name"
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4"
            />
          </div>
          <div>
            <label className="text-lg font-medium" htmlFor="photo">
              Photo URL
            </label>
            <input
              placeholder="Enter Your Photo URL"
              type="text"
              name="photo"
              id="photo"
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4"
            />
          </div>
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
            <label className="swap swap-rotate absolute bottom-7 right-3 text-black">
              <input type="checkbox" onChange={handlePasswordShow} />
              <AiFillEye className="swap-off fill-current text-2xl"></AiFillEye>
              <AiOutlineEyeInvisible className="swap-on fill-current text-2xl"></AiOutlineEyeInvisible>
            </label>
          </div>
          <input
            className="py-3 px-4 rounded-md bg-primary w-full outline-none my-4 text-white text-lg font-medium cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center">
        Have an account? <Link to="/login" className="text-accent underline"> Login to continue.</Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
