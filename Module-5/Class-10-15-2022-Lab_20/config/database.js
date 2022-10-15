const mongoose = require("mongoose");
const {dbURL} = require("./config");

//todo add the db code here
module.exports = mongoose.connect(dbURL);