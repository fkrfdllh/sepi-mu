"use strict";

require("express-group-routes");

const syncDataController = require("../app/controllers/api/syncDataController");
const calculateController = require("../app/controllers/api/calculateController");

module.exports = (route) => {
	route.group("/api", (route) => {
		route.post("/sync-data", (req, res) => {
			syncDataController(req, res);
		});

		route.get("/calculate", (req, res) => {
			calculateController(req, res);
		});
	});
};
