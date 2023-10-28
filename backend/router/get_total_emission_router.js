const router = require("express").Router();
const { get_total_emission_controller } = require("../controller");


router.get(
  "/api/v1/members/cafe/mycoffeegrounds/total-emission/:cafe_id",
  get_total_emission_controller.get_total_emission_fn
);


module.exports = router;
