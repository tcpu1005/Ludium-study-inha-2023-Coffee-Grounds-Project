import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const ListItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
`;

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
