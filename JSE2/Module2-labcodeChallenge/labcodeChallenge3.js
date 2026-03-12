/*
Modify the ExtendedUser class (rewrite it) by adding a static match method to it. The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.

In case the course name is not provided, the method should return:

an empty array if there is no match (the teacher does not teach courses the student is interested in, or teaches courses at a lower level)
an array with {course, level} objects, if the teacher teaches the courses the student is interested in.
If the course name is passed as the last argument, then the method should return the {course, level} object in case of a correct match, or undefined otherwise.

Test your solution using the following code:
*/

function sendEmail(from, to, message) {
    // test
}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    addCourse(course, level) {
        this.courses.push({course, level});
    }

    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    editCourse(course, level) {
        let courseToEdit = this.courses.find(c => c.course === course);
        if(courseToEdit) {
            courseToEdit.level = level;
        }
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, message});
        sendEmail(from.email, this.email, message); 
    }

    showMessagesHistory() {
        this.messages.forEach(m => console.log(`-> ${m.from} -> ${m.to}: ${m.message}`));       
    }
}

class ExtendedUser extends User {

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        let [name, surname] = fullName.split(' ');
        this.name = name;
        this.surname = surname;
    }
    static match(teacher, student, courseName) {
        let matches = [];
        for (let sCourse of student.courses) {
            for (let tCourse of teacher.courses) {
                if (sCourse.course === tCourse.course &&
                    tCourse.level >= sCourse.level) {

                    matches.push({
                        course: sCourse.course,
                        level: sCourse.level
                    });
                }
            }
        }
        if (courseName) {
            return matches.find(m => m.course === courseName);
        }

        return matches;
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}


let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}