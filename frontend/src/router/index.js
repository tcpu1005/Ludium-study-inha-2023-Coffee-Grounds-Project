
import { useRoutes } from "react-router-dom";


// 화면에 렌더링할 페이지 컴포넌트들 가져오기
import Login_page from './page/login_page';
import Collection_page from './page/collection_page';
import Default_page from "../page/default_page";
// ...


const Router = () => {
  return useRoutes([
    {
      path: "/",
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
        path: "/collection",
        element: <Collection_page/>,
        children: [
          {}
        ]
      },
  ])
}

export default Router;