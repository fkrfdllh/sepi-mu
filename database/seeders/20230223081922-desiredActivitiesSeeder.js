"use strict";

const models = require("../../app/models");

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const habits = async () => {
	return await models.Habit.findAll({
		order: [["id", "ASC"]],
		offset: 18,
	});
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		let desiredActivities = [];

		Array.from(await habits()).forEach((habit) => {
			desiredActivities.push({
				habit_id: habit.id,
				activity_id: randomNumber(1, 19),
				is_positive: randomNumber(1, 2) === 1 ? true : false,
				created_at: new Date(),
				updated_at: new Date(),
			});
		});

		return await queryInterface.bulkInsert(
			"desired_activities",
			desiredActivities
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
