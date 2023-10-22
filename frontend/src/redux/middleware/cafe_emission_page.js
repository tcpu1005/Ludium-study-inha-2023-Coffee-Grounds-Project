import axios from "axios";

export const getCoffeeGroundsByWallet = async (wallet_address, cafe_id) => {
  try {
    const response = await axios.get(
      `/api/v1/members/cafe/mycoffeegounds/${wallet_address}`,
      { data: { cafe_id } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coffee grounds:", error);
    return null;
  }
};
