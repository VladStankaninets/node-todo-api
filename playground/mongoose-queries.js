const {ObjectId} = require('mongodb'); // from native Mongodb library, not from Mongoose

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a18f95bed4e2d2c6cce7884';

User.findById(id).then((user) => {

    if (!user) return console.log('Id not found')
    // else
         console.log('User By Id ', user);
         mongoose.disconnect();
    })
      .catch((err) => console.log('Invalid Id', err));


// if (!ObjectId.isValid(id)) { // Object.Iid is NOT valid
//   console.log('Id is not valid');
// };
//
//
// ToDo.find({
//     '_id': id
// // mongoose AUTOMATICALLY converts id as a string into ObjectID
// })
//     .then((todos) => {
//         console.log('ToDos: ', {todos}); // returning an object {todos}, not an array [todos] of objects
//         mongoose.disconnect();
//     }, (err) => {
//         console.log('This is a Error', err);
//         mongoose.disconnect();
//     });
//
//     ToDo.findOne({
//         '_id': id
//     // mongoose AUTOMATICALLY converts id as a string into ObjectID
//          })
//         .then((todo) => {
//             if (!todo) return console.log('Id not found')
//             // else
//             console.log('ToDo: ', todo.text); // mongoose returns a JS object, so you do NOT need to parse it to access properties
//             mongoose.disconnect();
//         }, (err) => {
//             console.log('This is a Error', err);
//             mongoose.disconnect();
//     });
//
//     ToDo.findById(id)
//         .then((todo) => {
//             if (!todo) return console.log('Id not found')
//             // else
//             console.log('ToDo By Id: ', todo); // mongoose returns a JS object, so you do NOT need to parse it to access properties
//             mongoose.disconnect();
//           }).catch((err) => { // Cleaner to use .catch(err) funtion at the end instead of a second error function in a given Promise
//                 console.log('This is a Error', err);
//                 mongoose.disconnect();
//     });
