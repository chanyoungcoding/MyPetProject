import React from "react";
import styled from "styled-components";
import { NamePickData } from "../interface/interface";

const NamePickerIntro = styled.p`
  margin: 15px 0px;
  font-size: 20px;
  font-weight: bold;
`

const NamePickerInputBox = styled.input`
  background-color: #282c34;
  color: white;
  cursor: pointer;
  width: 240px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const NamePick:React.FC<NamePickData> = ({petName, handlePetName}) => {
  return ( 
    <>
      <NamePickerIntro>나의 강아지 이름은?</NamePickerIntro>
      <NamePickerInputBox type="text" value={petName} onChange={handlePetName} />
    </>
  );
}

export default NamePick;