const express = require('express');
const bodyParser = require('body-parser');

var {
  mongoose
} = require('./db/mongoose.js');
var {
  User
} = require('./models/Users');
var {
  Todo
} = require('./models/todo');
var {
  offshoreMember
} = require('./models/offshore');

var app = express();

app.use(bodyParser.json());

app.post('/bbc', (req, res) => {
  var member = new offshoreMember({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    age: req.body.age,
    moduleName: req.body.moduleName,
    experience: req.body.experience,
    email: req.body.email,
    hometown: req.body.hometown

  });

  member.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e)
  })
})

app.post('/todos', (req, res) => {
  var todo = new Todo({
    name: req.body.name
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e)
  })
})

app.listen(2002, () => {
  console.log("Up and listening on 3002...");
})

module.exports = {app};
