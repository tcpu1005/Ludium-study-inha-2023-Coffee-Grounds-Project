// 우리 프로젝트의 표준 컬러라던지 여러 화면에서 같은 css를 사용해야 할 내용 적기


// 크롬 기준 iPhone SE 기준으로 작업 요망


import styled, { createGlobalStyle } from "styled-components";


// 우리 프로젝트 표준 컬러들
// 변수명은 "색깔명_COLOR_해당 색깔의 넘버링"으로 정의하기 (상수 값이므로 대문자, 스네이크 타입으로)
export const MAROON_COLOR_1 = "#9A4444";
export const ORANGE_COLOR_1 = "#DE8F5F";
export const BEIGE_COLOR_1 = "#F4DFB6";
export const WHITE_COLOR_1 = "#FFFFFF";
export const SAGE_COLOR_1 = "#D6D46D";
// ...


// 프로젝트 css 디폴트 값 설정 (index.js에서 사용됨)
// 전체 폰트와 h1~h5 폰트의 디폴트 사이즈를 상대 크기로 설정함
export const GlobalStyle = createGlobalStyle`
* {
    text-align: center;
    font-size: 7vw;
    padding: 0;
    margin: 0;
}
html {
    height: 100vh;
    width: 100vw;
}
body, #root {
    background-color: ${SAGE_COLOR_1};
    height: 100%;
    width: 100%;
}
h1 {
    font-size: 10vw;
    margin: 0.5vw;
}
h2 {
    font-size: 9vw;
    margin: 0.5vw;
}
h3 {
    font-size: 8vw;
    margin: 0.5vw;
}
h4 {
    font-size: 6vw;
    margin: 0.5vw;
}
h5 {
    font-size: 5vw;
    margin: 0.5vw;
}
h6 {
    font-size: 4vw;
    margin: 0.5vw;
}
`;


// 우리 프로젝트의 표준 버튼들
// 여러 화면에서 같은 스타일로 통일시킬 거라면 여기에 정의하기
// 변수명은 "Button_넘버링"으로 정의하기 (컴포넌트이므로 첫글자는 대문자, 스네이크 타입)
export const Button_1 = styled.button`
background-color: ${MAROON_COLOR_1};
border: 1px solid ${BEIGE_COLOR_1};
padding: 1vw 2vw 1.5vw 2vw;
color: ${BEIGE_COLOR_1};
border-radius: 10px;
font-size: 5vw;
margin: 1vw;
`;
// ...