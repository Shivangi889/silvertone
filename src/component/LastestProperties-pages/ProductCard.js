import React from "react";
import './style.css'
const Card = ({ property }) => {
  const { title, price, beds, area,  image } = property;

  return (
    <div className="property-card1">
      <div className="CardsPro">
      <div className="imgCover"><img src={image} alt={title} /></div>
     
       <div className="cardtitle"><h3>{title}</h3></div> 
       </div>
       <div className="infoCard"> 
       <div><span> ${price}</span></div> 
        <div>
        <span>{beds}</span>
        <span>{area} sqft</span>
        </div>
        
       
      </div>
    </div>
  );
};

export default Card;
