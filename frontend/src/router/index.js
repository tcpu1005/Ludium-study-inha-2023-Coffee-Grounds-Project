import { useRoutes } from "react-router-dom";


// 화면에 렌더링할 페이지 컴포넌트들 가져오기
import header_layout from "../layout/header_layout";
import Emission_page from '../page/emission_page';
import Default_page from "../page/default_page";
import Login_page from '../page/login_page';
import Main_page from "../page/main_page";
// ...


const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <header_layout />,
      children: [
        {
          // 1_MAIN
          path: "/",
          element: <Main_page />,
        },
        {
          // 2_JOIN_CHOICE
          path: "/join/choice",
          element: <>2_JOIN_CHOICE</>,
        },
        {
          // 3_JOIN_CAFE
          path: "/join/cafe",
          element: <>3_JOIN_CAFE</>,
        },
        {
          // 4_JOIN_COLLECTOR
          path: "/join/collector",
          element: <>4_JOIN_COLLECTOR</>,
        },
        {
          // 5_LOGIN
          path: "/login",
          element: <Login_page />,
        },
        {
          // 6_MY_PAGE_CAFE_COFFEE
          path: "/emission",
          element: <Emission_page />,
        },
        {
          // 7_MY_PAGE_CAFE_COFFEE_IINPUT
          path: "/emission/input",
          element: <>7_MY_PAGE_CAFE_COFFEE_IINPUT</>,
        },
        {
          // 8_MY_PAGE_CAFE_TOKEN
          path: "/token",
          element: <>8_MY_PAGE_CAFE_TOKEN</>,
        },
        {
          // 9_MY_PAGE_CAFE_TOKEN_INFO
          path: "/token/transaction",
          element: <>9_MY_PAGE_CAFE_TOKEN_INFO</>,
        },
        {
          // 10_MY_PAGE_CAFE_TOKEN_EXCHANGE
          path: "/token/exchange",
          element: <>10_MY_PAGE_CAFE_TOKEN_EXCHANGE</>,
        },
        {
          // 11_MY_PAGE_COLLECTOR
          path: "/collection",
          element: <>11_MY_PAGE_COLLECTOR</>,
        },
        {
          // 12_MY_PAGE_COLLECTOR_INPUT
          path: "/collection/input",
          element: <>12_MY_PAGE_COLLECTOR_INPUT</>,
        },
        {
          path: "/default",
          element: <Default_page />,
        },
      ]
    },

  ])
}


export default Router;