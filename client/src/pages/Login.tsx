import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { LuUser, LuLock } from "react-icons/lu";

import LoginOptimizationPet from '../imgs/_loginImage.webp';
import LoginPet from '../imgs/loginImage.png';
import LoginBackground from '../imgs/MainBackground.jpg';
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
  height: 90vh;
  background-color: white;
  border-radius: 30px 30px 0px 0px;
  border-top: 3px solid black;
  button {
    width: 250px;
    margin: 10px;
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: bold;
    color: #757575;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
  }

  img, source {
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
    background-color: #EBEBEB;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
        <picture>
          <source srcSet={LoginOptimizationPet} type="image/webp" />
          <img src={LoginPet} alt="petImage" />
        </picture>
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