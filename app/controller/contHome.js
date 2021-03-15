module.exports.index= function(index, req, res){

	var connection = index.config.dbConnection();
	var formularioModel = new index.app.models.NoticiasDao(connection);

	formularioModel.get5UltimasNoticias(function(error, result){
		console.log(result)
		res.render("home/index",{sub: result});
	});
	
}