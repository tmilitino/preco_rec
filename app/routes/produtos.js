module.exports = function(app) {
    app.get("/produtos",function(req, res) {

        var connection = app.infra.dbConect();
        var produtosBanco = new app.infra.ProdutosDAO(connection)
         produtosBanco.lista(function(err, results){
            console.log(err);
            res.render('produtos/lista',{lista:results});

        });

        connection.end();

    });
}
