
function NoticiasDao(connection){
	this._connection = connection;
};

NoticiasDao.prototype.salvarDados = function(callback, valor){
	this._connection.query('insert into noticia set ? ', callback, valor);
	
};


NoticiasDao.prototype.DadosNoticias= function(callback){
	this._connection.query('select *from noticia order by data_criacao desc', callback);
};

NoticiasDao.prototype.DadosNoticia = function(id_noticia, callback){
	this._connection.query('select *from noticia where id_noticia = ' + id_noticia.id_noticia, callback);
};

NoticiasDao.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select *from noticia order by data_criacao desc limit 5', callback);
};

module.exports= function(){
	return NoticiasDao;
};
