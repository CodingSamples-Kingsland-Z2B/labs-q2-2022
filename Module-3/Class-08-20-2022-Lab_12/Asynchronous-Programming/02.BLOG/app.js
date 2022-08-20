function attachEvents() {
	let loadButton = document.getElementById("btnLoadPosts");
	loadButton.addEventListener("click", function () {
		let url = "https://blog-apps-c12bf.firebaseio.com/posts.json";
		fetch(url)
			.then((res) => res.json())
			.then((body) => {
				document.getElementById("posts").innerHTML = "";
				for (let key in body) {
					let option = document.createElement("option");
					option.innerText = body[key].title;
					option.setAttribute("value", key);
					document.getElementById("posts").append(option);
				}
			});
	});

	document
		.getElementById("btnViewPost")
		.addEventListener("click", function () {
			let posts = document.getElementById("posts");
			console.log(posts.value);
			if (posts.value != "") {
				let url = `https://blog-apps-c12bf.firebaseio.com/posts/${posts.value}.json`;
				fetch(url)
					.then((res) => res.json())
					.then((body) => {
						document.getElementById("post-title").innerText = body.title;
                        document.getElementById("post-body").innerText = body.body;
                        document.getElementById("post-comments").innerHTML="";
						for (let comment of body.comments) {
                            //console.log(comment);
							let li = document.createElement("li");
							li.innerText = comment.text;
                            li.setAttribute("id",comment.postID);
							
							document.getElementById("post-comments").append(li);
						}
					});
			}
		});
}

attachEvents();
