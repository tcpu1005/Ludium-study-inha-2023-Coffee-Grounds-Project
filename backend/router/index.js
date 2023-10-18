const express = require("express");
const router = express.Router();

// 라우터 모음집
router.default_router = require("./default_router");
router.registerUser = require("./registerUser");
router.registerCompany = require("./registerCompany");

module.exports = router;
