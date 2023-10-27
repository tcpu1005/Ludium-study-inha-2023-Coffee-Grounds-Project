import axios from "axios";
const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

const update_reward = async (data) => {
  try {
    const response = await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/coffeegrounds/reward`,

      data: data,
      method: "put",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export { update_reward };
