import axios from "axios";
const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

export const cafe_emission_page = async (cafe_id) => {
  try {
    const response = await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/mycoffeegrounds/${cafe_id}`,
      method: "get",
      // { data: { cafe_id } }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching coffee grounds:", error);
    return null;
  }
};
