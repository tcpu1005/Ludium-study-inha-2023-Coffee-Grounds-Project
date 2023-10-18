import React from 'react';

function PaginationComponent({ currentPage, totalPages }) {
    return (
        <div>
            <button>&larr;</button>
            {currentPage} / {totalPages}
            <button>&rarr;</button>
        </div>
    );
}

export default PaginationComponent;
