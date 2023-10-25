import axios from "axios";
const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

export const cafe_emission_page = async (wallet_address) => {
  try {
    console.log(wallet_address);
    const response = await axios({
      url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/mycoffeegrounds/${wallet_address}`,
      method: "get",
      // { data: { cafe_id } }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching coffee grounds:", error);
    return null;
  }
};
