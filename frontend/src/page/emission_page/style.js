import styled from 'styled-components';


export const PaginationStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    button {
        margin: 0 5px;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;
