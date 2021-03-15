module.exports= function(index){

	

	index.get('/noticia', function(req, res){

		index.app.controller.contNoticia.noticia(index, req, res);
	});
};