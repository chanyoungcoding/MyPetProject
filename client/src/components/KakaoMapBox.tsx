import React from 'react'
import styled from 'styled-components';
import { FaHeart } from "react-icons/fa";

const MapUnderBox = styled.div`
  position: relative;
  width: 90%;
  height: 140px;
  margin: 0px auto 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
    background-color: #e9e9e9;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 15px;
  }
  .heart {
    position: absolute;
    bottom: 22px;
    right: 20px;
    color: red;
  }
`

interface KakaoData {
  content: string;
  address: string;
  phoneNumber: string;
  onRegisterBuilding: (content: string, address: string, phoneNumber: string | undefined) => void;
}

const KakaoMapBox:React.FC<KakaoData> = ({content, address, phoneNumber, onRegisterBuilding}) => {
  return (
    <MapUnderBox>
      <h1>{content}</h1>
      <h2>{address}</h2>
      <p>{phoneNumber}</p>
      <FaHeart className="heart" size={20} onClick={() => onRegisterBuilding(content, address, phoneNumber)}/>
    </MapUnderBox>
  )
}

export default React.memo(KakaoMapBox);