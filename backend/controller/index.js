const controller = new Object();

// 컨트롤러 모음집
controller.default_controller = require("./default_controller");
controller.register_user_controller = require("./register_user_controller");
controller.register_company_controller = require("./register_company_controller");
controller.login_user_controller = require("./login_user_controller");
controller.members_cafe_collection_controller = require("./members_cafe_collection_controller");
// ...

module.exports = controller;
