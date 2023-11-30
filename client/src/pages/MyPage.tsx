import styled from "styled-components";
import testImg from '../imgs/loginImage.png';

const MyPageTop = styled.div`
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  height: 15vh;
`

const MyPageContainer = styled.div`
  border-bottom: 1px solid #E4E4E4;
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


const MyPage = () => {
  return ( 
    <div className="mypage">
      <MyPageTop></MyPageTop>
      <MyPageContainer>
        <ProfileBox>
          <ProfileImg src={testImg}></ProfileImg>
          <h1>임시 이름</h1>
        </ProfileBox>
      </MyPageContainer>
    </div>
  );
}
export default MyPage;