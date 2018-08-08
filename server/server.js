const express = require('express');
const bodyParser = require('body-parser');
const {
  ObjectID
} = require('mongodb')

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
const port = process.env.PORT || 3000
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

app.get('/bbc/:id', (req, res) => {
  let id = req.params.id
  if (!ObjectID.isValid(id)) {
    return res.send('Object id not Valid!!!')
  }
  offshoreMember.findById(id).then((member) => {
    if (!member) {
      return res.send('No records found with this object id')
    }
    res.send(member)
  }).catch(err => {
    res.send('Outside catch')
  })
})

app.get('/bbc', (req, res) => {
  offshoreMember.find().then((docs) => {
    res.send(docs)
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

app.listen(port, () => {
  console.log(`Up and listening on ${port}...`);
})

module.exports = {
  app
};
