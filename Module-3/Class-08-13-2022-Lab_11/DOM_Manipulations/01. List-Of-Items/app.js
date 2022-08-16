function addItem() {
  //get form page
  let ul = document.getElementById("items");
  let textEl = document.getElementById("newItemText");
//get out the value and empty the element
  let text = textEl.value;
  textEl.value = "";
  //MAKE AN LI
  let li = document.createElement("li");
  li.textContent = text;
  //add the li to the page
  console.log(li);
  ul.append(li);
}
