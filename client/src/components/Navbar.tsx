import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import React from "react";

const NavbarContainer = styled.div`
  display: flex;
  align-items:center;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .left {
    position: absolute;
    .backbutton {
      margin: 10px;
      cursor: pointer;
    }
  }
  .right {
    flex-grow: 1;
    text-align: center;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      font-family: "Protest Riot", sans-serif;
      font-style: normal;
    }
  }
`

interface NavbarTextData {
  text: string;
}

const Navbar:React.FC<NavbarTextData> = ({text}) => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  }

  return ( 
    <NavbarContainer>
      <div className="left">
        <FaArrowLeft className="backbutton" onClick={onClickBack} size={25}/>
      </div>
      <div className="right">
        <h1>{text}</h1>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;