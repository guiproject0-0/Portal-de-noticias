
module.exports= function(index){

	index.get('/noticias',function(req, res){

		index.app.controller.contNoticias.noticias(index, req, res);
	});
	};
;