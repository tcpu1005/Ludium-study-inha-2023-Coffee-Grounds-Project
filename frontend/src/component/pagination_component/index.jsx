import { Pagination_style } from './style';


const Pagination_component = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Pagination_style>
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
        </Pagination_style>
    );
};

export default Pagination_component;
