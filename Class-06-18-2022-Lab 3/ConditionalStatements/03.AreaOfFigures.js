function main(type ,size){
    if(type === "square"){
        
        let area = size * size;
        console.log(area.toFixed(2));

    } else if(type === "circle"){

        let area = Math.PI * size * size;
        console.log(area.toFixed(2));

    }
    
}


main("square",5);
