var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },

  email: {
    type: String,
    minlength: 6,
    trim: true,
    required: true
  },
  age: {
    type: Number
  }
})

module.exports = {
  User
}
