import styled from "styled-components";


export const Input_container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;


export const Input_el = styled.input`
width: 60%;
`;

export const Login_container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;         // flexbox를 사용
    flex-direction: column; // 세로 방향으로 요소들을 배치
    align-items: center;   // 세로 중앙 정렬
    width: 80%;
`;

export const Login_id = styled.div`
position: absolute;
width: 24.13vw;
height: 7.5vw;
left: calc(50% - 24.13vw/2 - 33.88vw);
top: calc(50% - 81.5vw/2 - 7.81vw);

font-family: 'Arita-dotum4.0(OTF)';
font-style: normal;
font-weight: 500;
font-size: 5vw;
line-height: 5vw;
text-align: center;
letter-spacing: -0.05em;

color: #6F6F4B;

margin: 24.69vw 1.21vw 17.81vw 0vw;
`

export const Login_password = styled.div`

position: absolute;
width: 26.78vw;
height: 7.5vw;
left: calc(50% - 26.78vw/2 - 35.67vw);
top: calc(50% - 7.5vw/2 + 19.38vw);

font-family: 'Arita-dotum4.0(OTF)';
font-style: normal;
font-weight: 500;
font-size: 5vw;
line-height: 5vw;
text-align: center;
letter-spacing: -0.05em;

color: #6F6F4B;

margin: 0vw 0.41vw 25.31vw 0vw
`

export const Input_id = styled.input`

position: absolute;
width: 63.019999999999996vw;
height: 11.56vw;
left: 26.99vw;
top: calc(50% - 37.5vw/2 - 7.81vw);

background: #E8D4B9;
border-radius: 60px 0px 0px 60px;
border: none;

font-family: 'Arita-dotum4.0(OTF)';
font-style: normal;
font-weight: 400;
font-size: 5vw;
line-height: 5vw;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;

color: #6F6F4B;

`

export const Input_password = styled.input`

position: absolute;
width: 63.019999999999996vw;
height: 11.56vw;
left: 26.99vw;
top: 21.060000000000002vw;

background: #E8D4B9;
border-radius: 60px 0px 0px 60px;
border: none;

font-family: 'Arita-dotum4.0(OTF)';
font-style: normal;
font-weight: 400;
font-size: 5vw;
line-height: 5vw;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;

color: #6F6F4B;

`