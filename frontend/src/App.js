import './App.css';
import Router from './router';
import store from "./redux/store";
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


function App() {
  //
  // 반응형 모바일 웹을 개발하기 위해 vw와 vh 값을 사용할 예정이다.
  // 그러나 기종에 따라 그 값이 다를 수 있기에 vw와 vh 값을 재조정 하는 함수이다.
  // 이렇게 하지 않으면 100vw, 100vh 값이 유저 화면마다 달라 원치 않는 스크롤 바가 생긴다.
  const set_vw_and_vh = () => {
    document.documentElement.style.setProperty('vw', `${window.innerWidth * 0.01}px`)
    document.documentElement.style.setProperty('vh', `${window.innerHeight * 0.01}px`)
    // console.log("App.js : vw와 vh 값을 재조정 한다.");
  };


  useEffect(() => {
    //
    // console.log("App.js : 딱 한 번만 실행된다.");

    // 첫 렌더링 시에도 vw와 vh 값을 재조정 한다.
    set_vw_and_vh();

    // 윈도우가 리사이즈 될 때마다 vw와 vh 값을 재조정 한다.
    window.addEventListener('resize', set_vw_and_vh);
    return () => {
      window.removeEventListener('resize', set_vw_and_vh);
    }
  }, []);


  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
      {/* ... */}
    </div>
  );
}


export default App;
