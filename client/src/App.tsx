import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Common from './pages/Common';
import { RecoilRoot } from 'recoil'
import Login from './pages/Login';
import KakaoMap from './pages/KakaoMap';
import MyPage from './pages/MyPage';
import Information from './pages/Information';
import AnimalDisease from './pages/Animaldisease';
import AnimalGrowth from './pages/AnimalGrowth';
import AnimalTraining from './pages/AnimalTraining';
import AnimalVaccinations from './pages/AnimalVaccinations';
import Main from './pages/Main';
import Search from './pages/Search';
import SearchDetail from './pages/SearchDetail';
import AddProfile from './pages/AddProfile';
import Register from './pages/Register';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<Common/>}>
          <Route path='/opet' element={<Main/>}/>
          <Route path='/addprofile' element={<AddProfile/>}/>
          <Route path='/kakaomap' element={<KakaoMap/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/search/:name' element={<SearchDetail/>}/>
          <Route path='/information' element={<Information/>}/>
          <Route path='/animalDisease' element={<AnimalDisease/>}/>
          <Route path='/animalGrowth' element={<AnimalGrowth/>}/>
          <Route path='/animalTraining' element={<AnimalTraining/>}/>
          <Route path='/animalVaccinations' element={<AnimalVaccinations/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
