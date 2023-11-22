import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ListDevelopers = () => {
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
    <AppContainer>
      <Wrapper>
        <Text>WE ASSOCIATE WITH TRUSTED NCR DEVELOPERS</Text>
        <Marquee>
          <MarqueeGroup>
            {listDeveloper.map((list, index) => (
              <ImageGroup key={index}>
                <Image src={list.image} alt={list.title} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {listDeveloper.map((list, index) => (
              <ImageGroup key={index}>
                <Image src={list.image} alt={list.title} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default ListDevelopers;

const AppContainer = styled.div`
  width: 100vw;
  height: 50vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
  padding:20px;
  padding-bottom:50px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow:hidden;
  user-select: none;
  mask-image:linear-gradient(to right, hsl{0 0% 0% /0},
  hsl{0 0% 0% / 1} 10%,
  hsl{0 0% 0% /1} 90% ,
  hsl{0 0% 0% /0}

  )
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;`;

const ImageGroup = styled.div`
  display: grid;
  place-item: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: cal(clamp(10rem, 1rem + 40vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 
`;