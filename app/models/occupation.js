"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Occupation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Occupation.hasMany(models.Respondent, {
				foreignKey: "occupation_id",
				onDelete: "cascade",
				onUpdate: "cascade",
			});
		}
	}
	Occupation.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Occupation",
			timestamps: true,
			underscored: true,
		}
	);
	return Occupation;
};
