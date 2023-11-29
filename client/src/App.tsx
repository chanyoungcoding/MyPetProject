import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Common from './pages/Common';
import { RecoilRoot } from 'recoil'
import Login from './pages/Login';
import KakaoMap from './pages/KakaoMap';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Common/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/kakaomap' element={<KakaoMap/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
