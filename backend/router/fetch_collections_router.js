// routes/collectionRouter.js

const express = require("express");
const router = express.Router();
const { fetch_collections_controller } = require("../controllers");

router.get(
  "/api/v1/members/collector/collections",
  fetch_collections_controller
);

module.exports = router;
