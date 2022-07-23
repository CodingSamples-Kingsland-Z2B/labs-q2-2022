function main(word,text){
    while(text.includes(word)){
        text = text.replace(word,"");
    }
    console.log(text);
}

main("ice","kicegiciceeb");