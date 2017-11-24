// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // New ES6 Syntax - Object Destructuring

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (ConnectErr, db) => {

    if (ConnectErr) console.log('Unable to connect');
    else console.log('Connected to MongoDB Server');

    // db.collection('ToDos').insertOne(
    //     {'text': 'Something to do', 'completed': false},
    //     (InsertErr, result) => {
    //         if (InsertErr) return console.log('Unable to insert todo', InsertErr);
    //         // else
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // );
    //
    // db.collection('Users').insertOne(
    //     {
    //         'Name': 'Vlad',
    //         'Age': 96,
    //         'Location': 'Toronto'
    //     },
    //     (InsertErr, result) => {
    //         if (InsertErr) return console.log('Unable to insert a user', InsertErr);
    //         // else
    //         // console.log(JSON.stringify(result.ops, undefined, 2));
    //         console.log(result.ops[0]._id.getTimestamp());
    //     }
    //
    // );

    db.close();
});
