import axios from "axios";


const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";


const register_cafe_user_fn = async (cafe_user_data) => {
  //
  
  const res = await axios({
    url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe`,
    data: cafe_user_data,
    method: "put",
  });


  return res.data;
}


const register_collector_user_fn = async (collector_user_data) => {
  //

  const res = await axios({
    url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector`,
    data: collector_user_data,
    method: "put",
  });


  return res.data;
}


export {
  register_collector_user_fn,
  register_cafe_user_fn,
  // ...
};
