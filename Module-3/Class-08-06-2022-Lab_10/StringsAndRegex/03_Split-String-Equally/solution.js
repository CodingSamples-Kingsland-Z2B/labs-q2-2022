function solve() {
	//TODO...
	//modulus %
	/* 
        Write a function that takes two parameters as an input.
        ● The first parameter will be of type string
        ● The second parameter will always be a positive integer, bigger than 0
        
        Your task is to split the string equally by the number you have received, separated by space. However, if the string cannot be split into equal parts, fill the last sequence until its length is equal to the second parameter, starting from the beginning of the string.
        
        Input                   Output
        "RandomInput1234", 2    Ra nd om In pu t1 23 4R

        "Test", 8               TestTest

        "JavaScript", 14        JavaScriptJava
        
        2 cases 
        1 the strins is longer than the output string 
        2 the string is shorter than the ouput string
    */
	//step 1 get elements
	let textEl = document.getElementById("text");
	let numEl = document.getElementById("number");
    let resultEl = document.getElementById("result");

	//todo: later erase elements from dom
    let text = textEl.value;
    let number = Number(numEl.value);
    //console.log(text,number);
    
    //option 1 string.length > cut up length
    //"RandomInput1234 ", 2    Ra nd om In pu t1 23 4R
    let outputArray = [];
    //for(loop through the string step by the cut number)
        //for(loop the curent index then by the cut numeber)
    for(let i=0;i<text.length;i+=number){
        let subString = "";

        for(let j=i;j<i+number;j++){
            console.log(i,j);
            //console.log(subString);
           subString += text[j%text.length];
           //9%10 ==> 9
        }
        outputArray.push(subString);
    }
    console.log(outputArray);
    resultEl.innerHTML = outputArray.join(" ");
}

///  1 9/10