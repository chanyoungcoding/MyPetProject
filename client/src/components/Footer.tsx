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
  padding: 5px 0px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: 9999;
`

const FooterBox = styled.div`
  text-align: center;
`

const FooterCenter = styled.div`
  position: relative;
  bottom: 35px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
      <Link to={'/opet'}>
        <FaHome size={45}/>
        <p>Home</p>
      </Link>
      </FooterBox>
      <FooterBox>
        <Link to={'/search'}>
          <IoSearchOutline size={45}/>
          <p>Search</p>
        </Link>
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