var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  name: {
    type: String
  },
  age: {
    type: Number
  },
});

module.exports = {Todo}


//
// var newTodo = new Todo({
//   name: "Tanuj",
//   age: "26"
// })
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log("Error");
// })
