// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // New ES6 Syntax - Object Destructuring

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (ConnectErr, db) => {

    if (ConnectErr) console.log('Unable to connect');
    else console.log('Connected to MongoDB Server');

    // db.collection('Users').deleteMany({'Name': 'Andrew'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);
    //     });

    db.collection('Users')
        .findOneAndDelete({'_id': new ObjectID('5a15a18cbd8ff227b0ef77c8')})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(err);
        });

    // deleteMany
    // db.collection('ToDos')
    //     .deleteMany({'text': 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);
    //     });

    // deleteOne
    // db.collection('ToDos')
    //     .deleteOne({'text': 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);
    //     });

    // findOneAndDelete
    // db.collection('ToDos')
    //     .findOneAndDelete({'completed': false})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);
    //     });

    // db.close();
});
