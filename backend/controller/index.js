const controller = new Object();


// 컨트롤러 모음집
controller.members_cafe_collection_controller = require("./members_cafe_collection_controller");
controller.complete_collections_controller = require("./complete_collections_controller");
controller.get_my_emission_list_controller = require("./get_my_emission_list_controller");
controller.get_total_emission_controller = require("./get_total_emission_controller");
controller.fetch_collections_controller = require("./fetch_collections_controller");
controller.update_collection_controller = require("./update_collection_controller");
controller.complete_reward_controller = require("./complete_reward_controller");
controller.register_user_controller = require("./register_user_controller");
controller.update_reward_controller = require("./update_reward_controller");
controller.login_user_controller = require("./login_user_controller");
controller.default_controller = require("./default_controller");
// ...


module.exports = controller;
