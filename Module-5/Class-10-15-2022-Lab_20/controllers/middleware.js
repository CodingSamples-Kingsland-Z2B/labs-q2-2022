const Cube = require("../models/Cube");
const jwt = require("jsonwebtoken");
const secret = require("../config/config").jwtSecret;
module.exports = {
	loginToken: (req, res, next) => {
		let userToken = req.cookies.user;
		//console.log(userToken);
		if (userToken === undefined) {
			req.loggedIn = false;
			req.user = {};
		} else {
			let data = jwt.verify(userToken, secret);
			//console.log(data);
			let expDate = new Date(data.exp * 1000);
			let date = new Date();
			if (expDate < date) {
				req.loggedIn = false;
				req.user = {};
			} else {
				req.loggedIn = true;
				req.user = {
					id: data._id,
					username: data.username,
				};
			}
		}
		next();
	},
	routeValidation: (req, res, next) => {
		//console.log(req.path);
		if (req.loggedIn) {
			if (req.path === "/user/login" || req.path === "/user/register") {
				res.redirect("/");
			} else {
				if(req.path.startsWith("/edit/cube") ||
                req.path.startsWith("/delete/cube")
				||
                req.path.startsWith("/attach/accessory")){
					
					let cubeId = req.path.split("/")[3];
					console.log(cubeId);
					let userId = req.user.id;
					Cube.findById(cubeId).lean().then(cube=>{
						console.log(cube);
						let matchCreator = (cube.creatorId.toString() === userId)?true:false;
						if(matchCreator){
							next();
						}else{
							res.redirect(`/details/${cubeId}`);
						}
					});
				}else{
					next();
				}
			}
		} else {
			if (
				req.path === "/create/cube" ||
				req.path === "/create/accessory" ||
                req.path.startsWith("/edit/cube") ||
                req.path.startsWith("/delete/cube") ||
                req.path.startsWith("/attach/accessory") 
			) {
                res.redirect("/user/login");
			}else{
                next();
            }
		}
	},
};
