function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produto',callback);

}
module.exports= function(){
  return ProdutosDAO;
}
