import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";

import MainBackground from '../imgs/MainBackground.jpg';
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import { useEffect } from "react";

// 배경색
const Main = styled.div`
  background: url(${MainBackground}) no-repeat center/cover;
`

const Common = () => {
  const user = Cookies.get('jwt')
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }
  
  return ( 
    <Main>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </Main>
  );
}
export default Common;