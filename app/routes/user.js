// if our user.js file is at app/models/user.js
var User = require('../models/user');
var path = require('path');

//This method return the principal page
function getIndex(req, res) {
  res.sendFile(path.resolve(__dirname + '/../views/index.html'));
};

//This method return the register page
function getRegister(req, res){ 
  res.sendFile(path.resolve(__dirname + '/../views/registerUsers.html')) ;
};

//This method is activated when a user complete and send the form in the view of register
function registerUsers(req,res){
  var user = new User({
    user: req.body.user,
    password:  req.body.password,
    name:  req.body.name,
    identification:  req.body.identification,
    email: req.body.email
});
user.save(function(err) {
    if (err) throw err;
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
  });
}

//This method is activated when a user tries to login in the application
function loginUsers(req,res){
User.findOne({user: req.body.user, password: req.body.password},(err, user)=>{
  if (err) throw err;
  else if(user.admin){
      res.send(user);
  }
  else{
     res.sendFile(__dirname + '/app/views/index.html');
  }
});
}

module.exports = { // Export all the methods
  getIndex: getIndex,
  getRegister: getRegister,
  registerUsers: registerUsers,
  loginUsers: loginUsers
};