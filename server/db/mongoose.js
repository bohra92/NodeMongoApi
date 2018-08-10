var mongoose = require('mongoose');

mongoose.connect('mongodb://bohra:M#1030501@ds119072.mlab.com:19072/offshore-data');
//'mongodb://localhost:27017/TodoApp'
mongoose.Promise = global.Promise;

module.exports = {
  mongoose
};
