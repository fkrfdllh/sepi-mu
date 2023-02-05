"use strict";

const models = require("../../models");

const fetchData = async (data) =>
	Promise.all(
		data.map(async (item) => {
			const occupationId = await findOccupationId(
				item.occupation.toLowerCase()
			);
			const activityId = await findActivityId(item.habit.toLowerCase());

			item.occupationId = occupationId.id;
			item.activityId = activityId.id;

			return item;
		})
	);

const findOccupationId = async (name) =>
	await models.Occupation.findOne({
		where: {
			name: name,
		},
	});

const findActivityId = async (name) =>
	await models.Activity.findOne({
		where: {
			name: name,
		},
	});

module.exports = async (req, res) => {
	const data = await fetchData(req.body);

	try {
		await models.sequelize.transaction(async (t) => {
			for (const item of data) {
				const respondent = await models.Respondent.create(
					{
						name: item.name,
						email: item.email,
						age: item.age,
						occupation_id: item.occupationId,
						created_at: new Date(),
						updated_at: new Date(),
					},
					{
						transaction: t,
						fields: [
							"name",
							"email",
							"age",
							"occupation_id",
							"created_at",
							"updated_at",
						],
					}
				);

				const habit = await models.Habit.create(
					{
						respondent_id: await respondent.id,
						activity_id: item.activityId,
						created_at: new Date(),
						updated_at: new Date(),
					},
					{
						transaction: t,
						fields: [
							"respondent_id",
							"activity_id",
							"created_at",
							"updated_at",
						],
					}
				);

				await models.DesiredActivity.create(
					{
						habit_id: await habit.id,
						activity_id: item.activityId,
						is_positive: item.is_positive,
						created_at: new Date(),
						updated_at: new Date(),
					},
					{
						transaction: t,
						fields: [
							"habit_id",
							"activity_id",
							"is_positive",
							"created_at",
							"updated_at",
						],
					}
				);
			}
		});
	} catch (err) {
		console.error(err);

		res.status(500).send(`Failed to sync data because: ${err}`);
	}

	res.status(200).send("Data synced!");
};
