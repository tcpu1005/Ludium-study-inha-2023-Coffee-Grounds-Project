// 3_JOIN_CAFE


import Small_title_component from "../../component/small_title_component";
import { Button_3 } from "../../base_style";
import { useRef } from "react";
import {
    Input_container,
    Input_el,
} from "../login_page/style";


const Join_collector_page = () => {
    //

    const login_id_ref = useRef();
    const user_name_ref = useRef();
    const company_name_ref = useRef();
    const login_password_ref = useRef();


    const join_button_fn = () => {
        //

        const login_id = login_id_ref.current.value;
        const user_name = user_name_ref.current.value;
        const company_name = company_name_ref.current.value;
        const login_password = login_password_ref.current.value;
        console.log(login_id, user_name, company_name, login_password);


        // 빈 값에 대한 예외 처리
        if (!login_id || !user_name || !company_name || !login_password) {
            alert("값을 입력해주세요.");
            return;
        }

        // 여기서 액션 날리면 됩니다.
    }


    return (
        <>
            <Small_title_component title="수거업체" />


            <Input_container>
                <label htmlFor="user_name">이름</label>
                <Input_el id="user_name" ref={user_name_ref} autoComplete="off" />
            </Input_container>


            <Input_container>
                <label htmlFor="company_name">수거업체명</label>
                <Input_el id="company_name" ref={company_name_ref} autoComplete="off" />
            </Input_container>


            <Input_container>
                <label htmlFor="login_id">아이디</label>
                <Input_el id="login_id" ref={login_id_ref} autoComplete="off" />
            </Input_container>


            <Input_container>
                <label htmlFor="login_password">비밀번호</label>
                <Input_el id="login_password" type="password" ref={login_password_ref} autoComplete="off" />
            </Input_container>


            <Button_3 onClick={join_button_fn}>가입하기</Button_3>
        </>
    )
}


export default Join_collector_page;