import { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import Swal from "sweetalert2";

import { UserRegisterData } from "../interface/interface";
import { useRegisterMutation } from "../services/api";
import { useNavigate } from "react-router-dom";

import SignUpPet from '../imgs/loginImage.png';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 80vh;
  h1 {
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  img {
    position: absolute;
    width: 200px;
    object-fit: cover;
    top: 36px;
  }
  .CgClose {
    padding: 15px;
    position: absolute;
    left: -150px;
  }
  .registerbutton {
    width: 370px;
    padding: 10px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border: none;
    background: #EBEBEB;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
  }
`

const SignUpTop = styled.div`
  position: relative;
`

const SignUpForm = styled.form`
  margin-top: 125px;
  padding: 25px;
  border-top: 3px solid black;
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
    background-color: #EBEBEB;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  p {
    margin-top: 5px;
    line-height: 20px;
    color: #d8818d;
  }
`

const SignUpNameBox = styled.div`
  button {
    margin-left: 10px;
    padding: 15px 10px;
    background-color: #dddddd;
    color: #858585;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
  }
`
const SignUpPasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`
const SignUpEmailBox = styled.div`
  display: flex;
  flex-direction: column;
`


const Register = () => {
  const [user, setUser] = useState<UserRegisterData>({
    username: '',
    email: '',
    password: '',
    checkpassword: ''
  })
  const [nameTest, setNameTest] = useState(true);
  const [possibleName, setPossibleName] = useState(false);
  const [passwordTest, setPasswordTest] = useState(true);

  const navigate = useNavigate();
  const { mutate } = useRegisterMutation();

  const alertError = (message:string) => {
    Swal.fire({
      icon: "error",
      title: `${message}`,
      showCancelButton:true,
      cancelButtonText:"확인",
      cancelButtonColor:"#d33",
      showConfirmButton: false,
    });
  }

  const alertSuccess = (message:string) => {
    Swal.fire({
      icon: "success",
      title: `${message}`,
      confirmButtonText: "확인",
      confirmButtonColor: "#3085d6",
      showConfirmButton: true,
    });
  }

  const handleNameBlur = () => {

    const validateName = (input: string): boolean => {
      const validCharacters = /^[a-z0-9]+$/;
      const startsWithLowerCase = /^[a-z]/;
      const validLength = /^.{4,12}$/;
      return validCharacters.test(input) && startsWithLowerCase.test(input) && validLength.test(input);
    };

    setNameTest(validateName(user.username));
  };

  const handlePasswordBlur = () => {

    const validatePassword = (input: string): boolean => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W).{6,20}$/;
      return pattern.test(input);
    };

    setPasswordTest(validatePassword(user.password));
  };

  const handleDoubleCheck = async (e:SyntheticEvent) => {
    e.preventDefault();

    const userDB = 'http://localhost:4000/api/users/checkUser';
    const response  = await axios.get(`${userDB}?name=${user.username}`)

    if(response.data === '이름이 중복되었습니다.') {
      alertError(response.data)
      return setPossibleName(false);
    } else {
      alertSuccess(response.data)
      return setPossibleName(true);
    }
  }

  const handleLegister = () => {
    if (!user.username || !user.email || !user.password) {
      alertError("모든 정보를 입력해 주세요.")
      return;
    }
    if (!possibleName) {
      alertError("이름이 중복되었습니다.")
      return;
    }
    if (user.password !== user.checkpassword) {
      alertError('비밀번호 확인이 잘못됐습니다.')
      return;
    }
    if (!passwordTest) {
      alertError('비밀번호를 제대로 입력해 주세요.')
      return;
    }
    const data:UserRegisterData = user;
    mutate(data);
  }

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  return ( 
    <SignUpContainer>
      <SignUpTop>
        <CgClose className="CgClose" onClick={() => navigate('/login')} size={30}/>
        <h1>회원가입</h1>
      </SignUpTop>
      <img src={SignUpPet} alt="petImage" />
      <SignUpForm>
        <SignUpNameBox>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" value={user.username} onChange={handleOnChangeUser} placeholder="아이디" onBlur={handleNameBlur}/>
          <button onClick={handleDoubleCheck}>중복확인</button>
          {nameTest ? '' : <p>영문 소문자와 숫자만 사용하여, 영문 소문자로<br/> 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</p> }
          
        </SignUpNameBox>
        <SignUpPasswordBox>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" value={user.password} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호" onBlur={handlePasswordBlur}/>
          <input type="password" name="checkpassword" value={user.checkpassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호 확인"/>
          {passwordTest ? '' : <p>영문 대문자와 소문자, 숫자, 특수문자 중<br/> 2가지 이상을 조합하여 6 ~ 20자로 입력해 주세요.</p>}
        </SignUpPasswordBox>
        <SignUpEmailBox>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleOnChangeUser} placeholder="이메일"/>
        </SignUpEmailBox>
      </SignUpForm>
      <button className="registerbutton" onClick={handleLegister}>가입하기</button>
    </SignUpContainer>
  );
}

export default Register;