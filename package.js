Package.describe({
	name: "anvar:errors",
	summary: "ES6 - package to display application level errors to the user",
	git: "https://github.com/AnvarTurobov/errors.git",
	version: "1.1.1",
	documentation: "README.md"
});

Package.onUse((api, where) => {
	api.versionsFrom('1.4.1.1');
	api.use(['ecmascript', 'minimongo', 'mongo-livedata', 'templating'], 'client');
	api.addFiles(['errors.js', 'error_list.html', 'error_list.js', 'error_list.css'], 'client');

	if (api.export) 
		api.export('Errors');
});

Package.onTest(api => {
	api.use('anvar:errors', 'client');
	api.use(['templating', 'tinytest', 'test-helpers'], 'client');  
	api.addFiles('errors_tests.js', 'client');
});

