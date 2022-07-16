function main(item,quantity){
    console.log(orderPrice(item,quantity).toFixed(2));
}

function orderPrice(item,num){
    let total = 0;
    switch(item){
        case 'coffee':
            total = 1.50* num;
            return total;
        case 'coke':
            total = 1.40* num;
            return total;
        case 'water':
            total = 1.00* num;
            return total;
        case 'snacks':
            total = 2.00* num;
            return total;
    }
}
main("coffee", 2);