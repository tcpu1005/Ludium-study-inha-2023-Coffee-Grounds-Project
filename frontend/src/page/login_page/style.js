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
