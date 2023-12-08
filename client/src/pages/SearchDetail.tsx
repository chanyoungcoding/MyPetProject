import { useParams } from "react-router-dom";
import styled from "styled-components";

import ChocolateImg from '../imgs/chocolate.jpg';
import TestDog from '../imgs/loginImage.png';

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

  return ( 
    <>
    <DetailTopContainer/>
    <DetailContainer>
      <DetailHeader>
        <img src={TestDog} alt="등록된 강아지" />
        <div></div>
        <h1>초콜릿은 치명적이에요.</h1>
      </DetailHeader>
      <DetailIntro>
        초콜릿이 개에게 매우 유독하다는 것은 충분히 입증된 사실입니다. 
        초콜릿에는 개의 대사 과정을 
        방해하는 자극제인 테오브로민이 함유되어 있습니다.  
        먹은 양에 따라 위장 장애, 
        심장 문제, 발작이 생기거나 심지어 죽을 수도 있습니다.
      </DetailIntro>
    </DetailContainer>
    </>
  );
}
export default SearchDetail;