"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItems = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(create) {
        this.created = create;
    }
    toString() {
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItems}, [Account]]`;
    }
    getLineItems() {
        return this.lineItems;
    }
    setLineItems(lineItems) {
        this.lineItems.push(lineItems);
    }
}
exports.ShoppingCart = ShoppingCart;
