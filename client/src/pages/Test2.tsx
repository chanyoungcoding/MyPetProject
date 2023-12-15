// Test2.tsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import { FaPlus } from "react-icons/fa";

import { useImgRegisterMutation } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface BoxProps {
  backgroundimage: string;
}

const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  input {
    display: none;
  }
  button {
    width: 150px;
    height: 40px;
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #F1F1F1;
    cursor: pointer;
  }
`;

const ImageBox = styled.div<BoxProps>`
  background: url(${props => props.backgroundimage}) no-repeat center/cover;
  width: 140px;
  height: 140px;
  border-radius: 100%;
`;

const UploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  .inner {
    width: 100px;
    height: 100px;
    padding: 25px;
  }
`

const Test2: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const jwt = Cookies.get('jwt');
  const navigate = useNavigate();

  const { mutate } = useImgRegisterMutation();

  const imageUploadBtn = () => {
    (inputRef.current as HTMLInputElement).click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

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

      const data = {imageUrl, jwt};
      mutate(data);
      setLoading(false);
      navigate('/opet')

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <PhotoUpload>
      {image ? <ImageBox backgroundimage={URL.createObjectURL(image)}></ImageBox> : <UploadBox onClick={imageUploadBtn}><FaPlus className='inner' size={50}/></UploadBox>}
      <input 
        type="file" 
        ref={inputRef} 
        onChange={handleImageChange} 
      />
      <button onClick={handleUpload}>등록해요</button>
      {loading ? <div className="loader"></div> : null}
    </PhotoUpload>
  );
};

export default Test2;
