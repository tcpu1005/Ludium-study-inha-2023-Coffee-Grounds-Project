const router = new Object();


// 라우터 모음집
router.get_my_emission_list_router = require("./get_my_emission_list_router");
router.get_total_emission_router = require("./get_total_emission_router");
router.register_user_router = require("./register_user_router");
router.login_user_router = require("./login_user_router");
router.collection_router = require("./collection_router");
router.default_router = require("./default_router");
module.exports = router;
