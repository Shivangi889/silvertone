import React from 'react';
import "react-multi-carousel/lib/styles.css";
import './cards.css'


const data = [
  {
    name: `Aliza Brthen`,
    img: `https://silvertone.co.in/customerslist/6467530947046_sw_testimonial-5.png`,
    occupation: `Fashion Designer`,
    review: `I was searching for a ready-to-move-in property that suited my needs. 
    Silver Tone' easy-to-use platform and dedicated team made my search efficient and enjoyable.`},
  {
    name: `Andrew D`,
    img: `https://silvertone.co.in/customerslist/646752fff1e9f_sw_testimonial-4.png`,
    occupation: `Salesman`,
    review: `Silver Tone exceeded my expectations in finding an off-plan property in India. 
    Their innovative approach and adaptability to market trends allowed me to make an informed decision.`,
  },
  {
    name: `David Brown`,
    img: `https://silvertone.co.in/customerslist/6467527f8a3d0_sw_testimonial-2.png`,
    occupation: `Investment Banker`,
    review: `I recently purchased a property and I'm extremely satisfied with the process and outcome. The team experts provided exceptional service and made my dream of owning a home a reality`,
  },

];

function Cards() {

  return (
    <div>
      <div className='header'>
        <h6> PEOPLE LOVE LIVING WITH SILVER TONE</h6>
      </div>
      <div className="section__container">
        {data.map((d, index) => (

          <div class="col-sm-6 col-md-4">

            <div key={index} class="team-item">

              <img src={d.img} class="team-img" alt="pic" />

              <h3>{d.name}</h3>

              <div class="team-info"><p>{d.occupation}</p></div>

              <p>{d.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default Cards;
