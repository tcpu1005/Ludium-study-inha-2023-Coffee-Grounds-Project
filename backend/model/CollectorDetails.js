const Sequelize = require("sequelize");

class CollectorDetails extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        collector_id: {
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
        company_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        modelName: "CollectorDetail",
        tableName: "CollectorDetails",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CollectorDetails.belongsTo(db.Users, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
    db.CollectorDetails.hasMany(db.CollectionRecords, {
      foreignKey: "collector_id",
      sourceKey: "collector_id",
    });
  }
}

module.exports = CollectorDetails;
