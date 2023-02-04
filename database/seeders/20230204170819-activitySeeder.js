"use strict";

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

		return await queryInterface.bulkInsert("activities", [
			{
				name: "belajar",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "berbelanja",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "berkumpul bersama keluarga",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "berkumpul bersama teman",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "bermain alat musik",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "bermain gim",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "bersih-bersih",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "browsing internet (termasuk browsing media sosial)",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "jalan-jalan",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "makan",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "memasak",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "membaca",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "mendengarkan musik",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "mendengarkan siaran (seperti podcast, ceramah, dan sejenisnya)",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "menonton",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "menulis",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "menyanyi",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "olahraga",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "tidur",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */

		return await queryInterface.bulkDelete("activities", null, {});
	},
};
