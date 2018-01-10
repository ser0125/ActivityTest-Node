var express  = require('express');
    var app      = express();                               // create our app w/ express

    
app.listen(3000, function() {     //The application is going to be listen in the port 3000
	console.log("Listening in the port 3000");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/views/index.html') // load the single view file (angular will handle the page changes on the front-end)
});
