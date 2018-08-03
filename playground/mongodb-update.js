const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/User', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');

  //find one And update
  db.collection('User').findOneAndUpdate({
    _id: new ObjectID("5b647a3527cfec595e7eb52c")
  }, {
    $set: {
      location: "Bengal"
    },
    $inc: {
      age: 2
    }

  }, {
    returnOriginal: false
  }).then((results) => {

    console.log(results);
  })

  //

  //closing  db
  db.close();

});
