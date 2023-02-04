"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Activity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Activity.hasMany(models.Habit, {
				foreignKey: "activity_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});

			Activity.hasMany(models.DesiredActivity, {
				foreignKey: "activity_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});
		}
	}
	Activity.init(
		{
			id: DataTypes.INTEGER,
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Activity",
			timestamps: true,
			underscored: true,
		}
	);
	return Activity;
};
