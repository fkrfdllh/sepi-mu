"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Respondent extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Respondent.belongsTo(models.Occupation, {
				foreignKey: "occupation_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});

			Respondent.hasMany(models.Habit, {
				foreignKey: "respondent_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});
		}
	}
	Respondent.init(
		{
			id: DataTypes.BIGINT,
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			age: DataTypes.INTEGER,
			occupation_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Respondent",
			timestamps: true,
			underscored: true,
		}
	);
	return Respondent;
};
