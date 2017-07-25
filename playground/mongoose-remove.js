const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( (result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemvoe({}).then((result) => {
//
// });

Todo.findByIdAndRemove('59779d0c6c995bde1465aab4').then( (todo) => {
  console.log(todo);
});
