/*
Declare a User class that will allow you to create objects with user information (first name, last name, email).

The data should be passed to the constructor and stored as private properties.

Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.

For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.

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

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);

    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // Error

} catch(err) {
    console.log(err.message);
}