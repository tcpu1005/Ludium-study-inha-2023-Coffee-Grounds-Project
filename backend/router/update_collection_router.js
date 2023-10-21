const router = require("express").Router();
const { update_collection_controller } = require("../controller");

router.put(
  "/api/v1/members/collector/collection",
  update_collection_controller.update_collection_controller
);

module.exports = router;
