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
//# sourceMappingURL=index.js.map