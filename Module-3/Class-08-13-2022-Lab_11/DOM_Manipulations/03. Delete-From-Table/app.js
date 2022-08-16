function deleteByEmail() {
	let result = document.getElementById("result");
	let tbody = document.getElementById("customers").lastElementChild;
	//console.log(tbody);

	//get input element
	let emailEL = document.getElementsByTagName("input")[0];
	//get the value form the input and remove it from the page
	let email = emailEL.value;
	emailEL.value = "";
  let removed =false;

	let children = tbody.children;

	for (let i = 0; i < children.length; i++) {
		let tRow = children[i];
    let checkEmail = tRow.lastElementChild.textContent;
    //console.log(checkEmail);
		// check if the email (last child element) == input email
    if(email === checkEmail){
      //remove the row form the table
      tRow.remove();
      // stop looping
      removed = true;
      break;
    }
    //go to the next itteration of the loop
	}
  if(removed){
    result.textContent = "Deleted.";
  }else{
    result.textContent = "Error.";
  }

}
