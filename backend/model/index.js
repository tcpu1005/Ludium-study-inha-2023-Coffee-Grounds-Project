const Sequelize = require("sequelize");
const config = require("../config");

const Users = require("./Users");
const CafeDetails = require("./CafeDetails");
const CollectorDetails = require("./CollectorDetails");
const CollectionRecords = require("./CollectionRecords");

const { database, username, password } = config.dev;

const sequelize = new Sequelize(database, username, password, config.dev);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.Users = Users;
db.CafeDetails = CafeDetails;
db.CollectorDetails = CollectorDetails;
db.CollectionRecords = CollectionRecords;

// Initialize
Users.init(sequelize);
CafeDetails.init(sequelize);
CollectorDetails.init(sequelize);
CollectionRecords.init(sequelize);

// Associate relationships
Users.associate(db);
CafeDetails.associate(db);
CollectorDetails.associate(db);
CollectionRecords.associate(db);

module.exports = db;
