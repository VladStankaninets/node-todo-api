const mongoose = require('mongoose');

// Now we need to create a Model
// Model is like a schema to say that this prticular collection can store these proporties

// var ToDo is a function
// Mongoose will automatically lowercase and pluralize TODO into todos when it creates a collection

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

module.exports = {ToDo};
