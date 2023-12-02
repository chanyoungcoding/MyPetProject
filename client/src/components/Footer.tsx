// React Icons
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";


const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 0;
  background-color: #e1e1e1;
  z-index: 9999;
`

const FooterBox = styled.div`
  text-align: center;
`

const FooterCenter = styled.div`
  position: relative;
  bottom: 30px;
  background-color: #e1e1e1;
  border-radius: 100%;
  padding: 10px;
  a {
    color: black;
  }
`

const Footer = () => {
  return ( 
    <FooterContainer>
      <FooterBox>
      <Link to={'/'}>
        <FaHome size={45}/>
        <p>Home</p>
      </Link>
      </FooterBox>
      <FooterBox>
        <IoSearchOutline size={45}/>
        <p>Search</p>
      </FooterBox>
      <FooterCenter>
        <Link to={'/kakaomap'}>
          <FaMapMarkerAlt size={45}/>
        </Link>
      </FooterCenter>
      <FooterBox>
        <Link to={'/information'}>
          <MdPets size={45}/>
          <p>Animals</p>
        </Link>
      </FooterBox>
      <FooterBox>
        <Link to={'/mypage'}>
          <CgProfile size={45}/>
          <p>MyPage</p>
        </Link>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;