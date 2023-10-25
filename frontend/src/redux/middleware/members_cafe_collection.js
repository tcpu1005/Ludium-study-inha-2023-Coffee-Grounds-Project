import axios from "axios";

const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

const members_cafe_collection = (members_cafe_collection_data) => {
  console.log("hello");
  return async (dispatch, getState) => {
    console.log("hello");
    const cafe_id = getState().login_reducer.cafe_id;
    members_cafe_collection_data = { ...members_cafe_collection_data, cafe_id };
    console.log(members_cafe_collection_data);
    await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/collection`,
      method: "post",
      data: members_cafe_collection_data,
    });
  };
};
export {
  members_cafe_collection,
  // ...
};
