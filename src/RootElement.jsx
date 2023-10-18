import Header from "./components/Header/Header";
import {Outlet} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const RootElement = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white text-text transition duration-300">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootElement;