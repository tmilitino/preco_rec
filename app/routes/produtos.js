module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "us-cdbr-iron-east-04.cleardb.net",
            user: "b67f328959284e",
            password : "e68f1cf4",
            database: "heroku_d2e6481d2ce58ab",
        });

        connection.query('select * from produto', function(err, results){
            console.log(err);
            res.render('produtos/lista',{lista:results});

        });

        connection.end();

    });
}