function solve() {
	document.getElementById("dropdown").addEventListener("click", function () {
		let ul = document.getElementById("dropdown-ul");
		if (ul.style.display == "block") {
			ul.style.display = "";
			let box = document.getElementById("box");
			box.style.backgroundColor = "";
			box.style.color = "";
		} else {
			ul.style.display = "block";
		}
	});

	document
		.getElementById("dropdown-ul")
		.addEventListener("click", function (event) {
			let curr = event.target;
			console.log(curr.innerText);
			let box = document.getElementById("box");
			box.style.backgroundColor = curr.innerText;
			box.style.color = "black";
		});
}
