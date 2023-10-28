import axios from "axios";


const REACT_APP_BACK_SERVER_PATH =
  process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";


const fetch_collections = async () => {
  //

  const res = await axios.get(
    `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collections/`
  );
  return res.data;
};


export {
  fetch_collections,
  // ...
};
