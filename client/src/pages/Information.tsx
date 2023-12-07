import { Link } from "react-router-dom";
import styled from "styled-components";

import dog from '../imgs/dog.png';
import dog1 from '../imgs/dog1.png';
import dog2 from '../imgs/dog2.png';
import dog3 from '../imgs/dog3.png';

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const InformationBox = styled(Link)`
  display: flex;
  width: 80%;
  height: 100px;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 20px;
  background-color: aliceblue;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  h1 {
    margin: 15px 0px 25px;
    font-size: 20px;
    font-weight: bold;
  }
  img {
    width: 110px;
    height: 110px;
    object-fit: cover;
  }
  .dog,.dog1,.dog2,.dog3 {
    position: relative;
  }
  .dog {
    top: 0px;
  }
  .dog1 {
    bottom: -15px;
  }
  .dog2 {
    bottom: -28px;
  }
  .dog3 {
    bottom: -19px;
  }
`

const ImgBox = styled.div`
flex-grow: 1;
`

const IntroBox = styled.div`
  flex-grow: 2;
`

const Information = () => {
  return (
    <InformationContainer>
      <InformationBox to={'/animalDisease'}>
        <ImgBox>
          <img className="dog" src={dog} alt="강아지이미지" />
        </ImgBox>
        <IntroBox>
          <h1>반려견 질병</h1>
          <p>호흡기, 눈, 귀 등등..</p>
        </IntroBox>
      </InformationBox>
      <InformationBox to={'/animalGrowth'}>
        <ImgBox>
          <img className="dog1" src={dog1} alt="강아지이미지" />
        </ImgBox>
        <IntroBox>
          <h1>반려견 성장</h1>
          <p>출생에서 3주까지는..</p>
        </IntroBox>
      </InformationBox>
      <InformationBox to={'/animalTraining'}>
        <ImgBox>
          <img className="dog2" src={dog2} alt="강아지이미지" />
        </ImgBox>
        <IntroBox>
          <h1>반려견 훈련</h1>
          <p>훈육은 생후 2~3개월...</p>
        </IntroBox>
      </InformationBox>
      <InformationBox to={'/animalVaccinations'}>
        <ImgBox>
          <img className="dog3" src={dog3} alt="강아지이미지" />
        </ImgBox>
        <IntroBox>
          <h1>반려견 예방 접종</h1>
          <p>예방접종을 한 후에는..</p>
        </IntroBox>
      </InformationBox>
    </InformationContainer>
  );
}

export default Information;