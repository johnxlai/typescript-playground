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