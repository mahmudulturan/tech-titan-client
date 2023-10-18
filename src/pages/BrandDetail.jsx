import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Slider from "../components/Slider/Slider";

const BrandDetail = () => {
  const brand = useLoaderData();
  const bannerSliders = brand?.advertisements;
  return (
    <div className="min-h-[93vh]">
      <div data-aos="fade-up" >
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
    </div>
  );
};

export default BrandDetail;
