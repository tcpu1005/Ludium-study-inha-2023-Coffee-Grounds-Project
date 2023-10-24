const router = require("express").Router();
const { register_user_controller, register_collector_user_controller } = require("../controller");


router.put(
  "/api/v1/members/cafe",
  register_user_controller.register_cafe_user_controller
);


router.put(
  "/api/v1/members/collector",
  register_user_controller.register_collector_user_controller
);


module.exports = router;
