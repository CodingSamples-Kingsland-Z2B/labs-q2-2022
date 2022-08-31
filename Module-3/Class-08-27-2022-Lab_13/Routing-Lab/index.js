//info variables
let url = undefined;
let navArea = document.getElementById("nav");
let container = document.getElementById("container");

let nav = Handlebars.templates.header;
navArea.innerHTML = nav();

//server functions
function changePath(path) {
	let currentPath = window.location.href;
	window.location.href = currentPath.replace(/#(.*)$/, "") + "#" + path;
	// www.google.com/
}

function getCurrent() {
	return window.location.hash;
	// #profile
}
function listen() {
	let current = getCurrent();

	if (current !== url) {
		if (current == "" || current == "#home") {
			home();
		} else if (current.includes("#furniture")) {
			//#furniture -> #furniture / :id
			let id = current.split("/")[1];
			furniture(id);
		} else if (current == "#profile") {
			profile();
		} else if (current == "#create") {
			create();
		} else if (current.includes("#delete")) {
			let id = current.split("/")[1];
			remove(id);
			changePath("profile");
		}
		url = current;
	}
	setTimeout(listen, 200);
}

function home() {
	let index = Handlebars.templates.index;
	let context = {
		furniture: db,
	};
	container.innerHTML = index(context);
}

function furniture(id) {
	let item = db.find((item) => item.id == id);
	let furniture = Handlebars.templates.furniture;
	let context = item;
	container.innerHTML = furniture(context);
}

function profile() {
	let userFurniture = db.filter((item) => item.user == "admin");
	let profile = Handlebars.templates.profile;
	context = {
		furniture: userFurniture,
	};
	container.innerHTML = profile(context);
}
function create() {
	let create = Handlebars.templates.create;
	container.innerHTML = create();
}

function remove(id) {
	console.log(id);

	for (let index in db) {
		if (db[index].id == id) {
			db.splice(index, 1);
			break;
		}
	}
}

function insert(){
    let make = document.getElementById("new-make").value;
    let model = document.getElementById("new-model").value;
    let year = document.getElementById("new-year").value;
    let description = document.getElementById("new-description").value;
    let price = document.getElementById("new-price").value;
    let imageUrl = document.getElementById("new-image").value;
    let material = document.getElementById("new-material").value;

    let id = db[db.length-1].id +1;
    let user = "admin";

    let newItem = {
        make,
        model,
        year,
        description,
        price,
        imageUrl,
        material,
        id,
        user
    };
    console.log(newItem);
    db.push(newItem);
    console.log(db);
    //changePath("profile");
}
//run functions

listen();
