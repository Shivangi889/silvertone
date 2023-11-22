// SearchResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = "QsuyoIt7t8R5fy6u8jRD97gt47G8HV5ZE6R76FGs87gtr";

const SearchResults = ({ type }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.post(
          'https://podstore.in/silvertone/api/v1/search-properties',
          {
            search_keyword: '',
            property_type: type,
            city: '',
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        // Handle the response data as needed
        console.log(response.data);
        setProperties(response.data.data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [type]);

  return (
    <div>
      <h2> {type}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {properties &&
          properties.length > 0 &&
          properties
            .filter(
              property =>
                property.location.includes('YourLocation') &&
                property.title.toLowerCase().includes('YourSearchKeyword') &&
                property.property_type === type
            )
            .map(filteredProperty => (
              <div key={filteredProperty.id} style={{ margin: '10px', width: '300px' }}>
                <h3>{filteredProperty.title}</h3>
                <p>{filteredProperty.location}</p>
                <img src={filteredProperty.image} alt={filteredProperty.title} style={{ maxWidth: '100%', height: 'auto' }} />
                {/* Add other details as needed */}
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchResults;
