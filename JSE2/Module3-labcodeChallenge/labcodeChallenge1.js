/*
Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

the first determines whether the drawn numbers may be repeated;
the second one states if the returned array of numbers should be sorted.
Use the Set class.

Test your solution using the following code:
*/

function getRandomSet(m, n, allowRepeats, sorted) {
    let result;
    if (allowRepeats) {
        result = [];
        while (result.length < m) {
            let number = Math.floor(Math.random() * (n + 1));
            result.push(number);
        }
    } else {
        let numbers = new Set();
        while (numbers.size < m) {
            let number = Math.floor(Math.random() * (n + 1));
            numbers.add(number);
        }
        result = Array.from(numbers);
    }
    if (sorted) {
        result.sort((a, b) => a - b);
    }
    return result;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));