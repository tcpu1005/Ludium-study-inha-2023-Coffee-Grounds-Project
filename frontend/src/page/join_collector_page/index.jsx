// 4_JOIN_COLLECTOR

import Small_title_component from "../../component/small_title_component";
import { Button_3 } from "../../base_style";
import { useRef } from "react";
import { Input_container, Input_el, Input_container2,Flex_body_container} from "./style";


const Join_collector_page = () => {
  //

  const login_id_ref = useRef();
  const user_name_ref = useRef();
  const company_name_ref = useRef();
  const login_password_ref = useRef();

  const join_button_fn = () => {
    //
    const user_type = "Collector";
    const wallet_address = null;
    const wallet_privatekey = null;
    const login_id = login_id_ref.current.value;
    const user_name = user_name_ref.current.value;
    const company_name = company_name_ref.current.value;
    const login_password = login_password_ref.current.value;
    console.log(login_id, user_name, company_name, login_password);

    const company_user_data = {
      login_id: login_id,
      login_password: login_password,
      user_name: user_name,
      user_type: user_type,
      wallet_address: wallet_address,
      wallet_privatekey: wallet_privatekey,
      company_name: company_name,
    };
    console.log(login_id, user_name, user_type, company_name);
    // 빈 값에 대한 예외 처리
    if (!login_id || !user_name || !company_name || !login_password) {
      alert("값을 입력해주세요.");
      return;
    }
    register_company_user(company_user_data);
    // 여기서 액션 날리면 됩니다.
  };

  return (
    <>
      <Small_title_component title="수거업체" />

      <Flex_body_container>

        <div>
          <Input_container>
            <label htmlFor="user_name" style={{ fontSize: '60%' }}>이름</label><br />
            <label htmlFor="company_name" style={{ fontSize: '60%' }}>수거업체명</label><br />
            <label htmlFor="login_id" style={{ fontSize: '60%' }}>아이디</label><br />
            <label htmlFor="login_password" style={{ fontSize: '60%' }}>비밀번호</label><br />
          </Input_container>
        </div>

        <Input_container>
          <label htmlFor="company_name">수거업체명</label>
          <Input_el id="company_name" ref={company_name_ref} autoComplete="off" />
        </Input_container>

        <div>
          <Input_container2>
            <Input_el id="user_name" style={{ fontSize: '60%' }} ref={user_name_ref} autoComplete="off" /><br />
            <Input_el id="user_name" style={{ fontSize: '60%' }} ref={user_name_ref} autoComplete="off" /><br />
            <Input_el id="login_id" style={{ fontSize: '60%' }} ref={login_id_ref} autoComplete="off" /><br />
            <Input_el id="login_password" style={{ fontSize: '60%' }} type="password" ref={login_password_ref} autoComplete="off" /><br />
          </Input_container2>
        </div>

      </Flex_body_container>

      <Button_3 onClick={join_button_fn}>가입하기</Button_3>
    </>
  )
}


export default Join_collector_page;
