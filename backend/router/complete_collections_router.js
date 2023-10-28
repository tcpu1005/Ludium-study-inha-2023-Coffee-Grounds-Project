const express = require("express");
const router = express.Router();
const { complete_collections_controller } = require("../controller");

router.get(
  "/api/v1/members/collector/collections/complete",
  complete_collections_controller.complete_collections_controller
);

module.exports = router;
