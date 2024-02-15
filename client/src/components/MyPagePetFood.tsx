import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { usePetFoodDeleteMutation } from "../services/api";
import Swal from "sweetalert2";

const FoodBox = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  .delete {
    position: absolute;
    bottom: 15px;
    right: 10px;
    font-size: 4rem;
    cursor: pointer;
  }
  @media screen and (max-width: 470px) {
    height: 150px;
    .delete {
      font-size: 2rem;
    }
  }
`

const FoodBoxLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 80%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  @media screen and (max-width: 470px) {
    img {
      width: 90%;
      height: 75%;
    }
  }
`
const FoodBoxRight = styled.div`
    flex-grow: 1;
    padding: 30px;
    h1 {
      margin: 10px 0px;
      font-size: 3rem;
      font-weight: bold;
    }
    h2 {
      margin-bottom: 30px;
      font-size: 2rem;
    }
    .button-4 {
      width: 300px;
      padding: 15px;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 470px) {
      padding: 10px 10px 0px;
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
      .button-4 {
        width: 125px;
        padding: 5px;
        font-size: 1rem;
      }
    }
`

interface FoodData {
  foodName: string;
  foodPossible: string;
  foodImage: string;
}

const MyPagePetFood:React.FC<FoodData> = ({foodName, foodPossible, foodImage}) => {


  const navigate = useNavigate();
  const { mutate } = usePetFoodDeleteMutation();
  
  const goToFoodPage = () => {
    navigate(`/search/${foodName}`)
  }

  const handleDeleteClick = (foodName:string) => {

    const alertDeleteSuccess = () => {
      Swal.fire({
        icon: "question",
        title: "삭제하시겟습니까?",
        confirmButtonText: "확인",
        confirmButtonColor: "#3085d6",
        showConfirmButton: true,
      }).then(result => {
        if(result.isConfirmed) {
          return mutate({foodName});
        }
      });
    }

    alertDeleteSuccess();
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
        <MdDelete className="delete" onClick={() => handleDeleteClick(foodName)} />
      </FoodBox>
  );
}

export default MyPagePetFood;