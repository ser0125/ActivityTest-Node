// if our user.js file is at app/models/user.js
var User = require('./app/models/user');

// create a new user called chris
var chris = new User({
  name: 'Sergio',
  user: 'sergeus',
  password: 'password',
  identification: 3123123
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});