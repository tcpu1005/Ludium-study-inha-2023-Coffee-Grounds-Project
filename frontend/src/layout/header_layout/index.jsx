// 모든 화면에 보일 Header_layout 컴포넌트


import { Outlet } from 'react-router-dom';
import { HeaderStyle } from './style';
import { useLocation } from 'react-router-dom';


const Header_layout = () => {
    //

    const location = useLocation();
    const current_path = location.pathname;


    const header_title = () => {
        switch (current_path) {
            //

            // 1_MAIN
            case "/":
                return "메인";

            // 2_JOIN_CHOICE
            case "/join/choice":
                return "회원가입";

            // 3_JOIN_CAFE
            case "/join/cafe":
                return "회원가입";

            // 4_JOIN_COLLECTOR
            case "/join/collector":
                return "회원가입";

            // 5_LOGIN
            case "/login":
                return "로그인";

            // 6_MY_PAGE_CAFE_COFFEE
            case "/emission":
                return "배출";

            // 7_MY_PAGE_CAFE_COFFEE_IINPUT
            case "/emission/input":
                return "배출 입력";

            // 8_MY_PAGE_CAFE_TOKEN
            case "/token":
                return "토큰";

            // 9_MY_PAGE_CAFE_TOKEN_INFO
            case "/token/transaction":
                return "토큰 상세";

            // 10_MY_PAGE_CAFE_TOKEN_EXCHANGE
            case "/token/exchange":
                return "환전";

            // 11_MY_PAGE_COLLECTOR
            case "/collection":
                return "수거";

            // 12_MY_PAGE_COLLECTOR_INPUT
            case "/collection/input":
                return "수거 입력";

            default:
                return "";
        }
    }


    return (
        <>
            <HeaderStyle>
                <button>←</button>
                <header>{header_title()}</header>
                <button>☰</button>
            </HeaderStyle>
            <Outlet />
        </>
    );
};


export default Header_layout;
