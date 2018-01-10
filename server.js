var express  = require('express');
    var app      = express();                               // create our app w/ express
    var User = require('./app/models/user');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
app.listen(3000, function() {     //The application is going to be listen in the port 3000
	console.log("Listening in the port 3000");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/views/index.html') // load the single view file (angular will handle the page changes on the front-end)
});
app.get('/registerUsers', function(req, res) {
    res.sendFile(__dirname + '/app/views/registerUsers.html') // load the single view file (angular will handle the page changes on the front-end)
});



app.post('/registerUsers',(req, res)=>{ 
    var user = new User({
        user: req.body.user,
        password:  req.body.password,
        name:  req.body.name,
        identification:  req.body.identification,
    });
    console.log(user);
    user.save(function(err) {
        if (err) throw err;
        res.sendFile(__dirname + '/app/views/index.html');
      });
    })

    app.post('/loginUsers',(req, res)=>{ 
        User.findOne({user: req.body.user, password: req.body.password},(err, user)=>{
            if (err) throw err;
            else if(user.admin){
                res.send(user);
            }
            else{
               res.sendFile(__dirname + '/app/views/index.html');
            }
          });
        })