const Sequelize = require("sequelize");

class Users extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        login_id: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        login_password: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        user_type: {
          type: Sequelize.ENUM("Cafe", "Collector"),
          allowNull: false,
        },
        wallet_address: {
          type: Sequelize.STRING(255),
          allowNull: true,
          unique: false, // 임시 false 원래는 true
        },
        wallet_privatekey: {
          type: Sequelize.STRING(255),
          allowNull: true,
          unique: false, // 임시 false 원래는 true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "User",
        tableName: "users",
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
