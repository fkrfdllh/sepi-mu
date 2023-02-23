"use strict";

const models = require("../../app/models");

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const respondents = async () => {
	return await models.Respondent.findAll({
		order: [["id", "ASC"]],
		offset: 18,
	});
};

/** @type {import('sequelize-cli').Migration} */
(
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

			let habits = [];

			Array.from(await respondents()).forEach((respondent) => {
				habits.push({
					respondent_id: respondent.id,
					activity_id: randomNumber(1, 19),
					created_at: new Date(),
					updated_at: new Date(),
				});
			});

			return await queryInterface.bulkInsert("habits", habits);
		},

		async down(queryInterface, Sequelize) {
			/**
			 * Add commands to revert seed here.
			 *
			 * Example:
			 * await queryInterface.bulkDelete('People', null, {});
			 */
		},
	}
);
