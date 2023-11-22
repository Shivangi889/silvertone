

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import './style.css';
import axios from "axios";
import "swiper/swiper-bundle.css"; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SearchBox from "./SearchBox/SearchBox";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function LandingPage() {
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
    <div className="landing-page-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
              <div className='title'>
                <h2>{banner.title}</h2>
              </div>
            </div>

            <div className='button'>
              <button className="btnExplore">Explore</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="searchBoxDiv">
        
      
        <SearchBox />
        
      </div>
    </div>
  );
}

