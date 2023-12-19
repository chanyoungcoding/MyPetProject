import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import Chocolate from '../imgs/chocolate.jpg';
import Orange from '../imgs/fruit.jpg';
import Onions from '../imgs/onions.jpg';
import Potato from '../imgs/potato.jpg';
import Steaks from '../imgs/steaks.jpg';

import 'swiper/css';
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContainer = styled.div`
  height: 95vh;
  margin: 0px auto;
  padding: 30px;
  p {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  .searchicon {
    position: relative;
    margin-top: 30px;
    left: -40px;
  }
`

const SearchInput = styled.input`
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 15px;
  margin-top: 30px;
  padding: 10px 60px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const RecommendBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const RecommendSearch = styled.p`
  flex-basis: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const SwiperContainer = styled.div`
  margin-top: 100px;
`

const SwiperInner = styled.div`
  width: 155px;
  height: 155px;
  background: linear-gradient(to left, rgba(0,0,0, 0.4), rgba(0,0,0,0.4)), url(${props => props.property}) no-repeat center/cover;
  border-radius: 10px;
  color: ${props => props.color || 'white'};
  p {
    padding: 40px 5px;
    text-align: center;
    line-height: 30px;
  }
`

const Search = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const onSearch = () => {
    navigate(`/search/${search}`)
  }

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') onSearch();
  }

  return ( 
    <SearchContainer>
      <p>어떤 음식이 강아지에게<br/>안전한지 궁금하시죠?</p>
      <SearchInputContainer>
        <SearchInput type="text" value={search} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
        <IoSearchOutline className="searchicon" size={35} onClick={onSearch}/>
      </SearchInputContainer>

      <p>추천 검색어</p>
      <RecommendBox>
        <RecommendSearch>#양파</RecommendSearch>
        <RecommendSearch>#감자</RecommendSearch>
        <RecommendSearch>#초콜릿</RecommendSearch>
      </RecommendBox>

      <SwiperContainer>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <SwiperInner property={Chocolate}>
              <p>초콜릿은 절대<br/> 안돼요!!</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Orange}>
              <p>과육은 OK,<br/> 껍질은 NO</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Onions}>
              <p>강아지의 적혈구를 파괴해요!!</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Potato}>
              <p>다양한 영양소<br/> 덕분에 좋아요</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Steaks}>
              <p>강아지들의<br/> 기력 보충</p>
            </SwiperInner>
          </SwiperSlide>

        </Swiper>
      </SwiperContainer>
    </SearchContainer>
  );
}

export default Search;