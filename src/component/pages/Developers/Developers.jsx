import { useEffect, useState } from 'react'
import './developer.css'
import Navbar from '../../Navbar/Navbar'
import Footer1 from '../../Footer/Footer1'
import axios from 'axios';


const Developers = () => {

  const apiKey = 'QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr';

  const [listDeveloper, setListDeveloper] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          'https://podstore.in/silvertone/api/v1/get-developers',
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        console.log(response.data.data);
        setListDeveloper(response.data.data);
      } catch (error) {
        console.error('Error Fetching data:', error);
      }
    };
    fetchList();
  }, []);


  return (
    <div>
      <Navbar/>
       <section className="breadcumb-section2 developer-banner p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">OUR DEVELOPERS</h2>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      <section className="our-developer pt60 pb60">
      <div className="container-d">
      
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          {listDeveloper.map((image, index) => (
            <div className="row-lg-3" key={index}>
            
              <div className="developer-pic">
                <img src={image.image} alt={image.title} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
<Footer1/>

    </div>
  )
}

export default Developers