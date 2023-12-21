import React from "react";
import styled from "styled-components";

const MapUnderBox = styled.div`
  position: relative;
  width: 90%;
  height: 140px;
  margin: 0px auto 20px;
  padding: 10px;
  background: rgb(134,166,227);
  background: linear-gradient(90deg, rgba(134,166,227,1) 0%, rgba(229,224,230,1) 62%, rgba(221,228,243,1) 100%);
  border-radius: 20px;
  h1 {
    font-style: normal;
    padding: 10px 0px;
    font-size: 24px;
  }
  h2 {
    margin: 10px 0px;
  }
  p {
    position: absolute;
    bottom: -8px;
    left: 20px;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 20px;
    background: rgb(134,147,227);
    background: linear-gradient(90deg, rgba(134,147,227,1) 37%, rgba(227,224,230,1) 81%, rgba(233,221,243,1) 100%);
    border-radius: 15px;
  }
`


interface BuildingData {
  buildingName: string;
  buildingAddress: string;
  buildingPhoneNumber: string;
}

const MyPageBuilding:React.FC<BuildingData> = ({buildingName,buildingAddress,buildingPhoneNumber }) => {
  return ( 
    <MapUnderBox>
      <h1>{buildingName}</h1>
      <h2>{buildingAddress}</h2>
      <p>{buildingPhoneNumber}</p>
    </MapUnderBox>
  );
}

export default MyPageBuilding;