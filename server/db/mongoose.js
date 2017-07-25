var mongoose = require('mongoose');

const mongodbPath  = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(mongodbPath);

module.exports = {mongoose};
