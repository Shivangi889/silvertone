import React, { useState } from 'react';
import SearchStyle from './Search.module.css';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';



const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const navigate =  useNavigate (); 
 
  const handleSearch = async () => {
    try {
      const response = await axios.post(
        'https://podstore.in/silvertone/api/v1/search-properties',
        {
          search_keyword: searchTerm,
          property_type: type,
          city: location,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Handle the response data as needed
      console.log(response.data);
      navigate(`/property-lists/${type.toLowerCase()}?search_keyword=${searchTerm}&type=${type}&location=${location}`);

    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={SearchStyle.search}>
      <form>
        <div className="form-row">
          <div className="col-3">
            <label>Search</label>
            <input
               
              type="text"
              className={`form-control ${SearchStyle['yourSpace']}`}
              placeholder="Enter property name or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* {search_keyword|| 'Type'} */}
          </div>

          <div className="col-3">
            <div className="dropdown">
              <label>Type</label>
              <button
                className="dropdown-toggle KeyOptions form-control"
                data-toggle="dropdown"
              >
                {type || 'Type'}
              </button>
              <div className="dropdown-menu">
              
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Flats')}
                >
                  Flats
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Plots')}
                >
                  Plots
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Villas')}
                >
                  Villas
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Luxury Projects')}
                >
                  Luxury Projects
                </Link>
               <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Ready To Move In')}
                >
                  Ready To Move In
               </Link>
               <Link
                  className="dropdown-item"
                  to=""
                  onClick={() => setType('Luxury Flats')}
                >
                  Luxury Flats
               </Link>
                <Link
                  className="dropdown-item"
                  to=""
                  onClick={() => setType('Affordable Projects')}
                >
                 Affordable Projects
                </Link>  <Link
                  className="dropdown-item"
                  to=""
                  onClick={() => setType('Commercial Plots')}
                >
                 Commercial Plots
                </Link>
               
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="dropdown">
              <label>Location</label>
              <button
                className="dropdown-toggle KeyOptions  form-control"
                data-toggle="dropdown"
              >
                {location|| 'Location'}
              </button>
              <div className="dropdown-menu">
                {/* Add onClick handlers to set the location state */}
               <Link
                  className="dropdown-item"
                  to=""
                  onClick={() => setLocation('132032- Gurgaon')}
                >
                  132032- Gurgaon
                </Link>
               <Link
                  className="dropdown-item"
                 to=""
                  onClick={() => setLocation('131679-Delhi')}
                >131679-Delhi
                </Link>
               <Link
                  className="dropdown-item"
                 to=""
                  onClick={() => setLocation(' 133230-Nodia')}
                >
                 133230-Nodia
             </Link>
               <Link
                  className="dropdown-item"
                to=""
                  onClick={() => setLocation('132032- Gurgaon')}
                >
                 Greater Noida
             </Link>
              </div>


              
            </div>
         
          </div>
          <Link to={`/property-lists/${type.toLowerCase()}?search_keyword=${searchTerm}&type=${type}&location=${location}`} className={SearchStyle.searchLink}>
     <button
          type="button"
          className={`btn ${SearchStyle['clickme']}`}
          onClick={handleSearch}
        >
          
          Search
        </button>
        </Link>
        </div>

        
      </form>
    </div>
  );
};
export default SearchBox;