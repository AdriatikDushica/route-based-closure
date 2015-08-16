# route-based-closure

How to install using bower

	$ bower install route-based-closure

Include the file

	<script src="bower_components/route-based-closure/route-based-closure.js"></script>

How to use the library

	//Define routes and closures
	Router.whenISee('/').then(function(){
		alert("You're welcome!");
	});
	
	Router.whenISee('/info', function(){
		alert('This is the info page!');
	})
	
	//Execute a custom URI path
	Router.run('/info');
	
	//Execute current URI path, if i'm on http://localhost executes Router.run('/')
	Router.execute();