const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");

module.exports = (req, res) => {
	let pathname = url.parse(req.url).pathname;

	if (pathname === "/" && req.method === "GET") {
		//send the home page
		let filepath = path.normalize(
			path.join(__dirname, "../views/home/index.html")
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
			let catList = cats.map(
				(cat) => `
            <li>
                    <img src="${path.join(
						'./content/images/' + cat.image
					)}" alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
						<li class="btn edit"><a href="/cats/edit/${cat.id}">Change Info</a></li>
						<li class="btn delete"><a href="/cats/remove/${cat.id}">New Home</a></li>
					</ul>
                </li>`);
            let templatedData = data.toString().replace("{{cats}}",catList);
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.write(templatedData);
			res.end();
			return;
		});
	} else {
		return true;
	}
};
