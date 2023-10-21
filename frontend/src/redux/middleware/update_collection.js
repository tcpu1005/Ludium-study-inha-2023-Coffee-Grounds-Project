import axios from "axios";

export const update_collection = async (data) => {
  try {
    const response = await axios.put(
      "/api/v1/members/collector/collection",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
