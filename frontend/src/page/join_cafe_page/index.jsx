// 3_JOIN_CAFE

import Small_title_component from "../../component/small_title_component";
import { register_cafe_user_fn } from "../../redux/middleware";
import { Button_3 } from "../../base_style";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import {
  Left_cafename,
  Left_password,
  Left_address,
  Left_name,
  Select_el,
  Input_el,
  Left_id,
} from "./style";


const Join_cafe_page = () => {
  //

  const nav = useNavigate();
  const login_id_ref = useRef();
  const user_name_ref = useRef();
  const cafe_name_ref = useRef();
  const address_si_ref = useRef();
  const address_gu_ref = useRef();
  const address_dong_ref = useRef();
  const login_password_ref = useRef();
  const [address_si_array, set_address_si_array] = useState(["인천광역시"]);
  const [address_gu_array, set_address_gu_array] = useState(["미추홀구"]);
  const [address_dong_array, set_address_dong_array] = useState(["용현동"]);


  const join_button_fn = async () => {
    //

    // 유저가 입력할 input 창
    const login_id = login_id_ref.current.value;
    const user_name = user_name_ref.current.value;
    const cafe_name = cafe_name_ref.current.value;
    const address_si = address_si_ref.current.value;
    const address_gu = address_gu_ref.current.value;
    const address_dong = address_dong_ref.current.value;
    const login_password = login_password_ref.current.value;
    console.log(login_id, user_name, cafe_name, login_password);
    console.log(address_si, address_gu, address_dong);


    // 빈 값에 대한 예외 처리
    if (
      !login_id ||
      !user_name ||
      !cafe_name ||
      !login_password ||
      !address_si ||
      !address_gu ||
      !address_dong
    ) {
      alert("값을 입력해주세요.");
      return;
    }


    const cafe_user_data = {
      login_id,
      user_name,
      cafe_name,
      login_password,
      address_si,
      address_gu,
      address_dong,
    }


    // 여기서 액션 날리면 됩니다.
    const { success, message } = await register_cafe_user_fn(cafe_user_data);

    alert(message);


    if (success) {
      nav("/");
    }
  };

  return (
    <>
      <Small_title_component title="정보입력" />

      <div >

        <Left_id htmlFor="login_id"> 아이디</Left_id><br />

        <Left_password htmlFor="login_password"> 비밀번호</Left_password><br />
        <Left_name htmlFor="user_name">이름</Left_name><br />
        <Left_cafename htmlFor="cafe_name">카페명</Left_cafename>

      </div>

      <div>

        <Input_el id="login_id" style={{ fontSize: '60%' }} ref={login_id_ref} autoComplete="off" /> <br />
        <Input_el id="login_password" style={{ fontSize: '60%' }} type="password" ref={login_password_ref} autoComplete="off" /> <br />
        <Input_el id="user_name" style={{ fontSize: '60%' }} ref={user_name_ref} autoComplete="off" /> <br />
        <Input_el id="cafe_name" style={{ fontSize: '60%' }} ref={cafe_name_ref} autoComplete="off" /> <br />


      </div>


      <div>
        <Left_address>카페 주소</Left_address>

        <Select_el style={{ fontSize: '60%' }} name="" id="" ref={address_si_ref} disabled>
          {address_si_array.map((v, i) => {
            return <option key={`address-si-${i}`} value={`${v}`} > {v}</option>;
          })}
        </Select_el >
        <Select_el style={{ fontSize: '60%' }} name="" id="" ref={address_gu_ref} disabled>
          {address_gu_array.map((v, i) => {
            return <option key={`address-gu-${i}`} value={`${v}`}> {v}</option>;
          })}
        </Select_el >
        <Select_el style={{ fontSize: '60%' }} name="" id="" ref={address_dong_ref}>
          {address_dong_array.map((v, i) => {
            return <option key={`address-dong-${i}`} value={`${v}`}> {v}</option>;
          })}
        </Select_el >

      </div>


      <Button_3 onClick={join_button_fn}>가입하기</Button_3>
    </>
  )
}


export default Join_cafe_page;
