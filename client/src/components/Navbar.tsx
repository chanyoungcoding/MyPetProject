import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: absolute;
  .backbutton {
    margin: 10px;
  }
`

const Navbar = () => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  }

  return ( 
    <NavbarContainer>
      <FaArrowLeft className="backbutton" onClick={onClickBack} size={25}/>
    </NavbarContainer>
  );
}

export default Navbar;