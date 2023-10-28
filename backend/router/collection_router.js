const router = require("express").Router();
const { collection_controller } = require("../controller");


router.post(
    "/api/v1/members/cafe/collection",
    collection_controller.register_emission_fn
);


router.get(
    "/api/v1/members/collector/collections/",
    collection_controller.get_collections_fn
);


router.put(
    "/api/v1/members/collector/collection",
    collection_controller.register_collection_fn
);


router.get(
    "/api/v1/members/collector/collections/complete",
    collection_controller.get_my_collections_fn
);


router.put(
    "/api/v1/coffeegrounds/reward",
    collection_controller.register_reward_fn
);


router.get(
    "/api/v1/members/collector/collections/reward",
    collection_controller.get_completed_reward_fn
);


module.exports = router;