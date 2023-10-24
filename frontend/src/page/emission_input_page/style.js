import styled from "styled-components";

export const Entire_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
`;

export const DivContainer = styled.div`
  width: 300px;  // 전체 너비에서 양 옆 여백을 고려해 조정
  background-color: #ffffff;  
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
  margin: 15px 0;
`;

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  label {
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #555;
  }

  input {
    width: 280px;  // 전체 너비에서 양 옆 패딩을 고려해 조정
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  label, legend {
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #555;
  }

  input, select {
    width: 280px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;



