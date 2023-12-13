import Cookies from "js-cookie";
import Test2 from "./Test2";
import { useTest } from "../services/api";

const Test = () => {
  const jwt = Cookies.get('jwt');

  const url = 'http://localhost:4000/test';
  const { data } = useTest(url, jwt);

  return ( 
    <Test2/>
  );
}

export default Test;