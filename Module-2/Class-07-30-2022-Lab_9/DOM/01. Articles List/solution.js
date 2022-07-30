function createArticle() {
	//get title
	let inputTitle = document.getElementById("createTitle");
	//get content
	let inputContent = document.getElementById("createContent");
	//get article section
	let articleSection = document.getElementById("articles");
	
	//h3 for title put in the value
	let h3 = document.createElement("h3");
	h3.innerHTML = inputTitle.value;
	inputTitle.value = "";
	// p tag for contentent, put in the value
	let p = document.createElement("p");
	p.innerHTML = inputContent.value;
	inputContent.value = "";
	//make article tag, put in h3 and p
	let article = document.createElement("article");
	article.appendChild(h3);
	article.append(p);
	//attach article to articles id
	articleSection.append(article);
}