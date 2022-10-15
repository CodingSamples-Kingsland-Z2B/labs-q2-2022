const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");
const mongoose = require('mongoose');

module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    //todo: pull in the cube by the id param
    let cubeId = req.params.id;
    
    let userId = req.user.id;
    //console.log(cubeId);
    //find cube by id 
    //populate accessories for that cube
    Cube.findById(cubeId).populate('accessories')
    .lean().then((cube)=>{
        //console.log(cube.creatorId.toString(),userId);
        let matchCreator = (cube.creatorId.toString() === userId)?true:false;
        //console.log(cube);
        let context ={
            ...cube,
            loggedIn,
            matchCreator
        };
        res.render("details.hbs",context);
    });
   
};