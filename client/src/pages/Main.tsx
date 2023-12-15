import styled from "styled-components";
import AddButton from '../imgs/add.png';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useApiUserData } from "../services/api";

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

const PetBox = styled.div`
  width: 150px;
  height: 150px;
  background: url(${props => props.property}) no-repeat center/cover;
  border-radius: 100%;
`

const Linkto = styled(Link)`
  width: 150px;
  height: 150px;
  background: url(${AddButton}) no-repeat center/cover;
  cursor: pointer;
`


const Main = () => {
  const user = Cookies.get('jwt');
  const userDB = 'http://localhost:4000/pet-users';

  const { data } = useApiUserData(userDB, user);

  return ( 
    <MainContainer>
      <MainInstallPetBox>
        {data && data[0].img ? (
          <>
            <PetBox property={data[0].img}></PetBox>
          </>
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