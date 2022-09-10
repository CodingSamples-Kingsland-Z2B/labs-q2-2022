function main() {
	function Spy(target, method){
        let originalFunction = target[method];

    let output= {
        count:0
    };
    //console["log"] == console.log
    target[method]= function(){
        output.count++;
        
        return originalFunction.apply(this,arguments);
    };

    return output;
    }
    return Spy;
}

let obj = {
	method: () => "invoked",
};
let spy = main(obj, "method");
obj.method();
obj.method();
obj.method();
console.log(spy); // { count: 3 }
console.log("________"); //

let spy2 = main(console, "log");
console.log(spy2); // { count: 1 }
console.log(spy2); // { count: 2 }
console.log(spy2); // { count: 3 }
