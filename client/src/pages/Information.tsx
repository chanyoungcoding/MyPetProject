import { Link } from "react-router-dom";
import styled from "styled-components";

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InformationBox = styled(Link)`
  width: 80%;
  height: 150px;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 20px;
  background-color: aliceblue;
  h1 {
    margin: 10px 0px;
  }
`

const Information = () => {
  return (
    <InformationContainer>
      <InformationBox to={'/animalDisease'}>
        <h1>반려견 질병</h1>
      </InformationBox>
      <InformationBox to={'/animalGrowth'}>
        <h1>반려견 성장</h1>
      </InformationBox>
      <InformationBox to={'/animalTraining'}>
        <h1>반려견 훈련</h1>
      </InformationBox>
      <InformationBox to={'/animalVaccinations'}>
        <h1>반려견 예방 접종</h1>
      </InformationBox>
    </InformationContainer>
  );
}

export default Information;