const {mongoose} = require('./db/mongoose.js');
const {ToDo} = require('./models/todo.js');
const {User} = require('./models/user.js');

// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// Body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
// The middleware was a part of Express.js earlier but now you have to install it separately.
// This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request
// This is usually necessary when you need to know more than just the URL you hit,
// particularly in the context of a POST or PUT PATCH HTTP request where the information you want is contains in the body.
























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


// var newTodo2 = new ToDo({
//     'text': '   Code an New Cool App   ',
//     'completed': true,
//     'completedAt': 200});
//
// newTodo2.save().then((doc) => {
//     console.log('Saved a newTodo2', doc);
// }, (err) => {
//     console.log('Unable to save a newTodo2', err);
// });
//
var newUser = new User({
    'name': '   P Stankaninets   ',
    'e-mail': 'p.s@example.com        '
});

newUser.save().then((doc) => {
    console.log('Saved a new User', doc);
    mongoose.disconnect();
}, (err) => {
    console.log('Unable to save a new User', err);
});
