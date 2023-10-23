// 5_LOGIN


import Big_title_component from "../../component/big_title_component";
import { useDispatch, useSelector } from "react-redux";
import { Input_container, Input_el, Login_container, Login_id, Login_password,
        Input_id, Input_password } from "./style";
import { login_user } from "../../redux/middleware";
import { useNavigate } from "react-router-dom";
import { Button_6 } from "../../base_style";
import { useRef } from "react";


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
      
      
      <Login_container>
        <div> 
          <Input_container>
            <Login_id htmlFor="login_id" >아이디</Login_id>
            <Input_id Input_el id="login_id" ref={login_id_ref} autoComplete="off" /><br/>
          </Input_container>

          <Input_container>
            <Login_password htmlFor="login_password">비밀번호</Login_password>
            <Input_password Input_el
              id="login_password"
              ref={login_password_ref}
              type="password"/><br/>
          </Input_container>

          <Button_6 onClick={login_button_fn}>로그인</Button_6>
        </div>
      </Login_container>
    </>
  );
};

export default Login_page;
