import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <div className="font-ubuntu">
            <Banner></Banner>
            <Brands></Brands>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;