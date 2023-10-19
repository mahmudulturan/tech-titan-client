import {  BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const locate = useLocation();
  const handleSocialLogin = (method) => {
    method()
      .then(() => {
        toast.success("Successfully Login!");
        if (locate.state) {
          navigate(locate.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <span className="flex-1 h-1 w-16 bg-black dark:bg-white"></span>
        <p className="flex-1 text-center font-medium">Or Continus with</p>
        <span className="flex-1 h-1 w-16 bg-black dark:bg-white"></span>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          className="text-4xl"
          onClick={() => handleSocialLogin(googleLogin)}>
          <BsGoogle></BsGoogle>
        </button>
        {/* <button className="text-4xl" ><BsFacebook></BsFacebook></button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
