import React, { useEffect, useState } from 'react';
import './About.css';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Footer1 from '../../Footer/Footer1';

const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";

const About = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://podstore.in/silvertone/api/v1/get-aboutus",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setAboutUs(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <section className="breadcumb-section2 about-banner p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">About Us</h2>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {aboutUs.map((list, index) => (
        <section className="our-about" key={index}>
          <div className="container">
            <div className="row wow fadeInUp col-lg-12" data-wow-delay="300ms">
              <div className="col-lg-6">
                <h2 className="section-heading pb-4">{list.title}</h2>
                <div className="about-text">
                  <p dangerouslySetInnerHTML={{ __html: list.description }}>
                    {/* {list.description} */}
                    </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-pic">
                  <img src={list.about_image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row wow fadeInUp col-lg-12" data-wow-delay="300ms">
              <div className="col-lg-6">
                <div className="about-pic">
                  <img src={list.mission_image} alt="" />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="about-text">
                  <p dangerouslySetInnerHTML={{__html:list.mission_vision }}>
                    {/* {list.mission_vision} */}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <Footer1/>
    </div>
  );
};

export default About;
