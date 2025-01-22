"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const ShoppingCart_1 = require("./ShoppingCart");
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.orders = [];
        this.payments = [];
        this.shoppingCarts = new ShoppingCart_1.ShoppingCart("Yo");
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    getId() {
        return this.id;
    }
    getBillingAddress() {
        return this.billing_address;
    }
    setBillingAddress(billing_address) {
        this.billing_address = billing_address;
    }
    getIsClosed() {
        return this.is_closed;
    }
    setIsClosed(is_closed) {
        this.is_closed = is_closed;
    }
    getOpen() {
        return this.open;
    }
    setOpen(open) {
        this.open = open;
    }
    getClosed() {
        return this.closed;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    addPayment(payments) {
        this.payments.push(payments);
    }
    getPayments() {
        return this.payments;
    }
    addOrder(orders) {
        this.orders.push(orders);
    }
    getOrders() {
        return this.orders;
    }
    getShoppingCarts() {
        return this.shoppingCarts;
    }
    toString() {
        return `ID = ${this.id}, BillingAddress = ${this.billing_address}, IsClosed = ${this.is_closed}, Open = ${this.open}, Closed = ${this.closed}`;
    }
}
exports.Account = Account;
