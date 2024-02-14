import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import TestDog from '../imgs/loginImage.png';
import { useApiPetFoodData, usePetFoodRegisterMutation } from "../services/api";
import Cookies from "js-cookie";
import { useState } from "react";
import { PetFoodRegisterData } from "../interface/interface";

interface DetailTopData {
  imagename: string;
}

const DetailTopContainer = styled.div<DetailTopData>`
  height: 20vh;
  background: url(${props => props.imagename}) no-repeat center/cover;
  border-radius: 0px 0px 45px 0px;
`

const DetailContainer = styled.div`
height: 80vh;
`

const DetailHeader = styled.div`
  position: relative;
  img {
    position: absolute;
    top: -160px;
    left: 50px;
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 100%;
    object-fit: cover;
  }
  div {
    position: absolute;
    top: -18px;
    left: 70px;
    width: 30px;
    height: 20px;
    background-color: white;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  h1 {
    margin: 100px 20px 30px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  .heart {
    position: absolute;
    right: 30px;
    top: -80px;
    color: red;
  }
`

const DetailIntro = styled.p`
  margin: 0px 15px;
  padding: 30px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
`

const NoInformation = styled.p`
  padding-top: 200px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`

const SearchDetail = () => {

  const jwt = Cookies.get('jwt');
  const {name} = useParams();
  const PetFoodDB = 'http://localhost:4000/api/petFoods/findFood';

  const [clickHeart, setClickHeart] = useState(false);

  const { data } = useApiPetFoodData(PetFoodDB, name);
  const {mutate} = usePetFoodRegisterMutation(); 

  const handleClick = (foodName:string, foodPossible:string, foodImage: string) => {
    const data:PetFoodRegisterData = {jwt: jwt, foodName: foodName, foodPossible: foodPossible, foodImage: foodImage}
    mutate(data);
    setClickHeart(true);
  }

  return ( 
    <>
    {data?.map(item => <DetailTopContainer key={item.name} imagename={item.image}/> )}
    <DetailContainer>
      {data && data?.length >= 1 ? data?.map(item => 
        <div key={item.name}>
          <DetailHeader>
            {clickHeart ? 
              <FaHeart className="heart" size={40}/> 
              : 
              <FaRegHeart className="heart" size={40} onClick={() => handleClick(item.name, item.eat, item.image)}/> 
            }
            <img src={TestDog} alt="등록된 강아지" />
            <div></div>
            <h1>{item.name} {item.eat}.</h1>
          </DetailHeader>
          <DetailIntro>
            {item.introduce}
          </DetailIntro>
        </div>
      ) : <NoInformation key='noInformation'>해당 정보가 없습니다.</NoInformation>}
    </DetailContainer>
    </>
  );
}
export default SearchDetail;