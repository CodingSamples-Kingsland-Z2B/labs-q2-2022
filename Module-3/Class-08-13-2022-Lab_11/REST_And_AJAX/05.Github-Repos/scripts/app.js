function loadRepos() {
	let usernameEl = document.getElementById("username");
	let repos = document.getElementById("repos");

	let username = usernameEl.value;
	if(username == ""){
		repos.innerHTML = '<li>Add a valid Username</li>';
	}else{
		url = `https://api.github.com/users/${username}/repos`;
		fetch(url)
		.then(resp =>resp.json())
		.then(data =>{
			if(data.message!= undefined){
				repos.innerHTML = "<li>"+data.message+"</li>";
			}else{
				repos.innerHTML ="";
				for(let repo of data){
					let li = document.createElement("li");
					let a =  document.createElement("a");
					a.setAttribute("href", repo.html_url);
					a.innerText = repo.full_name;
					li.append(a);
					repos.append(li);
				}
			}
		})
		.catch(err=> console.log(err));
	}
}

