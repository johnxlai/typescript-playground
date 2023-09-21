let sales = 123_456_5789;
let course = 'TypeScript';
let is_published: true;
let level;
let numbers: number[] = [];


// tuples
//1, 'Mosh'
let user:[number, string] = [1, 'mosh'];


//Enums
const enum Size { Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
function calculateTax(income:number):number {
  if (income < 50_000)
    return income * 1.2;

  return income * 1.3;
}

// type Aliases
type Employee = {
  readonly id:number,
  name:string,
  retire:(date: Date) => void;
}

//Objects
let employee: Employee = { id: 1, name: 'Mosh', retire: (date:Date) => {
  console.log(date)
}};


//Union Type - Can be anything
function kgToLbs(weight:number | string): number {
  //Narrowing
  if(typeof weight === 'number')
    return weight *2.2
  else {
    return parseFloat(weight) * 2.2;
  }
};
kgToLbs(10);
kgToLbs('10kgs');


// Intersection Types
type Draggable = {
  drag:() => void
};

type Resizable = {
  resize: () => void
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal Types (limited value, exact or specific);
type Quantity = 50 | 100;
let quantity: Quantity = 100;

 type Metric = 'cm' | 'inch';

