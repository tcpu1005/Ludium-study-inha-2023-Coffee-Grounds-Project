// 우리 프로젝트의 표준 컬러라던지 여러 화면에서 같은 css를 사용해야 할 내용 적기


// 크롬 기준 iPhone SE 기준으로 작업 요망


import styled, { createGlobalStyle } from "styled-components";


// 우리 프로젝트 표준 컬러들
// 변수명은 "색깔명_COLOR_해당 색깔의 넘버링"으로 정의하기 (상수 값이므로 대문자, 스네이크 타입으로)
export const MAROON_COLOR_1 = "#9A4444";
export const ORANGE_COLOR_1 = "#DE8F5F";
export const BEIGE_COLOR_1 = "#F4DFB6";
export const WHITE_COLOR_1 = "#FFFFFF";
export const SAGE_COLOR_1 = "#F3E9DC";
export const WHITEBEIGE_COLOR_1= "#E8D4B9";
export const BROWN_COLOR_1= "#67493F";
export const GREEN_COLOR_1= "#6F6F4B";
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

// 회원 유형 선택 버튼 중 위에거
export const Button_1 = styled.button`
background-color: #E8D4B9;
padding: 3.28vw 3.28vw 3.28vw 3.28vw
vw
;
color: #6F6F4B;
border: none;
border-radius: 60px;
font-size: 6.25vw;
box-shadow: 1.25vw 2.5vw 1.25vw rgba(0, 0, 0, 0.3);
width: 33.75vw;
height: 14.69vw;
margin: 32.81vw 31.88vw 0vw;

`;

//회원 유형 버튼 중 아래거
export const Button_5 = styled.button`
background-color: #E8D4B9;
    padding: 3.28vw 3.28vw 3.28vw 3.28vw;
    color: #6F6F4B;
    border-radius: 60px;
    border: none;
    font-size: 6.25vw;
    box-shadow: 1.25vw 2.5vw 1.25vw rgba(0, 0, 0, 0.3);
    width: 33.75vw;
    height: 14.69vw;
    margin: 13.44vw;

`


// 화면 아래에 베이지 버튼이라 가정
export const Button_2 = styled.button`
box-shadow: 1.25vw 2.5vw 1.25vw rgba(0, 0, 0, 0.3);
background-color: ${WHITEBEIGE_COLOR_1};
color: ${BROWN_COLOR_1};
padding: 5.31vw 8.13vw;
border-radius: 60px;
font-size: 6.25vw;
margin: 17.5vw;
border: none;
`;


// 화면 아래에 초록 버튼이라 가정
export const Button_3 = styled.button`
box-shadow: 1.25vw 2.5vw 1.25vw rgba(0, 0, 0, 0.3);
background-color: #6F6F4B;
color: #E8D4B9;
padding: 3.75vw 6.02vw;
border-radius: 60px;
font-size: 6.25vw;
margin: 17.5vw;
border: none;
/* display: flex; */
position: absolute;
width: 38.75vw;
height: 12.81vw;
left: calc(50% - 37.81vw/2 + -15.84vw);
top: 129.69vw;
display: flex;
justify-content: center;
align-items: center;

`;


// GNB 메뉴 버튼
export const Button_4= styled.button`
background-color: ${WHITEBEIGE_COLOR_1};
color: ${GREEN_COLOR_1};
border-radius: 60px;
text-align: center;
font-size: 3.7vw;
font-weight: 900;
height: 10.94vw;
width: 77.19vw;
margin: 0.5vw;
margin: 0.5vw;
border: 0;
`

