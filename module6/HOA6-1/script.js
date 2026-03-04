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

// write your code here
let loop = true;
while(loop){ 

    let action = prompt("What would you like to do? (show , all, add, search, or quit)");

    if (action === "show") {
        let choice = prompt("Which contact would you like to see?")
        let index = parseInt(choice) - 1;
        if (!isNaN(index) && index >= 0 && index < contacts.length) {

            alert(
                contacts[index].name + " / " +
                contacts[index].phone + " / " +
                contacts[index].email
            );

        } else {
            alert("Invalid index.");
        }
    }
    if (action === "all") {
        let allContacts = "";
        for (let i = 0; i < contacts.length; i++) {
            allContacts += `${i + 1}. ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
        }
        alert(allContacts);
    }
    if (action === "add") {
        let newName = prompt("Enter a name: ");
        let newPhone = prompt("Enter a phone number: ");
        let newEmail = prompt("Enter an email address: ");
        contacts.push({
            name: newName,
            phone: newPhone,
            email: newEmail
        });
    }
    if (action === "search") {
        let searchName = prompt("Enter a name to search for: ");
        let found = false;
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                found = true;
                alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
        }
        if (!found) {
            alert("Contact not found.");
        }
    }
    if (action === "quit") {
        loop = false;
    }
}



let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);