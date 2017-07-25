// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("597650637046edc566173858")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5976486cf33e1eb7ca1cf3bf")
  }, {
    $set: {
      name: 'Lyubo'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});
