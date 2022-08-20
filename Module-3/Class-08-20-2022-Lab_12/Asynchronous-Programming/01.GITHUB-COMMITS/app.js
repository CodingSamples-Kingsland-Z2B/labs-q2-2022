function loadCommits() {
    // Try it with Fetch API
    let repo = document.getElementById("repo").value;
    let username = document.getElementById("username").value;

    new Promise(function(resolve,reject){
        fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res=>{
            if(res.status === 404){
                return reject("404 (Not found)");
            }
            return res.json();
        }).then(body=>{
            let commitInfo = body.map(commitObj =>{
                return {
                    author : commitObj.commit.author.name,
                    message: commitObj.commit.message
                }
            });
            console.log(commitInfo);
            resolve(commitInfo);
        })
    })
    .then(commits=>{
        document.getElementById("commits").innerHTML="";
        for(let commit of commits){
            let li = document.createElement("li");
            li.innerText = `${commit.author}: ${commit.message}`;
            document.getElementById("commits").append(li);
        }
        
    })
    .catch(error=>{
        document.getElementById("commits").innerHTML="";
        let li = document.createElement("li");
        li.innerText = `Error: ${error}`;
        document.getElementById("commits").append(li);
    });
}