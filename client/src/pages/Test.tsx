import { useState } from "react";
import RegisterPet from "./RegisterPet";
import DatePick from "../components/DatePick";
import NamePick from "../components/NamePick";
import styled from "styled-components";

const RegisterPetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Test = () => {
  const [petName, setPetName] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePetName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return ( 
    <RegisterPetContainer>
      <RegisterPet/>
      <NamePick petName={petName} handlePetName={handlePetName} />
      <DatePick selectedDate={selectedDate} handleDateChange={handleDateChange}/>
    </RegisterPetContainer>
  );
}

export default Test;