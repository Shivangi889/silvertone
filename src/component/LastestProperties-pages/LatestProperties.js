
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { BsArrowUpRight } from 'react-icons/bs';
import "react-multi-carousel/lib/styles.css";
import Card from "./ProductCard"; // Create a Card component for displaying each property
import './style.css'
import { Link } from "react-router-dom";

const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr"; // Use environment variables

const LatestProperties = () => {
  const [latestProperties, setLatestProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://podstore.in/silvertone/api/v1/get-latest-properties",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setLatestProperties(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You can display an error message to the user here
      }
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="latest-properties">
      <h1>Latest Properties</h1>
      <Carousel responsive={responsive} showDots={true}>
        {latestProperties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </Carousel>

      <div className="column-lg-3">
        <div className="text-align-right flex-container margin-bottom">
          
          <Link
            className="button-link"
            href="https://silvertone.co.in/property-lists"
            target="_blank"
            rel="noopener noreferrer" 
          >
            See All Properties <BsArrowUpRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProperties;

