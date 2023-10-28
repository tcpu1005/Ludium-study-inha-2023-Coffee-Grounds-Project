import axios from "axios";


const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";


export const get_my_emission_list_fn = async (cafe_id) => {
  //
  const res = await axios({
    url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/mycoffeegrounds/${cafe_id}`,
    method: "get",
  });


  return res.data;
};
