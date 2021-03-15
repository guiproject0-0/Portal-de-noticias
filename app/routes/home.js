module.exports= function(index){

	index.get('/index', function(req, res){

		index.app.controller.contHome.index(index, req, res);

		
		
	});
};