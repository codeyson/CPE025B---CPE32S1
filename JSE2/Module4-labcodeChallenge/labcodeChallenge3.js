/*
Write a getPromiseArray function that will take an array of any length as an argument.

The function should return an array of promises (one promise for each element of the array passed as an argument) according to the following scheme:

if the array element is a positive integer, then the promise should be fulfilled after a time equal to this number and return the same number as its value;
otherwise the promise should be rejected immediately (generate a corresponding error using the Error object>
Test the function using the following code:
*/

function getPromiseArray(arr) {
    return arr.map(item => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof item === 'number' && item > 0) {
                    resolve(item);
                } else {
                    reject(new Error(`${item} is not a positive integer`));
                }
            }, item);
        });
    });
}

let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer