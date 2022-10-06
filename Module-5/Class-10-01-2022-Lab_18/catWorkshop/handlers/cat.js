const url = require("url");
const fs = require("fs");
const path = require("path");
// const qs = require("querystring"); cant use -- depricated
const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");

module.exports = (req, res) => {
	const pathname = url.parse(req.url).pathname;
	// console.log(pathname);
	if (pathname === "/cats/add-cat" && req.method === "GET") {
		//add cat
		let filepath = path.normalize(
			path.join(__dirname, "../views/addCat.html")
		);
		//   console.log(filepath);
		fs.readFile(filepath, "utf8", (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(404, {
					"Content-Type": "text/plain",
				});
				res.write(404);
				res.end();
				return;
			}
			let catBreedPL = breeds.map(
				(breed) => `<option value="${breed}">${breed}</option>`
			);
			let templedData = data
				.toString()
				.replace("{{catBreeds}}", catBreedPL);
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.write(templedData);
			res.end();
			return;
		});
	} else if (pathname === "/cats/add-breed" && req.method === "GET") {
		//add breed
		let filepath = path.normalize(
			path.join(__dirname, "../views/addBreed.html")
		);
		//   console.log(filepath);
		fs.readFile(filepath, "utf8", (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(404, {
					"Content-Type": "text/plain",
				});
				res.write(404);
				res.end();
				return;
			}
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.write(data);
			res.end();
			return;
		});
	} else if (pathname === "/cats/add-cat" && req.method === "POST") {
		//add cat
		const form = formidable({ multiples: true });

		form.parse(req, (err, fields, files) => {
			if (err) {
				console.log(err);
				return;
			}
			//console.log(files);
			let oldPath = files.upload.filepath;
			console.log(oldPath);
			let newPath = path.normalize(
				path.join(
					__dirname,
					"../content/images/" + files.upload.originalFilename
				)
			);
			console.log(newPath);
			//TODO:when moving to produciton this should be a re-name;
			fs.copyFile(oldPath, newPath, (err) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("file upload successful");
			});

			fs.readFile("./data/cats.json", "utf8", (err, data) => {
				allCats = JSON.parse(data);
				console.log(allCats);
				let id =
					allCats.length > 0 ? allCats[allCats.length - 1].id + 1 : 0;
				allCats.push({
					id,
					...fields,
					image: files.upload.originalFilename,
				});
				console.log(allCats);
				let json = JSON.stringify(allCats);
				fs.writeFile("./data/cats.json", json, () => {
					console.log("update successful");
					res.writeHead(302, { location: "/" });
					res.end();
				});
			});
		});
	} else if (pathname === "/cats/add-breed" && req.method === "POST") {
		//add breed
		const form = formidable({ multiples: true });
		//TODO: make sure form isnt blank
		//TODO: dont add duplicates
		form.parse(req, (err, fields) => {
			let body = fields;
			//console.log(body);
			let BreedsDB = "./data/breeds.json";
			fs.readFile(BreedsDB, (err, data) => {
				if (err) {
					console.log(err);
					return;
				}

				let breeds = JSON.parse(data);
				breeds.push(body.breed);
				let json = JSON.stringify(breeds);
				fs.writeFile(BreedsDB, json, "utf-8", (err) => {
					if (err) {
						console.log(err);
						return;
					}
					console.log("Breen Upload Success!");
				});
				res.writeHead("302", { location: "/" });
				res.end();
			});
		});
	} else if (pathname.includes("/cats/edit") && req.method === "GET") {
		let filepath = path.normalize(
			path.join(__dirname, "../views/editCat.html")
		);
		//   console.log(filepath);
		fs.readFile(filepath, "utf8", (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(404, {
					"Content-Type": "text/plain",
				});
				res.write(404);
				res.end();
				return;
			}
			let catId = Number(pathname.split("/").pop());
			console.log(catId);

			let cat = cats[catId];
			let catBreedPL = breeds.map(
				(breed) => `<option value="${breed}">${breed}</option>`
			);
			let templedData = data
				.toString()
				.replace("{{catBreeds}}", catBreedPL);
			templedData = templedData.replace("{{id}}", cat.id);
			templedData = templedData.replace("{{name}}", cat.name);
			templedData = templedData.replace(
				"{{description}}",
				cat.description
			);
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.write(templedData);
			res.end();
			return;
		});
	} else if (pathname.includes("/cats/edit") && req.method === "POST") {
		//add cat
		//console.log(pathname);//
		const form = formidable({ multiples: true });

		form.parse(req, (err, fields, files) => {
			if (err) {
				console.log(err);
				return;
			}

			//console.log(files);
			let oldPath = files.upload.filepath;

			console.log(oldPath);
			let newPath = path.normalize(
				path.join(
					__dirname,
					"../content/images/" + files.upload.originalFilename
				)
			);
			console.log(newPath);
			//TODO:when moving to produciton this should be a re-name;
			fs.copyFile(oldPath, newPath, (err) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("file upload successful");
			});

			fs.readFile("./data/cats.json", "utf8", (err, data) => {
				allCats = JSON.parse(data);
				console.log(allCats);
				let catId = Number(pathname.split("/").pop());
				console.log(catId);
				allCats[catId] = {
					id: catId,
					...fields,
					image: files.upload.originalFilename,
				};
				console.log(allCats);
				let json = JSON.stringify(allCats);
				fs.writeFile("./data/cats.json", json, () => {
					console.log("update successful");
					res.writeHead(302, { location: "/" });
					res.end();
				});
			});
		});
	} else if (pathname.includes("/cats/remove") && req.method === "GET") {
		//console.log(pathname);

		let filepath = path.normalize(
			path.join(__dirname, "../views/catShelter.html")
		);
		//console.log(filepath);
		fs.readFile(filepath, "utf8", (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(404, {
					"Content-Type": "text/plain",
				});
				res.write(404);
				res.end();
				return;
			}
			let catId = Number(pathname.split("/").pop());
			//console.log(catId);

			let cat = cats[catId];
			//console.log(cat);
			let templedData = data.toString().replace("{{breed}}", cat.breed);
			templedData = templedData.replace("{{breed}}", cat.breed);
			templedData = templedData.replace("{{image}}", cat.image);
			templedData = templedData.replace("{{id}}", cat.id);
			templedData = templedData.replace("{{name}}", cat.name);
			templedData = templedData.replace("{{name}}", cat.name);
			templedData = templedData.replace(
				"{{description}}",
				cat.description
			);
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.write(templedData);
			res.end();
			return;
		});
	} else if (pathname.includes("/cats/remove") && req.method === "POST") {
		console.log(pathname); //
		const form = formidable({ multiples: true });

		fs.readFile("./data/cats.json", "utf8", (err, data) => {
			allCats = JSON.parse(data);
			//console.log(allCats);
			let catId = Number(pathname.split("/").pop());
            console.log(catId);
			allCats = allCats.filter((cat) => {
				return cat.id !== catId;
			});
			console.log(allCats);
			let json = JSON.stringify(allCats);
			fs.writeFile("./data/cats.json", json, () => {
				console.log("update successful");
				res.writeHead(302, { location: "/" });
				res.end();
			});
		});
	} else {
		return true;
	}
};
