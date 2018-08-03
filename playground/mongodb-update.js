const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');

  //find one And update
  db.collection('User').find().findOneAndUpdate({_id : new ObjectID("5b6328f043919282abbb0e57")}).then((docs) => {
    console.log("TODOS:");
    console.log(JSON.stringify(docs, undefined, 2));
  })

//closing  db
db.close();

});
