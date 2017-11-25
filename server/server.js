const mongoose = require('mongoose');
const config = require('../config.js');
// Mongoose uses callbacks by default and we would want to use Promises
// So, we need to instruct mongoose to use Promises built-in library (part of teh JS now)
// as opposed to 3-rd party Promises library as blubird from pre-ES6 days
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://vlad:vlad123@ds117336.mlab.com:17336/vladdb');
mongoose.connect(config.URL, {
    'useMongoClient': true
    // other options
});


// Now we need to create a Model
// Model is like a schema to say that this prticular collection can store
// only these proporties

// var ToDo is a function
//* Mongoose will automatically lowercase and *//
//* pluralize TODO into todos when it creates a collection *//
var ToDo = mongoose.model('TODO', {
    'text': { // This second Model's argument is called Object Schema
        'type': String,
        'required': true,
        'minlength': 1,
        'trim': true
    },
    'completed': {
        'type': Boolean,
        'default': false // Should default to false
    },
    'completedAt': {
        'type': Number,
        'default': null
    }
});

// create a brand new ToDo
// var newToDo = new ToDo({'text': 'Cook dinner'});
// var newToDo = new ToDo({
//     'completed': 'This is wrong'
// });
// this field is defined as Bollean,so the string will be converted to true

// save a brand new ToDo
// newToDo returns a Promise
// newToDo.save().then((doc) => {
//     console.log('Saved a newToDo', doc);
// }, (err) => {
//     console.log('Unable to save a newToDo', err);
// });


var newTodo2 = new ToDo({
    'text': '   Code an New Cool App   ',
    'completed': true,
    'completedAt': 200});

newTodo2.save().then((doc) => {
    console.log('Saved a newTodo2', doc);
}, (err) => {
    console.log('Unable to save a newTodo2', err);
});
