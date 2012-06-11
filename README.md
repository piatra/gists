Getting Gists with NodeJs and request module
===================
allows you to get all of the users gists

Usage
------

	// returns all the gists from the user and their description
	gist.allGists('piatra', function(err, resp, body){})

	// get the gists with the specified id
	// returns name of gists and content
	gist.gist(req.params.id, function(err, resp, body){})

	// it's something I needed to test out
	// you can edit it to return whatever you want
	// it's pretty easy since github returns such a nice json
	// and the request module is easy to use
