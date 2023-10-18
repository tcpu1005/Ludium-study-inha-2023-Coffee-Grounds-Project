const Sequelize = require("sequelize");

class CollectionRecords extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        record_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        cafe_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "CafeDetails",
            key: "cafe_id",
          },
        },
        collector_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "CollectorDetails",
            key: "collector_id",
          },
        },
        coffee_amount: {
          type: Sequelize.DECIMAL(5, 2),
          allowNull: false,
        },
        coffee_status: {
          type: Sequelize.ENUM("건조", "습기", "곰팡이", "불가"),
          allowNull: false,
          defaultValue: "습기",
        },
        collection_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        reward_status: {
          type: Sequelize.ENUM("수거 요청", "수거 완료", "보상 완료"),
          allowNull: false,
        },
        reward_amount: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "CollectionRecord",
        tableName: "CollectionRecords",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CollectionRecords.belongsTo(db.CafeDetails, {
      foreignKey: "cafe_id",
      targetKey: "cafe_id",
    });
    db.CollectionRecords.belongsTo(db.CollectorDetails, {
      foreignKey: "collector_id",
      targetKey: "collector_id",
    });
  }
}

module.exports = CollectionRecords;
