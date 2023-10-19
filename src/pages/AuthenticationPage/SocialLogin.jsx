import { BsFacebook, BsGoogle } from "react-icons/bs";



const SocialLogin = () => {
    return (
        <div>
            <div className="flex items-center justify-center my-3">
            <span className="flex-1 h-1 w-16 bg-black dark:bg-white"></span>
            <p className="flex-1 text-center font-medium">Or Continus with</p>
            <span className="flex-1 h-1 w-16 bg-black dark:bg-white"></span>
            </div>
            <div className="flex gap-4 justify-center">
             <button className="text-4xl "><BsGoogle></BsGoogle></button>
             <button className="text-4xl "><BsFacebook></BsFacebook></button>
            </div>
        </div>
    );
};

export default SocialLogin;