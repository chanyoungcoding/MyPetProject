import { useEffect } from 'react';
import styled from 'styled-components';

import '../styles/home.scss';
import cat from '../imgs/고양이.png';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #B69EF5;
  text-align: center;
  h1 {
    position: relative;
    display: inline-block;
    padding: 15px;
    top: 150px;
    font-size: 4rem;
    border-bottom: 5px dashed black;
  }
  img {
    width: 400px;
    position: relative;
    top: 200px;
  }
`

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/login';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return ( 
    <HomeContainer>
      <h1>Our Pet</h1>
      <img src={cat} alt="대표 이미지" />
    </HomeContainer>
  );
}

export default Home;