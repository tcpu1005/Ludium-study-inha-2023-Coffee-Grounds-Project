const controller = new Object();


// 컨트롤러 모음집
controller.get_my_emission_list_controller = require("./get_my_emission_list_controller");
controller.get_total_emission_controller = require("./get_total_emission_controller");
controller.register_user_controller = require("./register_user_controller");
controller.login_user_controller = require("./login_user_controller");
controller.collection_controller = require("./collection_controller");
controller.default_controller = require("./default_controller");
// ...


module.exports = controller;
