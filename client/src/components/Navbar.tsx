import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  }

  return ( 
    <div className="navbar">
      <FaArrowLeft onClick={onClickBack} size={25}/>
    </div>
  );
}

export default Navbar;