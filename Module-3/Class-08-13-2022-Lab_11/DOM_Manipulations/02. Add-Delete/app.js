function addItem() {
    //get form page
  let ul = document.getElementById("items");
  let textEl = document.getElementById("newText");
//get out the value and empty the element
  let text = textEl.value;
  textEl.value = "";
  //MAKE AN LI
  let li = document.createElement("li");
  li.textContent = text + " ";
  // create the A tage to delete the LI
  let a = document.createElement("a");
  a.textContent = "[Delete]";
  //make it a link
  a.setAttribute("href","#");
  //add click even to delete the li.
  a.addEventListener("click",function(event){
    li.remove();
  });
  //add the a tag to the li
  li.append(a);

  //add the li to the page
  console.log(li);
  ul.append(li);
}