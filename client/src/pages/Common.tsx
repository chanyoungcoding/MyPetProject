import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";

import '../styles/common.scss';

import MainBackground from '../imgs/MainBackground.png';

// 배경색(임시)
const Main = styled.div`
  background: url(${MainBackground});
`

const Common = () => {
  return ( 
    <Main>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </Main>
  );
}
export default Common;