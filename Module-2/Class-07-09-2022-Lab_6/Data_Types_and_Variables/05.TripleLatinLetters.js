
function main(numofletters){
    let startLet = "a".charCodeAt(0);

    for(let first=0;first<numofletters;first++){
        for(let second=0;second<numofletters;second++){
            for(let third=0;third<numofletters;third++){
                let firstLet = String.fromCharCode(first+startLet);
                let secondLet = String.fromCharCode(second+startLet);
                let thirdLet = String.fromCharCode(third+startLet);
                console.log(`${firstLet}${secondLet}${thirdLet}`);
            } 
        }   
    }
}

main(3);