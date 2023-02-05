"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Habit extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Habit.belongsTo(models.Respondent, {
				foreignKey: "respondent_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});

			Habit.belongsTo(models.Activity, {
				foreignKey: "activity_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});

			Habit.hasMany(models.DesiredActivity, {
				foreignKey: "habit_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});
		}
	}
	Habit.init(
		{
			id: {
				type: DataTypes.BIGINT,
				primaryKey: true,
			},
			respondent_id: DataTypes.BIGINT,
			activity_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Habit",
			timestamps: true,
			underscored: true,
		}
	);
	return Habit;
};
