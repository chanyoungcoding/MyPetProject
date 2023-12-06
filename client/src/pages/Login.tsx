import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import LoginPet from '../imgs/loginImage.png';

import LoginBackground from '../imgs/MainBackground.png';

const LoginContainer = styled.div`
  background: url(${LoginBackground}) no-repeat center/cover;
`

const LoginIntro = styled.h1`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 150px;
  font-size: 24px;
  font-weight: bold;
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;
  border-radius: 30px 30px 0px 0px;
  border-top: 3px solid black;
  input {
    width: 240px;
    margin-bottom: 30px;
    padding: 10px 30px 10px 5px;
    font-size: 24px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
  button {
    width: 200px;
    margin: 10px;
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background-color: #74CDFF;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: -165px;
    right: 10px;
  }
`

const Login = () => {
  const [data, setData] = useState({username:'',password:''})

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.currentTarget.name]: e.target.value
    })
  }
  return ( 
    <LoginContainer>
      <LoginIntro>Hi Welcome</LoginIntro>
      <InputContainer>
        <img src={LoginPet} alt="petImage" />
        <input 
          type="text" 
          placeholder="username" 
          onChange={onChange} 
          name="username" 
        />
        <input
          type="text" 
          placeholder="password" 
          onChange={onChange} 
          name="password" 
        />
        <button>로그인</button>
        <button>회원가입</button>
      </InputContainer>
    </LoginContainer>
  );
}

export default Login;