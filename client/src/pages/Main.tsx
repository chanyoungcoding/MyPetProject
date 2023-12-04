import styled from "styled-components";
import AddButton from '../imgs/add.png';
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Linkto = styled(Link)`
  width: 150px;
  height: 150px;
  background: url(${AddButton}) no-repeat center/cover;
  cursor: pointer;
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

const Main = () => {
  return ( 
    <MainContainer>
      <MainInstallPetBox>
        <Linkto to={'/addprofile'}/>
        <p>반려동물을 등록해 보세요.</p>
      </MainInstallPetBox>
    </MainContainer>
  );
}

export default Main;