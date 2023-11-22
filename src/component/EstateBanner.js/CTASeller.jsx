import React from 'react';
import { Link } from "react-router-dom";
import {  BsArrowUpRight } from 'react-icons/bs';
 import './CTASeller.css';


const CTASellerBanner = () => {
  return (
    <section className="cta-banner4 d-flex align-items-center" data-stellar-background-ratio="0.1">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto wow fadeInUp">
            <div className="cta-style4">
              <h6 className="sub-title">BUY OR SELL</h6>
              <h1 className="cta-title mb30 text-white">Looking to Buy a new property or sell an existing one? Silver Tone provides an awesome solution!</h1>
              <div className="d-block">
                <Link to="https://silvertone.co.in/property-lists" className="ud-btn btn-white">
                    Browse Properties
                    <BsArrowUpRight className="fal fa-arrow-right-long"></BsArrowUpRight></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CTASellerBanner;
