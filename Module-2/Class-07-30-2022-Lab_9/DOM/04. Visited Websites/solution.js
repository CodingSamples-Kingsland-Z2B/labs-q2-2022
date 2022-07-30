function solve() {
    let links = document.getElementsByClassName("link-1");

    for(let link of links){

      link.addEventListener("click", function(){
        let p = link.lastElementChild;
        let text = p.innerHTML;
        let textArray= text.split(" ");
        textArray[1] = Number(textArray[1])+1;
        text = textArray.join(" ");
        p.innerHTML = text;
      });
    }
}