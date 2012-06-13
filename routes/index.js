
/*
* GET home page.
*/

var gist = require('../lib/gist.js')();

exports.index = function(req, res){

	var content = [];
	gist.allGists('piatra', function(err, resp, body){
		content = body.map(function(obj){
			return {
				id: obj.id
			};
		});
		res.render('index', { title: 'Express', data: content });
	});
	
};