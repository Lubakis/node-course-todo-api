// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.error('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2) );
  // });

  // db.collection('Users').insertOne({
  //   name: 'Lyubo',
  //   age: 27,
  //   location: 'Sofia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.error('Unable to insert todo', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
});
