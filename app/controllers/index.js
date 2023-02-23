"use strict";

const Models = require("../models");

module.exports = async (req, res) => {
	const activities = await Models.Activity.findAll();

	res.render("index", { activities: activities });
};
