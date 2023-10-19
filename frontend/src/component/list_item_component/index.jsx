import React from 'react';
import { ListItemStyle } from '../../page/emission_page/style';

const ListItem = ({ status, cafeName, weight }) => {
    return (
        <ListItemStyle>
            <span>{status}</span>
            <span>{cafeName}</span>
            <span>{weight}kg</span>
            <button>수거</button>
        </ListItemStyle>
    );
};

export default ListItem;
