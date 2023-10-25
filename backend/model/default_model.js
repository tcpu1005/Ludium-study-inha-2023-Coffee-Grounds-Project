const Sequelize = require("sequelize");

class Default_model extends Sequelize.Model {
  //
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        wallet_address: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscoed: true,
        timestamp: true,
        modelName: "Default_model",
        tableName: "default_models",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // 관계형
  }
}

module.exports = Default_model;
