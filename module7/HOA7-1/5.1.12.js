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

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let sortContacts = function(contacts, option) {
    console.log("Sorting contacts by: " + option);
    if (option === "name") {
        contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    } 
    else if (option === "phone") {
        contacts.sort((a, b) => a.phone > b.phone ? 1 : -1);
    } 
    else if (option === "email") {
        contacts.sort((a, b) => a.email > b.email ? 1 : -1);
    }
}

let option = prompt("What do you want to sort? (name / phone / email)");

// Sort and display contacts
sortContacts(contacts, option);
showAllContacts(contacts);

