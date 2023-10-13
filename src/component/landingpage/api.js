import React, { useState, useEffect } from "react";
import axios from "axios";

function LandingPage() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";
    const fetchData = async () => {
      try {
        const response = await axios.get("https://your-api-base-url/v1/get-home-banners", {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        setBanners(response.data.data); // Use response.data.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="banner-container">
        {banners.map((banner, index) => (
          <div key={index} className="banner">
            <img src={banner.image} alt={banner.title} />
            <h2>{banner.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
