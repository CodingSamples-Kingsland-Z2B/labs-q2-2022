function main(arrayOfStrings) {
	//make object
	//i will structure it as below
	/*
    {
        product:{
            town:townName,
            price:item price
        },
        product2:{
            ...
        }
    } 
     */
	let productsLowestPrice = {};

	//loop through the array of strings
	for (let string of arrayOfStrings) {
		let [town, product, price] = string.split(" | ");
		if (productsLowestPrice[product] === undefined) {
			productsLowestPrice[product] = {
				town,
				price,
			};
		} else {
			if (productsLowestPrice[product].price > price) {
				productsLowestPrice[product] = {
					town,
					price,
				};
			}
		}
	}

    for(let product in productsLowestPrice){
        console.log(`${product} -> ${productsLowestPrice[product].price} (${productsLowestPrice[product].town})`)
    }
}
main([
	"Sample Town | Sample Product | 1000",
	"Sample Town | Orange | 2",
	"Sample Town | Peach | 1",
	"Sydney | Orange | 3",
	"Sydney | Peach | 2",
	"New York | Sample Product | 1000.1",
	"New York | Burger | 10",
]);
