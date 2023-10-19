import { useRoutes } from "react-router-dom";


// 화면에 렌더링할 페이지 컴포넌트들 가져오기
import Emission_page from '../page/emission_page';
import Header from "../component/header_component";
import Default_page from "../page/default_page";
import Login_page from '../page/login_page';
import Main_page from "../page/main_page";
// ...


const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Main_page />,
          children: [
            {}
          ]
        },
        {
          path: "/default",
          element: <Default_page />,
          children: [
            {}
          ]
        },
        {
          path: "/login",
          element: <Login_page />,
          children: [
            {}
          ]
        },
        {
          path: "/emission",
          element: <Emission_page />,
          children: [
            {}
          ]
        },
      ]
    },

  ])
}

export default Router;