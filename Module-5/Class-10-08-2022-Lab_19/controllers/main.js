
const Cube = require("../models/Cube");

module.exports = function (req, res) {
	Cube.find({}).lean().then((allCubes) => {
		//console.log(allCubes);
		let context = {
			cubes:allCubes,
		};

		res.render("index.hbs", context);
	});
};
