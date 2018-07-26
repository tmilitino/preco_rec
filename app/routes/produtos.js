var dbConect = require('../infra/dbConect');

module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        
        var connection = dbConect();

        connection.query('select * from produto', function(err, results){
            console.log(err);
            res.render('produtos/lista',{lista:results});

        });

        connection.end();

    });
}