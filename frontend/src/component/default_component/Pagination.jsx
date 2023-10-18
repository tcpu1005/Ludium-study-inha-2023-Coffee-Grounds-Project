import React from 'react';
import { PaginationStyle } from '../../page/collection_page/style';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <PaginationStyle>
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                ←
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                →
            </button>
        </PaginationStyle>
    );
};

export default Pagination;
