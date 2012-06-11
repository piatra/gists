var http = require('http'),
	gist = require('./gist.js')(),
	express = require('express'),
	app = express.createServer().listen(8000);

app.configure(function(){
	app.use(express.static(__dirname + '/static'));
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.bodyParser());
});

app.get('/', function(req, res){

	gist.allGists('piatra', function(err, resp, body){

		if(!err) {
			var data = body.map(function(obj){
				console.log([obj.id, obj.description]);
				return {
						id: obj.id,
						description: obj.description
					};
			});
			
			res.render('index.jade', {
				layout:false,
				locals: {
					data: data
				}
			});
			
		}
	});

});

app.get('/:id', function(req, res){
	gist.gist(req.params.id, function(err, resp, body){
		if(!err) {
			var content = [];
			var files = body['files'];
			for(var prop in files) {
				if(files.hasOwnProperty(prop)) {
					content.push({
						name: prop,
						content: files[prop]['content']
					});
				}
			}
			res.render('gist', {
				layout: false,
				locals: {
					data: content
				}
			});
		}
	});
});

app.get('/json', function(req, res){
	gist.allGists('piatra', function(err, resp, body){
		res.send(body);
	});
});