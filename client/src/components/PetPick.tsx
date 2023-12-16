// Test2.tsx
import React, { useRef } from 'react';

import styled from 'styled-components';

import { FaPlus } from "react-icons/fa";

interface BoxProps {
  backgroundimage: string;
}

const PhotoUpload = styled.div`
  margin-top: 150px;
  input {
    display: none;
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

interface RegisterPetData {
  image: File | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PetPick:React.FC<RegisterPetData> = ({image, handleImageChange }) => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const imageUploadBtn = () => {
    (inputRef.current as HTMLInputElement).click();
  };

  return (
    <PhotoUpload>
      {image ? <ImageBox onClick={imageUploadBtn} backgroundimage={URL.createObjectURL(image)}></ImageBox> : <UploadBox onClick={imageUploadBtn}><FaPlus className='inner' size={50}/></UploadBox>}
      <input 
        type="file" 
        ref={inputRef} 
        onChange={handleImageChange} 
      />
    </PhotoUpload>
  );
};

export default React.memo(PetPick);
