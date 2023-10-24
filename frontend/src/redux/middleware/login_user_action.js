import axios from "axios";


const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";


const login_user_fn = (login_user_data, nav) => {
  //

  return async (dispatch, get_state) => {
    //

    const { success, message, data } = (await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/login`,
      data: login_user_data,
      method: "post",
    })).data;


    if (data.user_type === "Cafe") {
      dispatch({
        type: "LOGIN_USER",
        payload: data,
      });
    }


    else if (data.user_type === "Collector") {
      dispatch({
        type: "LOGIN_COLLECTOR",
        payload: data,
      });
    }


    alert(message);


    if (success) {
      nav("/");
    }
  };
};


const logout_user_fn = () => {
  //

  return (dispatch, get_state) => {
    dispatch({ type: "LOGOUT", payload: null });
  }
}


export {
  logout_user_fn,
  login_user_fn,
  // ...
};
