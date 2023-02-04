"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class DesiredActivity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			DesiredActivity.belongsTo(models.Habit, {
				foreignKey: "habit_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});

			DesiredActivity.belongsTo(models.Activity, {
				foreignKey: "activity_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});
		}
	}
	DesiredActivity.init(
		{
			id: DataTypes.BIGINT,
			habit_id: DataTypes.BIGINT,
			activity_id: DataTypes.INTEGER,
			is_positive: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "DesiredActivity",
			timestamps: true,
			underscored: true,
		}
	);
	return DesiredActivity;
};
