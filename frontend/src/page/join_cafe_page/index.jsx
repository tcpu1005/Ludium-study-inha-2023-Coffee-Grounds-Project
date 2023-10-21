// 3_JOIN_CAFE

import { register_cafe_user } from "../../redux/middleware";
import Small_title_component from "../../component/small_title_component";
import { Button_3 } from "../../base_style";
import { useRef, useState } from "react";
import { Input_container, Select_el, Input_el } from "./style";

const Join_cafe_page = () => {
  //

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

  const join_button_fn = () => {
    //
    const user_type = "Cafe";
    const wallet_address = null;
    const wallet_privatekey = null;
    const total_emissions = 0;
    const login_id = login_id_ref.current.value;
    const user_name = user_name_ref.current.value;
    const cafe_name = cafe_name_ref.current.value;
    const address_si = address_si_ref.current.value;
    const address_gu = address_gu_ref.current.value;
    const address_dong = address_dong_ref.current.value;
    const login_password = login_password_ref.current.value;
    console.log(login_id, user_name, cafe_name, login_password);
    console.log(address_si, address_gu, address_dong);

    const cafe_user_data = {
      login_id: login_id,
      login_password: login_password,
      user_name: user_name,
      user_type: user_type,
      wallet_address: wallet_address,
      wallet_privatekey: wallet_privatekey,
      cafe_name: cafe_name,
      address_si: address_si,
      address_gu: address_gu,
      address_dong: address_dong,
      total_emissions: total_emissions,
    };

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

    console.log(cafe_user_data);
    // 여기서 액션 날리면 됩니다.
    register_cafe_user(cafe_user_data);
  };

  return (
    <>
      <Small_title_component title="카페" />

      <Input_container>
        <label htmlFor="user_name">이름</label>
        <Input_el id="user_name" ref={user_name_ref} autoComplete="off" />
      </Input_container>

      <Input_container>
        <label htmlFor="cafe_name">카페명</label>
        <Input_el id="cafe_name" ref={cafe_name_ref} autoComplete="off" />
      </Input_container>

      <label>카페 주소</label>
      <Input_container>
        <Select_el name="" id="" ref={address_si_ref} disabled>
          {address_si_array.map((v, i) => {
            return (
              <option key={`address-si-${i}`} value={`${v}`}>
                {" "}
                {v}
              </option>
            );
          })}
        </Select_el>
        <Select_el name="" id="" ref={address_gu_ref} disabled>
          {address_gu_array.map((v, i) => {
            return (
              <option key={`address-gu-${i}`} value={`${v}`}>
                {" "}
                {v}
              </option>
            );
          })}
        </Select_el>
        <Select_el name="" id="" ref={address_dong_ref}>
          {address_dong_array.map((v, i) => {
            return (
              <option key={`address-dong-${i}`} value={`${v}`}>
                {" "}
                {v}
              </option>
            );
          })}
        </Select_el>
      </Input_container>

      <Input_container>
        <label htmlFor="login_id">아이디</label>
        <Input_el id="login_id" ref={login_id_ref} autoComplete="off" />
      </Input_container>

      <Input_container>
        <label htmlFor="login_password">비밀번호</label>
        <Input_el
          id="login_password"
          type="password"
          ref={login_password_ref}
          autoComplete="off"
        />
      </Input_container>

      <Button_3 onClick={join_button_fn}>가입하기</Button_3>
    </>
  );
};

export default Join_cafe_page;
