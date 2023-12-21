import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodBox = styled.div`
  display: flex;
  width: 350px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: aliceblue;
`

const FoodBoxLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 15px;
  }
`
const FoodBoxRight = styled.div`
    flex-grow: 2;
    h1 {
      margin: 10px 0px;
      font-size: 2rem;
      font-weight: bold;
    }
    h2 {
      margin-bottom: 30px;
      font-size: 20px;
    }
`

interface FoodData {
  foodName: string;
  foodPossible: string;
  foodImage: string;
}

const MyPagePetFood:React.FC<FoodData> = ({foodName, foodPossible, foodImage}) => {

  const navigate = useNavigate();
  const goToFoodPage = () => {
    navigate(`/search/${foodName}`)
  }

  return ( 
      <FoodBox>
        <FoodBoxLeft>
          <img src={foodImage} alt="음식" />
        </FoodBoxLeft>
        <FoodBoxRight>
          <h1>{foodName}</h1>
          <h2>{foodPossible}</h2>
          <button className="button-4" onClick={goToFoodPage}>자세한 정보</button>
        </FoodBoxRight>
      </FoodBox>
  );
}

export default MyPagePetFood;