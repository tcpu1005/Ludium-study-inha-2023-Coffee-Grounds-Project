import styled from "styled-components";

export const Div_bigContainer = styled.div`
text-align: center;
left: calc(50% - 240px/2);
top: calc(50% - 212px/2 - 30px);
font-size: 7vw;
padding: 5%;
margin: 17% 10% 10%;

border: 2px solid rgba(103, 73, 63, 0.7);
border-radius: 60px;
`;

export const Span_el = styled.span`
font-size: 4vw;
color: #67493F;
`;

export const Span_el_request = styled.span`
font-size: 4vw;
font-weight: 400;
color: #0F52BA;
`;

export const Span_el_completed = styled.span`
font-size: 4vw;
font-weight: 400;
color: #C00A0A;
`;

export const Span_el_extra = styled.span`
font-size: 4vw;
font-weight: 400;
color: #09C11B;
`;

export const Input_selectNBtn = styled.input`
appearance: none;
border-radius: 0; 
width: 12px; 
height: 12px; 
border: 1px solid #D2691E; 
margin-right: 3%; 
`;

export const Input_selectYBtn = styled.input`
appearance: none;
border-radius: 0; 
width: 12px; 
height: 12px; 
border: 1px solid #D2691E; 
margin-right: 3%; 

&:checked {
background-color: #D2691E; /* 선택된 라디오 버튼에 배경색을 적용하여 체크 표시를 나타냅니다. */
}
`;

export const Div_totalAmount = styled.span`
font-family: 'Arita-dotum4.0(OTF)';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 181.3%;

text-align: center;
letter-spacing: 0.005em;

color: #67493F;
`;