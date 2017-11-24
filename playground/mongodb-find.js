// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // New ES6 Syntax - Object Destructuring

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (ConnectErr, db) => {

    if (ConnectErr) console.log('Unable to connect');
    else console.log('Connected to MongoDB Server');

    // db.collection('ToDos').find({'_id': new ObjectID('5a158fdff83edd2204749476')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('ToDos').find().count().then((count) => {
    //     console.log(`ToDos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch number of todos', err);
    // });

    db.collection('Users').find({'Name': 'Olga'})
        .toArray()
        .then((docs) => {
        // *********.find() returns a CURSOR, so to get the actual documents from a collection
        // ********  you need to call .toArray() which returns a Promise so we can call .then
        // ******** to do something with the docs. Docs come back as a first argumnet in the
        // ******** resolve (success) handler, the second argumnent handles the err.
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    // db.close();
});
