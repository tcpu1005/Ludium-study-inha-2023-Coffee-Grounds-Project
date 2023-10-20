// axios 함수 및 리덕스 저장 요청

import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const default_action_fn = () => {
  //

  return async (dispatch, get_state) => {
    //

    const res = await axios({
      //

      url: `${BACK_SERVER_PATH}/api/vi/redux-action-test/front-text`,
      method: "get",
    });

    const { success, message, res_data } = res.data;
    console.log(`success : ${success}`);
    console.log(`message : ${message}`);
    console.log(`res_data : ${res_data}`);

    dispatch({
      type: "WE_CAN_DO_IT",
      payload: { team_message: "재민 지훈 희진 지원 화이팅!" },
    });
  };
};
// ...login_user_controller

export {
  default_action_fn,
  // ...
};
