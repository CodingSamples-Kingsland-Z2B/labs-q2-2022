function main(commandsArray){
    let factory= {
        cars:{},
        create:function(name){
            this.cars[name] ={};
        },
        inherits:function(name,parentName){
            this.cars[name] =Object.create(this.cars[parentName]);
        },
        set:function(name,key,value){
            this.cars[name][key] = value;
        },
        print:function(name){
            let entries = Object.entries(this.cars[name]);
            let parent = Object.getPrototypeOf(this.cars[name]);
            if(parent){
                parentEntries = Object.entries(parent);
                entries = entries.concat(parentEntries);
            }
            let output = [];
            for(let [key,value] of entries){
                output.push(`${key}:${value}`);
            }
            console.log(output.join(", "));
        }
    }

    for(let commandStr of commandsArray){
        let commandArr = commandStr.split(" ");

        if(commandArr[2] == "inherit"){
            let [,name,,parent] = commandArr;
            factory.inherits(name,parent);
        }else if(commandArr[0] == "create"){
            factory.create(commandArr[1]);
        }else if(commandArr[0] == "set"){
            let [,name,key,value] = commandArr;
            factory.set(name,key,value);
        }else if(commandArr[0] == "print"){
            factory.print(commandArr[1]);
        }
    }
}

main(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])