var handlebars = require('handlebars');
var fs         = require('fs');

module.exports.init = function() {
	var files = fs.readdirSync(__dirname + '/templates/partials/');
	for (var i=0; i< files.length; i++) {
		handlebars.registerPartial( files[i].substring(0,files[i].length-4), fs.readFileSync(__dirname + '/templates/partials/' + files[i]).toString());	
	}
}