/*
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
*/

function showContact(contacts, index) {
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
        console.log(
            contacts[index].name + " / " +
            contacts[index].phone + " / " +
            contacts[index].email
        );
    } else {
        console.log("Invalid arguments.");
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        let allContacts = "";
        for (let i = 0; i < contacts.length; i++) {
            allContacts += `${i + 1}. ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
        }
        console.log(allContacts);
    } else {
        console.log("Invalid contacts list.");
    }
}

function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    } else {
        console.log("Invalid data.");
    }
}

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

showContact(contacts, 1);
addNewContact(contacts, "Fred", "09123456789", "fred@email.com");
showAllContacts(contacts);