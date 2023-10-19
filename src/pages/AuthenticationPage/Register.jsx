import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';
import axios from "axios";



const Register = () => {
  const [show, setShow] = useState(false);
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
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

    if(password.length<6){
      return toast.error("Password should have minimum 6 characters");
    }
    else if(!/[A-Z]/.test(password)){
      return toast.error("Password should have atleats one capital letter");
    }
    else if(!/[!@#$%^&*]/.test(password)){
      return toast.error("Password should have atleats one special character");
    }

    createUser(email, password)
    .then(res => {
      const user = res.user;
      toast.success('Successfully SignUp!')
      updateProfile(user, {
        displayName: name,
        photoURL: photo
      })
      .then(() => {
        location.reload();
      })
      .catch(error => toast.error(error.message))
      navigate('/')
      const userData = {email, name, photo}
      axios.post('http://localhost:5000/users',userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => console.log(res.data))
      .catch(error => console.log(error))
    })
    .catch(error => toast.error(error.message))

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
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4 text-black"
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
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4 text-black"
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
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4 text-black"
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
              className="py-3 px-4 rounded-md bg-background w-full outline-none my-4 text-black"
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
            value="Sign Up"
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
