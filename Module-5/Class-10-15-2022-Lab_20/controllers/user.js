const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const secret = require("../config/config").jwtSecret;
const { validationResult } = require('express-validator'); 


module.exports = {
	register: {
		get: function (req, res) {
            let loggedIn = req.loggedIn;
			res.render("register",{loggedIn});
		},
		post: function (req, res) {
			let body = req.body;
			const errors = validationResult(req);
			console.log(body)
			if(!errors.isEmpty()){
				console.log(errors)
				return res.json(errors);
			} 
			//#1 validation
			if (body.repeatPassword != body.password) {
				return res.json({
					errors:[
						{
							value: `${body.repeatPassword}`,
							msg: 'Passwords must match',
							param: 'repeatPassword'
						}
					]
					
				});
			}
			//#2 check if the username is already used
			User.find({ username: body.username })
				.lean()
				.then((user) => {
					//console.log(user);
					if (user.length != 0) {
						console.log("User Already exists");
						return res.json({
							errors:[
								{
									value: `${body.username}`,
									msg: 'Username alreay exists',
									param: 'username'
								}
							] 
						});	
					}
					//#3 encrypt the password and create the user
					bcrypt.genSalt(9, (err, salt) => {
						bcrypt.hash(body.password, salt, (err, hash) => {
							let username = body.username;
							let password = hash;
							new User({
								username,
								password,
							})
								.save()
								.then((result) => {
									//console.log(result._id);
									res.status(302).redirect("/user/login");
								});
						});
					});
				});
		},
	},
	login: {
		get: function (req, res) {
            let loggedIn = req.loggedIn;
			res.render("login",{loggedIn});
		},
		post: function (req, res) {
			let loggedIn = req.loggedIn;
			let body = req.body;
            //console.log(body);
            let username = body.username;
            let password = body.password;
			
			//#2 find the user
			User.findOne({ username })
				.lean()
				.then((user) => {
					//console.log(user);
					if (user === null) {
						context = {
							loggedIn,
							username:body.username,
							password:body.password,
							error:"No user with that username, if you're new please register"
						}
						return res.render("login",context);
					}
					let _id = user._id;
					let hash = user.password;
                    console.log(hash);
					//#3 verify the password
					bcrypt.compare(password, hash, (err, result) => {
                        if(err){
                            return console.log(err);
                        }
						//console.log(result); // true
                        if(!result){
							context = {
								loggedIn,
								username:body.username,
								password:body.password,
								error:"bad password, please try again"
							}
							return res.render("login",context);
                        }
						//TODO: set up the JWT and put it into a cookie
						const payload = { 
                            _id, 
                            username
                         };
						const options = { expiresIn: "2d" };
						const token = jwt.sign(payload, secret, options);
                        //console.log(token);
                        res.cookie("user",token);
                        res.redirect("/");
					});
				});
		},
	},
	logout: {
		get: function (req, res) {
            res.clearCookie("user");
			res.redirect("/");
		},
	},
};
