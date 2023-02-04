"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface
			.createTable("occupations", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					allowNull: false,
					type: Sequelize.STRING,
				},
				created_at: {
					allowNull: true,
					type: Sequelize.DATE,
				},
				updated_at: {
					allowNull: true,
					type: Sequelize.DATE,
				},
			})
			.then(() => queryInterface.addIndex("occupations", ["id", "name"]));
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("occupations");
	},
};
