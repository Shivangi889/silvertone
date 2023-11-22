
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../images/logo.png';
import blackLogo from '../../images/logo-black.png'




import './Navbar.css';

const Navbar = () => {
  const [isSolidColor, setIsSolidColor] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const scrollLogo= document.getElementById("logoScroll")
      if (window.scrollY >= window.innerHeight) {
        setIsSolidColor(true);
        scrollLogo.src=blackLogo;
        
      } else {
        setIsSolidColor(false);
        scrollLogo.src=logo;
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSolidColor ? "solid-color" : ""}`}>
      <div className={`navbar-container ${isSolidColor ? "solid-color" : ""}`}>
        <img src={logo} alt="Logo" id="logoScroll" />
        <Link to="/" className={`navbar-link ${isSolidColor ? "solid-color" : ""} `}>Home</Link>

        <Link to="/about" className={`navbar-link ${isSolidColor ? "solid-color" : ""} `}>About</Link>

       


<div class="dropdown">
  <Link
    
    className={`dropdown-toggle navbar-link ${isSolidColor ? "solid-color" : ""} `}
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Propreties
  </Link>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link  to="/residential"class="dropdown-item" href="#">Residential</Link></li>
    <li><Link to="" class="dropdown-item" href="#">Commercial</Link></li>
    <li><Link to="" class="dropdown-item" href="#">Industrial</Link></li>
    <li><Link to="" class="dropdown-item" href="#">SCO Plots</Link></li>
  </ul>
</div>


        <Link to="/developers" className={`navbar-link ${isSolidColor ? "solid-color" : ""}`}>Developers</Link>

        <Link to="/nri-services" className={`navbar-link ${isSolidColor ? "solid-color" : ""}`}>NRI Services</Link>
        <Link to="/blogs" className={`navbar-link ${isSolidColor ? "solid-color" : ""}`}>Blogs</Link>
        <Link to="/contact" className={`navbar-link ${isSolidColor ? "solid-color" : ""}`}>Contact Us</Link>
        <GiHamburgerMenu className="hamburger-icon" />
      </div>
    </div>
  );
};

export default Navbar;
