// 1_MAIN


import { useSelector } from "react-redux";


const Main_page = () => {
    //

    // 로그인 및 로그아웃 시 테스트용
    const user_state = useSelector((state) => state.user_reducer);
    console.log(user_state);


    return (
        <div>
            Main_page</div>
    )
}


export default Main_page;