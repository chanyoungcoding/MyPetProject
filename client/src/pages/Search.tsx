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

const SearchContainer = styled.div`
  width: 90%;
  margin: 100px auto;
  p {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0px;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  .searchicon {
    position: relative;
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
  width: 150px;
  height: 150px;
  background: url(${props => props.property}) no-repeat center/cover;
  background-color: black;
  border-radius: 10px;
  color: ${props => props.color || 'white'};
  p {
    margin: 0;
    padding: 40px 10px;
  }
`

const Search = () => {
  return ( 
    <SearchContainer>
      <p>어떤 음식이 강아지에게<br/>안전한지 궁금하시죠?</p>
      <SearchInputContainer>
        <SearchInput type="text"/>
        <IoSearchOutline className="searchicon" size={35}/>
      </SearchInputContainer>

      <p>추천 검색어</p>
      <RecommendBox>
        <RecommendSearch>#양파</RecommendSearch>
        <RecommendSearch>#감자</RecommendSearch>
        <RecommendSearch>#오징어</RecommendSearch>
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
              <p>초콜릿은 절대 안돼요!!</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Orange}>
              <p>과육은 OK, 껍질과 하얀 섬유질은 NO</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Onions}>
              <p>강아지의 적혈구를 파괴을 파괴해요!!</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Potato}>
              <p>다양한 영양소 덕분에 좋아요!!</p>
            </SwiperInner>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperInner property={Steaks}>
              <p>강아지들의 기력 보충</p>
            </SwiperInner>
          </SwiperSlide>

        </Swiper>
      </SwiperContainer>
    </SearchContainer>
  );
}

export default Search;