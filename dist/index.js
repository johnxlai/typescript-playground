"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balanace = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balanace += amount;
    }
}
let account = new Account(1, 'John', 0);
account.deposit(100);
console.log(account.balanace);
//# sourceMappingURL=index.js.map