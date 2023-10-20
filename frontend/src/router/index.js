import { useRoutes } from "react-router-dom";


// 화면에 렌더링할 페이지 컴포넌트들 가져오기
import Insentive_visualization_page from "../page/insentive_visualization_page";
import Join_choice_page_figma from "../page/join_choice_page_figma";
import Collection_input_page from "../page/collection_input_page";
import Emission_input_page from "../page/emission_input_page";
import Join_choice_page from "../page/join_choice_page";
import Collection_page from "../page/collection_page";
import Main_page_figma from "../page/main_page_figma";
import Header_layout from "../layout/header_layout";
import Emission_page from '../page/emission_page';
import Default_page from "../page/default_page";
import Login_page from '../page/login_page';
import Main_page from "../page/main_page";
// ...


const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Header_layout />,
      children: [
        {
          // 1_MAIN
          path: "/",
          element: <Main_page />,
        },
        {
          // 2_JOIN_CHOICE
          path: "/join/choice",
          element: <Join_choice_page />,
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
          element: <Emission_input_page />,
        },
        {
          // 8_MY_PAGE_CAFE_TOKEN
          path: "/token",
          element: <Insentive_visualization_page />,
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
          element: <Collection_page />,
        },
        {
          // 12_MY_PAGE_COLLECTOR_INPUT
          path: "/collection/input",
          element: <Collection_input_page />,
        },
        {
          // 팀원들을 위한 예시 코드
          path: "/default",
          element: <Default_page />,
        },
        //

        // ㅜ 여기서부터는 피그마 적용 페이지
        {
          path: "/figma",
          element: <Main_page_figma />,
        },
        {
          path: "/join/choice/figma",
          element: <Join_choice_page_figma />,
        },
      ]
    },

  ])
}


export default Router;