const mongoose = require('mongoose');
const config = require('./config.js');
// Mongoose uses callbacks by default and we would want to use Promises
// So, we need to instruct mongoose to use Promises built-in library (part of JS now)
// as opposed to 3-rd party Promises library as bluebird from pre-ES6 days
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://vlad:vlad123@ds117336.mlab.com:17336/vladdb');
mongoose.connect(config.URL, {
    'useMongoClient': true
    // other options
});

module.exports = {
    // 'mongoose': mongoose
    mongoose // es6 shorthand Syntax
};
