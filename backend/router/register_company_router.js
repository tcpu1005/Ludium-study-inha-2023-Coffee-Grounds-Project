const router = require("express").Router();
const { register_company_controller } = require("../controller");


router.put(
  "/api/v1/members/company",
  register_company_controller.register_company_controller
);


module.exports = router;
