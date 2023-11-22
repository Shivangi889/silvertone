import React from 'react';
import './CTAbanner.css'; // Import your CSS file with your styles
import { GiEgyptianProfile } from 'react-icons/gi';
import {PiKey} from 'react-icons/pi';
import { Link } from "react-router-dom";
import {  BsArrowUpRight } from 'react-icons/bs';
import CTASellerBanner from './CTASeller';

const CTAbanner = () => {
  return (
    <section className="mainbg">
      <div className="about-sec cta-banner3">
        <div className="container ">
          <div className="row">
            {/* <div className="col-md-6 col-lg-6 pl30-md pl15-xs"> */}
              <div className='column-md-6'>
              <div className="mb30">
                <h2 
                className=" text-capitalize"
                >SILVER TONE ESTATES </h2>
                <h4 className="sub-title">Get the best real estate deals</h4>
                <p>Silverstone Estate Agents is a full-service real estate firm that offers a wide range of services, including property buying and selling, property renovation and construction, real estate consulting, and property management.</p>
              </div>
              <div className="why-chose-list style2">
                <div className="list-one ">
                  <GiEgyptianProfile className="list-icon flex-shrink-0 flaticon-security"></GiEgyptianProfile>
                  <div className="list-content flex-grow-1 ml20">
                    <h6 className="mb-1">Vision</h6>
                    <p className="text mb-0 fz15">The mission of our company is to provide quality real estate services to our clients so that they can achieve their real estate goals.</p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <PiKey className="list-icon flex-shrink-0 flaticon-keywording"></PiKey>
                  <div className="list-content flex-grow-1 ml20">
                    <h6 className="mb-1">Mission</h6>
                    <p className="text mb-0 fz15">The vision of our company is to be the best real estate company in Gurgaon by providing the best customer service, being innovative, and providing top-quality real estate services to our clients.</p>
                  </div>
                </div>
              </div>
              <Link href="https://silvertone.co.in/about-us" className="ud-btn btn-dark">Read More
              <BsArrowUpRight className="fal fa-arrow-right-long"></BsArrowUpRight></Link>
            </div>
          </div>
        </div>
      </div>
      <CTASellerBanner/>
    </section>
  );
};

export default CTAbanner;
