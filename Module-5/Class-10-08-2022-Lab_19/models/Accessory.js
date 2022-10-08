const mongoose = require('mongoose');
const Cube = require("./Cube");

const accessorySchema = new mongoose.Schema({
    name:{type:String, required:true},
    imageURL:{type:String,required:true,validate:validImage},
    description:{type:String,required:true,maxlength:100},
    cubes:[{type:mongoose.Schema.Types.ObjectId,ref:"Cube"}]
});

function validImage(val){
    if(val.startsWith("http://")||val.startsWith("https://")){
        return true;
    }
    return false;
}

module.exports =  mongoose.model('Accessory', accessorySchema);