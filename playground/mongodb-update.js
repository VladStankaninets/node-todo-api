// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // New ES6 Syntax - Object Destructuring

MongoClient.connect('mongodb://vlad:vlad123@ds117336.mlab.com:17336/vladdb', (ConnectErr, db) => {

    if (ConnectErr) console.log('Unable to connect to MLAB MongoDB Server');
    else console.log('Connected to MLAB MongoDB Server');

    // db.collection('ToDos').findOneAndUpdate({
    //     '_id': new ObjectID('5a1792c4b6f73c2a745a51c0')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        // '_id': new ObjectID('5a186e03ae9f375d1049849c')
        'name': 'Mike'
    }, {
        $inc: {
            'age': 1
        },
        $set: {
            'name': 'Vlad'
              }
        }, {
            returnOriginal: false
    })
        .then((result) => {
            console.log(result);
        });

    // db.collection('ToDos').insertOne(
    //     {
    //         'text': 'Something to do',
    //         'completed': false
    //     },
    //     (InsertErr, result) => {
    //         if (InsertErr) return console.log('Unable to insert todo', InsertErr);
    //         // else
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // );

    // db.close();
});
