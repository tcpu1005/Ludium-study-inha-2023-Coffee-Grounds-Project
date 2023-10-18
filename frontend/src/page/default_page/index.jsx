import React from 'react';
import BackButtonComponent from '../../component/page1/BackButtonComponent';
import MenuButtonComponent from '../../component/page1/MenuButtonComponent';
import ListEntryComponent from '../../component/page1/ListEntryComponent';
import PaginationComponent from '../../component/page1/PaginationComponent';

function DefaultPage() {
    return (
        <div>
            <div>
                <BackButtonComponent />
                <h1>수거 목록</h1>
                <MenuButtonComponent />
            </div>
            
            <h2>OOOOO 가게</h2>
            <h3>[수거 목록 목록]</h3>

            <ListEntryComponent type="수거완료" amount={5} weight={500} />
            <ListEntryComponent type="수거예정" amount={10} weight={1000} />

            <PaginationComponent currentPage={1} totalPages={5} />
        </div>
    );
}

export default DefaultPage;
