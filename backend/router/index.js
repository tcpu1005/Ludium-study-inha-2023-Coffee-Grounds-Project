const router = new Object();

// 라우터 모음집
router.default_router = require("./default_router");
router.register_user_router = require("./register_user_router");
router.login_user_router = require("./login_user_router");
router.members_cafe_collection_router = require("./members_cafe_collection_router");
router.fetch_collections_router = require("./fetch_collections_router");
router.update_collection_router = require("./update_collection_router");
router.cafe_emission_page_router = require("./cafe_emission_page_router");
router.total_emission_req_router = require("./total_emission_req_router");
router.complete_collections_router = require("./complete_collections_router");
router.complete_reward_router = require("./complete_reward_router");

module.exports = router;
