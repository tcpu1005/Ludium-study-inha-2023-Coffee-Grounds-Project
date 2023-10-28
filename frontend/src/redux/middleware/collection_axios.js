import axios from "axios";


const REACT_APP_BACK_SERVER_PATH =
    process.env.REACT_APP_BACK_SERVER_PATH || "http://localhost:8080";


const register_emission_fn = async (cafe_emission_data) => {
    //

    const res = await axios({
        url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/cafe/collection`,
        data: cafe_emission_data,
        method: "post",
    });
    return res.data;
};


const get_collections_fn = async () => {
    //

    const res = await axios.get(
        `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collections/`
    );
    return res.data;
};


const resigter_collection_fn = async (data) => {
    try {
        console.log(data)
        const response = await axios({
            url: `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collection`,
            data: data,
            method: "put",
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


const get_my_collections_fn = async () => {
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


const resigter_reward_fn = async (data) => {
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


const get_completed_reward_fn = async () => {
    try {
        const res = await axios.get(
            `${REACT_APP_BACK_SERVER_PATH}/api/v1/members/collector/collections/reward`
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
    get_completed_reward_fn,
    resigter_collection_fn,
    get_my_collections_fn,
    register_emission_fn,
    get_collections_fn,
    resigter_reward_fn,
    // ...
};
