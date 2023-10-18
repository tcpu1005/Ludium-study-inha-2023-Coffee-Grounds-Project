const Sequelize = require("sequelize");
const config = require("../config");

// ㅜ 생성할 테이블 목록
const Cafe = require("./cafe");
// ....

const { database, username, password } = config.dev;
const sequelize = new Sequelize(database, username, password, config.dev);

const db = {};
db.sequelize = sequelize;

db.Cafe = Cafe;

Cafe.init(sequelize);

// Cafe.associate(db);

module.exports = db;