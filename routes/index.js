
/*
* GET home page.
*/

var gist = require('../lib/gist.js')();

exports.index = function(req, res) {

	var content = [];
	var user = req.params.user || 'piatra';
	gist.allGists(user, function(err, resp, body){
		content = body.map(function(obj){
			return {
				id: obj.id,
				description: obj.description
			};
		});
		res.render('index', {
			title: 'Gists for ' + user,
			data: content,
			user: user
		});
	});

};

exports.viewGist = function(req, res) {
	
	var content;
	var id = req.params.id;
	var user = req.params.user;
	var files = [];
	gist.gist(id, function(err, resp, body){
		var files = [];
		content = {
			date: body.created_at,
			files : body.files,
			description: body.description
		};
		if(body.fork_of) {
			content.fork = body.fork_of.user;
		} else {
			content.fork = null;
		}

		for(var i in content.files) {
			if(content.files.hasOwnProperty(i)) {
				files.push(content.files[i]);
			}
		}
		res.render('gist', {
			title: 'Gist #' + id,
			data: content,
			files: files
		});
	});

};