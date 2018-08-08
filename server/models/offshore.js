var mongoose = require('mongoose');

var offshoreMember = mongoose.model('offshoreMember', {
  firstName: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },
  middleName: {
    type: String,
    minlength: 3,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },
  age: {
    type: Number
  },
  moduleName: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },
  experience: {
    type: String,
  },
  email: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },
  hometown: {
    type: String,
    trim: true
  }
});

module.exports = {
  offshoreMember
}
// {
// 	  "firstName": "Tanuj",
//   "lastName": "Bohra",
//   "age": "26",
//   "moduleName": "Childrens",
//   "experience": "3yrs",
//   "email": "bohratanuj@gmail.com",
//   "hometown": "Jodhpur"
// }
