// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: 'false'}).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Lyubo'}).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({name: 'Andrew'}).then( (result) => {
  //   console.log(result);
  // });

  // db.close();
});
