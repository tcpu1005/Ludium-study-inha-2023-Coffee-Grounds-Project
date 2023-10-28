import axios from "axios";
const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

const update_collection = async (data) => {
  try {
    const response = await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collection`,

      data: data,
      method: "put",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export { update_collection };
