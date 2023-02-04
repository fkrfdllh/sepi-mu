"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface
			.createTable("activities", {
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
			.then(() => queryInterface.addIndex("activities", ["id", "name"]));
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("activities");
	},
};
