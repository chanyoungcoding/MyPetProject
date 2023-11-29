/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoSearchOutline, IoCafe } from "react-icons/io5";
import { FaHotel, FaHospital } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';

import './kakaompa.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMapContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`

const KakaoMapSearchContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  z-index: 10;
  input {
    padding: 5px 10px;
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

const MapUnderSearchContainer = styled(animated.div)`
  position: relative;
  height: 60vh;
  padding: 10px;
  background-color: white;
  z-index: 10;
`

const MapUnderClick = styled.div`
  width: 100px;
  height: 10px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: gray;
`

interface Data {
  content: string;
  address: string;
}

const KakaoMap = () => {

  const [petShopName, setpetShopName] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [inView, setInView] = useState(false);
  const [data, SetData] = useState<Data[]>([]);

  const positions = [
    {
      content: '강아지호텔',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5712852402936, 126.974692588598)
    },
    {
      content: '강아지2호텔',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5708444878121, 126.979923668151)
    },
    {
      content: '강아지병원',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5771378605923, 126.972025055354)
    },
    {
      content: '강아지2병원',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5871378605923, 126.972025055354)
    },
    {
      content: '강아지카페',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5781378605923, 126.973025055354)
    },
    {
      content: '강아지2카페',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5701378605923, 126.974025055354)
    },
    {
      content: '강아지22 카페',
      address: '서울시 중랑구 면목본동',
      latlng: new window.kakao.maps.LatLng(37.5771378605923, 126.975025055354)
    },
  ]

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
    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
    const imageSize = new window.kakao.maps.Size(64, 69);
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
      for (let i = 0; i < positions.length; i++) {
        const content = positions[i].content;
        
        if (Array.from(petShopName).some(char => content.startsWith(char))) {
          return positions[i].latlng;
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

  const handleClickChange = () => {
    setpetShopName(filterValue)
    setFilterValue('');
  }

  const handleEnterChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') handleClickChange();
  }

  const springProps = useSpring({
    transform: inView ? 'translateY(-450px)' : 'translateY(0px)'
  })

  const onClick = () => {
    setInView(!inView)
  }

  const onSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
    setpetShopName(e.currentTarget.name)
  }

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
      <button onClick={onSearch} name="호텔"><FaHotel/></button>
      <button onClick={onSearch} name="병원"><FaHospital/></button>
      <button onClick={onSearch} name="카페"><IoCafe/></button>

      <div id="map" style={{ width: '100%', height: '80vh' }}></div>
      <MapUnderSearchContainer style={springProps}>
        <MapUnderClick onClick={onClick}></MapUnderClick>
      </MapUnderSearchContainer>
    </KakaoMapContainer>
  )
}

export default KakaoMap;

