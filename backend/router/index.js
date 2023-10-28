const router = new Object();

// 라우터 모음집
router.members_cafe_collection_router = require("./members_cafe_collection_router");
router.complete_collections_router = require("./complete_collections_router");
router.get_my_emission_list_router = require("./get_my_emission_list_router");
router.get_total_emission_router = require("./get_total_emission_router");
router.update_collection_router = require("./update_collection_router");
router.fetch_collections_router = require("./fetch_collections_router");
router.complete_reward_router = require("./complete_reward_router");
router.register_user_router = require("./register_user_router");
router.update_reward_router = require("./update_reward_router");
router.login_user_router = require("./login_user_router");
router.default_router = require("./default_router");
module.exports = router;
