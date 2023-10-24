import axios from "axios";

const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

const register_company_user = async (company_user_data) =>
  await axios({
    url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/company`,
    method: "put",
    data: company_user_data,
  });
export {
  register_company_user,
  // ...
};
