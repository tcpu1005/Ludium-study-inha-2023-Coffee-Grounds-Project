import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../component/header_component';
import ListItem from '../../component/list_item_component';
import Pagination from '../../component/pagination_component';
import { fetch_collections } from '../../redux/middleware';


const Collection_page = () => {
    //

    const dispatch = useDispatch();
    const collections = useSelector(state => state.collections);
    const currentPage = useSelector(state => state.currentPage);
    const totalPages = useSelector(state => state.totalPages);


    useEffect(() => {
        dispatch(fetch_collections(currentPage));
    }, [currentPage]);


    return (
        <>
            <Header />
            {collections.map(item => <ListItem key={item.id} {...item} />)}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};

export default Collection_page;
