class Cat{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.meow = function(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        };
    }
}

function main(arrayOfStrings){
    let cats = [];
    for(let catString of arrayOfStrings){
        let [name, age] = catString.split(" ");
        age = Number(age);
        cats.push(new Cat(name,age));
    }
    //normally there's something to do here
    for(let cat of cats){
        cat.meow();
    }
}

main(['Mellow 2', 'Tom 5']);
