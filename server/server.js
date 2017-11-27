const express = require('express');
const bodyParser = require('body-parser');
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// Body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
// The middleware was a part of Express.js earlier but now you have to install it separately.
// This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request
// This is usually necessary when you need to know more than just the URL you hit,
// particularly in the context of a POST or PUT PATCH HTTP request where the information you want is contains in the body.

const {mongoose} = require('./db/mongoose.js');
const {ToDo} = require('./models/todo.js');
const {User} = require('./models/user.js');
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json()); // return from jso method is a function that is given  to express middleware

// app.post('/todos', function callback (req, res) { // ES6 wants an arrow function
app.post('/todos', (req, res) => {
    // console.log(req.body); // bodyParser stores content in body - test from Postman -output will be in console
    // now let's connect to MongoDB
    var newToDo = new ToDo({
        'text': req.body.text
    });

    newToDo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
        res.send({todos}); // More flexible to send back Object ToDo not array ToDo
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(port, () => {
    console.log(`Express server has started on ${port}`);
});
//
// Do not forget to export app for server.test.js
module.exports = {app};
//
//
//
//
//
//
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
//     'text': '   Code an New Cool App2   ',
//     'completed': true,
//     'completedAt': 200});
//
// newTodo2.save().then((doc) => {
//     console.log('Saved a newTodo2', doc);
//     mongoose.disconnect();
// }, (err) => {
//     console.log('Unable to save a newTodo2', err);
// });
// //
// var newUser = new User({
//     'name': '   P Stankaninets   ',
//     'e-mail': 'p.s@example.com        '
// });
//
// newUser.save().then((doc) => {
//     console.log('Saved a new User', doc);
//     mongoose.disconnect();
// }, (err) => {
//     console.log('Unable to save a new User', err);
// });
