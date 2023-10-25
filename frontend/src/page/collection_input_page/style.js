import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    max-width: 800px;
    margin: 0 auto;
    padding: 5vh 2vw;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center; 
`;

export const StyledInputContainer = styled.div`
    width: 70%; /
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;

export const StyledLabel = styled.label`
    font-size: 2.5vh;
    margin-bottom: 1vh;
`;

export const StyledInput = styled.input`
    padding: 1.5vh 1vw;
    font-size: 2vh;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5vh;
`;

export const StyledSelect = styled.select`
    padding: 1.5vh 1vw;
    font-size: 2vh;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5vh;
    appearance: none;
   
`;

export const StyledButton = styled.button`
    padding: 2vh 2vw;
    font-size: 2.5vh;
    width: 70%; // 변경: 100%에서 70%로
    border: none;
    border-radius: 1vh;

    }
`;

