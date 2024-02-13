import styled from "styled-components";
import AddButton from '../imgs/add.png';
import { Link } from "react-router-dom";
import { useApiUserData } from "../services/api";
import { FaPen } from "react-icons/fa";

const MainContainer = styled.div`
  height: 95vh;
  display: flex;
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


const Main = () => {
  const userDB = 'http://localhost:4000/api/users';

  const { data, isLoading, isError } = useApiUserData(userDB);

  const calculateDaysDifference = (selectedDate:  string | Date) => {
    const currentDate = new Date();
    const selectedDateObject = new Date(selectedDate);

    const timeDifference = selectedDateObject.getTime() - currentDate.getTime();
    const dayDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const Day = Math.abs(dayDifference) - 1
    return Day;
  };

  if(isLoading) return <p>로딩중입니다..</p>
  if(isError) return <p>에러가 발생했습니다..</p>

  return ( 
    <MainContainer>
      <MainInstallPetBox>
        {data?.[0]?.img ? (
          <PetContainer>
            <PetBox property={data[0].img}></PetBox>
            <PetChangeBox>
              <Link to={'/addprofile'}>
                <FaPen className="fapen" size={20}/>
              </Link>
            </PetChangeBox>
            <h3>{data[0].petName}</h3>
            <p><span>{calculateDaysDifference(data[0].selectedDate)}</span>동안 함께 했어요</p>
          </PetContainer>
        ) : (
          <>
          <Linkto to={'/addprofile'}/>
          <p>반려동물을 등록해 보세요.</p>
          </>
        )}
      </MainInstallPetBox>
    </MainContainer>
  );
}

export default Main;