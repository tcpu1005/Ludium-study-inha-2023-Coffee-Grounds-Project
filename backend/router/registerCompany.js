const express = require("express");
const router = express.Router();
const registerUser = require("../controller/registerUser");

router.put("/api/v1/members/company", registerCompany);

module.exports = router;
