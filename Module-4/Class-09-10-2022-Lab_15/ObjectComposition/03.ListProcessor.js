function main(commandArray){
    let listObj = {
        list: [],
        add:function(string){
            //console.log(this);
            this.list.push(string);
        },
        remove:function(string){
            this.list = this.list.filter(item => item !== string);
        },
        print:function(){
            console.log(this.list.join(","));
        }
    };

    for(let command of commandArray){
        let [name,input] = command.split(" ");
        switch(name){
            case "add":
                listObj.add(input);
                break;
            case "remove":
                listObj.remove(input);
                break;
            case "print":
                listObj.print();
                break;
        }
       
    }

}

main(['add hello', 'add again', 'remove hello', 'add again', 'print']);