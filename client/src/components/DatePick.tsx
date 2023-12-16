// Pages -> 

import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { DatePickData } from "../interface/interface";

const DatePickerIntro = styled.p`
  margin: 15px 0px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

const DatePickerBox = styled.div`
  .picker {
    background-color: #282c34;
    color: white;
    width: 240px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
`

const DatePick:React.FC<DatePickData> = ({selectedDate, handleDateChange}) => {
  return ( 
    <DatePickerBox>
      <DatePickerIntro>함께한 시간</DatePickerIntro>
      <DatePicker 
        locale={ko} 
        selected={selectedDate} 
        onChange={handleDateChange}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        withPortal
        dateFormat="yyyy년 MM월 dd일" 
        className="picker"
      />
  </DatePickerBox>
  );
}

export default DatePick;