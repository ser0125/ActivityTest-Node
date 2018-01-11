//We are going to use  Moongose so here we import that
const mongoose = require('mongoose');  

//Here we connect to the database
mongoose.connect('mongodb://localhost/users');

var Schema = mongoose.Schema; 
// create a schema
    var userSchema = new Schema({
        user: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 5 },
        name: String,
        identification: { type: Number, unique: true },
        mail: String,
        admin: Boolean
      });

      

// the schema is useless so far
// we need to create a model using it
      var User = mongoose.model('User', userSchema);
      
 // make this available to our users in our Node applications
      module.exports = User;