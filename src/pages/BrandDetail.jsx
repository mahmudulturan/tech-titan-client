import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Slider from "../components/Slider/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product/Product";

const BrandDetail = () => {
  const brand = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    axios.get(`https://tech-titan-server.vercel.app/brand/${brand.name}`)
    .then(res => setProducts(res.data))
    .catch(error => console.log(error))
  },[brand])
  const bannerSliders = brand.advertisements;
  return (
    <div data-aos="fade-up"  className="min-h-[93vh]">
      <div >
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Autoplay]}
        className="mySwiper">
        {bannerSliders.map((slide, indx) => (
          <SwiperSlide key={indx}>
            <Slider slide={slide}></Slider>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      {
        products.length>0?
      <div className="md:w-10/12 px-2 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {
            products?.map(product => <Product key={product._id} product={product}></Product>)
        }
      </div>
      :
      <div className="my-12">
        <h4 className="font-medium text-4xl text-text dark:text-white text-center">Product Will Adding Sooon!</h4>
      </div>
      }
    </div>
  );
};

export default BrandDetail;
