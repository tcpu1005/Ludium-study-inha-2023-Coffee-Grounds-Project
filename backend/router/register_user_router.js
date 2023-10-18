const express = require("express");
const router = express.Router();
const { register_user_controller } = require("../controller");

router.put("/api/v1/members/cafe", register_user_controller);

module.exports = router;
