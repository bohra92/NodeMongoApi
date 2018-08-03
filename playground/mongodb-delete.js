const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');

  //delete many
  db.collection('Todos').deleteMany().then((results) => {
    console.log("TODOS:");
    console.log(JSON.stringify(results, undefined, 2));
  })

  //delete one
  db.collection('Todos').deleteOne({
    age: "26"
  }).then((results) => {
    console.log("TODOS:");
    console.log(JSON.stringify(results, undefined, 2));
  })

  //find one and delete
  db.collection('Todos').findOneAndDelete({
    age: "27"
  }).then((results) => {
    console.log("TODOS:");
    console.log(JSON.stringify(results, undefined, 2));
  })

  db.close();

});
