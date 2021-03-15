module.exports.formulario = function(index, req, res){
			
		
	res.render('formulario/formulario_inclusao_noticia', {validacao:{}, noticia:{}} );

} 
module.exports.noticias_salvar = function(index, req, res){

	var {check, validationResult} = require('express-validator');

	var valor = req.body;

	var errors = validationResult(req);
  	if (!errors.isEmpty()) {
  		console.log('nao foi possivel')
    	res.render('formulario/formulario_inclusao_noticia',{ validacao: errors.array(), noticia: valor });
	} else {
	
		var connection = index.config.dbConnection();
		var formularioModel = new index.app.models.NoticiasDao(connection);

		formularioModel.salvarDados(valor, function(error, result){
		console.log(result)
				console.log(valor)

		res.redirect("/index");
		});
			
	};


};





