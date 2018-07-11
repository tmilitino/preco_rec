module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "thiago",
            password : "thiago",
            database: "produtos",
        });

        connection.query('select * from produto', function(err, results){
            console.log(err);
            res.send(results);

        });

        connection.end();

    });
}