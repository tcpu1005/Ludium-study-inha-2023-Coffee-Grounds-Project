// 6_MY_PAGE_CAFE_COFFEE


import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List_component from '../../component/list_component';
import Pagination from '../../component/pagination_component';

import Big_title_component from '../../component/big_title_component';


const Emission_page = () => {
    //


    return (
        <>
            <Big_title_component title="배출하기" />
            <List_component/>
        </>
    );
};


export default Emission_page;
