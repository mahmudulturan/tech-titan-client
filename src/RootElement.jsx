import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

AOS.init();
const RootElement = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white text-text transition duration-300 font-ubuntu">
      <Toaster position="top-center" reverseOrder={false} />
      <Header></Header>
      <div className="min-h-[93vh]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootElement;
