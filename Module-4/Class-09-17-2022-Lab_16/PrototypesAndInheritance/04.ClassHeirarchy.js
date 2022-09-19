function main(){
    class Figure{
        constructor(units = "cm"){
            this.units = units;
        }
        changeUnits(newUnit){
            this.units = newUnit;
        }
    }
    class Circle extends Figure{
        constructor(radius,units){
            super(units);
            this.radius = radius;
        }
        calcRadius(){
            if(this.units == "mm"){
                return this.radius *10;
            }else if(this.units == "m"){
                return this.radius/100;
            }else{
                return this.radius;
            }
        }
        get area(){
            let unitRadius = this.calcRadius();
            return Math.PI * unitRadius*unitRadius;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.calcRadius()}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width,height,units){
            super(units);
            this.width = width;
            this.height = height;
        }
        calcConversion(){
            if(this.units == "mm"){
                return 10;
            }else if(this.units == "m"){
                return 1/100;
            }else{
                return 1;
            }
        }
        get area(){
            let conversion = this.calcConversion();
            let width = this.width*conversion;
            let height = this.height * conversion;
            return  width * height;
        }
        toString(){
            let conversion = this.calcConversion();
            let width = this.width*conversion;
            let height = this.height * conversion;
            
            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let test = main()

let c = new test.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new test.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50