"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to) {
        this.total = 0;
        this.lineItems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus;
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.ordered;
    }
    setOrderedDate(ordered) {
        this.ordered = ordered;
    }
    getShippedDate() {
        return this.shipped;
    }
    setShippedDate(shipped) {
        this.shipped = shipped;
    }
    getShipToAddress() {
        return this.ship_to;
    }
    setShipToAddress(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    calculateTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }
    toString() {
        return `Order [Number = ${this.number}, Ordered = ${this.ordered}, Shipped = ${this.shipped}, ShipToAddress = ${this.ship_to}, Status = ${this.status}, Total = ${this.total}]`;
    }
}
exports.Order = Order;
