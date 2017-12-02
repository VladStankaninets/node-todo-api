// illustration how function declarations are hoisted
// second function declaration redefines the fiest one and only THEN bar() call is returned by foo()
// So, foo() returns 8

function foo () {
    function bar () {
        return 3;
    }

    return bar();

    function bar () {
        return 8;
    }

}

// console.log(foo());

var myObject = {'text': 'Test'};
var myVarBoolean = !!{'text': 'Test'}; // wants Boolean({'text': 'Test'}) - no implcit coersion
console.log(myVarBoolean); // true
console.log(Boolean(null)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(typeof myObject);
console.log(typeof myVarBoolean);
console.log(typeof '');
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof Infinity);
