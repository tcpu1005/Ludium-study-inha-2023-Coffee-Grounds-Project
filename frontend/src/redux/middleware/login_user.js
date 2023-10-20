import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const login_user = (login_user_data) => {
  return async (dispatch, getState) => {
    // console.log(getState());
    const login_info = await axios({
      url: `${BACK_SERVER_PATH}/api/v1/login`,
      method: "post",
      data: login_user_data,
    });
    if (login_info.data.user_type === "Cafe") {
      console.log(login_info.data);
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: { login_info: login_info.data },
      });
    }
    if (login_info.data.user_type === "Company") {
      console.log(login_info.data);
      dispatch({
        type: "LOGIN_COMPANY_SUCCESS",
        payload: { login_info: login_info.data },
      });
    }
  };
};

console.log("axios 로그인");
export {
  login_user,
  // ...
};
