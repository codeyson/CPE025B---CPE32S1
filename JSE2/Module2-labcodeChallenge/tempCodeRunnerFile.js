
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

class ExtendedTutoring extends Tutoring {
    sendMessages(from, to, message) {
        for (let user of to) {
            user.sendMessage(from, message);
        }
    }
}

let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message