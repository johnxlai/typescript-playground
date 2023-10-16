let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// dont need to annotate types, typescript will infer it

// let sales = 123_456_5789;
// let course = 'TypeScript';
// let is_published: true;
// let level;
// let numbers: number[] = [];



// // tuples
// is a fixed length array where each element has a fixed type

// //1, 'Mosh'
// let user:[number, string] = [1, 'mosh'];


// //Enums
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums
// const enum Size { Small = 1, Medium, Large}
// let mySize: Size = Size.Medium;
// console.log(mySize);

// //functions
// function calculateTax(income:number):number {
//   if (income < 50_000)
//     return income * 1.2;

//   return income * 1.3;
// }

// // type Aliases
// type Employee = {
//   readonly id:number,
//   name:string,
//   retire:(date: Date) => void;
// }

// //Objects
// let employee: Employee = { id: 1, name: 'Mosh', retire: (date:Date) => {
//   console.log(date)
// }};


// //Union Type - Can be anything
// function kgToLbs(weight:number | string): number {
//   //Narrowing
//   if(typeof weight === 'number')
//     return weight *2.2
//   else {
//     return parseFloat(weight) * 2.2;
//   }
// };
// kgToLbs(10);
// kgToLbs('10kgs');


// // Intersection Types
// type Draggable = {
//   drag:() => void
// };

// type Resizable = {
//   resize: () => void
// };

// type UiWidget = Draggable & Resizable;

// let textBox: UiWidget = {
//   drag: () => {},
//   resize: () => {}
// }

// // Literal Types (limited value, exact or specific);
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

//  type Metric = 'cm' | 'inch';

// /// nullable
// // union type
// function greet(name:string | null | undefined) {
//   if(name)
//     console.log(name.toUpperCase());
//   else
//     console.log('Hola');
// }

// greet(null);




// // Optional Chaining
// // type Aliases
// type Customer = {
//   birthday?: Date
// }

// function getCustomer(id:number): Customer | null | undefined {
//   return id === 0 ? null : {
//     birthday: new Date()
//   }
// }

// let customer = getCustomer(1);
// console.log(customer?.birthday?.getFullYear());

// // Nullish Coaelscing Operator
// let speed: number | null = null;
// let ride = {
//   speed: speed ?? 30
// }


// // type assertions (telling ts we know more than you so it allows more method to show up in the element)
// // let phone = document.getElementById('phone') as HTMLInputElement;

// // same thing
// // let phone = <HTMLInputElement> document.getElementById('phone') ;
// // phone.value;

// This doesn't convert the type, it just tells the compiler to trust you that the type is correct. If you're wrong, you'll get a runtime error.

// //The unknown type
// function render(document: unknown) {
//   //Narrowing
//   if(typeof document === 'string'){
//     document.toUpperCase();
//   }
//   // document.move();
// }

//   //the never type
//   function processEvents():never{
//     while(true) {
//       //read a message from a queue

//     }
//   }


// // Typescript Classes

// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id:number,
//     public owner: string,
//     private balance: number) {
//   }

//   deposit(amount:number):void{
//       if(amount <= 0)
//         throw new Error("Invaild amount");

//       // Record a trascation
//       this._balance += amount;
//   }

//   private calcTax(){
//   }

//   getBalance():number {
//     return this._balance;
//   }
// }
// let account = new Account(1, 'John', 0);
// account.deposit(100);
// console.log(account.getBalance)


// //index signatures
// class SeatAssignment {
//   //index signature property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = 'Steve';

// //static members
// //only one instance of the class
// class Ride {
//   private static _activeRides: number = 0;

//   start() {Ride.activeRides++;}
//   stopp() {Ride.activeRides--;}

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start()
// console.log(Ride.activeRides);


//Inheritance
// class Person {
//   constructor(public firstName: string, public lastName: string) {
//   }
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   walk() {
//     console.log('walking');
//   }
// }

// class Student extends Person {
//   constructor( public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
//   takeTest() {
//     console.log('taking test');
//   }
// }


// let student = new Student(1, 'John', 'john@gmail.com');
// student.takeTest();


// //method overriding
// class Teacher extends Person {
//   override get fullName()  {
//     return 'Professor' + super.fullName;
//   }
// }


// let teacher = new Teacher('John', 'Doe');
// console.log(teacher.fullName);

// ts classes
// class Account  {
//   nickname?: string;

//   //parameter properties
//   constructor(
//       public readonly id:number,
//       public owner:string,
//       private _balance:number) {
//   }
//   deposit(amount:number):void {
//     if(amount <= 0)
//       throw new Error("Invalid amount");
//     this._balance += amount;
//   }
//   //getter and setters
//   get balance():number {
//     return this._balance;
//   }
// }

// let account = new Account(1, 'John', 0);
// account.deposit(100);
// console.log(account.balance);

// //Index signature propertry
// class SeatAssignment {
//   [seatNumber: string] : string;
// }
// let seats = new SeatAssignment();
// seats['A1'] = 'John';

//Static property
// class Ride {
//   private static _activeRides: number = 0;

//   start() { Ride._activeRides++;}
//   stop() {Ride._activeRides--;}

//   static get activeRides() {
//     return Ride._activeRides
//   }
// }

// let ride1 = new Ride();
// ride1.start();
// console.log(Ride.activeRides);

//Inheitance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log('Walking');
  }
}

class Student extends Person {
  constructor(public studentId:number, firstName : string, lastName:string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a Test');
  }
}

const john = new Student(3, 'John' , ' Lai');
console.log(john.walk());

//method overriding
class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}

class Principal extends Person{
  override get fullName() {
    return 'Principal ' + super.fullName;
  }
}

printNames([
  new Student(1, 'mark', 'kong'),
  new Teacher('Lucia', 'so'),
  new Principal( 'Dre', 'Don'),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}


//Protected
// Private can only be used in the same class, Protected can be used in its child classes

// Abstract Classes (it is uncooked, it cannot be initalized only be extended)
abstract class Shape{
  constructor(public color: string ){}
  abstract render():void;
}

class Circle extends Shape {
  constructor(public radius: number, color:string) {
    super(color)
  }
  override render(): void {
    console.log('render circle');
  }
}

// abstract class Calendar {
//   constructor (public name:string) {}

//   abstract addEvent():void;
//   abstract removeEvent():void;
// }

// interface Calendar {
//   name:string;
//   addEvent():void;
//   removeEvent():void;
// }

// interface CloudCalendar extends Calendar {
//   sync():void;
// }

// class GoogleCalendar implements Calendar{
//   constructor(public name: string){}

//   addEvent(): void {
//     throw new Error("Method not implemented.");
//   }
//   removeEvent(): void {
//     throw new Error("Method not implemented.");
//   }

// }

// Generic Classes
class KeyValuePair<K, V> {
  constructor(public key:K, public value:V) {}
}
let pair = new KeyValuePair<number, string>(1, 'a');
//if you dont supply the argument, ts will look at what you're passing and auto complie the type
let pairString = new KeyValuePair('1', 'a');