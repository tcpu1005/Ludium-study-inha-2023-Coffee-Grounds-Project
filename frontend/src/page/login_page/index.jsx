// 5_LOGIN


import Big_title_component from "../../component/big_title_component";
import { login_user_fn } from "../../redux/middleware";
import { Button_6 } from "../../base_style";
import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router";
import { useRef } from "react";
import {
  Input_container,
  Login_container,
  Login_password,
  Input_password,
  Login_id,
  Input_id,
} from "./style";


const Login_page = () => {
  //


  const nav = useNavigate();
  const login_id_ref = useRef();
  const dispatch = useDispatch();
  const login_password_ref = useRef();


  const login_button_fn = () => {
    //

    const login_id = login_id_ref.current.value;
    const login_password = login_password_ref.current.value;
    console.log(login_id, login_password);


    // 빈 값에 대한 예외 처리
    if (!login_id || !login_password) {
      alert("값을 입력해주세요.");
      return;
    }

    
    // 여기서 디스패치 날리면 됩니다.
    const login_user_data = { login_id, login_password };
    dispatch(login_user_fn(login_user_data, nav));
  };


  return (
    <>
      <Big_title_component title="로그인" />


      <Login_container>
        <div>
          <Input_container>
            <Login_id htmlFor="login_id" >아이디</Login_id>
            <Input_id id="login_id" ref={login_id_ref} autoComplete="off" />
            <br />
          </Input_container>


          <Input_container>
            <Login_password htmlFor="login_password">비밀번호</Login_password>
            <Input_password
              id="login_password"
              ref={login_password_ref}
              type="password" />
            <br />
          </Input_container>


          <Button_6 onClick={login_button_fn}>로그인</Button_6>
        </div>
      </Login_container>
    </>
  );
};

export default Login_page;
