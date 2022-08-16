function validate() {
	//get email input
	let emailEl = document.getElementById("email");
	//regex
	const regex = /[a-z]+\@[a-z]+\.[a-z]{2,3}\b/;
	//  change -- might work
	emailEl.addEventListener("change", function () {
    let potentialEmail = emailEl.value; 
    if(regex.test(potentialEmail)){
      if (emailEl.classList.contains("error")){
        emailEl.classList.remove("error");
      } 
    } else{
      emailEl.classList.add("error");
    }
  });
}
