const controller = new Object();

// 컨트롤러 모음집
controller.default_controller = require("./default_controller");
controller.register_user_controller = require("./register_user_controller");
controller.register_company_controller = require("./register_company_controller");
// ...

module.exports = controller;
