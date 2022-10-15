const db = require("../config/database");
const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

module.exports = {
	cube: {
		get: function (req, res) {
			let loggedIn = req.loggedIn;
			res.render("create.hbs",{loggedIn});
		},
		post: function (req, res) {
			let body = req.body;
			let user = req.user;
			//console.log(body,user);
			let newCube = {
				...req.body,
				creatorId:user.id
			}
			new Cube(newCube).save().then((result) => {
				console.log(result);
				res.redirect("/");
			});
		},
	},
	accessory: {
		get: function (req, res) {
			let loggedIn = req.loggedIn;
			res.render("createAccessory",{loggedIn});
		},
		post: function (req, res) {
            //https://images-na.ssl-images-amazon.com/images/I/61J8UP8pySL._SX425_.jpg
			let body = req.body;
			console.log(body);
			new Accessory(body).save().then((result) => {
				console.log(result);
				res.redirect("/");
			});
		},
	},
};
