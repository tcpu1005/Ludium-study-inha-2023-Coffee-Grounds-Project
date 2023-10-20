const router = require("express").Router();
const { login_user_controller } = require("../controller");

router.post("/api/v1/login", login_user_controller.login_user_controller);

module.exports = router;
