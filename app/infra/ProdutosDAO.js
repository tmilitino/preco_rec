function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produto',callback);

}

ProdutosDAO.prototype.busca = function(produto, callback){
  this._connection.query('select * from produto where id like %?%',produto,callback);

}
module.exports= function(){
  return ProdutosDAO;
}
