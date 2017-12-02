// 'use strict';  When a directive occurs in global scope, strict mode applies to the entire script

var task = {
    // text: 'Original text',
    // age: 26
};


// Object.defineProperty(task, 'text', {
//   value: 'Get the Job done!',
//   writable: true,
//   enumerable: true
// });


Object.defineProperties(task, {
    'text': {
        'value': 'Get the Job done!',
        'writable': true,
        'configurable': true,
        'enumerable': true
    },

    'status': {
        'value': 'Pending',
        'writable': true,
        'configurable': true,
        'enumerable': true
    },

    'setStatus': {
        'set': function set (newValue) {
            this.status = newValue;
        },
        'configurable': true
        // enumerable: true
    },

    'getStatus': {
        'get': function get () {
            return this.status;

        },
        'configurable': true
        // enumerable: true
    }

});


console.log('JavaScript Object format: ', task);
task.text = `${task.text} NOW!`;
console.log('JSON.stringify()ed JSON format: ', JSON.stringify(task));

// console.log() in node utilizes util.inspect(), which uses Object.keys() on objects,
// which returns only own enumerable properties.
// Also, by default, Object.defineProperty() sets enumerable: false if you do not explicitly set it to true.

task.setStatus = 'Done';
console.log('Set new status with setStatus and get it with getStatus functions: ', task.getStatus);
console.log('Entire JSON.stringify()ed: ', JSON.stringify(task));
// var task2 = Object.create(task);
var task2 = new Object(task);
// Very simply said, new X is Object.create(X.prototype) with additionally running the constructor function.
// (And giving the constructor the chance to return the actual object; this gets assigned to the new object that new created)
// console.log(task.__proto__ === Object.prototype);
console.log(Reflect.getPrototypeOf(task) === Object.prototype && Reflect.getPrototypeOf(task2) === Object.prototype);
// console.log(typeof task);
// console.log(typeof task2);
// console.log(task2 instanceof Object);
console.log(Reflect.getPrototypeOf(task2) === Reflect.getPrototypeOf(task));
//
//
//
// Demostrate var and let
//
var myVar = 'I am global';
console.log(`Global Variable: ${myVar}`);

function demScope () {
    myVar = 'I am local function variable without "var"'; // If no var infront myVar becomes global
    console.log(myVar);
    {
        const /* or let */ inBraces = 'braces scope only'; // if inBraces defined with let/const it throws error undefined outside of braces, but var works within a function
        console.log(inBraces);
    }
    // console.log(inBraces); // will NOT work with let or const inBraces
}

demScope();
console.log(`Global Variable: ${myVar}`); // 'I am local'

// How to reverse a string
//
// var originalstr = 'yahoo', reversedstr;
// console.log('Original String: ', originalstr);
// var myArray = originalstr.split('');
// var newArray = myArray.slice().reverse();
// console.log('Original Array', myArray);
// console.log('New Array created and reversed with slice() and the reverse()', newArray)
// console.log('Reversed String: ', reversedstr = newArray.join(''));
//
//
// IIFE demonstartion

console.log((function myIIFE () {
    return 'This is myIIFE';
})());
