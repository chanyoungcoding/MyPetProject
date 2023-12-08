import { useParams } from "react-router-dom";
import styled from "styled-components";

import ChocolateImg from '../imgs/chocolate.jpg';
import TestDog from '../imgs/loginImage.png';
import { useApiPetFoodData } from "../services/api";

const DetailTopContainer = styled.div`
  height: 20vh;
  background: url(${ChocolateImg}) no-repeat center/cover;
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

const SearchDetail = () => {

  const {name} = useParams();
  const PetFoodDB = 'http://localhost:4000/pet-foods';

  const { data } = useApiPetFoodData(PetFoodDB, name);
  console.log("🚀 ~ file: SearchDetail.tsx:67 ~ SearchDetail ~ data:", data)

  return ( 
    <>
    <DetailTopContainer/>
    <DetailContainer>
      {data?.map(item => 
        <>
          <DetailHeader key={item.name}>
            <img src={TestDog} alt="등록된 강아지" />
            <div></div>
            <h1>{item.name}은 {item.eat}.</h1>
          </DetailHeader>
          <DetailIntro>
            {item.introduce}
          </DetailIntro>
        </>
      )}
    </DetailContainer>
    </>
  );
}
export default SearchDetail;