// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // New ES6 Syntax - Object Destructuring

MongoClient.connect('mongodb://vlad:vlad123@ds117336.mlab.com:17336/vladdb', (ConnectErr, db) => {

    if (ConnectErr) console.log('Unable to connect to MLAB MongoDB Server');
    else console.log('Connected to MLAB MongoDB Server');

    db.collection('ToDos').insertOne(
        {
            'text': 'Something to do',
            'completed': false
        },
        (InsertErr, result) => {
            if (InsertErr) return console.log('Unable to insert todo', InsertErr);
            // else
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );

    db.close();
});
