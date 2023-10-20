import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <div className="font-ubuntu">
            <Banner></Banner>
            <Brands></Brands>
            <NewArrivals></NewArrivals>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;