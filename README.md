
# 📖 강아지 정보 서비스 

![#9091E9 (1)](https://github.com/chanyoungcoding/MyPetProject/assets/95753171/c078571b-2740-41b4-9c73-63d52256fd5a)
[![이미지 텍스트](https://img.youtube.com/vi/Sw5N_lkT0Ak/0.jpg)](https://www.youtube.com/watch?v=Sw5N_lkT0Ak)

<br>

## 프로젝트 소개

- O - Pet 은 강아지를 좋아하는 소비자를 위한 맞춤 웹앱 어플리케이션 입니다.
- 찾고싶은 강아지 병원, 호텔등을 검색해서 위치 정보를 확인할 수 있습니다.
- 강아지의 식이 정보를 바탕으로 어떤 음식이 좋고 나쁜지 한눈에 확인하고 저장할 수 있습니다.
- 나의 강아지를 등록하고 언제든지 내 강아지 사진과 지금까지 만난 날짜를 볼 수 있습니다.




## 1. 🔨 개발 환경
<br>


<div>
  <p>Front-End</p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
  <hr/>
  <p>Back-End</p>
  <img src="https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/node-76D04B?style=flat&logo=mongodb&logoColor=47A248" />
  <hr/>
  <p>도구</p>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white" />
  <img src="https://img.shields.io/badge/sass-CC6699?style=flat&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white" />
  <img src="https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visualstudiocode&logoColor=white" />

</div>

<br>

## 2. 🔧 코드 분석 및 성능 개선
<br>

![image](https://github.com/chanyoungcoding/MyPetProject/assets/95753171/ff1074d2-9304-482b-a0e9-01c41bf5a56d)


![이미지2](https://github.com/chanyoungcoding/MyPetProject/assets/95753171/770af47a-3c81-4af6-83e7-d49de71329a3)

![캡처2](https://github.com/chanyoungcoding/MyPetProject/assets/95753171/13762266-653b-483c-8fcd-c01163ba433d)

<br>

## 3. 📺 시연 영상
[![동영상 썸네일]([https://www.youtube.com/watch?v=Sw5N_lkT0Ak](https://www.youtube.com/watch?v=Sw5N_lkT0Ak))


<br>

## 4. 📃 프로젝트 구조
<br>


### client

```
├── .gitignore
├── .tsconfig.json
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
└── src
     ├── App.tsx
     ├── index.tsx
     ├── services
     │     └── api.tsx
     ├── imgs
     │     ├── dog1.png
     │     ├── dog2.png
     │     ├── dog3.png
     │     └── growth1.png
     │          .
     │          .
     │          .
     ├── recoil
     │     └── GlobalManagement.tsx
     ├── pages
     │     ├── addProfile.tsx
     │     ├── Animaldisease.tsx
     │     ├── AnimalGrowth.tsx
     │     ├── AnimalTraining.tsx
     │     ├── AnimalVaccinations.tsx
     │     ├── Common.tsx
     │     ├── Home.tsx
     │     ├── Information.tsx
     │     ├── KaKaoMap.tsx
     │     ├── Login.tsx
     │     ├── Main.tsx
     │     ├── MyPage.tsx
     │     ├── Search.tsx
     │     ├── SearchDetail.tsx
     │     └── SignUp.tsx
     ├── components
     │     ├── DatePick.tsx
     │     ├── Footer.tsx
     │     ├── InformationTopBox.tsx
     │     ├── KakaoMapBox.tsx
     │     ├── Loding.tsx
     │     ├── MyPageBuilding.tsx
     │     ├── MyPagePetFood.tsx
     │     ├── NamePick.tsx
     │     ├── Navbar.tsx
     │     └── PetPick.tsx
     ├── interface
     │     └── interface.tsx
     └── styles
     │     ├── common.scss
     │     ├── home.scss
           └── kakaomap.scss
```

<br>

### server

```
├── .app.js
├── .gitignore
├── .env
├── package-lock.json
├── package.json
│
├── public
│    ├── App.tsx
│    └── index.html
│ 
├── Controllers
│    ├── petFoodsController.js
│    ├── petMapController.js
│    └── userController.js
│
├── models
│     ├── seeds
│     │    ├── PetMapInformation.js
│     │    ├── PetPossibleFood.js
│     │    ├── 펫맵정보.json
│     │    └── 펫음식정보.json
│     │ 
│     ├── PetMapInformation.js
│     ├── PetPossibleFood.js
│     ├── user.js
│
├── Routes
│    ├── mapRoute.js
│    ├── petFoodsRoute.js
│    └── userRoute.js
```

<br>


## 5. ⏱ 개발 기간 


### 개발 기간

- 전체 개발 기간 : 2022-11 ~ 2022-12
- 현재 좋은 아이디어 있으면 개발중 : 2023 ~~~



