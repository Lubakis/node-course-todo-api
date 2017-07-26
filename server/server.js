require('./config/config');

const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/todos', authenticate, (req, res) => {
  Todo.find({
    _creator: req.user._id
  }).then( (todos) => {
    res.send({todos});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.post('/todos', authenticate, (req, res) => {

  var todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });
  todo.save().then( (todo) => {
    res.send({todo});
  }).catch( (e) => {
    console.log(e);
    res.status(400).send();
  });
});

app.get('/todos/:id', authenticate, (req, res) => {
  var _id = req.params.id;
  var _creator = req.user._id;
  if ( !ObjectID.isValid(_id) ) {
    return res.status(404).send();
  }
  Todo.findOne({_id, _creator}).then( (todo) => {
    if ( !todo ) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', authenticate, (req, res) => {
  var _id = req.params.id;
  var _creator = req.user._id;

  if ( !ObjectID.isValid(_id) ) {
    return res.status(404).send();
  }

  Todo.findOneAndRemove({_id, _creator}).then( (todo) => {
    if ( !todo ) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', authenticate, (req, res) => {
  var _id = req.params.id;
  var _creator = req.user._id;
  var body = _.pick(req.body, ['text', 'completed']);

  if ( !ObjectID.isValid(_id) ) {
    return res.status(404).send();
  }

  if ( _.isBoolean(body.completed) && body.completed ) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({_id, _creator}, {$set: body}, {new: true}).then( (todo) => {
    if (!todo) {
      res.status(404).send()
    }

    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then( () => {
    return user.generateAuthToken();
  }).then( (token) => {
    res.header('x-auth', token).send({user});
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.get('/users/me', authenticate, (req, res) => {
  var user = req.user;
  res.send({user});
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then( (token) => {
      res.header('x-auth', token).send({user});
    });
  }).catch( (e) => {
    res.status(400).send();
  });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then( () => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
