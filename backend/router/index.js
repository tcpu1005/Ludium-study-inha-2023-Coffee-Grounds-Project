const router = new Object();

// 라우터 모음집
router.default_router = require("./default_router");
router.register_user_router = require("./register_user_router");
router.register_company_router = require("./register_company_router");
router.login_user_router = require("./login_user_router");
router.members_cafe_collection_router = require("./members_cafe_collection_router");
router.fetch_collections_router = require("./fetch_collections_router");
module.exports = router;
