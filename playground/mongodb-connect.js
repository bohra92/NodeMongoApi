//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');
  db.collection('User').insertOne({
    age : '26',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log("error while inserting", err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));

  })

  db.close();

});
