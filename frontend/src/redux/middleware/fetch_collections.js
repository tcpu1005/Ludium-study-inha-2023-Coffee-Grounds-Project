// frontend/services/collectionService.js

import axios from "axios";

const BACK_SERVER_PATH =
  process.env.BACK_SERVER_PATH || "http://localhost:8080";

const fetch_collections = async (cafe_id) => {
  try {
    const res = await axios.get(
      `${BACK_SERVER_PATH}/api/v1/members/collector/collections/${cafe_id}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching collector collections:", error);
    throw error;
  }
};

export {
  fetch_collections,
  // ...
};
