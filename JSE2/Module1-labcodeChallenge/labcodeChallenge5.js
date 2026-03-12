/*
Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).

Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.

For testing, use the following piece of code:
*/

function deepComp(obj1, obj2) {

    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    if (typeof obj1 !== "object") {
        return obj1 === obj2;
    }
    for (let key in obj1) {
        if (typeof obj1[key] === "function") continue;

        if (!(key in obj2)) {
            return false;
        }

        if (!deepComp(obj1[key], obj2[key])) {
            return false;
        }
    }
    for (let key in obj2) {

        if (typeof obj2[key] === "function") continue;

        if (!(key in obj1)) {
            return false;
        }
    }

    return true;
}


let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false