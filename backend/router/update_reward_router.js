const router = require("express").Router();
const { update_reward_controller } = require("../controller");

router.put(
  "/api/v1/coffeegrounds/reward	",
  update_reward_controller.update_reward_controller
);

module.exports = router;
