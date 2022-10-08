const mongoose = require('mongoose');
const Accessory = require("./Accessory");

let inRange = [difficultyRange,"please select a valid option"];
const cubeSchema = new mongoose.Schema({
    name : { type: String, required: true,  },
    description:{type: String, required: true,},
    imageURL:{type:String,validate:validImage },
    difficulty:{type:Number,required:true, validate:inRange},
    accessories:[{type:mongoose.Schema.Types.ObjectId, ref: 'Accessory' }]
});

function difficultyRange(val) {
    if(val >=1 && val<=6){
        return true;
    }else{
        return false;
    }
}
function validImage(val){
    if(val.startsWith("http://")||val.startsWith("https://")){
        return true;
    }
    return false;
}
module.exports = mongoose.model('Cube', cubeSchema);