import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const [banners, setBanners] = useState([]);

  useEffect(() => {
    const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://podstore.in/silvertone/api/v1/get-home-banners",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setBanners(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="banner">
              <img src={banner.image} alt={banner.title} />
              
            </div>
            <div className='title'>
            <h2 >{banner.title}</h2>
            </div>
            
            <button>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Explore me
</button> 
            
            
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
