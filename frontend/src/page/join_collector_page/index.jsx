// 4_JOIN_COLLECTOR


import Small_title_component from "../../component/small_title_component";
import { register_collector_user_fn } from "../../redux/middleware";
import { Button_3 } from "../../base_style";
import { useNavigate } from "react-router";
import { useRef } from "react";
import {
    Flex_body_container,
    Input_container2,
    Input_container,
    Right_password,
    Right_company,
    Left_password,
    Left_company,
    Right_name,
    Left_name,
    Right_id,
    Left_id,
    Background_image
} from "./style";


const Join_collector_page = () => {
    //

    const nav = useNavigate();
    const login_id_ref = useRef();
    const user_name_ref = useRef();
    const company_name_ref = useRef();
    const login_password_ref = useRef();


    const join_button_fn = async () => {
        //

        const login_id = login_id_ref.current.value;
        const user_name = user_name_ref.current.value;
        const company_name = company_name_ref.current.value;
        const login_password = login_password_ref.current.value;


        // 빈 값에 대한 예외 처리
        if (!login_id || !user_name || !company_name || !login_password) {
            alert("값을 입력해주세요.");
            return;
        }


        const collector_user_data = {
            login_id,
            user_name,
            company_name,
            login_password,
        }


        // 여기서 액션 날리면 됩니다.
        const { success, message } = await register_collector_user_fn(collector_user_data)
        alert(message);


        if (success) {
            nav("/");
        }
    }


    return (
        <>
            <Background_image></Background_image>
            <Small_title_component title="수거업체" />

            <Flex_body_container>

                <div>
                    <Input_container>
                        <Left_name htmlFor="user_name">이름</Left_name><br />
                        <Left_company htmlFor="company_name">수거업체명</Left_company><br />
                        <Left_id htmlFor="login_id">아이디</Left_id><br />
                        <Left_password htmlFor="login_password">비밀번호</Left_password><br />
                    </Input_container>
                </div>


                <div>
                    <Input_container2>
                        <Right_name id="user_name" ref={user_name_ref} autoComplete="off" /><br />
                        <Right_company id="company_name" ref={company_name_ref} autoComplete="off" /><br />
                        <Right_id id="login_id" ref={login_id_ref} autoComplete="off" /><br />
                        <Right_password id="login_password" type="password" ref={login_password_ref} autoComplete="off" /><br />
                    </Input_container2>
                </div>

            </Flex_body_container>

            <Button_3 onClick={join_button_fn}>가입하기</Button_3>

        </>
    )
}


export default Join_collector_page;