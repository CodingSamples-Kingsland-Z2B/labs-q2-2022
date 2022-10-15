const db = require("../config/database");
const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");

module.exports = {
    get:function(req,res){
        let loggedIn = req.loggedIn;
        let cubeId = req.params.cubeId;
        Accessory.find({cubes:{$nin:[cubeId]}}).lean().then(accessories=>{
            Cube.findById(cubeId).lean().then(cube=>{
                let hasAccessories = accessories.length>0?true:false;
            context ={
                cubeId,
                cubeName:cube.name,
                cubeImageURL:cube.imageURL,
                hasAccessories,
                accessories,
                loggedIn
            };
            res.render("attachAccessory.hbs",context);
            });   
        });
        
    },
    post:function(req,res){
        let cubeId = req.params.cubeId;
        let body = req.body;
        console.log(body);
        Cube.findById(cubeId).then(cube=>{
            cube.accessories.push(body.accessory)
            return cube.save();
        }).then(()=>{
            Accessory.findById(body.accessory).then(accessory=>{
                accessory.cubes.push(cubeId)
                return accessory.save();
            }).then(()=>{
                res.redirect(`/details/${cubeId}`);
            });
        });
    },
}