"use strict";

require("express-group-routes");

const syncDataController = require("../app/controllers/api/syncDataController");

module.exports = (route) => {
	route.group("/api", (route) => {
		route.post("/sync-data", (req, res) => {
			syncDataController(req, res);
		});
	});
};
