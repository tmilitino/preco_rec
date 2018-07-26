var dbConect = require('../infra/dbConect');

module.exports = function(app) {
    app.get("/produtos",function(req, res) {

        var connection = dbConect();
        var cons = ConsultaProduto;
        if (cons = ""){
        connection.query('select * from produto', function(err, results){
            console.log(err);
            res.render('produtos/lista',{lista:results});

        });}
        else {
          connection.query('select * from produto where id like %'+cons+'% or nome like %'+cons+'% or ncm like %+'cons'+%', function(err, results){
              console.log(err);
              res.render('produtos/lista',{lista:results});
              });
        }

        connection.end();

    });
}
