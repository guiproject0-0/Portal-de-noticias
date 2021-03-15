module.exports.noticias= function(index, req, res){

		var connection = index.config.dbConnection();
		var formularioModel = new index.app.models.NoticiasDao(connection);

		formularioModel.DadosNoticias(function(error, result) {
			
			console.log(result)
			res.render("noticias/noticias",{noticias: result});
		})
			
			

		};
