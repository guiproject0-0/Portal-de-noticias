module.exports.noticia= function(index, req, res){

	var connection = index.config.dbConnection();
	var formularioModel = new index.app.models.NoticiasDao(connection);

	console.log(req.query);
	var id_noticia = req.query;


	formularioModel.DadosNoticia(id_noticia, function(error, result){

		res.render('noticia/noticia', {noticia: result});
	})
	
}
