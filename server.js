var express  = require('express');
    var app     =express();                               // create our app w/ express
    var User = require('./app/models/user');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    var routes = require('./app/routes/routerUser'); 
    
app.listen(3000, function() {     //The application is going to be listen in the port 3000
	console.log("Listening in the port 3000");
});
//We are going to use the routes  
app.use('/', routes); 
app.use(express.static("./app/views/css"));

module.exports = app

