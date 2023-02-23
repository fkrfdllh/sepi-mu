"use strict";

const indexController = require("../app/controllers/index");

module.exports = (route) => {
	route.get("/", (req, res) => {
		indexController(req, res);
	});
};
