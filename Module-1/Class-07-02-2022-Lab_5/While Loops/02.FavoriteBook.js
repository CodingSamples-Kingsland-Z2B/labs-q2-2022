function main(favoriteBook, listOfBooks) {

    let currentBook="";
    while(currentBook != undefined){
        currentBook = listOfBooks.shift();

        if(currentBook != favoriteBook){
            console.log(`Invalid book: ${currentBook}`);
        }else{
            console.log(`Book found!`);
            break;
        }

    }


}

main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"]);
