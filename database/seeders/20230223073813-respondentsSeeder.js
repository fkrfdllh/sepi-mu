"use strict";

const { faker } = require("@faker-js/faker");

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
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

		let respondents = [];

		Array.from({ length: 1000 }).forEach((val, i) => {
			respondents.push({
				name: faker.name.fullName(),
				email: faker.internet.email(),
				age: randomNumber(16, 30),
				occupation_id: randomNumber(1, 6),
				created_at: new Date(),
				updated_at: new Date(),
			});
		});

		return await queryInterface.bulkInsert("respondents", respondents);
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
