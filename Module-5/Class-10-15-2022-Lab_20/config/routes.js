// TODO: Require Controllers...
const controllers = require("../controllers/index");
const { body } = require('express-validator');

module.exports = (app) => {
   
    //server.method(route,controller)
    app.get("/",controllers.main);//main page
    app.get("/about",controllers.about);//about page
    app.get("/create/cube",controllers.create.cube.get);//create cube page
    app.post("/create/cube",controllers.create.cube.post);//create cube
    app.get("/edit/cube/:id",controllers.edit.get);//create cube page
    app.post("/edit/cube/:id",controllers.edit.post);//create cube
    app.get("/delete/cube/:id",controllers.delete.get);//create cube page
    app.post("/delete/cube/:id",controllers.delete.post);//create cube
    app.get("/create/accessory",controllers.create.accessory.get);//create accessory page
    app.post("/create/accessory",controllers.create.accessory.post);//create accessory
    app.get("/details/:id",controllers.details);//give detail for a specific cube
    app.get("/attach/accessory/:cubeId",controllers.attach.get); // get the attach accesory page
    app.get("/user/login",controllers.user.login.get); // get the login page
    app.post("/user/login",controllers.user.login.post); // log user in;
    app.get("/user/register",controllers.user.register.get); // get the login page
    app.post("/user/register",body("username").trim().isLength({min:5}),body("password").trim().isLength({min:5}),controllers.user.register.post); // log user in;
    app.get("/user/logout",controllers.user.logout.get); // log user out;
    app.post("/attach/accessory/:cubeId",controllers.attach.post); //attach an acccessory to a cube
    app.get("*",controllers.fourOhFour);//catch-all 404 page
};