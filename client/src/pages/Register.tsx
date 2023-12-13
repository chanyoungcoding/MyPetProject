import { useState } from "react";
import { useRegisterMutation } from "../services/api";
import { UserRegisterData } from "../interface/interface";

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
  console.log(user)

  return ( 
    <>
    <form>
      <input type="text" name="username" value={user.username} onChange={handleOnChangeUser}/>
      <input type="text" name="email" value={user.email} onChange={handleOnChangeUser}/>
      <input type="password" name="password" value={user.password} autoComplete="current-password" onChange={handleOnChangeUser}/>
    </form>
    <button onClick={handleLegister}>가입하기</button>
    </>
  );
}

export default Register;