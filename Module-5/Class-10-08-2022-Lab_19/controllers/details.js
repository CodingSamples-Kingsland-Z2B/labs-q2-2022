const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

module.exports = function(req,res){
    //todo: pull in the cube by the id param
    let cubeId = req.params.id;
    console.log(cubeId);
    //find cube by id 
    //populate accessories for that cube
    Cube.findById(cubeId).populate('accessories')
    .lean().then((cube)=>{
        console.log(cube);
        res.render("details.hbs",cube);
    });
   
};