const router = require("express").Router();
const { members_cafe_collection_controller } = require("../controller");

router.post(
  "/api/v1/members/cafe/collection",
  members_cafe_collection_controller.members_cafe_collection_controller
);

module.exports = router;
