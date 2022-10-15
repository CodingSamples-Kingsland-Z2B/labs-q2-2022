const bcrypt = require("bcrypt");
const myPlainTextPassword = "password12";
const hash = "$2b$09$pdhUAoT4qE0tmku.ZkXWROeLcJCy.LDRq.1I4IVImjrUTGuUbYQMi";

bcrypt.compare(myPlainTextPassword, hash, (err, res) => {
    console.log(res); // true
});
