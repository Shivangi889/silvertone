import React, {useState,useEffect}from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer1 from '../../../Footer/Footer1'
import Styles from'./residential.module.css';
import { AiTwotoneBank } from "react-icons/ai";
import { CiShoppingTag,CiHeart ,CiSquarePlus,CiLocationArrow1} from "react-icons/ci";
import  axios  from 'axios';
import { Link ,useParams } from 'react-router-dom';



const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";
  const Residential = () => {
    const {type } = useParams();
    const [properties, setProperties] = useState([]);
  
    useEffect(() => {
      const fetchProperties = async () => {
        try {
          const response = await axios.get(
            `https://podstore.in/silvertone/api/v1/get-all-properties/residential`,
            {
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            }
          );
          setProperties(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle error, e.g., display an error message to the user
        }
      };
  
      fetchProperties();
    }, []);


  
  
  return (
    <div>
      <Navbar />

      <section className="breadcumb-section2-r1 residential-banner p-0">
        <div className="container-R1">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1-r1">
                <h2 className="title">PROPERTIES</h2>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className='row residentialOptions'>
      <div className="col-3">
  <div className="dropdown">
    <button className="dropdown-toggle btn-outline form-control" data-toggle="dropdown">
      Property Status
    </button>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to="#">All</Link>
      <Link className="dropdown-item" to="#">For Sale</Link>
      <Link  className="dropdown-item-text" to="#">Possession by June, 2026</Link>
    </div>
  </div>
</div>

<div className="col-3">
  <div className="dropdown">
    <button className="dropdown-toggle btn-outline form-control" data-toggle="dropdown">
      Property Type
    </button>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to="#">All</Link>
      <Link className="dropdown-item"  to="#">Flats</Link>
      <Link className="dropdown-item-text" to="#">Plots</Link>
      <Link className="dropdown-item-text" to="#">Villas</Link>
      <Link className="dropdown-item-text" to="#">Luxury Project</Link>
      <Link className="dropdown-item-text" to="#">Ready To Move In</Link>
      <Link className="dropdown-item-text" to="#">Luxury Flats</Link>
      <Link className="dropdown-item-text" to="#">Under Construction</Link>
      <Link className="dropdown-item-text" to="#">Affordable Project</Link>
      <Link className="dropdown-item-text" to="#">Commercial Plots</Link>
    </div>
  </div>
</div>
</div>
<section>
<div className={Styles.container_rr}>
  <div className="pCard">
    <div className={`col-xs-12 col-sm-6 col-md-4 ${Styles.residentalcards}`}>
      

      {properties.map((property )=> (
        <div key={property.id} className={Styles.cards}>
          <div className="view overlay">
            <img className={Styles.cardImgTop} src={property.image} alt="" />
            <Link to="#!">
              <div className="mask rgba-white-slight"></div>
            </Link>
          </div>
          <div className="card-body">
          
            <div  className="list-content">
               
              <h4 className={Styles.list_title}>
                <Link to={property.pageurl}>{property.title}</Link>
              </h4>
              <p className={Styles.list_text}>{property.location}</p>
              <div className={Styles.list_meta}>
                <p><span><AiTwotoneBank /></span>{property.beds}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p>Starting From: <span><CiShoppingTag /></span>{property.area}</p>
              </div>
              <hr className="mt-2 mb-2" />
              <div className={Styles.list_meta2}>
                {/* <span className="for-what">{property.saleType}</span> */}
                <span className={Styles.for_what}>{property.property_for}</span>
                <div className={Styles.icons}>
                  <Link to="#"><span><CiLocationArrow1 /></span></Link>
                  <Link to="#"><span><CiSquarePlus /></span></Link>
                  <Link to="#"><span><CiHeart /></span></Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      ))}
      
    </div>
  </div>
</div>
</section>

      <Footer1 />
    </div>
  )
}

export default Residential