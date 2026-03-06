function showContact(contacts, index) {
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
        console.log(
            contacts[index].name + " / " +
            contacts[index].role + " / " +
            contacts[index].skills[0]
        );
    } else {
        console.log("No contacts found.");
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        let allContacts = "";
        for (let i = 0; i < contacts.length; i++) {
            allContacts += `${contacts[i].name}\n`;
        }
        console.log(allContacts);
    } else {
        console.log("Invalid contacts list.");
    }
}

function addNewContact(contacts, name, role, skill) {
    if (contacts instanceof Array && name && role && skill) {
        contacts.push({
            name: name,
            role: role,
            skills: [skill],
            availability: true
        });
    } else {
        console.log("Invalid data.");
    }
}

function searchContact(contacts, name) {
    if (contacts instanceof Array && name) {
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name === name) {
                let status = contacts[i].availability ? "True" : "False";
                console.log(contacts[i].role + " / " + status);
            }
        }
    } else {
        console.log("Invalid data.");
    }
}

let contacts = [
{
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true
},
{
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false
},
{
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true
}
];

while (true) {

    let action = prompt("show / all / add / search / quit");

    if (action === "show") {
        let index = Number(prompt("Enter index"));
        showContact(contacts, index);
    }

    else if (action === "all") {
        showAllContacts(contacts);
    }

    else if (action === "add") {
        let name = prompt("Name");
        let role = prompt("Role");
        let skill = prompt("Skill");
        addNewContact(contacts, name, role, skill);
    }

    else if (action === "search") {
        let name = prompt("Enter name");
        searchContact(contacts, name);
    }

    else if (action === "quit") {
          break;
    }
}