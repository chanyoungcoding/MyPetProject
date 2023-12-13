import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { LuUser, LuLock } from "react-icons/lu";

import LoginPet from '../imgs/loginImage.png';
import LoginBackground from '../imgs/MainBackground.png';
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/api";
import { UserLoginData } from "../interface/interface";

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
  button {
    width: 200px;
    margin: 10px;
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    color: white;
    background: linear-gradient(90deg, rgba(134,166,227,1) 0%, rgba(157,159,235,1) 63%, rgba(156,126,238,1) 100%);
    cursor: pointer;
  }
  img {
    position: absolute;
    top: -165px;
    right: 10px;
  }
`

const InputBox = styled.div`
  position: relative;
  input {
    width: 240px;
    margin-bottom: 30px;
    padding: 10px 10px 10px 50px;
    font-size: 24px;
    background-color: #9091E9;
    border-radius: 15px;
    border: none;
    outline: none;
  }
  .inputicon {
    position: absolute;
    top: 8px;
    padding-left: 10px;
  }
`

const Login = () => {
  const [user, setUser] = useState({username:'',password:''})

  const { mutate } = useLoginMutation();

  const handleLogin = () => {
    const data:UserLoginData = user;
    mutate(data)
  }

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.target.value
    })
  }

  return ( 
    <LoginContainer>
      <LoginIntro>Hi Welcome</LoginIntro>
      <InputContainer>
        <img src={LoginPet} alt="petImage" />
        <InputBox>
          <LuUser className="inputicon" size={30}/>
          <input 
            type="text" 
            placeholder="Name" 
            onChange={onChange} 
            name="username" 
          />
        </InputBox>
        <InputBox>
          <LuLock className="inputicon" size={30}/>
          <input
            type="text" 
            placeholder="Password" 
            onChange={onChange} 
            name="password" 
          />
        </InputBox>
        <button onClick={handleLogin}>Log In</button>
        <Link to={'/register'}>
          <button>Sign Up</button>
        </Link>
      </InputContainer>
    </LoginContainer>
  );
}

export default Login;