/* eslint-disable */
import React, { useEffect, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { FaHotel, FaHospital } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';
import { FaHeart } from "react-icons/fa";
import { BottomSheet } from 'react-spring-bottom-sheet';

import { useApiPetMapData, usePetBuildingRegisterMutation } from "../services/api";
import { PositionData } from "../interface/interface";
import '../styles/kakaomap.scss';
import Cookies from "js-cookie";

import 'react-spring-bottom-sheet/dist/style.css'
import KakaoMapBox from "../components/KakaoMapBox";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMapContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  background-color: white;
`

const KakaoMapSearchContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  z-index: 10;
  input {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 15px 0px 0px 15px;
    border-right: none;
    outline: none;
  }
  button {
    border: 1px solid black;
    border-left: none;
    border-radius: 0px 15px 15px 0px;
    outline: none;
    background-color: white;
    cursor: pointer;
  }
`

const KategorieMap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 80px;
  margin-left: 10px;
  z-index: 10;
`

const KategorieMapButton = styled.button`
  margin: 5px;
  padding: 15px;
  background-color: white;
  outline: none;
  border: none;
  border-radius: 25px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
`

const KakaoMap = () => {

  const PetMapDB = 'http://localhost:4000/api/map';

  
  const { data } = useApiPetMapData(PetMapDB);
  const { mutate } = usePetBuildingRegisterMutation();
  
  const positions = useMemo(() => {
    return data?.map(item => ({
      content: item.buildingName,
      address: item.address,
      phoneNumber: item.phoneNumber || '',
      latlng: new window.kakao.maps.LatLng(item.latitude, item.longitude)
    })) || [];
  }, [data]);
  
  const [petShopName, setpetShopName] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [item, SetItem] = useState<PositionData[] | null>(null);
  
  // 검색시 해당 이름의 호텔,병원,카페 정보를 가져옴
  const findContent = (text: string, content: PositionData[]) => {
    return content.filter(item => item.content.includes(text));
  };

  const memoizedFindContent = useMemo(() => findContent, []);

  // 초기 렌더링시 하단 정보 표시
  useEffect(() => {
    SetItem(positions);
  }, [data])

  useEffect(() => {
    //카카오 맵의 스타트 지점
    const container = document.getElementById('map');
    const options = { 
      center: new window.kakao.maps.LatLng(37.5712852402936, 126.974692588598), 
      level: 5 
    };
    // 카카오 맵 만들기
    const map = new window.kakao.maps.Map(container, options);

    // 카카오 맵 마커 이미지 설정
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const imageSize = new window.kakao.maps.Size(24, 35);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커 안에 이미지 좌표

    // 마커 이미지 만들기
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
    // 반복해서 마커 여러개 생성
    for (let i = 0; i < positions.length; i++) {
      if (positions[i]?.content && positions[i].content.includes(petShopName)) {
        const marker = new window.kakao.maps.Marker({ 
          position: positions[i].latlng,
          image: markerImage
        });
        marker.setMap(map);

        // 마커 hover 시 원하는 정보 나타나기
        const content = '<div class="kakaomapcontainer">' +
                          `<span class="title">${positions[i].content}</span>` +
                        '</div>';

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: positions[i].latlng,
          content: content,
          xAnchor: .45,
          yAnchor: 3
        });

        const makeMouseOverListener = () => {
          return function() {
            customOverlay.setMap(map);
          }
        }

        const makeOutListener = () => {
          return function() {
            customOverlay.setMap(null);
          }
        }
        
        window.kakao.maps.event.addListener(marker, 'mouseover', makeMouseOverListener());
        window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener());

      }
    }


    // 검색 매점 이름의 좌표 찾기
    const findLatLngByFirstLetter = (positions:any, petShopName:string) => {
      // 초기 실행시 petShopName 이 없어도 실행되는 문제 방지
      if(petShopName.length >= 1) {
        for (let i = 0; i < positions.length; i++) {
          const content = positions[i].content;
          
          if (content.includes(petShopName)) {
            return positions[i].latlng;
          }
        }
      }
      return null;
    };

    const resultLatLng = findLatLngByFirstLetter(positions, petShopName);

    // 만약 검색 매점 좌표가 있다면 해당 좌표로 스타트 지점 설정
    if(resultLatLng) {
      map.setCenter(resultLatLng)
    }

  }, [petShopName, positions]);

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  // 내가 검색한 이름의 데이터 검색 후 추출
  const handleClickChange = () => {
    const filteredContent = memoizedFindContent(filterValue, positions);
    SetItem(filteredContent);
    setpetShopName(filterValue)
  }

  // Input 에서 Enter 하면 handleClickChange 실행
  const handleEnterChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      handleClickChange();
    }
  }

  // handleClickChange 랑 같은 동작 (버튼만 클릭해도 호텔,병원,카페 구분)
  const onSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
    const searchName = e.currentTarget.name;
    const filteredContent = memoizedFindContent(searchName, positions);
    SetItem(filteredContent);
    setpetShopName(searchName)
  }

  const onRegisterBuilding = useCallback((content:string, address:string, phoneNumber: string | undefined) => {
    const data = {content:content, address: address, phoneNumber: phoneNumber}
    mutate(data);
  },[])

  return (
    <KakaoMapContainer>
      <KakaoMapSearchContainer>
        <input 
          type="text" 
          value={filterValue} 
          onChange={handleInputChange} 
          onKeyDown={handleEnterChange}
          placeholder="매장을 입력하세요." 
        />
        <button onClick={handleClickChange}><IoSearchOutline size={20}/></button>
      </KakaoMapSearchContainer>

      <KategorieMap>
        <KategorieMapButton onClick={onSearch} name="호텔"><FaHotel size={20}/></KategorieMapButton>
        <KategorieMapButton onClick={onSearch} name="병원"><FaHospital size={20}/></KategorieMapButton>
      </KategorieMap>

      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
      <BottomSheet 
        open={true}
        snapPoints={({ minHeight, maxHeight }) => [minHeight * 0.7, maxHeight * 0.4]}
        blocking={false}
      >
        {item?.map((item, index)=> 
        <div key={index}>
          <KakaoMapBox
            content = {item.content}
            address = {item.address}
            phoneNumber = {item.phoneNumber}
            onRegisterBuilding = {onRegisterBuilding}
          />
        </div>
        )}
      </BottomSheet>
    </KakaoMapContainer>
  )
}

export default KakaoMap;

