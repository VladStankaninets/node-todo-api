const mongoose = require('mongoose');

// Now we need to create a Model
// Model is like a schema to say that this prticular collection can store these proporties

// var ToDo is a function
// Mongoose will automatically lowercase and pluralize User into todos when it creates a collection

var User = mongoose.model('User', {
    'name': {
        'type': String,
        'required': true,
        'minlength': 1,
        'trim': true
    },
    'e-mail': {
        'type': String,
        'required': true,
        'minlength': 1,
        'trim': true
    },
    'completed': {
        'type': Boolean,
        'default': false // Should default to false
    }
});

module.exports = {User};
