/*
Let's try to put all the previously prepared elements together. Create a Tutoring class that will have two lists of users: students and teachers separately.

Define methods in it:

getStudentByName(name, surname) - which will return a student object with the given name and surname (or undefined if the student has not been added before)
getTeacherByName(name, surname) - which will return the teacher object with the given name and surname (or undefined if the teacher has not been added before)
getStudentsForTeacher(teacher) - which will return an array of students that teacher is able to tutor;
getTeacherForStudent(student) - which will return an array of teachers able to tutor the student;
addStudent(name, surname, email) - which will add a new student object to the list;
addTeacher(name, surname, email) - which will add a new teacher object to the list.
Use previously prepared classes and their methods (e.g. match).

Test your solution using the following code:
*/

class Tutoring {
    constructor() {
        this.teachers = [];
        this.students = [];
    }

    getStudentByName(name, surname) {
        return this.students.find(
            s => s.name === name && s.surname === surname
        );
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(
            t => t.name === name && t.surname === surname
        );
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter(
            s => ExtendedUser.match(teacher, s).length > 0
        );
    }
    getTeacherForStudent(student) {
        return this.teachers.filter(
            t => ExtendedUser.match(t, student).length > 0
        );
    }

    addStudent(name, surname, email) {
        let student = new Student({ name, surname, email });
        this.students.push(student);
    }

    addTeacher(name, surname, email) {
        let teacher = new Teacher({ name, surname, email });
        this.teachers.push(teacher);
    }
}


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

let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...