import { useRoutes } from "react-router-dom";


// 화면에 렌더링할 페이지 컴포넌트들 가져오기
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
      path: "/default",
      element: <Default_page />,
      children: [
        {}
      ]
    },
  ])
}

export default Router;