/*
Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

add – add a single user, arguments are name, surname and email;
delete - remove the user from the collection (the argument is the email)
get - retrieve a single user from the collection (the argument is the email)
getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email
Test your solution using the following code:
*/

class User {
    #firstName = null;
    #lastName = null;
    #email = null;

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(name) {
        if (/^[A-Z][a-z]+$/.test(name)) {
            this.#firstName = name;
        } else {
            throw new Error("Invalid first name");
        }
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(name) {
        if (/^[A-Z][a-z]+$/.test(name)) {
            this.#lastName = name;
        } else {
            throw new Error("Invalid last name");
        }
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        if (/^[a-z]+(\.[a-z]+)*@[a-z]+(\.[a-z]+)+$/.test(email)) {
            this.#email = email;
        } else {
            throw new Error("Invalid email");
        }
    }
}


class Users {
    constructor() {
        this.users = new Map();
    }

    add(name, surname, email) {
        if (this.users.has(email)) {
            return; // ignore duplicate
        }

        this.users.set(email, new User(name, surname, email));
    }

    delete(email) {
        this.users.delete(email);
    }

    get(email) {
        return this.users.get(email);
    }

    getAll(field) {
        let arr = Array.from(this.users.values());

        if (field === "name") {
            arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
        }

        if (field === "surname") {
            arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
        }

        if (field === "email") {
            arr.sort((a, b) => a.email.localeCompare(b.email));
        }

        return arr;
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));