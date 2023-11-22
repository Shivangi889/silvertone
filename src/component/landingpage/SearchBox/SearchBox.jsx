
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
      navigate(`/property-lists/${type.toLowerCase()}`);
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
              
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Flats')}
                >
                  Flats
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Plots')}
                >
                  Plots
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Villas')}
                >
                  Villas
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Luxury Projects')}
                >
                  Luxury Projects
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Ready To Move In')}
                >
                  Ready To Move In
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Luxury Flats')}
                >
                  Luxury Flats
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Affordable Projects')}
                >
                 Affordable Projects
                </a>  <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setType('Commercial Plots')}
                >
                 Commercial Plots
                </a>
               
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
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLocation('132032- Gurgaon')}
                >
                  132032- Gurgaon
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLocation('131679-Delhi')}
                >131679-Delhi
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLocation(' 133230-Nodia')}
                >
                 133230-Nodia
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLocation('132032- Gurgaon')}
                >
                 132005-Greater Noida
                </a>
              </div>


              
            </div>
         
          </div>
          <Link to={`/property-lists/${type.toLowerCase()}`} className={SearchStyle.searchLink} >
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
