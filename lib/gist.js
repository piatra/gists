/*
* gistGetter
* https://github.com/piatra/gists
*
* Copyright (c) 2012 Andrei Oprea
* Licensed under the MIT license.
*/

var request = require('request').defaults({json: true});

function Gist(options) {
	this.api = 'https://api.github.com/';
}

Gist.prototype.allGists = function(user, cb) {
	var url = this.api + 'users/' + user + '/gists';
	return request(url, cb);
};

Gist.prototype.gist = function(id, cb) {
	var url = this.api + 'gists/' + id;
	return request(url, cb);
};

module.exports = function(options) {
	return new Gist(options);
};
