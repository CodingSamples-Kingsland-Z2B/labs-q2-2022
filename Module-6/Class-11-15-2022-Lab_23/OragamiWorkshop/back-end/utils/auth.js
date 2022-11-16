const jwt = require("./jwt");
const config = require("../config/config");
const models = require("../models");

module.exports = (redirectAuthenticated = true) => {
	return function (req, res, next) {
		//console.log(req.headers.authorization);
		let token = "";
		if (req.headers.authorization) {
			token = req.headers.authorization.split(" ")[1];
		} else if (req.cookies[config.authCookieName]) {
			token = req.cookies[config.authCookieName];
		}
		//console.log(token);
		Promise.all([
			jwt.verifyToken(token),
			models.TokenBlacklist.findOne({ token }),
		])
			.then(([data, blacklistToken]) => {
				if (blacklistToken) {
					return Promise.reject(new Error("blacklisted token"));
				}

				models.User.findById(data.id).then((user) => {
					req.user = user;
					next();
				});
			})
			.catch((err) => {
				if (!redirectAuthenticated) {
					next();
					return;
				}

				if (
					[
						"token expired",
						"blacklisted token",
						"jwt must be provided",
					].includes(err.message)
				) {
					console.log(err.message);
					res.status(401).send("UNAUTHORIZED!");
					return;
				}

				next(err);
			});
	};
};
