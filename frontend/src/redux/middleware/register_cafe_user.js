import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const register_cafe_user = async (cafe_user_data) =>
  await axios({
    url: `${BACK_SERVER_PATH}/api/v1/members/cafe`,
    method: "put",
    data: cafe_user_data,
  });
export {
  register_cafe_user,
  // ...
};
