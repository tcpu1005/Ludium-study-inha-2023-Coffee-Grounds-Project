import axios from "axios";
const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

export const total_emission_req = async (cafe_id) => {
  try {
    const response = await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/mycoffeegrounds/total/${cafe_id}`,
      method: "get",
      // { data: { cafe_id } }
    });
    console.log("총량");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching coffee grounds:", error);
    return null;
  }
};
