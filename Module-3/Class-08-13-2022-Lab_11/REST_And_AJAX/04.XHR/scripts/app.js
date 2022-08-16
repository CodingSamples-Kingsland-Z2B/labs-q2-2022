function loadRepos() {
	
		let url = "https://api.github.com/users/CodingSamples-Kingsland-Z2B/repos";
		const httpRequest = new XMLHttpRequest();
		httpRequest.addEventListener("readystatechange", function () {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				document.getElementById("res").textContent =
					httpRequest.responseText;
			}
		});
		httpRequest.open("GET", url);
		httpRequest.send();

}
