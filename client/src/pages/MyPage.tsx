import styled from "styled-components";

import { useState } from "react";
import Cookies from "js-cookie";

import { FaMapLocationDot, FaBowlFood } from "react-icons/fa6";

import MyPagePetFood from "../components/MyPagePetFood";
import MyPageBuilding from "../components/MyPageBuilding";
import { useApiUserData } from "../services/api";


const MyPageTop = styled.div`
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  height: 15vh;
`

const MyPageContainer = styled.div`
  border-bottom: 1px solid #E4E4E4;
  height: 85vh;
`

const ProfileBox = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding-top: 80px;
    font-size: 24px;
    font-weight: bold;
  }
`

const ProfileImg = styled.img`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 100%;
  background-color: white;
`

const TypeContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-around;
`

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  h1 {
    margin-top: 10px;
    font-size: 2rem;
    font-weight: bold;
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px 0px 120px;
  background-color: white;
  min-height: 37vh;
`

const MyPage = () => {

  const userDB = 'http://localhost:4000/pet-users';

  const {data} = useApiUserData(userDB);

  const [bottomPage, setBottomPage] = useState(true);

  const handleClick = () => {
    setBottomPage(true);
  }
  const handleClick2 = () => {
    setBottomPage(false);
  }

  return ( 
    <div className="mypage">
      <MyPageTop></MyPageTop>
      {data?.map(item => (
      <MyPageContainer key={item.username}>
        <ProfileBox>
          <ProfileImg src={item.img}></ProfileImg>
          <h1>{item.username}</h1>
        </ProfileBox>
        <TypeContainer>
          <TypeBox onClick={handleClick}>
            <FaBowlFood size={50}/>
            <h1>음식</h1>
          </TypeBox>
          <TypeBox onClick={handleClick2}>
            <FaMapLocationDot size={50}/>
            <h1>호텔,병원</h1>
          </TypeBox>
        </TypeContainer>
        <BottomContainer>
          {bottomPage ? item.petFood.map((foodItem) => (
            <MyPagePetFood 
              key={foodItem.foodName}
              foodName={foodItem.foodName} 
              foodPossible={foodItem.foodPossible} 
              foodImage={foodItem.foodImage}
            />
          )) : item.petBuilding.map((buildingItem) => (
            <MyPageBuilding
              key={buildingItem.content}
              buildingName={buildingItem.content}
              buildingAddress={buildingItem.address}
              buildingPhoneNumber={buildingItem.phoneNumber}
            />
          ))}
        </BottomContainer>
      </MyPageContainer>
      ))}
    </div>
  );
}
export default MyPage;