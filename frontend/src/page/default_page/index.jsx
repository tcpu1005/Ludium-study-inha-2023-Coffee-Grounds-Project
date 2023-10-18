// ㅜ rafce 명령어로 컴포넌트 생성하면 된다.

import Default_component from "../../component/default_component";
import { Button_1, MAROON_COLOR_1, WHITE_COLOR_1 } from "../../base_style";
import { default_action_fn } from "../../redux/middleware";
import { register_cafe_user } from "../../redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../layout/footer";
import Top from "../../layout/top";
const userData = {
  login_id: "hello123",
  login_password: "1234",
  user_name: "김지훈",
  user_type: null,
  wallet_address: null,
  wallet_privatekey: null,
  address_si: "인천광역시",
  address_gu: "미추홀구",
  address_dong: "용현동",
};
const Default_page = () => {
  //

  const dispatch = useDispatch();
  const team_message = useSelector(
    (state) => state.default_reducer.team_message
  );

  const button_fn = () => {
    //
    ///gghjjhgfhjkjjhg

    dispatch(default_action_fn());
    console.log(`team_message : ${team_message}`);
  };

  return (
    <>
      <Top />
      <div
        style={{
          width: "100%",
          padding: "5vw 0",
          backgroundColor: WHITE_COLOR_1,
        }}
      >
        <h1 style={{ color: MAROON_COLOR_1 }}>Default_page</h1>
        <h1 style={{ color: MAROON_COLOR_1 }}>h1 style</h1>
        <h2 style={{ color: MAROON_COLOR_1 }}>h2 style</h2>
        <h3 style={{ color: MAROON_COLOR_1 }}>h3 style</h3>
        <h4 style={{ color: MAROON_COLOR_1 }}>h4 style</h4>
        <h5 style={{ color: MAROON_COLOR_1 }}>h5 style</h5>
        <h6 style={{ color: MAROON_COLOR_1 }}>h6 style</h6>
        <Button_1 onClick={button_fn}>버튼1 style</Button_1>
        <h6>{team_message}</h6>
      </div>
      <Default_component />
      <Button_1 onClick={() => register_cafe_user(userData)}>회원등록</Button_1>

      <Footer />
    </>
  );
};

export default Default_page;

// ㅜ 메타마스트 확장 프로그램 사용 시 2가지 에러 발생함
// Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function
// lockdown-more.js:99 Protecting intrinsics failed: ReferenceError: harden is not defined
