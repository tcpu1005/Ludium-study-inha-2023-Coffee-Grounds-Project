const Sequelize = require("sequelize");

class Users extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        login_id: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        login_password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        user_type: {
          type: Sequelize.ENUM("Cafe", "Collector"),
          allowNull: false,
        },
        wallet_address: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        wallet_privatekey: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        modelName: "User",
        tableName: "Users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Users.hasOne(db.CafeDetails, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
    db.Users.hasOne(db.CollectorDetails, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
  }
}

module.exports = Users;
