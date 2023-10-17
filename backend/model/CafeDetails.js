const Sequelize = require("sequelize");

class CafeDetails extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cafe_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Users",
            key: "user_id",
          },
        },
        cafe_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        address_si: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        address_gu: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        address_dong: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        total_emissions: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        modelName: "CafeDetail",
        tableName: "CafeDetails",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CafeDetails.belongsTo(db.Users, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
    db.CafeDetails.hasMany(db.CollectionRecords, {
      foreignKey: "cafe_id",
      sourceKey: "cafe_id",
    });
  }
}

module.exports = CafeDetails;
