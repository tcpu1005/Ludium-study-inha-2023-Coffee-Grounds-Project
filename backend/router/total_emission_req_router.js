// routes/cafe.js
const express = require("express");
const router = express.Router();
const { total_emission_req_controller } = require("../controller");

router.get(
  "/api/v1/members/cafe/mycoffeegrounds/total/:cafe_id",
  total_emission_req_controller.total_emission_req_controller
);

module.exports = router;
