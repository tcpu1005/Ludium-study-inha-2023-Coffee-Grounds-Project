const express = require("express");
const router = express.Router();
const { complete_reward_controller } = require("../controller");

router.get(
  "/api/v1/members/collector/collections/reward",
  complete_reward_controller.complete_reward_controller
);

module.exports = router;
