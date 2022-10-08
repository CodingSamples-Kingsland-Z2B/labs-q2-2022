// TODO: Require Controllers...
const controllers = require("../controllers/index");


module.exports = (app) => {
   
    //server.method(route,controller)
    app.get("/",controllers.main);//main page
    app.get("/about",controllers.about);//about page
    app.get("/create/cube",controllers.create.cube.get);//create cube page
    app.post("/create/cube",controllers.create.cube.post);//create cube
    app.get("/create/accessory",controllers.create.accessory.get);//create accessory page
    app.post("/create/accessory",controllers.create.accessory.post);//create accessory
    app.get("/details/:id",controllers.details);//give detail for a specific cube
    app.get("/attach/accessory/:cubeId",controllers.attach.get); // get the attach accesory page
    app.post("/attach/accessory/:cubeId",controllers.attach.post); //attach an acccessory to a cube
    app.get("*",controllers.fourOhFour);//catch-all 404 page
};