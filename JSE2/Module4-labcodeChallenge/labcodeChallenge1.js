/*
Write a class called MyIterable that will allow you to create an iterable object with the following properties:

it will be possible to add arbitrary elements to it (add method)
an attempt to add an element that is already in the object will be ignored;
it will be possible to check whether an element is present in the object (has method)
it will be possible to delete an element (del method)
it will be possible to check the number of elements (length property)
it will be possible to use any technique for passing elements of an iterable object (spread operator, for ... of, iterators), and an appropriate generator should be used in the implementation.
Test the class using the following example:
*/

class MyIterable {
    constructor() {
        this.elements = new Set();
    }
    add(element) {
        this.elements.add(element);
    }
    has(element) {
        return this.elements.has(element);
    }
    del(element) {
        this.elements.delete(element);
    }
    get length() {
        return this.elements.size;
    }
    [Symbol.iterator]() {
        return this.elements.values();
    }
}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5