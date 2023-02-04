"use strict";
/** @type {import('sequelize-cli').Migrationhabits}, [
 * 'id', 'respondent_id', 'activity_id'] */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface
			.createTable("habits", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.BIGINT,
				},
				respondent_id: {
					type: Sequelize.BIGINT,
					allowNull: false,
					references: {
						model: "respondents",
						key: "id",
					},
					onDelete: "cascade",
					onUpdate: "cascade",
				},
				activity_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "activities",
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
				queryInterface.addIndex("habits", [
					"id",
					"respondent_id",
					"activity_id",
				])
			);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("habits");
	},
};
