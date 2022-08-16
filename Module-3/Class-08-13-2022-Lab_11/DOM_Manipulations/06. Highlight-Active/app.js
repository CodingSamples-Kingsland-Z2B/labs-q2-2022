function focus() {
	let inputs = document.getElementsByTagName("input");

	for (let i = 0; i < inputs.length; i++) {
		let currentInput = inputs[i];
		currentInput.addEventListener("click", function (event) {
			let parentDiv = currentInput.parentNode;
			if (!parentDiv.classList.contains("focused")) {
				parentDiv.classList.add("focused");
			}
		});
		// blur event
		// input blur
		currentInput.addEventListener("blur", function (event) {
			let parentDiv = currentInput.parentNode;

			if (parentDiv.classList.contains("focused")) {
				parentDiv.classList.remove("focused");
			}
		});
	}
}
