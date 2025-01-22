"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(account, webuser, id, address, phone, email) {
        this.account = account;
        this.webuser = webuser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getID() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(Phone) {
        this.phone;
    }
    toString() {
        return `Customer ID: ${this.id}, Address: ${this.address}, Phone: ${this.phone}, Email: ${this.email}, ${this.webuser}, Account: ${this.account.toString()}`;
    }
}
exports.Customer = Customer;
