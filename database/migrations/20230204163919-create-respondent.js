"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface
			.createTable("respondents", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.BIGINT,
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				age: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				occupation_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "occupations",
						key: "id",
					},
					onDelete: "cascade",
					onUpdate: "cascade",
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
			.then(() =>
				queryInterface.addIndex("respondents", [
					"id",
					"name",
					"email",
					"occupation_id",
				])
			);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("respondents");
	},
};
