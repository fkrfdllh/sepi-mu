"use strict";

const { sequelize } = require("../../models");
const Models = require("../../models");

module.exports = async (req, res) => {
	const topData = await Models.DesiredActivity.findAll({
		attributes: [
			"DesiredActivity.activity_id",
			[sequelize.fn("COUNT", sequelize.col("*")), "total"],
		],
		include: [
			{
				model: Models.Activity,
				attributes: ["name"],
			},
			{
				model: Models.Habit,
				attributes: [],
				required: true,
				where: { activity_id: req.query.habit },
			},
		],
		where: { is_positive: true },
		group: ["DesiredActivity.activity_id", "Activity.id", "Activity.name"],
		having: sequelize.literal(`COUNT(*) >= 1`),
		order: [["total", "DESC"]],
	});

	const totalData = await Models.DesiredActivity.count({
		where: { is_positive: true },
		include: {
			model: Models.Habit,
			where: { activity_id: req.query.habit },
		},
	});

	res.status(200).json({ total: totalData, data: topData });
};
