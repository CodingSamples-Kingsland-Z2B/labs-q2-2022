/* 
Write a function that receives an array of strings as an input.
Your task is to extract all valid user data from each of the strings. Valid data consists of:

● It will always start with a name. A valid name will always consist of first name and surname separated by space. Note that the first name will always start with an uppercase letter and can be followed by lowercase ones (but not necessarily). The surname will always start with a capital letter, followed by one or more lowercase ones.

● The name will be followed by a phone number. A valid phone number will be in the following format: +359 2 569 789, +359 3 759 846, 359-5-789-359. Note that it will always start with +359 and the digits can be separated by either spaces or dashes but NOT both.

● The phone number will be followed by an email. A valid email can consist of only lowercase Latin letters or digits, followed by @ and one or more lowercase Latin letters. There will always be a dot
before the domain, which can consist of at least two lowercase Latin letters BUT no more than three.

Note that the data will be always separated by a single space.

In case part of the above described data is missing or is invalid, print "Invalid data" on the console. Otherwise, print each of the extracted information on a new line in the following format:
    Name: {extractеdName}
    Phone Number: {extractedPhoneNumber}
    Email: {extractedEmail} */

function solve() {

    //regex
    let regex = /(?<name>[A-Z][a-z]* [A-Z][a-z]*) (?<phone>\+359([ -])\d(\3)\d{3}(\3)\d{3}) (?<email>[a-z]+\@[a-z]+\.[a-z]{2,3})/;

    //get elements from page
    let JSONArrayEl = document.getElementById("arr");
    let resultEl = document.getElementById("result");

    //extract array from json string
    let dataArray = JSON.parse(JSONArrayEl.value);
    resultEl.innerHTML ="<br/><br/>";
    //loop through array, test for a match
    for(let data of dataArray){
        
        //if match print the formatted output
        let output= "";
        if(regex.test(data)){
            let match = regex.exec(data);
            console.log(match);
            output += `Name: ${match.groups.name}<br/>`;
            output += `Phone Number: ${match.groups.phone}<br/>`;
            output += `Email: ${match.groups.email}`;
        }else{ 
            //if no match print "Invalid data"
            output += "Invalid data";
        }
        resultEl.innerHTML += output + "<br/>";
        //put "- - -" between each line
        resultEl.innerHTML += "- - -<br/>";
    }
    
   
   
}