function area() {
	return this.x * this.y;
}

function vol() {
	return this.x * this.y * this.z;
}

function main(area,vol,input){
    let inputArray = JSON.parse(input);
    
    let outputArray = inputArray.map(coordinates => {
        let currArea = area.call(coordinates);
        let currVolume = vol.call(coordinates);
        return {
            area:currArea,
            volume: currVolume
        };

    });

    console.log(outputArray);

}

main(area,vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},    {"x":"5","y":"2","z":"10"}]');