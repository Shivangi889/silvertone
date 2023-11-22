
import {useState} from 'react';
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css'
import Navbar from '../../Navbar/Navbar';
import Footer1 from '../../Footer/Footer1';
import axios from "axios";

const Contact = () => {

  const apiKey = 'QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr'; 

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  // 'Content-Type': 'application/json',
};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://podstore.in/silvertone/api/v1/save-enquiry",
        formData,
        { headers } // Include the headers with the request
      );
  
      console.log('Response from the API:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (<>
    <Navbar/>
    <section className="breadcumb-section2 contact-banner p-0">
        <div className="container-C1">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-style1">
                <h2 className="title">CONTACT US</h2>
              </div>
             
            </div>
          </div>
        </div>
      </section>


    <section id="contact-section">
      <div className="container-C">
        
        <p>Email us and keep up to date with our latest news</p>
        <div className="contact-form">
          {/* First grid */}
          <div className='contant-icons'>
            <FaMapMarker /><span className="form-info"> SilverTone Estate C-100,<br/>
             Om Tower Main Dwarka Expressway,
             <br/> Gurgoan, India</span><br />
            <FaPhone /><span className="form-info"> +91 98100 68209</span><br />
            <FaEnvelope /><span className="form-info"> info@silvertone.co.in</span>
          </div>

          {/* Second grid */}
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name"  name="name"  value={formData.name}
            onChange={handleChange} required />
            
              <input type="email" name="email"
            value={formData.email}
            onChange={handleChange} placeholder="Email"  required /><br />
             <input type="number" name="mobile"
            value={formData.mobile}
            onChange={handleChange} placeholder="mobile"  required /><br />
              
              <textarea name="message" 
            value={formData.message}
            onChange={handleChange} placeholder="Message" rows="5" required /><br />
              <button className="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer1/>
    </>
  );
};

export default Contact;



    