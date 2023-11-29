import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";

// 배경색(임시)
const Main = styled.div`
  background-color: antiquewhite;
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