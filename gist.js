var request = require('request').defaults({json: true});

function Gist() {
	this.api = "https://api.github.com/";
}

Gist.prototype.allGists = function(user, cb) {
	return request('https://api.github.com/users/'+user+'/gists', cb);
};

Gist.prototype.gist = function(id, cb) {
	return request('https://api.github.com/gists/' + id, cb);
};

module.exports = function() {
	return new Gist();
};
