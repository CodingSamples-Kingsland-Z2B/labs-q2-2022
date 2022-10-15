
module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    res.render("about.hbs",{loggedIn});
};