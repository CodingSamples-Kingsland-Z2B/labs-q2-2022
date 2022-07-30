/* 

After every click, the current paragraph font size should be changed to the current font size multiplied by 2. Also,
the color of that paragraph should change, depending on the previous color.
Example:
• If we click once, the color should be changed to blue and the font size should be 2 (First initial size)
• If we click twice, the color should be changed to green and the font size should be 4 (2 * 2)
• If we click three times, the current color of that paragraph should be changed to red and the font size
should be 8 (4 * 2)
• If our paragraph already has a red color, on the next click, the color should turn to blue. Just loop throw
these three colors (blue, green, red) again and again and again... while you are clicking on that button.

*/
function growingWord() {
  //need form page
  //p tag with the word
  let text = document.getElementById("exercise").lastElementChild;
  let regex =/\d+/;

  console.log(text.style.color );
  //this will only happen when the text hasnt been clicked yet
  if(text.style.color == ""){
    text.style.color = "blue";
    text.style.fontSize = "2px";
  }else if(text.style.color == "blue"){
    text.style.color = "green";
    let currentSize = text.style.fontSize.match(regex)[0];
    console.log("currentSize: "+currentSize);
    currentSize = Number(currentSize);
    console.log("currentSize: "+currentSize);

    text.style.fontSize = (currentSize*2)+ "px";
  }else if(text.style.color == "green"){
    text.style.color = "red";
    let currentSize = text.style.fontSize.match(regex)[0];
    console.log("currentSize: "+currentSize);
    currentSize = Number(currentSize);
    console.log("currentSize: "+currentSize);

    text.style.fontSize = (currentSize*2)+ "px";
  }else if(text.style.color == "red"){
    text.style.color = "blue";
    let currentSize = text.style.fontSize.match(regex)[0];
    console.log("currentSize: "+currentSize);
    currentSize = Number(currentSize);
    console.log("currentSize: "+currentSize);

    text.style.fontSize = (currentSize*2)+ "px";
  }
}