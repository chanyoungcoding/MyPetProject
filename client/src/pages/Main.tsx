import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { useRecoilValue } from "recoil";

import AOS from "aos";
import "aos/dist/aos.css";

import { dogstalks } from "../recoil/GlobalManagement";
import { useApiUserData } from "../services/api";
import AddButton from '../imgs/add.png';
import { useEffect } from "react";

const MainContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainInstallPetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 30px;
    font-size: 28px;
    font-weight: bold;
  }
`

const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {

  }
`

const PetBox = styled.div`
  width: 150px;
  height: 150px;
  background: url(${props => props.property}) no-repeat center/cover;
  border-radius: 100%;
`

const PetChangeBox = styled.div`
  position: relative;
  top: -10px;
  right: -70px;
  .fapen {
    cursor: pointer;
  }
`

const Linkto = styled(Link)`
  width: 150px;
  height: 150px;
  background: url(${AddButton}) no-repeat center/cover;
  cursor: pointer;
`

const RandomTalkBox = styled.div`
  margin: 40px 30px 10px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  p {
    margin: 10px 0px;
  }
`


const Main = () => {

  useEffect(() => {
    AOS.init();
  },[])

  const userDB = 'http://localhost:4000/api/users';

  const randomTalk = useRecoilValue(dogstalks);

  const { data, isLoading, isError } = useApiUserData(userDB);

  const calculateDaysDifference = (selectedDate:  string | Date) => {
    const currentDate = new Date();
    const selectedDateObject = new Date(selectedDate);

    const timeDifference = selectedDateObject.getTime() - currentDate.getTime();
    const dayDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const Day = Math.abs(dayDifference) - 1
    return Day;
  };

  const getRandomTalk = () => {
    const randomIndex = Math.floor(Math.random() * randomTalk.length);
    return randomTalk[randomIndex];
  };

  const talk = getRandomTalk();

  if(isLoading) return <p>로딩중입니다..</p>
  if(isError) return <p>에러가 발생했습니다..</p>

  return ( 
    <MainContainer>
      <MainInstallPetBox>
        {data?.img ? (
          <PetContainer>
            <PetBox property={data.img}></PetBox>
            <PetChangeBox>
              <Link to={'/addprofile'}>
                <FaPen className="fapen" size={20}/>
              </Link>
            </PetChangeBox>
            <h3>{data.petName}</h3>
            <p><span>{calculateDaysDifference(data.selectedDate)}</span>동안 함께 했어요</p>
          </PetContainer>
        ) : (
          <>
          <Linkto to={'/addprofile'}/>
          <p>반려동물을 등록해 보세요.</p>
          </>
        )}
      </MainInstallPetBox>
      <RandomTalkBox data-aos="flip-up" data-aos-duration="1000">
        <h1>{talk.talk}</h1>
        <p>-{talk.author}</p>
      </RandomTalkBox>
    </MainContainer>
  );
}

export default Main;