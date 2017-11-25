const {mongoose} = require('./db/mongoose.js');
const {ToDo} = require('./models/todo.js');
const {User} = require('./models/user.js');


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
// var newUser = new User({
//     'name': '   Vlad Stankaninets   ',
//     'e-mail': 'vlad.s@example.com        '
// });
//
// newUser.save().then((doc) => {
//     console.log('Saved a new User', doc);
// }, (err) => {
//     console.log('Unable to save a new User', err);
// });
