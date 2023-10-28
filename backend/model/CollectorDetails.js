const Sequelize = require("sequelize");

class CollectorDetails extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        collector_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        company_name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "CollectorDetail",
        tableName: "collectorDetails",
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
