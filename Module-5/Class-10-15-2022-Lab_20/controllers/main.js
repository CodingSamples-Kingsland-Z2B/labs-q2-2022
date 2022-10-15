
const Cube = require("../models/Cube");

module.exports = function (req, res) {
	//console.log(req.loggedIn,req.user);

	Cube.find({}).lean().then((allCubes) => {
		//console.log(allCubes);
		let context = {
			cubes:allCubes,
			loggedIn:req.loggedIn
		};

		res.render("index.hbs", context);
	});
};
