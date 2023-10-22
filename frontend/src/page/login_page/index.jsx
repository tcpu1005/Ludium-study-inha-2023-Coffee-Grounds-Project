// 5_LOGIN


import Big_title_component from "../../component/big_title_component";
import { Button_3 } from "../../base_style";
import { useRef } from "react";
import {
  Input_container,
  Input_el,
} from "./style";


const Login_page = () => {
  //

  const login_id_ref = useRef();
  const login_password_ref = useRef();


  const login_button_fn = () => {
    //

    const id = login_id_ref.current.value;
    const password = login_password_ref.current.value;
    console.log(id, password);


    // 빈 값에 대한 예외 처리
    if (!id || !password) {
      alert("값을 입력해주세요.");
      return;
    }

    // 여기서 디스패치 날리면 됩니다.
  };


  return (
    <>
      <Big_title_component title="로그인" />


      <Input_container>
        <label htmlFor="login_id" >아이디</label>
        <Input_el id="login_id" ref={login_id_ref} autoComplete="off" />
      </Input_container>


      <Input_container>
        <label htmlFor="login_password">비밀번호</label>
        <Input_el id="login_password" ref={login_password_ref} type="password" />
      </Input_container>


      <Button_3 onClick={login_button_fn}>로그인</Button_3>
    </>
  )
}

export default Login_page;
