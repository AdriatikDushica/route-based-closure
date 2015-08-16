/**
 * Allow to store, handle routes.
 */
var Router = {
	routes : [],
	
	/**
	 * Return a route instance
	 */
	whenISee: function(path) {
		return new Route(this, path);
	},
	
	/**
	 * Add a Route instance to the routes array
	 */
	add: function(route) {
		this.routes.push(route);
	},
	
	/**
	 * Remove an instance of Route from routes by the uri path
	 */
	remove: function(uri) {
		for(var i=0; i<this.routes.length; i++) {
			if(this.routes[i].path == uri) {
				this.routes.splice(i, 1);
				break;
			}
		}
	},
	
	/**
	 * Run a route by the path name
	 */
	run: function(path) {
		for(var i=0; i<this.routes.length; i++)
			if(this.routes[i].path==path)
				this.routes[i].fnc();
	},
	
	/**
	 * Run a route with the URI path
	 */
	execute: function() {
		this.run(window.location.pathname);
	}
}

/**
 * Allow to store route information
 */
var Route = function(router, path) {
	this.router = router;
	this.path = path;
	this.fnc = null;
	
	this.then = function(fnc) {
		this.fnc = fnc;
		
		this.router.add(this);
	}
}