import { Outlet } from 'react-router-dom';
import { HeaderStyle } from './style';


const Header = () => {
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


export default Header;
