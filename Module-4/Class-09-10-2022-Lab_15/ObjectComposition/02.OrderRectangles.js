function main(twoDArray){
    let createRect = (width,height)=>{
        return {
            width,
            height,
            area:function(){
                return this.width * this.height;
            },
            compareTo:function(other){
                return this.area() - other.area();
            }
        };
    };

    let rectArray = [];

    for(let [width,height] of twoDArray){
        let rect = createRect(width,height);
        rectArray.push(rect);
    }

    let sortedArray = rectArray.sort((a,b)=>{
        let areaResult = b.compareTo(a);

        if(areaResult != 0){
            return areaResult;
        }else{
            return b.width - a.width;
        }
    });

    console.log(sortedArray);
}

main([
    [10,5],
    [5,12]
])