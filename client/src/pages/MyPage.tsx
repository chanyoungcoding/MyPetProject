import styled from "styled-components";

import { useState } from "react";

import { FaMapLocationDot, FaBowlFood } from "react-icons/fa6";

import MyPageDogFriends from "../imgs/dogFriends.jpg";
import MyPagePetFood from "../components/MyPagePetFood";
import MyPageBuilding from "../components/MyPageBuilding";
import { useApiUserData } from "../services/api";
import Cookies from "js-cookie";

interface TypeBoxProps {
  property: string;
}

const MyPageTop = styled.div`
  height: 25vh;
  background: url(${MyPageDogFriends}) no-repeat center/cover;
  @media screen and (max-width: 470px) {
    height: 15vh;
  }
`

const MyPageContainer = styled.div`
  height: 85vh;
  background-color: white;
`

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding-top: 200px;
    font-size: 3rem;
    font-weight: bold;
  }
  button {
    width: 200px;
    margin-top: 25px;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 470px) {
    h1 {
      padding-top: 80px;
      font-size: 1.5rem;
    }
  }
`

const ProfileImg = styled.img`
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 100%;
  background-color: white;
  @media screen and (max-width: 470px) {
    width: 150px;
    height: 150px;
    top: -80px;
  }
`

const TypeContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  border-top: 3px solid #EFF0F2;
`

const TypeBox = styled.div<TypeBoxProps>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: ${props => props.property === "true" ? "#F54514" : "black"};
  border-bottom: ${props => props.property === "true" ? "5px solid #F54514" : "5px solid gray"};
  cursor: pointer;
  h1 {
    margin-left: 30px;
    font-size: 2rem;
    font-weight: bold;
  }
  .typebutton {
    font-size: 3rem;
  }
  @media screen and (max-width: 470px) {
    h1 {
      font-size: 1.5rem;
    }
    .typebutton {
      font-size: 2rem;
    }
  }
`

const TypeBox1 = styled.div<TypeBoxProps>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: ${props => props.property === "true" ? "black" : "#F54514"};
  border-bottom: ${props => props.property === "true" ? "5px solid gray" : "5px solid #F54514"};
  cursor: pointer;
  h1 {
    margin-left: 30px;
    font-size: 2rem;
    font-weight: bold;
  }
  .typebutton {
    font-size: 3rem;
  }
  @media screen and (max-width: 470px) {
    h1 {
      font-size: 1.5rem;
    }
    .typebutton {
      font-size: 2rem;
    }
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 120px;
  background-color: white;
  min-height: 37vh;

`

const MyPage = () => {

  const userDB = 'http://localhost:4000/api/users';

  const {data} = useApiUserData(userDB);

  const [bottomPage, setBottomPage] = useState(true);

  const handleClick = () => {
    setBottomPage(true);
  }
  const handleClick2 = () => {
    setBottomPage(false);
  }

  const handleOnLogout = () => {
    Cookies.remove("jwt")
    window.location.reload();
  }

  return ( 
    <div className="mypage">
      <MyPageTop></MyPageTop>
      <MyPageContainer key={data?.username}>
        <ProfileBox>
          <ProfileImg src={data?.img}></ProfileImg>
          <h1>{data?.username}&#09;님</h1>
          <button onClick={handleOnLogout}>로그아웃</button>
        </ProfileBox>
        <TypeContainer>
          <TypeBox property={bottomPage.toString()} onClick={handleClick}>
            <FaBowlFood className="typebutton" />
            <h1>음식</h1>
          </TypeBox>
          <TypeBox1 property={bottomPage.toString()} onClick={handleClick2}>
            <FaMapLocationDot className="typebutton" />
            <h1>건물</h1>
          </TypeBox1>
        </TypeContainer>
        <BottomContainer>
          {bottomPage ? data?.petFood.map((foodItem) => (
            <MyPagePetFood 
              key={foodItem.foodName}
              foodName={foodItem.foodName} 
              foodPossible={foodItem.foodPossible} 
              foodImage={foodItem.foodImage}
            />
          )) : data?.petBuilding.map((buildingItem) => (
            <MyPageBuilding
              key={buildingItem.content}
              buildingName={buildingItem.content}
              buildingAddress={buildingItem.address}
              buildingPhoneNumber={buildingItem.phoneNumber}
            />
          ))}
        </BottomContainer>
      </MyPageContainer>
    </div>
  );
}
export default MyPage;