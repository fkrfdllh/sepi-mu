"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface
			.createTable("desired_activities", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.BIGINT,
				},
				habit_id: {
					type: Sequelize.BIGINT,
					allowNull: false,
					references: {
						model: "habits",
					},
					onDelete: "cascade",
					onUpdate: "cascade",
				},
				activity_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "activities",
					},
					onDelete: "cascade",
					onUpdate: "cascade",
				},
				is_positive: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
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
				queryInterface.addIndex("desired_activities", [
					"id",
					"habit_id",
					"activity_id",
					"is_positive",
				])
			);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("desired_activities");
	},
};
