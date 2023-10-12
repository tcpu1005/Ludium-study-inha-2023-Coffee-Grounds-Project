import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
// import './index.css';
// ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ 여기까지 디플트

// ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ 여기부터 추가한 코드
import { GlobalStyle } from './baseStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
