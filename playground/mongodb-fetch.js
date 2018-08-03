const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');
  //using object id
  db.collection('User').find({
    _id: new ObjectID("5b6328f043919282abbb0e57")
  }).toArray().then((docs) => {
    console.log("TODOS:");
    console.log(JSON.stringify(docs, undefined, 2));
  })

  //using other properties
  db.collection('User').find({
    age: "26"
  }).toArray().then((docs) => {
    console.log("TODOS:");
    console.log(JSON.stringify(docs, undefined, 2));
  })

  //fetching all
  db.collection('User').find().toArray().then((docs) => {
    console.log("TODOS:");
    console.log(JSON.stringify(docs, undefined, 2));
  })

  //count all/particular the todos
  db.collection('User').find({
    college: 'NA'
  }).count().then((count) => {
    console.log("TODOS:");
    console.log(JSON.stringify(count, undefined, 2));
  })

  //closing  db
  db.close();

});
