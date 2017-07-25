const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = "59773281e8a81bd0c8282730";
// var id = '597779713826c0d9573df4ef11';
//
// if ( !ObjectID.isValid(id) ) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if ( !todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch( (e) => console.log(e));

User.findById(userId).then( (user) => {
  if ( !user ) {
    return console.log('UserId not found');
  }
  console.log('User by id', user);
}, (e) => console.log(e));
