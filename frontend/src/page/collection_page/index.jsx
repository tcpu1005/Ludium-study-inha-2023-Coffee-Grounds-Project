import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../component/default_component/Header';
import ListItem from '../../component/default_component/ListItem';
import Pagination from '../../component/default_component/Pagination';
import { fetchCollections, setCurrentPage } from '../../redux/default_action';

const Collection_page = () => {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.collections);
    const currentPage = useSelector(state => state.currentPage);
    const totalPages = useSelector(state => state.totalPages);

    useEffect(() => {
        dispatch(fetchCollections(currentPage));
    }, [currentPage]);

    const handle_page_change = (page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <>
            <Header />
            {collections.map(item => <ListItem key={item.id} {...item} />)}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
};

export default Collection_page;
