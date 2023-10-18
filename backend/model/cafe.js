const Sequelize = require("sequelize");

class Cafe extends Sequelize.Model {
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
        modelName: "Cafe",
        tableName: "Cafes",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // 관계형
  }
}

module.exports = Cafe;
