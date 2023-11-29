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
      <FaHome size={50}/>
      <IoSearchOutline size={50}/>
      <FooterCenter>
        <Link to={'/kakaomap'}>
          <FaMapMarkerAlt size={50}/>
        </Link>
      </FooterCenter>
      <MdPets size={50}/>
      <CgProfile size={50}/>
    </FooterContainer>
  );
}

export default Footer;