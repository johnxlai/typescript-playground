"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a Test');
    }
}
const john = new Student(3, 'John', ' Lai');
console.log(john.walk());
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Student(1, 'mark', 'kong'),
    new Teacher('Lucia', 'so'),
    new Principal('Dre', 'Don'),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map