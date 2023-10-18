const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/registerUser");

router.put("/api/v1/members/cafe", registerUser);

module.exports = router;
