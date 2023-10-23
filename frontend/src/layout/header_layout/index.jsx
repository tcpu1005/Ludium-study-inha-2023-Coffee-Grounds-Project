// 모든 화면에 보일 Header_layout 컴포넌트


import { Outlet } from 'react-router-dom';
import { HeaderStyle } from './style';
import { useLocation, useNavigate } from 'react-router-dom';


const Header_layout = () => {
    //

    const nav = useNavigate();
    const location = useLocation();
    const current_path = location.pathname;


    const get_header_title_fn = () => {
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

            // 8_MY_PAGE_CAFE_INSENTIVE
            case "/insentive":
                return "배출 성과";

            // 9_MY_PAGE_CAFE_TOKEN
            case "/insentive/token":
                return "토큰 상세";

            // 10_MY_PAGE_CAFE_TOKEN_EXCHANGE
            case "/insentive/token/exchange":
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
                <button onClick={() => nav(-1)}>←</button>
                <header>{get_header_title_fn()}</header>
                <button onClick={() => nav("/gnb/temp")}>☰</button>
            </HeaderStyle>
            <Outlet />
        </>
    );
};


export default Header_layout;
