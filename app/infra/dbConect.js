var mysql = require('mysql');
module.exports = function(){
return mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b67f328959284e",
    password : "e68f1cf4",
    database: "heroku_d2e6481d2ce58ab",
});

}   