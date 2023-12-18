import { useState } from "react";
import { useRegisterMutation } from "../services/api";
import { UserRegisterData } from "../interface/interface";
import styled from "styled-components";

import { CgClose } from "react-icons/cg";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  .CgClose {
    padding: 15px;
    position: absolute;
    left: -150px;
  }
`

const SignUpTop = styled.div`
  position: relative;
`

const SignUpForm = styled.form`
  padding: 15px;
  label {
    display: block;
    margin: 15px 0px;
    font-size: 16px;
    color: #949494;
  }
  input {
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #EEEEEE;
  }
`

const SignUpNameBox = styled.div`
  button {
    margin-left: 10px;
    padding: 15px;
    background-color: #dddddd;
    color: #858585;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
  }
  p {
    margin-top: 5px;
    line-height: 20px;
    color: #d8818d;
  }
`
const SignUpEmailBox = styled.div`
  
`
const SignUpPasswordBox = styled.div`
  
`

const Register = () => {
  const [user, setUser] = useState<UserRegisterData>({
    username: '',
    email: '',
    password: ''
  })


  const { mutate } = useRegisterMutation();

  const handleLegister = () => {
    if (!user.username || !user.email || !user.password) {
      alert("모든 정보를 입력해 주세요.");
      return;
    }
    const data:UserRegisterData = user;
    mutate(data);
  }

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  return ( 
    <SignUpContainer>
      <SignUpTop>
        <CgClose className="CgClose" size={30}/>
        <h1>회원가입</h1>
      </SignUpTop>
      <SignUpForm>
        <SignUpNameBox>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" value={user.username} onChange={handleOnChangeUser}/>
          <button>중복확인</button>
          <p>영문 소문자와 숫자만 사용하여, 영문 소문자로<br/> 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</p>
        </SignUpNameBox>
        <SignUpEmailBox>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleOnChangeUser}/>
        </SignUpEmailBox>
        <SignUpPasswordBox>
          <label htmlFor="password">패스워드</label>
          <input type="password" id="password" name="password" value={user.password} autoComplete="current-password" onChange={handleOnChangeUser}/>
        </SignUpPasswordBox>
      </SignUpForm>
      <button onClick={handleLegister}>가입하기</button>
    </SignUpContainer>
  );
}

export default Register;