const router = require("express").Router();
const { get_my_emission_list_controller } = require("../controller");


router.get(
  "/api/v1/members/cafe/mycoffeegrounds/:cafe_id",
  get_my_emission_list_controller.get_my_emission_list_fn
);


module.exports = router;
