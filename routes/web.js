"use strict";

module.exports = (route) => {
	route.get("/", (req, res) => {
		res.send("hello world");
	});
};
