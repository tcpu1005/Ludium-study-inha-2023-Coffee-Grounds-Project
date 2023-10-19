// 모든 화면에 보일 Header_layout 컴포넌트


import { Outlet } from 'react-router-dom';
import { HeaderStyle } from './style';


const Header_layout = () => {
    return (
        <>
            <HeaderStyle>
                <button>←</button>
                <button>☰</button>
            </HeaderStyle>
            <Outlet />
        </>
    );
};


export default Header_layout;
