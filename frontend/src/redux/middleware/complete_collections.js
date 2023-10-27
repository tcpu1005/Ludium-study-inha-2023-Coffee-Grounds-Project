// frontend/services/collectionService.js

import axios from "axios";

const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";

const complete_collections = async () => {
  try {
    const res = await axios.get(
      `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collections/complete`
    );
    console.log("여기");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching collector collections:", error);
    throw error;
  }
};

export {
  complete_collections,
  // ...
};
