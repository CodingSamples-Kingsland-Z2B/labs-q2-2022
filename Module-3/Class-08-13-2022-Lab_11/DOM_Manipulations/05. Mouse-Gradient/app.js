function attachGradientEvents() {
	//need
	//gradientBox
	let gradBox = document.getElementById("gradient-box");
	//result
	let result = document.getElementById("result");

	const sideInfo = gradBox.getBoundingClientRect();
	//left should be 8 right shoudl be 312
	//width of the element? right - left = 304 width
	const boxWidth = sideInfo.right - sideInfo.left;
	//mouseover mousemove
	gradBox.addEventListener("mousemove", function (event) {
		//console.log("RUN!");
        //to find the percentage = (mouse - left side)/ width
        //console.log(event);
		//mouse position????
        let mousePos = event.clientX;
        let percentage =((mousePos - sideInfo.left)/boxWidth) * 100;
        percentage = Math.floor(percentage);
        result.innerText = percentage +"%";
	});
    gradBox.addEventListener("mouseout", function (event) {
		result.innerText ="";
	});
}
