var mongoose = require('mongoose');

const mongodbPath  = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(mongodbPath);

module.exports = {mongoose};
