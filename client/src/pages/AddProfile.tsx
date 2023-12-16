import { useCallback, useState } from "react";
import PetPick from "../components/PetPick";
import DatePick from "../components/DatePick";
import NamePick from "../components/NamePick";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useImgRegisterMutation } from "../services/api";
import axios from "axios";

const RegisterPetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const RegisterButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #F1F1F1;
  cursor: pointer;
`

const AddProfile = () => {
  const [petName, setPetName] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const jwt = Cookies.get('jwt');
  const navigate = useNavigate();

  const { mutate } = useImgRegisterMutation();

  const handlePetName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  } ,[])

  const handleUpload = async () => {
    if (!image) {
      alert('강아지를 등록해 보세요.') 
      return;
    };

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'undcwpw8');

    try {
      setLoading(true);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dnjjlp2uy/image/upload',
        formData
      );

      const imageUrl = response.data.secure_url;

      const data = {imageUrl, jwt, petName, selectedDate};
      mutate(data);
      setLoading(false);
      navigate('/opet')

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return ( 
    <RegisterPetContainer>
      <PetPick image={image} handleImageChange={handleImageChange}/>
      <NamePick petName={petName} handlePetName={handlePetName} />
      <DatePick selectedDate={selectedDate} handleDateChange={handleDateChange}/>
      <RegisterButton onClick={handleUpload}>등록해요</RegisterButton>
      {loading ? <div className="loader"></div> : null}
    </RegisterPetContainer>
  );
}

export default AddProfile;