const controller = new Object();

// 컨트롤러 모음집
controller.default_controller = require("./default_controller");
controller.registerUser = require("./registerUser");
controller.registerCompany = require("./registerCompany");
// ...

module.exports = controller;
