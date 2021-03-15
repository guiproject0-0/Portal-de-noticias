module.exports= function(index){

	index.get('/formulario', function(req, res){
		index.app.controller.contFormulario.formulario(index, req, res);
	});

	var {check, validationResult} = require('express-validator');
	index.post('/dados/salvar',[ 

		check('titulo').isLength({ min: 5 }).withMessage('Titulo nao pode ser vazio'),
		check('autor').isLength({ min: 5 }).withMessage('O autor nao pode ser vazio'),	
		check('resumo').isLength({ min: 5 }).withMessage('Resumo nao pode ser vazia'),
		check('noticia').isLength({ min: 5 }).withMessage('Noticia nao pode ser vazia'),
		

		], function(req, res){

			index.app.controller.contFormulario.noticias_salvar(index, req, res);
		});
};

	
















/*

module.exports= function(index){
	index.get('/', function(req, res){
		res.render('home/index');
	});

	index.post('/dados/salvar', function(req, res){
		var dadosForm = req.body;


		var connection = index.config.dbConnection();
		var formularioModel = index.app.models.formularioModel;

		formularioModel.salvarDados(dadosForm, connection, function(error, result){
			res.redirect('/dados');
			
		});


	});
}; 
*/