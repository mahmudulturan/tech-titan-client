import {useState, useEffect} from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import NewItem from './NewItem';

const NewArrivals = () => {
   const [arrivals, setArrivals] = useState();
   useEffect(()=>{
    axios.get('http://localhost:5000/latest')
    .then(res => setArrivals(res.data))
    .catch(error => console.log(error))
   },[])
//    console.log(arrivals);
  return (
    <div className="min-h-[60vh] my-12 md:w-10/12 mx-auto">
      <div className="text-center my-8">
        <h3 className="font-bold text-4xl mb-4 drop-shadow-md text-primary">
          New Arrivals, New Possibilities
        </h3>
        <p className='max-w-3xl mx-auto font-medium'>Tech innovations open new doors, and our 'New Arrivals' section is where you'll find those possibilities. From gaming to productivity, these products offer new ways to enjoy and interact with technology.</p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper">
          {
            arrivals?.map(product => <SwiperSlide key={product._id}><NewItem product={product}></NewItem></SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
