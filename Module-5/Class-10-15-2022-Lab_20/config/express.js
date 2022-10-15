const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {loginToken,routeValidation} =require("../controllers/middleware");

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.engine('.hbs', handlebars.engine({
        extname: '.hbs'
      }));
    app.set('view engine', '.hbs');  
    //TODO: Setup the body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    //TODO: Setup the static files
    app.use(express.static('static'));
    //add in cookie support
    app.use(cookieParser());
    //TODO: SET UP AUTH 
    app.use(loginToken);
    app.use(routeValidation);

};