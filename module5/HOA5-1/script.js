let teamDirectory = [{
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI", "UX", "Figma"],
    available: true
}, {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML", "CSS", "JS"],
    available: false
}, {
        name: "Jordan Lee",
    role: "Manager",
    skills: ["Planning", "Agile"],
    available: true
}]



teamDirectory.push({
    name: "Casey Moore",
    role: "QA Engineer",
    skills: ["Testing", "Debugging"],
    available: true
});

teamDirectory[1].available = true;




console.log(teamDirectory.length);