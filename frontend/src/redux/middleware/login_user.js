import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const login_user = async (login_user_data) =>
  await axios({
    url: `${BACK_SERVER_PATH}/api/v1/login`,
    method: "get",
    data: login_user_data,
  });
export {
  login_user,
  // ...
};
