import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';


const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [params, setParams] = useSearchParams();
  const Location = useLocation();

  const fetchSearchResults = async () => {
    try {
      const response = await axios.post(
        'https://podstore.in/silvertone/api/v1/search-properties',
        {
          search_keyword: params.get("search_keyword"),
          property_type: Location.pathname.split("/")[2],
          city: params.get("location"),
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // const data = await response.json()
      console.log(response.data.data);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [params, Location]);

  return (
    <>
      <h2>Search Results</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Display search results */}
        {searchResults.map((property,index) => (
          <div key={index} style={{ margin: '10px', width: '300px' }}>
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <img src={property.image} alt={property.title} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;

