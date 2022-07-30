function main(inputString){
 let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

 let matches = inputString.match(regex);

 console.log(matches.join(" "));
}

main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov');


