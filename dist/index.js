"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('taking test');
    }
}
let student = new Student(1, 'John', 'john@gmail.com');
student.takeTest();
class Teacher extends Person {
    get fullName() {
        return 'Professor' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Doe');
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map