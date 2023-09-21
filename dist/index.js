"use strict";
let sales = 1234565789;
let course = 'TypeScript';
let is_published;
let level;
let numbers = [];
let user = [1, 'mosh'];
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let employee = { id: 1, name: 'Mosh', retire: (date) => {
        console.log(date);
    } };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseFloat(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kgs');
//# sourceMappingURL=index.js.map