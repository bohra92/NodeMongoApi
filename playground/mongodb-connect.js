//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');
  db.collection('Todos').insert([{
      age: '26',
      name: 'Noni',
      college: 'NA',
      completed: true
    },
    {
      age: '27',
      name: 'Monal',
      college: 'NA',
      completed: false
    }
  ], (err, result) => {
    if (err) {
      return console.log("error while inserting", err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

  })

  db.close();

});
