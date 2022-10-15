const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

module.exports = {
		get: function (req, res) {
			let cubeId = req.params.id;
			let loggedIn = req.loggedIn;
			
			console.log(cubeId);
			Cube.findById(cubeId).lean().then(cube=>{
				
				let context = {
					loggedIn,
					...cube
				}
				res.render("editCube.hbs",context);
			});
		},
		post: function (req, res) {
			let cubeId = req.params.id;
			let body = req.body;
			Cube.findByIdAndUpdate(cubeId, {
				$set: { ...body }
			}).then(result=>{
				console.log(result);
				res.redirect(`/details/${cubeId}`);
			});
        }
};
