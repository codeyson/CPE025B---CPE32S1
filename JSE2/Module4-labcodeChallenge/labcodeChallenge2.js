/*
Write a decorator named myDecorator that will store the arguments of the decorated function call.

If the function has already been called with these arguments, an appropriate message should appear in the console containing, among other things, the values of those arguments.

Note – the function can be called with any number of arguments, so use rest arguments for this purpose.

Test the decorator using the following code:
*/

function myDecorator(func) {
    let calledArgs = new Set();

    return function (...args) {
        let key = JSON.stringify(args);

        if (calledArgs.has(key)) {
            console.log(`Arguments already used: ${args}`);
            return;
        }

        calledArgs.add(key);
        return func(...args);
    }
}


let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5