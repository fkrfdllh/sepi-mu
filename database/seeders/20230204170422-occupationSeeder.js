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

		return await queryInterface.bulkInsert("occupations", [
			{
				name: "pelajar",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "mahasiswa",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "pegawai swasta",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "pegawai negeri",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "wirausaha",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "tidak bekerja",
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

		return await queryInterface.bulkDelete("occupations", null, {});
	},
};
