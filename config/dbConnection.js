var mysql2 = require('mysql2');
var conMysql2 = function(){
	return mysql2.createConnection({
		host	:'localhost',
		user	:'root',
		password:'1574',
		database: 'formulario1'
	});
};
	module.exports=function(){
		return conMysql2;
	};