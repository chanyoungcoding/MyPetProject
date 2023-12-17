import styled from 'styled-components';

import React from 'react';

interface TopBoxInnerProps {
  position: number;
  width: number;
}

const GrowthTopBox = styled.div`
  height: 20vh;
`

const TopBoxInner = styled.div<TopBoxInnerProps>`
  position: relative;
  top: 80px;
  width: 60%;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  img {
    position: absolute;
    top: -${({position}) => position}px;
    right: 10px;
    width: ${props => props.width ? props.width : 120}px;
  }
`

interface InformationData {
  text: string;
  img: string;
  position:number;
  width:number;
}

const InformationTopBox:React.FC<InformationData> = ({text, img, position, width}) => {
  return ( 
    <GrowthTopBox>
      <TopBoxInner position={position} width={width}>
        <h1>{text}</h1>
        <img src={img} alt="강아지이미지" />
      </TopBoxInner>
    </GrowthTopBox>
  );
}
export default InformationTopBox;