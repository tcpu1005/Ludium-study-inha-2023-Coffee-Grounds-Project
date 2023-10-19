import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const members_cafe_collection = async (members_cafe_collection_data) =>
  await axios({
    url: `${BACK_SERVER_PATH}/api/v1/members/cafe/collection`,
    method: "POST",
    data: members_cafe_collection_data,
  });
export {
  members_cafe_collection,
  // ...
};
