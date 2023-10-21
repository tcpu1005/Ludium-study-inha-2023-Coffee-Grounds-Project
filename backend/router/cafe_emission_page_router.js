// routes/cafe.js
const express = require("express");
const router = express.Router();
const { cafe_emission_page_controller } = require("../controller");

router.get(
  "/api/v1/members/cafe/mycoffeegounds/:wallet_address",
  cafe_emission_page_controller.cafe_emission_page_controller
);

module.exports = router;
