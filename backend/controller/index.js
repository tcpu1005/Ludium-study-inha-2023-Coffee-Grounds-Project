const controller = new Object();

// 컨트롤러 모음집
controller.default_controller = require("./default_controller");
controller.register_user_controller = require("./register_user_controller");
controller.login_user_controller = require("./login_user_controller");
controller.members_cafe_collection_controller = require("./members_cafe_collection_controller");
controller.fetch_collections_controller = require("./fetch_collections_controller");
controller.complete_collections_controller = require("./complete_collections_controller");
controller.update_collection_controller = require("./update_collection_controller");
controller.cafe_emission_page_controller = require("./cafe_emission_page_controller");
controller.total_emission_req_controller = require("./total_emission_req_controller");
controller.complete_reward_controller = require("./complete_reward_controller");
controller.update_reward_controller = require("./update_reward_controller");

// ...

module.exports = controller;
